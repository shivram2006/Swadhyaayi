import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { QuestionCoding, SubmissionCoding } from '../../src/modules/coding/coding.model';

describe('Coding Practice API & Sandbox Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const facultyToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b002',
    role: 'FACULTY',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  describe('GET /api/v1/coding Query & Filters', () => {
    it('should require authentication token (returns 401)', async () => {
      const res = await request(app).get('/api/v1/coding');
      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should validate query filters and reject invalid difficulties with 400', async () => {
      const res = await request(app)
        .get('/api/v1/coding?difficulty=SUPER_EXTREME')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should accept valid pattern and company queries', async () => {
      vi.spyOn(QuestionCoding, 'find').mockReturnValue({
        select: vi.fn().mockReturnThis(),
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockResolvedValue([
          {
            _id: '60d5ecb8b5c9c614b8e8b777',
            title: 'Two Sum',
            slug: 'two-sum',
            difficulty: 'EASY',
            patterns: ['Hashing', 'Two Pointers'],
            companyTags: [{ company: 'Google', yearReported: 2024, verified: true }],
            toObject: () => ({
              _id: '60d5ecb8b5c9c614b8e8b777',
              title: 'Two Sum',
              slug: 'two-sum',
              difficulty: 'EASY',
              patterns: ['Hashing', 'Two Pointers'],
              companyTags: [{ company: 'Google', yearReported: 2024, verified: true }],
            }),
          },
        ]),
      } as any);

      vi.spyOn(QuestionCoding, 'countDocuments').mockResolvedValue(1);
      vi.spyOn(SubmissionCoding, 'find').mockReturnValue({
        select: vi.fn().mockResolvedValue([]),
      } as any);

      const res = await request(app)
        .get('/api/v1/coding?pattern=Two%20Pointers&company=Google&difficulty=EASY')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.length).toBeGreaterThan(0);
      expect(res.body.data[0].title).toBe('Two Sum');
    });
  });

  describe('Security & Hidden Test Case Segregation', () => {
    it('should strictly exclude hidden testcases from student problem details', async () => {
      const mockQuestion: any = {
        _id: '60d5ecb8b5c9c614b8e8b777',
        title: 'Two Sum',
        slug: 'two-sum',
        difficulty: 'EASY',
        sampleTestCases: [{ input: '[2,7]\n9', output: '[0, 1]' }],
      };

      const mockQuery: any = {
        select: vi.fn().mockReturnThis(),
        then: (resolve: any) => Promise.resolve(mockQuestion).then(resolve),
      };

      vi.spyOn(QuestionCoding, 'findOne').mockReturnValue(mockQuery as any);

      const res = await request(app)
        .get('/api/v1/coding/two-sum')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.hiddenTestCases).toBeUndefined();
      expect(res.body.data.sampleTestCases).toBeDefined();
    });
  });

  describe('RBAC on Problem Creation', () => {
    it('should reject STUDENT attempting to create a coding question (returns 403 Forbidden)', async () => {
      const res = await request(app)
        .post('/api/v1/coding')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          title: 'Unauthorized Problem',
          slug: 'unauthorized-problem',
          description: 'Students cannot create questions',
          difficulty: 'MEDIUM',
          patterns: ['Two Pointers'],
        });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });
  });

  describe('Code Execution Validation (400)', () => {
    it('should reject run request with empty code payload', async () => {
      const res = await request(app)
        .post('/api/v1/coding/run')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          questionId: '60d5ecb8b5c9c614b8e8b777',
          language: 'python',
          code: '',
        });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });

    it('should reject submission with invalid question ID format', async () => {
      const res = await request(app)
        .post('/api/v1/coding/submit')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          questionId: 'invalid-id-xyz',
          language: 'python',
          code: 'print(1)',
        });

      expect(res.status).toBe(400);
      expect(res.body.error.code).toBe('VALIDATION_ERROR');
    });
  });
});
