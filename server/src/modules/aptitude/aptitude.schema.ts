import { z } from 'zod';

export const getAptitudeQuestionsSchema = z.object({
  query: z.object({
    category: z.enum(['QUANTITATIVE', 'LOGICAL_REASONING', 'VERBAL_ABILITY', 'DATA_INTERPRETATION', 'TECHNICAL_MCQ']).optional(),
    subcategory: z.string().optional(),
    difficulty: z.enum(['BEGINNER', 'EASY', 'MEDIUM', 'HARD']).optional(),
    limit: z.string().regex(/^\d+$/).optional(),
    mode: z.enum(['PRACTICE', 'MOCK']).optional().default('PRACTICE'),
  }),
});

export const checkAnswerSchema = z.object({
  body: z.object({
    questionId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid question ID'),
    selectedOptionId: z.string().min(1, 'Selected option required'),
    timeSpentSeconds: z.number().int().min(0).default(0),
  }),
});

export const submitAptitudeSessionSchema = z.object({
  body: z.object({
    category: z.string().optional(),
    subcategory: z.string().optional(),
    mode: z.enum(['TOPIC_PRACTICE', 'TIMED_MOCK']).default('TOPIC_PRACTICE'),
    totalTimeSpentSeconds: z.number().int().min(1),
    answers: z.array(
      z.object({
        questionId: z.string().regex(/^[a-fA-F0-9]{24}$/),
        selectedOptionId: z.string().min(1),
        timeSpentSeconds: z.number().int().min(0).default(0),
      })
    ).min(1, 'Session must include at least one answered question'),
  }),
});

export const createAptitudeQuestionSchema = z.object({
  body: z.object({
    category: z.enum(['QUANTITATIVE', 'LOGICAL_REASONING', 'VERBAL_ABILITY', 'DATA_INTERPRETATION', 'TECHNICAL_MCQ']),
    subcategory: z.string().min(2),
    difficulty: z.enum(['BEGINNER', 'EASY', 'MEDIUM', 'HARD']).default('MEDIUM'),
    questionText: z.string().min(5),
    options: z.array(
      z.object({
        id: z.string().min(1),
        text: z.string().min(1),
      })
    ).min(2, 'At least 2 options required'),
    correctOptionId: z.string().min(1),
    explanation: z.string().min(5),
    companyTags: z.array(
      z.object({
        company: z.string().min(1),
        yearReported: z.number().int().min(2015).max(2030),
      })
    ).default([]),
  }),
});
