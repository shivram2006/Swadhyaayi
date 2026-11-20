import { Types } from 'mongoose';
import { Resume, IResume } from './resume.model';
import { ResumeAnalyzer, IATSAnalysisResult } from './resume.analyzer';
import { User } from '../user/user.model';
import { Institution, Department } from '../tenant/tenant.model';
import { NotFoundError, ForbiddenError, ValidationError } from '../../core/utils/appError';

export class ResumeService {
  static async createResume(data: any, institutionId: string, userId: string): Promise<IResume> {
    const analysis = ResumeAnalyzer.analyze(data);

    const resume = new Resume({
      ...data,
      institutionId: new Types.ObjectId(institutionId),
      userId: new Types.ObjectId(userId),
      atsScoreCache: {
        totalScore: analysis.totalScore,
        sectionScores: analysis.sectionScores,
        matchedKeywords: analysis.matchedKeywords,
        missingKeywords: analysis.missingKeywords,
        formattingIssues: analysis.formattingIssues,
        detectedMetricsCount: analysis.detectedMetricsCount,
        strongActionVerbsCount: analysis.strongActionVerbsCount,
        weakVerbsCount: analysis.weakVerbsCount,
        lastCalculatedAt: new Date(),
      },
    });

    await resume.save();
    return resume;
  }

  static async getStudentResumes(institutionId: string, userId: string): Promise<IResume[]> {
    return Resume.find({
      institutionId: new Types.ObjectId(institutionId),
      userId: new Types.ObjectId(userId),
    })
      .sort({ updatedAt: -1 })
      .lean() as unknown as IResume[];
  }

  static async getResumeById(id: string, institutionId: string, requestingUser: any): Promise<IResume> {
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationError('Invalid resume ID format');
    }

    const resume = await Resume.findOne({
      _id: new Types.ObjectId(id),
      institutionId: new Types.ObjectId(institutionId),
    });

    if (!resume) {
      throw new NotFoundError('Resume not found');
    }

    // Role check: If student, must own the resume. Faculty / Placement Officer can view any within tenant.
    if (requestingUser.role === 'STUDENT' && resume.userId.toString() !== (requestingUser.userId || requestingUser._id?.toString())) {
      throw new ForbiddenError('You do not have permission to access this resume');
    }

