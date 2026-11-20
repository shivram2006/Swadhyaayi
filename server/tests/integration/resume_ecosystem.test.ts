import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { Resume } from '../../src/modules/resume/resume.model';
import { User } from '../../src/modules/user/user.model';
import { Institution, Department } from '../../src/modules/tenant/tenant.model';

describe('ATS Resume Builder API Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const otherStudentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b004',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const mockResumeData = {
    title: 'Aarav Full Stack Resume',
    targetRole: 'mern',
    isDefault: true,
    personalInfo: {
      fullName: 'Aarav Sharma',
      email: 'aarav.sharma@nitsurat.edu',
      phone: '+91 9876543210',
      location: 'Surat, Gujarat',
      linkedinUrl: 'https://linkedin.com/in/aaravsharma',
      githubUrl: 'https://github.com/aaravsharma',
      portfolioUrl: 'https://aaravsharma.dev',
      codingProfiles: {
        leetcode: 'https://leetcode.com/aarav',
        swadhyayi: 'https://swadhyayi.edu/profile/aarav',
      },
    },
    summary: 'Full-stack software engineer with strong expertise in TypeScript, React, Node.js, and distributed system architectures.',
    education: [
      {
        institution: 'NIT Surat',
        degree: 'B.Tech',
        fieldOfStudy: 'Computer Science and Engineering',
        startDate: '2022',
        endDate: '2026',
        current: true,
        cgpaOrPercentage: '9.2 CGPA',
        location: 'Surat, India',
      },
    ],
    skills: {
      languages: ['TypeScript', 'JavaScript', 'Python', 'C++'],
      frameworks: ['React', 'Node.js', 'Express', 'Tailwind CSS'],
      databases: ['MongoDB', 'PostgreSQL', 'Redis'],
      toolsAndCloud: ['Docker', 'Git', 'Linux'],
      coreFundamentals: ['Data Structures & Algorithms', 'System Design'],
    },
    experience: [
      {
        company: 'InnovateTech Labs',
        role: 'Full Stack Engineering Intern',
        location: 'Bengaluru, India',
        startDate: 'May 2025',
        endDate: 'July 2025',
        current: false,
        bullets: [
          'Architected real-time WebSocket messaging service reducing client latency by 35%.',
          'Optimized database queries and MongoDB compound indexes, cutting query execution time by 50%.',
        ],
      },
    ],
    projects: [
      {
        title: 'Swadhyayi Assessment Platform',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
        liveUrl: 'https://swadhyayi.edu',
        githubUrl: 'https://github.com/swadhyayi',
        bullets: [
          'Spearheaded development of sandboxed code execution engine running across 50+ batch testcases.',
        ],
      },
    ],
    certifications: [],
    achievements: ['Ranked Top 1% in Swadhyayi Global Leaderboard'],
  };

  const savedResumeDoc = {
    ...mockResumeData,
    _id: '60d5ecb8b5c9c614b8e8be01',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
    userId: '60d5ecb8b5c9c614b8e8b003',
    atsScoreCache: {
      totalScore: 88,
      sectionScores: { completeness: 25, actionVerbs: 22, quantifiableMetrics: 20, keywordMatch: 21 },
      matchedKeywords: ['react', 'node.js', 'mongodb', 'typescript'],
      missingKeywords: ['vitest', 'jest'],
      formattingIssues: [],
      detectedMetricsCount: 3,
      strongActionVerbsCount: 3,
      weakVerbsCount: 0,
      lastCalculatedAt: new Date(),
    },
    toObject: () => ({ ...mockResumeData, _id: '60d5ecb8b5c9c614b8e8be01', userId: '60d5ecb8b5c9c614b8e8b003' }),
    save: vi.fn().mockResolvedValue(true),
  };

  describe('GET /api/v1/resumes', () => {
    it('should require authentication token (returns 401)', async () => {
      const res = await request(app).get('/api/v1/resumes');
      expect(res.status).toBe(401);
    });

    it('should list resumes for authenticated student', async () => {
      vi.spyOn(Resume, 'find').mockReturnValue({
        sort: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue([savedResumeDoc]),
        }),
      } as any);

      const res = await request(app)
        .get('/api/v1/resumes')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].title).toBe('Aarav Full Stack Resume');
    });
  });

  describe('POST /api/v1/resumes', () => {
    it('should validate and create resume with computed ATS score', async () => {
      vi.spyOn(Resume.prototype, 'save').mockResolvedValue(savedResumeDoc as any);

      const res = await request(app)
        .post('/api/v1/resumes')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(mockResumeData);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.atsScoreCache).toBeDefined();
      expect(res.body.data.atsScoreCache.totalScore).toBeGreaterThan(0);
    });

    it('should return 400 validation error when email is malformed', async () => {
      const invalidPayload = {
        ...mockResumeData,
        personalInfo: {
          ...mockResumeData.personalInfo,
          email: 'not-an-email',
        },
      };

      const res = await request(app)
        .post('/api/v1/resumes')
        .set('Authorization', `Bearer ${studentToken}`)
        .send(invalidPayload);

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
    });
  });

  describe('GET /api/v1/resumes/sync-profile', () => {
    it('should pull student profile, institution name, and verified achievements', async () => {
      vi.spyOn(User, 'findById').mockReturnValue({
        lean: vi.fn().mockResolvedValue({
          _id: '60d5ecb8b5c9c614b8e8b003',
          firstName: 'Aarav',
          lastName: 'Sharma',
          email: 'aarav.sharma@nitsurat.edu',
          institutionId: '60d5ecb8b5c9c614b8e8b999',
          departmentId: '60d5ecb8b5c9c614b8e8b111',
          profile: {
            phoneNumber: '+91 9876543210',
            skills: ['Java', 'React', 'MongoDB'],
            cgpa: 9.2,
          },
          metrics: {
            codingProblemsSolved: 42,
            globalRank: 15,
            currentStreak: 12,
          },
        }),
      } as any);

      vi.spyOn(Institution, 'findById').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue({ name: 'National Institute of Technology Surat' }),
        }),
      } as any);

      vi.spyOn(Department, 'findById').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue({ name: 'Computer Science and Engineering' }),
        }),
      } as any);

      const res = await request(app)
        .get('/api/v1/resumes/sync-profile')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.personalInfo.fullName).toBe('Aarav Sharma');
      expect(res.body.data.education[0].institution).toBe('National Institute of Technology Surat');
      expect(res.body.data.education[0].fieldOfStudy).toBe('Computer Science and Engineering');
      expect(res.body.data.achievements[0]).toContain('42+ verified algorithmic coding problems');
    });
  });

  describe('POST /api/v1/resumes/analyze-raw', () => {
    it('should perform instant ATS analysis on uncommitted draft resume', async () => {
      const res = await request(app)
        .post('/api/v1/resumes/analyze-raw')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          resume: mockResumeData,
          customJobDescription: 'Requires React, TypeScript, Docker, and Redis.',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.totalScore).toBeGreaterThanOrEqual(0);
      expect(res.body.data.sectionScores).toBeDefined();
      expect(Array.isArray(res.body.data.matchedKeywords)).toBe(true);
    });
  });

  describe('GET /api/v1/resumes/:id', () => {
    it('should return resume for owner', async () => {
      vi.spyOn(Resume, 'findOne').mockResolvedValue(savedResumeDoc as any);

      const res = await request(app)
        .get('/api/v1/resumes/60d5ecb8b5c9c614b8e8be01')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.title).toBe('Aarav Full Stack Resume');
    });

    it('should reject student accessing another student resume with 403 Forbidden', async () => {
      vi.spyOn(Resume, 'findOne').mockResolvedValue(savedResumeDoc as any);

      const res = await request(app)
        .get('/api/v1/resumes/60d5ecb8b5c9c614b8e8be01')
        .set('Authorization', `Bearer ${otherStudentToken}`);

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
    });
  });

  describe('PUT /api/v1/resumes/:id', () => {
    it('should update resume content and recalculate ATS score', async () => {
      const existingDoc = {
        ...savedResumeDoc,
        save: vi.fn().mockResolvedValue(true),
        toObject: () => ({ ...mockResumeData }),
      };
      vi.spyOn(Resume, 'findOne').mockResolvedValue(existingDoc as any);

      const res = await request(app)
        .put('/api/v1/resumes/60d5ecb8b5c9c614b8e8be01')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({ title: 'Updated SDE Resume 2026' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(existingDoc.save).toHaveBeenCalled();
    });
  });

  describe('POST /api/v1/resumes/:id/analyze', () => {
    it('should re-analyze existing resume against custom role', async () => {
      const existingDoc = {
        ...savedResumeDoc,
        save: vi.fn().mockResolvedValue(true),
        toObject: () => ({ ...mockResumeData }),
      };
      vi.spyOn(Resume, 'findOne').mockResolvedValue(existingDoc as any);

      const res = await request(app)
        .post('/api/v1/resumes/60d5ecb8b5c9c614b8e8be01/analyze')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({ targetRole: 'java' });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.totalScore).toBeDefined();
    });
  });

  describe('DELETE /api/v1/resumes/:id', () => {
    it('should allow student to delete their resume', async () => {
      vi.spyOn(Resume, 'findOne').mockResolvedValue(savedResumeDoc as any);
      vi.spyOn(Resume, 'deleteOne').mockResolvedValue({ deletedCount: 1 } as any);

      const res = await request(app)
        .delete('/api/v1/resumes/60d5ecb8b5c9c614b8e8be01')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.message).toBe('Resume deleted successfully');
    });
  });
});
