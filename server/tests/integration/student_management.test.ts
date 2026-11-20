import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { User } from '../../src/modules/user/user.model';

describe('Student Management API & RBAC Integration Tests', () => {
  const app = createApp();

  const adminToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b001',
    role: 'INSTITUTION_ADMIN',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const facultyToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b002',
    role: 'FACULTY',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  describe('RBAC Route Protection', () => {
    it('should reject unauthenticated access to /api/v1/students with 401', async () => {
      const res = await request(app).get('/api/v1/students');
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should reject STUDENT attempting to enroll another student with 403 Forbidden', async () => {
      const res = await request(app)
        .post('/api/v1/students')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          firstName: 'Illegal',
          lastName: 'Student',
          email: 'illegal@nit.ac.in',
          rollNumber: 'U23CS999',
          departmentId: '60d5ecb8b5c9c614b8e8b111',
          batchId: '60d5ecb8b5c9c614b8e8b222',
          classId: '60d5ecb8b5c9c614b8e8b333',
        });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });

    it('should reject FACULTY attempting to transfer student section with 403 Forbidden', async () => {
      const res = await request(app)
        .post('/api/v1/students/60d5ecb8b5c9c614b8e8b003/transfer')
        .set('Authorization', `Bearer ${facultyToken}`)
        .send({
          targetClassId: '60d5ecb8b5c9c614b8e8b444',
          reason: 'Unauthorized transfer attempt',
        });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('Input Validation on Student Endpoints', () => {
    it('should return 400 when creating a student with malformed IDs or missing names', async () => {
      const res = await request(app)
        .post('/api/v1/students')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          firstName: '',
          email: 'not-an-email',
          rollNumber: '',
          departmentId: 'not-an-objectid',
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
      expect(Array.isArray(res.body.error.details)).toBe(true);
    });

    it('should return 400 when bulk importing with empty CSV content', async () => {
      const res = await request(app)
        .post('/api/v1/students/bulk-import')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          csvContent: '',
        });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should return 400 when updating student with invalid status enum value', async () => {
      const res = await request(app)
        .patch('/api/v1/students/60d5ecb8b5c9c614b8e8b003/status')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          status: 'INVALID_STATUS_VALUE',
        });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('Student Profile Self-Service', () => {
    it('should allow student to update their own profile skills and contact info', async () => {
      const mockStudent: any = {
        _id: '60d5ecb8b5c9c614b8e8b003',
        institutionId: '60d5ecb8b5c9c614b8e8b999',
        profile: { skills: [] },
        save: vi.fn().mockResolvedValue(true),
        toObject: () => ({
          _id: '60d5ecb8b5c9c614b8e8b003',
          profile: { skills: ['React', 'TypeScript', 'Node.js', 'System Design'] },
        }),
      };

      vi.spyOn(User, 'findOne').mockResolvedValue(mockStudent as any);

      const res = await request(app)
        .patch('/api/v1/students/profile')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          phoneNumber: '+91 9876543210',
          skills: ['React', 'TypeScript', 'Node.js', 'System Design'],
          targetDomain: 'Software Development Engineer',
          cgpa: 9.1,
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.profile.skills).toContain('React');
    });
  });
});
