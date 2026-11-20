import { z } from 'zod';

export const createOpportunitySchema = z.object({
  title: z.string().min(2, 'Job title is required'),
  company: z.object({
    name: z.string().min(2, 'Company name is required'),
    logoUrl: z.string().optional().default(''),
    website: z.string().optional().default(''),
    industry: z.string().optional().default('Information Technology'),
  }),
  type: z.enum(['FULL_TIME', 'INTERNSHIP', 'CONTRACT']).default('FULL_TIME'),
  workMode: z.enum(['REMOTE', 'HYBRID', 'ON_SITE']).default('HYBRID'),
  location: z.string().min(2, 'Location is required'),
  salary: z.object({
    min: z.number().nonnegative().default(0),
    max: z.number().nonnegative().default(0),
    currency: z.string().default('INR'),
    period: z.enum(['LPA', 'PER_MONTH', 'PER_HOUR']).default('LPA'),
  }).default({ min: 0, max: 0, currency: 'INR', period: 'LPA' }),
  requirements: z.object({
    skills: z.array(z.string()).min(1, 'At least one required skill is required'),
    minCgpa: z.number().min(0).max(10).optional().default(0),
    allowedBatches: z.array(z.string()).optional().default([]),
    allowedDepartments: z.array(z.string()).optional().default([]),
  }),
  description: z.string().min(10, 'Job description is required'),
  applyUrl: z.string().min(3, 'Application URL is required'),
  source: z.enum(['CAMPUS_DRIVE', 'VERIFIED_PARTNER', 'LINKEDIN', 'INTERNSHALA']).default('CAMPUS_DRIVE'),
  deadline: z.string().optional(),
  status: z.enum(['ACTIVE', 'EXPIRED', 'CLOSED']).default('ACTIVE'),
});

export const createApplicationSchema = z.object({
  opportunityId: z.string().min(1, 'Opportunity ID is required'),
  resumeId: z.string().optional(),
  stage: z.enum(['SAVED', 'APPLIED', 'OA_SCHEDULED', 'INTERVIEW', 'OFFERED', 'REJECTED']).default('APPLIED'),
  notes: z.string().optional().default(''),
});

export const updateApplicationStageSchema = z.object({
  stage: z.enum(['SAVED', 'APPLIED', 'OA_SCHEDULED', 'INTERVIEW', 'OFFERED', 'REJECTED']),
  notes: z.string().optional(),
  interviewDate: z.string().optional(),
  offerDetails: z.object({
    ctc: z.number().optional(),
    currency: z.string().optional().default('INR'),
    designation: z.string().optional(),
    accepted: z.boolean().optional(),
  }).optional(),
});
