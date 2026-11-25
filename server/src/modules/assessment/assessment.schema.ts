import { z } from 'zod';

export const assessmentQuestionRefSchema = z.object({
  questionId: z.string().min(1, 'Question ID is required'),
  type: z.enum(['APTITUDE', 'CODING']),
  points: z.number().min(1, 'Points must be at least 1'),
});

export const assessmentSectionSchema = z.object({
  sectionId: z.string().min(1, 'Section ID is required'),
  title: z.string().min(1, 'Section title is required'),
  type: z.enum(['APTITUDE', 'CODING']),
  order: z.number().int().min(1),
  durationMinutes: z.number().int().min(1).optional(),
  negativeMarkingRatio: z.number().min(0).max(1).default(0),
  passingCutoffPercentage: z.number().min(0).max(100).default(40),
  questions: z.array(assessmentQuestionRefSchema).min(1, 'Section must contain at least one question'),
});

export const createAssessmentSchema = z.object({
  title: z.string().min(3).max(150),
  description: z.string().min(5),
  type: z.enum(['PLACEMENT_MOCK', 'CONTEST', 'SEMESTER_EXAM', 'PRACTICE']).default('PLACEMENT_MOCK'),
  startTime: z.string().datetime(),
  endTime: z.string().datetime(),
  durationMinutes: z.number().int().min(5).max(360),
  targeting: z
    .object({
      allStudents: z.boolean().default(true),
      departmentIds: z.array(z.string()).default([]),
      batchIds: z.array(z.string()).default([]),
      classIds: z.array(z.string()).default([]),
      cohorts: z
        .array(
          z.object({
            course: z.string().trim().min(1),
            semester: z.coerce.number().int().min(1).max(12),
            section: z.string().trim().min(1),
          })
        )
        .default([]),
      accessCode: z.string().optional(),
    })
    .default({ allStudents: true, departmentIds: [], batchIds: [], classIds: [], cohorts: [] }),
  sections: z.array(assessmentSectionSchema).min(1, 'Assessment must contain at least one section'),
  proctoring: z
    .object({
      enableProctoring: z.boolean().default(true),
      maxTabSwitches: z.number().int().min(1).max(20).default(3),
      enforceFullscreen: z.boolean().default(true),
      blockCopyPaste: z.boolean().default(true),
      autoSubmitOnViolationLimit: z.boolean().default(false),
    })
    .default({
      enableProctoring: true,
      maxTabSwitches: 3,
      enforceFullscreen: true,
      blockCopyPaste: true,
      autoSubmitOnViolationLimit: false,
    }),
});

export const recordTelemetrySchema = z.object({
  eventType: z.enum(['TAB_SWITCH', 'FULLSCREEN_EXIT', 'WINDOW_BLUR', 'COPY_PASTE_ATTEMPT']),
  details: z.string().optional(),
});

export const saveAnswerSchema = z.object({
  questionId: z.string().min(1, 'Question ID is required'),
  type: z.enum(['APTITUDE', 'CODING']),
  selectedOptionId: z.string().optional(),
  code: z.string().optional(),
  language: z.string().optional(),
  timeSpentSeconds: z.number().min(0).default(0),
});
