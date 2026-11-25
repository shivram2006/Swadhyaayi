import { z } from 'zod';

export const createStudentSchema = z.object({
  body: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    rollNumber: z.string().min(1, 'Roll number is required'),
    departmentId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid department ID').optional().or(z.literal('')),
    batchId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid batch ID').optional().or(z.literal('')),
    classId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid class ID').optional().or(z.literal('')),
    course: z.string().trim().optional(),
    semester: z.coerce.number().int().min(1).max(12).optional(),
    section: z.string().trim().optional(),
    password: z.string().min(6).optional().default('Password@123'),
  }),
});

export const bulkStudentUploadSchema = z.object({
  body: z.object({
    csvContent: z.string().min(10, 'CSV content is required'),
    defaultPassword: z.string().min(6).optional().default('Password@123'),
  }),
});

export const transferStudentSchema = z.object({
  params: z.object({
    studentId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid student ID'),
  }),
  body: z.object({
    targetClassId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid target class ID'),
    reason: z.string().optional().default('Academic transfer'),
  }),
});

export const updateStudentStatusSchema = z.object({
  params: z.object({
    studentId: z.string().regex(/^[a-fA-F0-9]{24}$/, 'Invalid student ID'),
  }),
  body: z.object({
    status: z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']),
  }),
});

export const updateStudentProfileSchema = z.object({
  body: z.object({
    phoneNumber: z.string().optional(),
    githubUrl: z.string().url().optional().or(z.literal('')),
    linkedinUrl: z.string().url().optional().or(z.literal('')),
    portfolioUrl: z.string().url().optional().or(z.literal('')),
    skills: z.array(z.string()).optional(),
    targetDomain: z.string().optional(),
    cgpa: z.number().min(0).max(10).optional(),
  }),
});
