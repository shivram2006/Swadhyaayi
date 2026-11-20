import { z } from 'zod';

export const personalInfoSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(7, 'Phone number is required'),
  location: z.string().optional().default(''),
  linkedinUrl: z.string().optional().default(''),
  githubUrl: z.string().optional().default(''),
  portfolioUrl: z.string().optional().default(''),
  codingProfiles: z.object({
    leetcode: z.string().optional().default(''),
    codeforces: z.string().optional().default(''),
    hackerrank: z.string().optional().default(''),
    swadhyayi: z.string().optional().default(''),
  }).optional().default({}),
});

export const educationItemSchema = z.object({
  institution: z.string().min(2, 'Institution name is required'),
  degree: z.string().min(2, 'Degree is required'),
  fieldOfStudy: z.string().min(2, 'Field of study is required'),
  startDate: z.string().optional().default(''),
  endDate: z.string().optional().default(''),
  current: z.boolean().optional().default(false),
  cgpaOrPercentage: z.string().optional().default(''),
  location: z.string().optional().default(''),
});

export const skillsSchema = z.object({
  languages: z.array(z.string()).optional().default([]),
  frameworks: z.array(z.string()).optional().default([]),
  databases: z.array(z.string()).optional().default([]),
  toolsAndCloud: z.array(z.string()).optional().default([]),
  coreFundamentals: z.array(z.string()).optional().default([]),
});

export const experienceItemSchema = z.object({
  company: z.string().min(2, 'Company name is required'),
  role: z.string().min(2, 'Role is required'),
  location: z.string().optional().default(''),
  startDate: z.string().optional().default(''),
  endDate: z.string().optional().default(''),
  current: z.boolean().optional().default(false),
  bullets: z.array(z.string()).optional().default([]),
});

export const projectItemSchema = z.object({
  title: z.string().min(2, 'Project title is required'),
  techStack: z.array(z.string()).optional().default([]),
  liveUrl: z.string().optional().default(''),
  githubUrl: z.string().optional().default(''),
  startDate: z.string().optional().default(''),
  endDate: z.string().optional().default(''),
  bullets: z.array(z.string()).optional().default([]),
});

export const certificationItemSchema = z.object({
  name: z.string().min(2, 'Certification name is required'),
  issuer: z.string().min(2, 'Issuer is required'),
  issueDate: z.string().optional().default(''),
  credentialUrl: z.string().optional().default(''),
});

export const createResumeSchema = z.object({
  title: z.string().min(2, 'Title must be at least 2 characters').default('Software Engineer Resume'),
  targetRole: z.enum(['mern', 'java', 'aiml', 'frontend', 'backend', 'devops', 'sde', 'general']).default('sde'),
  isDefault: z.boolean().optional().default(false),
  personalInfo: personalInfoSchema,
  summary: z.string().optional().default(''),
  education: z.array(educationItemSchema).optional().default([]),
  skills: skillsSchema.optional().default({}),
  experience: z.array(experienceItemSchema).optional().default([]),
  projects: z.array(projectItemSchema).optional().default([]),
  certifications: z.array(certificationItemSchema).optional().default([]),
  achievements: z.array(z.string()).optional().default([]),
});

export const updateResumeSchema = createResumeSchema.partial();

export const analyzeRawResumeSchema = z.object({
  resume: createResumeSchema.partial(),
  customJobDescription: z.string().optional(),
});
