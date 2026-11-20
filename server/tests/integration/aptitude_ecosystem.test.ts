import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { QuestionAptitude, AptitudeSession } from '../../src/modules/aptitude/aptitude.model';
import { User } from '../../src/modules/user/user.model';

describe('Aptitude Preparation API & RBAC Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  describe('GET /api/v1/aptitude/categories', () => {
    it('should require authentication token (returns 401)', async () => {
      const res = await request(app).get('/api/v1/aptitude/categories');
      expect(res.status).toBe(401);
      expect(res.body.error.code).toBe('UNAUTHORIZED');
    });

    it('should return categories with subcategories for authenticated student', async () => {
      vi.spyOn(QuestionAptitude, 'aggregate').mockResolvedValue([
        { _id: 'QUANTITATIVE', total: 15 },
        { _id: 'LOGICAL_REASONING', total: 10 },
      ] as any);

      const res = await request(app)
        .get('/api/v1/aptitude/categories')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data.some((c: any) => c.category === 'QUANTITATIVE')).toBe(true);
    });
  });

  describe('POST /api/v1/aptitude/check-answer', () => {
    it('should verify answer and return step-by-step explanation', async () => {
      const mockQuestion = {
        _id: '60d5ecb8b5c9c614b8e8b555',
        correctOptionId: 'B',
        explanation: 'Work done = 1/12 + 1/24 = 1/8 -> 8 days',
      };

      vi.spyOn(QuestionAptitude, 'findById').mockResolvedValue(mockQuestion as any);

      const res = await request(app)
        .post('/api/v1/aptitude/check-answer')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          questionId: '60d5ecb8b5c9c614b8e8b555',
          selectedOptionId: 'B',
          timeSpentSeconds: 24,
        });

      expect(res.status).toBe(200);
      expect(res.body.data.isCorrect).toBe(true);
      expect(res.body.data.correctOptionId).toBe('B');
      expect(res.body.data.explanation).toContain('8 days');
    });

    it('should flag incorrect option and still provide explanation', async () => {
      const mockQuestion = {
        _id: '60d5ecb8b5c9c614b8e8b555',
        correctOptionId: 'B',
        explanation: 'Work done = 1/12 + 1/24 = 1/8 -> 8 days',
      };

      vi.spyOn(QuestionAptitude, 'findById').mockResolvedValue(mockQuestion as any);

      const res = await request(app)
        .post('/api/v1/aptitude/check-answer')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          questionId: '60d5ecb8b5c9c614b8e8b555',
          selectedOptionId: 'A', // wrong option
          timeSpentSeconds: 30,
        });

      expect(res.status).toBe(200);
      expect(res.body.data.isCorrect).toBe(false);
      expect(res.body.data.correctOptionId).toBe('B');
    });
  });

  describe('POST /api/v1/aptitude/submit-session', () => {
    it('should calculate accuracy and speed metrics and record session', async () => {
      const mockQuestions = [
        { _id: '60d5ecb8b5c9c614b8e8b111', correctOptionId: 'A' },
        { _id: '60d5ecb8b5c9c614b8e8b222', correctOptionId: 'B' },
      ];

      vi.spyOn(QuestionAptitude, 'find').mockResolvedValue(mockQuestions as any);
      vi.spyOn(AptitudeSession, 'create').mockResolvedValue({
        _id: '60d5ecb8b5c9c614b8e8baaa',
        createdAt: new Date(),
      } as any);
      vi.spyOn(User, 'findByIdAndUpdate').mockResolvedValue({} as any);

      const res = await request(app)
        .post('/api/v1/aptitude/submit-session')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          category: 'QUANTITATIVE',
          mode: 'TIMED_MOCK',
          totalTimeSpentSeconds: 120,
          answers: [
            { questionId: '60d5ecb8b5c9c614b8e8b111', selectedOptionId: 'A', timeSpentSeconds: 60 },
            { questionId: '60d5ecb8b5c9c614b8e8b222', selectedOptionId: 'B', timeSpentSeconds: 60 },
          ],
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.accuracyPercentage).toBe(100);
      expect(res.body.data.correctCount).toBe(2);
      expect(res.body.data.pointsEarned).toBe(10);
    });
  });

  describe('RBAC Protection on Question Creation', () => {
    it('should reject STUDENT attempting to create an aptitude question (returns 403 Forbidden)', async () => {
      const res = await request(app)
        .post('/api/v1/aptitude')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          category: 'QUANTITATIVE',
          subcategory: 'Time and Work',
          questionText: 'Unauthorized student question',
          options: [{ id: 'A', text: '1' }, { id: 'B', text: '2' }],
          correctOptionId: 'A',
          explanation: 'No explanation',
        });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });
  });
});
