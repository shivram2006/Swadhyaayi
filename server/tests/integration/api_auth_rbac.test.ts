import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';

describe('API Auth, RBAC & Tenant Security Integration Tests', () => {
  const app = createApp();

  describe('GET /api/health', () => {
    it('should return 200 with server status UP', async () => {
      const res = await request(app).get('/api/health');
      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.status).toBe('UP');
    });
  });

  describe('Authentication Enforcement (401)', () => {
    it('should reject unauthenticated access to /api/v1/auth/me with 401', async () => {
      const res = await request(app).get('/api/v1/auth/me');
      expect(res.status).toBe(401);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should reject malformed bearer token with 401', async () => {
      const res = await request(app)
        .get('/api/v1/auth/me')
        .set('Authorization', 'Bearer invalid_bogus_token_xyz');
      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should reject unauthenticated access to /api/v1/tenants/departments with 401', async () => {
      const res = await request(app).get('/api/v1/tenants/departments');
      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHORIZED');
    });
  });

  describe('Role-Based Access Control (RBAC) Enforcement (403)', () => {
    it('should prevent STUDENT from creating a department (returns 403 Forbidden)', async () => {
      const studentToken = generateAccessToken({
        userId: '60d5ecb8b5c9c614b8e8b001',
        role: 'STUDENT',
        institutionId: '60d5ecb8b5c9c614b8e8b999',
      });

      const res = await request(app)
        .post('/api/v1/tenants/departments')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          name: 'Computer Science',
          code: 'CSE',
        });

      expect(res.status).toBe(403);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('FORBIDDEN');
      expect(res.body.error.message).toContain('INSTITUTION_ADMIN');
    });

    it('should prevent FACULTY from creating a batch (returns 403 Forbidden)', async () => {
      const facultyToken = generateAccessToken({
        userId: '60d5ecb8b5c9c614b8e8b002',
        role: 'FACULTY',
        institutionId: '60d5ecb8b5c9c614b8e8b999',
      });

      const res = await request(app)
        .post('/api/v1/tenants/batches')
        .set('Authorization', `Bearer ${facultyToken}`)
        .send({
          name: 'Batch 2025',
          graduationYear: 2025,
          currentAcademicYear: 1,
        });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('Input Validation Errors (400)', () => {
    it('should return structured 400 Bad Request when registering institution with missing fields', async () => {
      const res = await request(app)
        .post('/api/v1/auth/register-institution')
        .send({
          institutionName: 'Short',
          // missing code, admin details, email
        });

      expect(res.status).toBe(400);
      expect(res.body.success).toBe(false);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
      expect(Array.isArray(res.body.error.details)).toBe(true);
    });

    it('should return 400 when logging in with empty password', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({
          email: 'admin@nit.ac.in',
          password: '',
        });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });
  });

  describe('404 Fallback Route', () => {
    it('should return 404 for unknown endpoints', async () => {
      const res = await request(app).get('/api/v1/non-existent-route-999');
      expect(res.status).toBe(404);
      expect(res.body.error.code).toBe('NOT_FOUND');
    });
  });
});