    return resume;
  }

  static async updateResume(id: string, data: any, institutionId: string, userId: string): Promise<IResume> {
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationError('Invalid resume ID format');
    }

    const resume = await Resume.findOne({
      _id: new Types.ObjectId(id),
      institutionId: new Types.ObjectId(institutionId),
    });

    if (!resume) {
      throw new NotFoundError('Resume not found');
    }

    if (resume.userId.toString() !== userId) {
      throw new ForbiddenError('You can only update your own resumes');
    }

    Object.assign(resume, data);

    // Recompute ATS score cache
    const analysis = ResumeAnalyzer.analyze(resume.toObject());
    resume.atsScoreCache = {
      totalScore: analysis.totalScore,
      sectionScores: analysis.sectionScores,
      matchedKeywords: analysis.matchedKeywords,
      missingKeywords: analysis.missingKeywords,
      formattingIssues: analysis.formattingIssues,
      detectedMetricsCount: analysis.detectedMetricsCount,
      strongActionVerbsCount: analysis.strongActionVerbsCount,
      weakVerbsCount: analysis.weakVerbsCount,
      lastCalculatedAt: new Date(),
    };

    await resume.save();
    return resume;
  }

  static async deleteResume(id: string, institutionId: string, userId: string): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(id)) {
      throw new ValidationError('Invalid resume ID format');
    }

    const resume = await Resume.findOne({
      _id: new Types.ObjectId(id),
      institutionId: new Types.ObjectId(institutionId),
    });

    if (!resume) {
      throw new NotFoundError('Resume not found');
    }

    if (resume.userId.toString() !== userId) {
      throw new ForbiddenError('You can only delete your own resumes');
    }

    await Resume.deleteOne({ _id: resume._id });
    return { message: 'Resume deleted successfully' };
  }

  static async syncFromStudentProfile(institutionId: string, userId: string): Promise<Partial<IResume>> {
    const student = await User.findById(userId).lean();
    if (!student) {
      throw new NotFoundError('Student profile not found');
    }

    let institutionName = 'University / College';
    if (student.institutionId) {
      const inst = await Institution.findById(student.institutionId).select('name').lean();
      if (inst?.name) institutionName = inst.name;
    }

    let fieldOfStudy = 'Computer Science & Engineering';
    if (student.departmentId) {
      const dept = await Department.findById(student.departmentId).select('name').lean();
      if (dept?.name) fieldOfStudy = dept.name;
    }

    const codingSolved = student.metrics?.codingProblemsSolved || 0;
    const globalRank = student.metrics?.globalRank || 0;
    const currentStreak = student.metrics?.currentStreak || 0;

    const achievements: string[] = [];
    if (codingSolved > 0) {
      achievements.push(`Solved ${codingSolved}+ verified algorithmic coding problems across 28 DSA patterns on Swadhyayi platform.`);
    }
    if (globalRank > 0) {
      achievements.push(`Secured Global Rank #${globalRank} on the Swadhyayi Competitive Placement Leaderboard.`);
    }
    if (currentStreak >= 7) {
      achievements.push(`Maintained an active continuous coding streak of ${currentStreak} days.`);
    }

    // Categorize existing student skills
    const rawSkills = student.profile?.skills || [];
    const languages: string[] = [];
    const frameworks: string[] = [];
    const databases: string[] = [];
    const toolsAndCloud: string[] = [];
    const coreFundamentals: string[] = ['Data Structures & Algorithms', 'Object-Oriented Programming', 'DBMS', 'Operating Systems'];

    const langSet = new Set(['c', 'c++', 'java', 'python', 'javascript', 'typescript', 'go', 'rust', 'c#', 'sql', 'html', 'css']);
    const frameworkSet = new Set(['react', 'node.js', 'express', 'spring boot', 'django', 'flask', 'next.js', 'vue', 'tailwind css', 'bootstrap']);
    const dbSet = new Set(['mongodb', 'postgresql', 'mysql', 'redis', 'sqlite', 'cassandra']);

    rawSkills.forEach((s) => {
      const lower = s.toLowerCase();
      if (langSet.has(lower)) languages.push(s);
      else if (frameworkSet.has(lower)) frameworks.push(s);
      else if (dbSet.has(lower)) databases.push(s);
      else toolsAndCloud.push(s);
    });

    const fullName = `${student.firstName} ${student.lastName}`.trim();
    const cgpa = student.profile?.cgpa ? `${student.profile.cgpa} CGPA` : '';

    const draftResume: any = {
      title: `${student.firstName}'s ATS Resume`,
      targetRole: (student.profile?.targetDomain as any) || 'sde',
      isDefault: true,
      personalInfo: {
        fullName,
        email: student.email,
        phone: student.profile?.phoneNumber || '',
        location: '',
        linkedinUrl: student.profile?.linkedinUrl || '',
        githubUrl: student.profile?.githubUrl || '',
        portfolioUrl: student.profile?.portfolioUrl || '',
        codingProfiles: {
          leetcode: '',
          swadhyayi: `https://swadhyayi.edu/profile/${student._id}`,
        },
      },
      summary: `Proactive Computer Science engineer with a strong foundation in data structures, algorithms, and full-stack software development. Solved ${codingSolved}+ coding problems with hands-on project engineering experience.`,
      education: [
        {
          institution: institutionName,
          degree: 'Bachelor of Technology (B.Tech)',
          fieldOfStudy,
          startDate: '2022',
          endDate: '2026',
          current: true,
          cgpaOrPercentage: cgpa,
          location: '',
        },
      ],
      skills: {
        languages: languages.length > 0 ? languages : ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++'],
        frameworks: frameworks.length > 0 ? frameworks : ['React', 'Node.js', 'Express', 'Tailwind CSS'],
        databases: databases.length > 0 ? databases : ['MongoDB', 'PostgreSQL', 'Redis'],
        toolsAndCloud: toolsAndCloud.length > 0 ? toolsAndCloud : ['Git', 'Docker', 'Postman', 'Linux'],
        coreFundamentals,
      },
      experience: [],
      projects: [
        {
          title: 'Enterprise Placement Portal & Proctoring System',
          techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
          liveUrl: '',
          githubUrl: '',
          startDate: '2025',
          endDate: '2026',
          bullets: [
            'Architected full-stack enterprise web application serving 5,000+ concurrent students across 10+ university departments.',
            'Optimized MongoDB indexing and query pipelines, reducing test submission latency by 45%.',
            'Integrated sandboxed code execution runner evaluating student code across 50+ batch testcases.',
          ],
        },
      ],
      certifications: [],
      achievements: achievements.length > 0 ? achievements : ['Dean\'s List for Academic Excellence'],
    };

    // Calculate initial ATS score
    const analysis = ResumeAnalyzer.analyze(draftResume);
    draftResume.atsScoreCache = {
      totalScore: analysis.totalScore,
      sectionScores: analysis.sectionScores,
      matchedKeywords: analysis.matchedKeywords,
      missingKeywords: analysis.missingKeywords,
      formattingIssues: analysis.formattingIssues,
      detectedMetricsCount: analysis.detectedMetricsCount,
      strongActionVerbsCount: analysis.strongActionVerbsCount,
      weakVerbsCount: analysis.weakVerbsCount,
      lastCalculatedAt: new Date(),
    };

    return draftResume;
  }

  static async analyzeResume(
    id: string,
    customJobDescription: string | undefined,
    targetRole: string | undefined,
    institutionId: string,
    requestingUser: any
  ): Promise<IATSAnalysisResult> {
    const resume = await this.getResumeById(id, institutionId, requestingUser);

    const payload = resume.toObject();
    if (targetRole) {
      payload.targetRole = targetRole;
    }

    const analysis = ResumeAnalyzer.analyze(payload, customJobDescription);

    // Update score cache
    resume.atsScoreCache = {
      totalScore: analysis.totalScore,
      sectionScores: analysis.sectionScores,
      matchedKeywords: analysis.matchedKeywords,
      missingKeywords: analysis.missingKeywords,
      formattingIssues: analysis.formattingIssues,
      detectedMetricsCount: analysis.detectedMetricsCount,
      strongActionVerbsCount: analysis.strongActionVerbsCount,
      weakVerbsCount: analysis.weakVerbsCount,
      lastCalculatedAt: new Date(),
    };
    await resume.save();

    return analysis;
  }

  static analyzeRaw(resumeData: any, customJobDescription?: string): IATSAnalysisResult {
    return ResumeAnalyzer.analyze(resumeData, customJobDescription);
  }
}
