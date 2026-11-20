import { describe, it, expect } from 'vitest';
import { ResumeAnalyzer, STRONG_ACTION_VERBS, WEAK_VERBS, TRACK_KEYWORDS } from '../../src/modules/resume/resume.analyzer';

describe('ATS Resume Analyzer Unit Tests', () => {
  const completeResume = {
    targetRole: 'mern',
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
      languages: ['TypeScript', 'JavaScript', 'Python', 'C++', 'HTML5', 'CSS3'],
      frameworks: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Next.js', 'Mongoose', 'Redux'],
      databases: ['MongoDB', 'PostgreSQL', 'Redis'],
      toolsAndCloud: ['Docker', 'Git', 'Linux', 'Vitest', 'Jest', 'JWT'],
      coreFundamentals: ['Data Structures & Algorithms', 'System Design', 'DBMS', 'REST API'],
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
          'Engineered caching layer utilizing Redis, handling 10k+ requests per minute with 99.9% uptime.',
          'Optimized database queries and MongoDB compound indexes, cutting query execution time by 50%.',
        ],
      },
    ],
    projects: [
      {
        title: 'Swadhyayi Assessment & Sandboxed Judge Arena',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'TypeScript'],
        liveUrl: 'https://swadhyayi.edu',
        githubUrl: 'https://github.com/swadhyayi/core',
        bullets: [
          'Spearheaded development of sandboxed code execution engine running across 50+ batch testcases.',
          'Streamlined state management with Zustand, improving frontend render performance by 40%.',
        ],
      },
      {
        title: 'Distributed Cloud Task Scheduler',
        techStack: ['Python', 'Redis', 'Docker'],
        bullets: [
          'Implemented asynchronous task queue processing 50k+ daily background tasks.',
        ],
      },
    ],
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        issuer: 'Amazon Web Services',
        issueDate: '2025',
      },
    ],
    achievements: [
      'Ranked Top 1% in Swadhyayi Global Competitive Coding Leaderboard',
      'First prize winner at NIT Surat Hackathon 2025',
    ],
  };

  it('should score high (>85) on a comprehensive, metric-rich engineering resume', () => {
    const result = ResumeAnalyzer.analyze(completeResume);
    expect(result.totalScore).toBeGreaterThanOrEqual(85);
    expect(result.sectionScores.completeness).toBe(25);
    expect(result.sectionScores.actionVerbs).toBeGreaterThanOrEqual(20);
    expect(result.sectionScores.quantifiableMetrics).toBe(25);
    expect(result.sectionScores.keywordMatch).toBeGreaterThanOrEqual(20);
    expect(result.detectedMetricsCount).toBeGreaterThanOrEqual(4);
    expect(result.formattingIssues.length).toBeLessThanOrEqual(2);
  });

  it('should penalize incomplete sections (missing contact, summary, education)', () => {
    const sparseResume = {
      targetRole: 'sde',
      personalInfo: {
        fullName: 'A', // too short
        email: 'invalid-email',
        phone: '',
      },
      summary: '', // missing
      education: [], // missing
      skills: {}, // empty
      experience: [],
      projects: [],
    };

    const result = ResumeAnalyzer.analyze(sparseResume);
    expect(result.sectionScores.completeness).toBeLessThan(10);
    expect(result.formattingIssues).toContain('Full name is missing or too short.');
    expect(result.formattingIssues).toContain('Valid email address is missing.');
    expect(result.formattingIssues).toContain('Contact phone number is missing.');
    expect(result.formattingIssues).toContain('Professional summary section is empty.');
    expect(result.formattingIssues).toContain('Technical skills section is empty.');
    expect(result.totalScore).toBeLessThan(20);
  });

  it('should detect strong action verbs and penalize weak verbs in bullet points', () => {
    const weakResume = {
      ...completeResume,
      experience: [
        {
          company: 'Acme Corp',
          role: 'Intern',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          bullets: [
            'Assisted the team in frontend tasks.',
            'Helped senior developers and worked on bug fixes.',
            'Responsible for doing testing.',
          ],
        },
      ],
      projects: [],
    };

    const result = ResumeAnalyzer.analyze(weakResume);
    expect(result.weakVerbsCount).toBeGreaterThanOrEqual(2);
    expect(result.weakVerbsFound).toContain('assisted');
    expect(result.weakVerbsFound).toContain('helped');
  });

  it('should detect quantifiable metrics using regex (percentages, multipliers, latency, scale)', () => {
    const resumeWithMetrics = {
      ...completeResume,
      experience: [
        {
          company: 'Metric Lab',
          role: 'Developer',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          bullets: [
            'Reduced server response time by 45ms across 100k requests.',
            'Accelerated database query performance by 4x.',
            'Boosted daily active user retention by 28%.',
            'Decreased infrastructure costs by $500 monthly.',
          ],
        },
      ],
      projects: [],
    };

    const result = ResumeAnalyzer.analyze(resumeWithMetrics);
    expect(result.detectedMetricsCount).toBe(4);
    expect(result.sectionScores.quantifiableMetrics).toBe(25);
    expect(result.quantifiableBullets.length).toBe(4);
  });

  it('should calculate keyword density and return missing keywords for targeted role', () => {
    const javaDevResume = {
      ...completeResume,
      targetRole: 'java',
      skills: {
        languages: ['Java'],
        frameworks: ['Spring Boot'],
        databases: ['PostgreSQL'],
        toolsAndCloud: ['Docker', 'Git'],
        coreFundamentals: ['DSA'],
      },
    };

    const result = ResumeAnalyzer.analyze(javaDevResume);
    expect(result.matchedKeywords).toContain('java');
    expect(result.matchedKeywords).toContain('spring boot');
    expect(result.matchedKeywords).toContain('postgresql');
    expect(result.missingKeywords.length).toBeGreaterThan(0);
    expect(result.missingKeywords).toContain('hibernate');
    expect(result.missingKeywords).toContain('kafka');
  });

  it('should match against custom Job Description when provided', () => {
    const customJD = `
      Looking for a Senior Backend Engineer with hands-on experience in
      Kafka, Kubernetes, Go, PostgreSQL, Redis, Microservices, and GraphQL.
    `;

    const result = ResumeAnalyzer.analyze(completeResume, customJD);
    expect(result.matchedKeywords).toContain('postgresql');
    expect(result.matchedKeywords).toContain('redis');
    expect(result.missingKeywords).toContain('kubernetes');
    expect(result.missingKeywords).toContain('graphql');
  });
});
