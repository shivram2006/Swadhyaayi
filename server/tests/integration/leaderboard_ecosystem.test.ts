import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { User } from '../../src/modules/user/user.model';

describe('Three-Level Leaderboard API Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const mockStudents = [
    {
      _id: '60d5ecb8b5c9c614b8e8b001',
      firstName: 'Aarav',
      lastName: 'Patel',
      email: 'aarav@nit.ac.in',
      rollNumber: '23CS01',
      role: 'STUDENT',
      institutionId: { name: 'NIT Surat', code: 'nit-surat' },
      departmentId: { name: 'CSE', code: 'CSE' },
      metrics: {
        totalPoints: 1250,
        codingScore: 800,
        codingProblemsSolved: 45,
        aptitudeScore: 350,
        aptitudeTestsTaken: 12,
        currentStreak: 18,
      },
    },
    {
      _id: '60d5ecb8b5c9c614b8e8b002',
      firstName: 'Diya',
      lastName: 'Sharma',
      email: 'diya@nit.ac.in',
      rollNumber: '23CS02',
      role: 'STUDENT',
      institutionId: { name: 'NIT Surat', code: 'nit-surat' },
      departmentId: { name: 'CSE', code: 'CSE' },
      metrics: {
        totalPoints: 980,
        codingScore: 650,
        codingProblemsSolved: 32,
        aptitudeScore: 280,
        aptitudeTestsTaken: 9,
        currentStreak: 12,
      },
    },
    {
      _id: '60d5ecb8b5c9c614b8e8b003', // matches studentToken userId
      firstName: 'Rohan',
      lastName: 'Verma',
      email: 'rohan@nit.ac.in',
      rollNumber: '23CS03',
      role: 'STUDENT',
      classId: '60d5ecb8b5c9c614b8e8b888',
      institutionId: { name: 'NIT Surat', code: 'nit-surat' },
      departmentId: { name: 'CSE', code: 'CSE' },
      metrics: {
        totalPoints: 720,
        codingScore: 450,
        codingProblemsSolved: 20,
        aptitudeScore: 220,
        aptitudeTestsTaken: 8,
        currentStreak: 7,
      },
    },
  ];

  describe('GET /api/v1/leaderboards (Global Scope)', () => {
    it('should return global ranked students with default OVERALL metric', async () => {
      vi.spyOn(User, 'countDocuments').mockResolvedValue(3 as any);

      vi.spyOn(User, 'find').mockReturnValue({
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        populate: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue(mockStudents),
      } as any);

      const res = await request(app).get('/api/v1/leaderboards?scope=GLOBAL');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.scope).toBe('GLOBAL');
      expect(res.body.data.metric).toBe('OVERALL');
      expect(res.body.data.entries).toHaveLength(3);
      expect(res.body.data.entries[0].rank).toBe(1);
      expect(res.body.data.entries[0].name).toBe('Aarav Patel');
      expect(res.body.data.entries[0].score).toBe(1250);
    });

    it('should calculate personal myRank for authenticated student', async () => {
      vi.spyOn(User, 'countDocuments').mockResolvedValue(3 as any);

      vi.spyOn(User, 'find').mockReturnValue({
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        populate: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue(mockStudents),
      } as any);

      vi.spyOn(User, 'findById').mockReturnValue({
        lean: vi.fn().mockResolvedValue(mockStudents[2]),
      } as any);

      const res = await request(app)
        .get('/api/v1/leaderboards?scope=GLOBAL')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.myRank).toBeDefined();
      expect(res.body.data.myRank.rank).toBe(3);
      expect(res.body.data.myRank.score).toBe(720);
    });
  });

  describe('GET /api/v1/leaderboards (Scope Validation)', () => {
    it('should reject unauthenticated request for INSTITUTION scope without institution ID', async () => {
      const res = await request(app).get('/api/v1/leaderboards?scope=INSTITUTION');
      expect(res.status).toBe(400);
      expect(res.body.error.message).toContain('active institution ID');
    });

    it('should allow authenticated student to view INSTITUTION scope', async () => {
      vi.spyOn(User, 'countDocuments').mockResolvedValue(2 as any);
      vi.spyOn(User, 'find').mockReturnValue({
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        populate: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue([mockStudents[0], mockStudents[1]]),
      } as any);

      const res = await request(app)
        .get('/api/v1/leaderboards?scope=INSTITUTION')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.scope).toBe('INSTITUTION');
    });

    it('should allow authenticated student to view CLASS scope with assigned classId', async () => {
      vi.spyOn(User, 'findById').mockReturnValue({
        select: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue({
          classId: '60d5ecb8b5c9c614b8e8b888',
          institutionId: '60d5ecb8b5c9c614b8e8b999',
        }),
      } as any);

      vi.spyOn(User, 'countDocuments').mockResolvedValue(1 as any);
      vi.spyOn(User, 'find').mockReturnValue({
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        populate: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue([mockStudents[2]]),
      } as any);

      const res = await request(app)
        .get('/api/v1/leaderboards?scope=CLASS')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.scope).toBe('CLASS');
    });
  });

  describe('GET /api/v1/leaderboards (Metrics & Search)', () => {
    it('should accept CODING metric and return coding scores', async () => {
      vi.spyOn(User, 'countDocuments').mockResolvedValue(1 as any);

      vi.spyOn(User, 'find').mockReturnValue({
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        populate: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue([mockStudents[0]]),
      } as any);

      const res = await request(app).get('/api/v1/leaderboards?metric=CODING');

      expect(res.status).toBe(200);
      expect(res.body.data.metric).toBe('CODING');
      expect(res.body.data.entries[0].score).toBe(800); // coding score
    });

    it('should accept STREAK metric and return current streaks', async () => {
      vi.spyOn(User, 'countDocuments').mockResolvedValue(1 as any);

      vi.spyOn(User, 'find').mockReturnValue({
        sort: vi.fn().mockReturnThis(),
        skip: vi.fn().mockReturnThis(),
        limit: vi.fn().mockReturnThis(),
        populate: vi.fn().mockReturnThis(),
        lean: vi.fn().mockResolvedValue([mockStudents[0]]),
      } as any);

      const res = await request(app).get('/api/v1/leaderboards?metric=STREAK');

      expect(res.status).toBe(200);
      expect(res.body.data.metric).toBe('STREAK');
      expect(res.body.data.entries[0].score).toBe(18); // streak days
    });
  });
});
