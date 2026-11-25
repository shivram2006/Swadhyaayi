import { z } from 'zod';

export const getQuestionsQuerySchema = z.object({
  query: z.object({
    pattern: z.string().optional(),
    company: z.string().optional(),
    difficulty: z.enum(['BEGINNER', 'EASY', 'MEDIUM', 'HARD', 'EXPERT']).optional(),
    category: z.enum(['DSA', 'DP', 'CP', 'PROBLEM_SOLVING', 'COMPANY_SPECIFIC', 'INTERVIEW_QUESTIONS']).optional(),
    topic: z.string().optional(),
    search: z.string().optional(),
    page: z.string().regex(/^\d+$/).optional(),
    limit: z.string().regex(/^\d+$/).optional(),
  }),
});

export const runCodeSchema = z.object({
  body: z.object({
    questionId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid question ID'),
    language: z.string().min(1, 'Language required'),
    code: z.string().min(1, 'Code cannot be empty').max(65536, 'Code exceeds 64KB limit'),
    customInput: z.string().optional(),
  }),
});

export const submitCodeSchema = z.object({
  body: z.object({
    questionId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid question ID'),
    language: z.string().min(1, 'Language required'),
    code: z.string().min(1, 'Code cannot be empty').max(65536, 'Code exceeds 64KB limit'),
  }),
});

export const createQuestionSchema = z.object({
  body: z.object({
    title: z.string().min(3),
    slug: z.string().min(3).regex(/^[a-z0-9-]+$/),
    description: z.string().min(10),
    difficulty: z.enum(['BEGINNER', 'EASY', 'MEDIUM', 'HARD', 'EXPERT']),
    category: z.enum(['DSA', 'DP', 'CP', 'PROBLEM_SOLVING', 'COMPANY_SPECIFIC', 'INTERVIEW_QUESTIONS']).default('DSA'),
    patterns: z.array(z.string()).min(1, 'At least one pattern is required'),
    topics: z.array(z.string()).default([]),
    companyTags: z
      .array(
        z.object({
          company: z.string().min(1),
          yearReported: z.number().int().min(2015).max(2030),
          verified: z.boolean().default(false),
          frequencyCount: z.number().int().default(1),
          sourceNote: z.string().optional(),
        })
      )
      .default([]),
    supportedLanguages: z.array(z.string()).default(['python', 'javascript', 'cpp', 'java']),
    starterCode: z.array(
      z.object({
        language: z.string(),
        boilerplate: z.string(),
        driverCode: z.string().optional(),
      })
    ),
    sampleTestCases: z.array(
      z.object({
        input: z.string(),
        output: z.string(),
        explanation: z.string().optional(),
      })
    ).min(1, 'At least one sample testcase required'),
    hiddenTestCases: z.array(
      z.object({
        input: z.string(),
        expectedOutput: z.string(),
        weight: z.number().default(1),
      })
    ).min(1, 'At least one hidden testcase required'),
    timeLimitMs: z.number().int().min(500).max(10000).default(2000),
    memoryLimitMb: z.number().int().min(64).max(1024).default(256),
    hints: z.array(z.string()).default([]),
    isAssessmentOnly: z.boolean().optional().default(false),
    editorial: z
      .object({
        solutionMarkdown: z.string(),
        complexityAnalysis: z.string(),
      })
      .optional(),
  }),
});
