import { z } from 'zod';

export const createDepartmentSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Department name must be at least 2 characters'),
    code: z
      .string()
      .min(2, 'Code must be at least 2 characters')
      .max(10, 'Code too long')
      .regex(/^[A-Za-z0-9]+$/, 'Department code must be alphanumeric'),
  }),
});

export const createBatchSchema = z.object({
  body: z.object({
    name: z.string().min(2, 'Batch name must be at least 2 characters'),
    graduationYear: z.number().int().min(2020).max(2040),
    currentAcademicYear: z.number().int().min(1).max(5).default(1),
  }),
});

export const upgradeBatchSchema = z.object({
  params: z.object({
    batchId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid batch ID format'),
  }),
});

export const createClassSchema = z.object({
  body: z.object({
    departmentId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid department ID'),
    batchId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid batch ID'),
    section: z.string().min(1, 'Section required').max(10),
    semester: z.number().int().min(1).max(10).default(1),
  }),
});
