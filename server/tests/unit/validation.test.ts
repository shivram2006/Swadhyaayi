import { describe, it, expect } from 'vitest';
import { registerInstitutionSchema, loginSchema } from '../../src/modules/auth/auth.schema';
import { createDepartmentSchema, createBatchSchema } from '../../src/modules/tenant/tenant.schema';

describe('Zod Validation Schemas Unit Tests', () => {
  describe('registerInstitutionSchema', () => {
    it('should pass on valid institutional registration data', async () => {
      const validData = {
        body: {
          institutionName: 'National Institute of Technology',
          institutionCode: 'nit-surat',
          contactEmail: 'contact@nitsurat.ac.in',
          adminFirstName: 'Anand',
          adminLastName: 'Kumar',
          adminEmail: 'admin@nitsurat.ac.in',
          adminPassword: 'Password@123',
        },
      };

      const result = await registerInstitutionSchema.safeParseAsync(validData);
      expect(result.success).toBe(true);
    });

    it('should reject invalid institutionCode with spaces or special characters', async () => {
      const invalidData = {
        body: {
          institutionName: 'NIT',
          institutionCode: 'nit surat with spaces!',
          contactEmail: 'contact@nitsurat.ac.in',
          adminFirstName: 'A',
          adminLastName: 'B',
          adminEmail: 'admin@nitsurat.ac.in',
          adminPassword: 'short',
        },
      };

      const result = await registerInstitutionSchema.safeParseAsync(invalidData);
      expect(result.success).toBe(false);
      if (!result.success) {
        const issues = result.error.issues.map((i) => i.path.join('.'));
        expect(issues).toContain('body.institutionCode');
        expect(issues).toContain('body.adminPassword');
      }
    });
  });

  describe('createDepartmentSchema', () => {
    it('should accept valid department details', async () => {
      const valid = {
        body: {
          name: 'Computer Science & Engineering',
          code: 'CSE',
        },
      };
      const result = await createDepartmentSchema.safeParseAsync(valid);
      expect(result.success).toBe(true);
    });

    it('should reject department code with special characters', async () => {
      const invalid = {
        body: {
          name: 'Computer Science',
          code: 'CS!@#',
        },
      };
      const result = await createDepartmentSchema.safeParseAsync(invalid);
      expect(result.success).toBe(false);
    });
  });

  describe('createBatchSchema', () => {
    it('should accept valid academic batch', async () => {
      const valid = {
        body: {
          name: 'Batch 2024-2028',
          graduationYear: 2028,
          currentAcademicYear: 1,
        },
      };
      const result = await createBatchSchema.safeParseAsync(valid);
      expect(result.success).toBe(true);
    });

    it('should reject out of range graduation years', async () => {
      const invalid = {
        body: {
          name: 'Old Batch',
          graduationYear: 1999, // below 2020
          currentAcademicYear: 1,
        },
      };
      const result = await createBatchSchema.safeParseAsync(invalid);
      expect(result.success).toBe(false);
    });
  });
});
