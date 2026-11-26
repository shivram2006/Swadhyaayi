import { z } from 'zod';

export const registerInstitutionSchema = z.object({
  body: z.object({
    institutionName: z.string().min(3, 'Institution name must have at least 3 characters'),
    institutionCode: z
      .string()
      .min(2, 'Code must have at least 2 characters')
      .max(20, 'Code too long')
      .regex(/^[a-zA-Z0-9-]+$/, 'Code must be alphanumeric with optional hyphens'),
    contactEmail: z.string().email('Invalid contact email'),
    adminFirstName: z.string().min(1, 'First name is required'),
    adminLastName: z.string().min(1, 'Last name is required'),
    adminEmail: z.string().email('Invalid admin email'),
    adminPassword: z.string().min(8, 'Password must be at least 8 characters long'),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email address'),
    password: z.string().min(1, 'Password is required'),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().optional(),
  }),
});

export const studentRegisterSchema = z.object({
  body: z.object({
    institutionId: z.string().optional(),
    institutionCode: z.string().optional(),
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    email: z.string().trim().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    rollNumber: z.string().trim().min(1, 'Roll number is required'),
    course: z.string().trim().min(1, 'Course is required'),
    semester: z.coerce.number().int().min(1).max(12),
    section: z.string().trim().min(1, 'Section is required'),
  }),
});
