import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { Roadmap, UserRoadmapProgress } from '../../src/modules/roadmap/roadmap.model';

describe('Industry Roadmaps API & RBAC Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const superAdminToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b001',
    role: 'SUPER_ADMIN',
  });

  const sampleRoadmap = {
    _id: '60d5ecb8b5c9c614b8e8b101',
    slug: 'mern-stack',
    title: 'MERN Stack Development',
    category: 'Software Engineering',
    description: 'Master MongoDB, Express.js, React, and Node.js for building scalable full-stack applications.',
    version: 1,
    estimatedHours: 140,
    prerequisites: ['JavaScript', 'HTML/CSS'],
    icon: 'Layers',
    stages: [
      {
        stageId: 's1',
        title: 'Node.js & Express Fundamentals',
        order: 1,
        topics: [
          { topicId: 't1', title: 'Event Loop & Non-Blocking I/O', subtopics: [], toolsAndTechnologies: [], industrySkills: [], recommendedResources: [] },
          { topicId: 't2', title: 'Express Middleware & REST APIs', subtopics: [], toolsAndTechnologies: [], industrySkills: [], recommendedResources: [] },
        ],
        practicalAssignments: [],
        capstoneProjects: [
          { id: 'p1', title: 'Placement Management SaaS', description: 'Full stack project', deliverables: [] },
        ],
        interviewPreparation: [],
      },
    ],
    isActive: true,
  };

  describe('GET /api/v1/roadmaps', () => {
    it('should return catalog of roadmaps (accessible publicly)', async () => {
      vi.spyOn(Roadmap, 'find').mockReturnValue({
        sort: vi.fn().mockResolvedValue([sampleRoadmap]),
      } as any);

      const res = await request(app).get('/api/v1/roadmaps');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].slug).toBe('mern-stack');
      expect(res.body.data[0].totalTopics).toBe(2);
    });

    it('should accept category filtering', async () => {
      vi.spyOn(Roadmap, 'find').mockReturnValue({
        sort: vi.fn().mockResolvedValue([sampleRoadmap]),
      } as any);

      const res = await request(app).get('/api/v1/roadmaps?category=Software Engineering');

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
    });
  });

  describe('GET /api/v1/roadmaps/:slug', () => {
    it('should return full roadmap details with stages and student progress', async () => {
      vi.spyOn(Roadmap, 'findOne').mockResolvedValue(sampleRoadmap as any);
      vi.spyOn(UserRoadmapProgress, 'findOne').mockResolvedValue(null);

      const res = await request(app)
        .get('/api/v1/roadmaps/mern-stack')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.roadmap.slug).toBe('mern-stack');
      expect(res.body.data.summary.totalTopics).toBe(2);
      expect(res.body.data.progress.enrolled).toBe(false);
    });

    it('should return 404 for unknown roadmap slug', async () => {
      vi.spyOn(Roadmap, 'findOne').mockResolvedValue(null);

      const res = await request(app).get('/api/v1/roadmaps/non-existent-track');

      expect(res.status).toBe(404);
      expect(res.body.error.code).toBe('NOT_FOUND');
    });
  });

  describe('POST /api/v1/roadmaps/:slug/enroll', () => {
    it('should reject unauthenticated request with 401', async () => {
      const res = await request(app).post('/api/v1/roadmaps/mern-stack/enroll');
      expect(res.status).toBe(401);
    });

    it('should enroll authenticated student and return progress object', async () => {
      vi.spyOn(Roadmap, 'findOne').mockResolvedValue(sampleRoadmap as any);
      vi.spyOn(UserRoadmapProgress, 'findOne').mockResolvedValue(null);
      vi.spyOn(UserRoadmapProgress, 'create').mockResolvedValue({
        roadmapSlug: 'mern-stack',
        progressPercentage: 0,
        completedTopicIds: [],
        isCompleted: false,
      } as any);

      const res = await request(app)
        .post('/api/v1/roadmaps/mern-stack/enroll')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(201);
      expect(res.body.data.roadmapSlug).toBe('mern-stack');
      expect(res.body.data.progressPercentage).toBe(0);
    });
  });

  describe('POST /api/v1/roadmaps/:slug/progress', () => {
    it('should update topic progress and recalculate completion percentage', async () => {
      vi.spyOn(Roadmap, 'findOne').mockResolvedValue(sampleRoadmap as any);

      const mockProgressDoc: any = {
        roadmapSlug: 'mern-stack',
        completedTopicIds: [],
        completedAssignmentIds: [],
        completedProjectIds: [],
        progressPercentage: 0,
        save: vi.fn().mockResolvedValue(true),
      };

      vi.spyOn(UserRoadmapProgress, 'findOne').mockResolvedValue(mockProgressDoc);

      const res = await request(app)
        .post('/api/v1/roadmaps/mern-stack/progress')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          itemType: 'topic',
          itemId: 't1',
          completed: true,
        });

      expect(res.status).toBe(200);
      expect(mockProgressDoc.completedTopicIds).toContain('t1');
      // 1 of 2 topics = 50%
      expect(mockProgressDoc.progressPercentage).toBe(50);
      expect(mockProgressDoc.isCompleted).toBe(false);
    });
  });

  describe('RBAC Protection on Roadmap Management', () => {
    it('should forbid STUDENT from creating a roadmap (returns 403)', async () => {
      const res = await request(app)
        .post('/api/v1/roadmaps')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          slug: 'hack-track',
          title: 'Hacked Roadmap',
        });

      expect(res.status).toBe(403);
      expect(res.body.error.code).toBe('FORBIDDEN');
    });

    it('should allow SUPER_ADMIN to create or update a roadmap', async () => {
      vi.spyOn(Roadmap, 'findOne').mockResolvedValue(null);
      vi.spyOn(Roadmap, 'create').mockResolvedValue({
        slug: 'quantum-computing',
        title: 'Quantum Computing',
      } as any);

      const res = await request(app)
        .post('/api/v1/roadmaps')
        .set('Authorization', `Bearer ${superAdminToken}`)
        .send({
          slug: 'quantum-computing',
          title: 'Quantum Computing',
          category: 'Physics & Computing',
          description: 'Qubits, quantum circuits and algorithms.',
          stages: [
            {
              stageId: 'qs1',
              title: 'Qubits',
              order: 1,
              topics: [{ topicId: 'qt1', title: 'Superposition' }],
            },
          ],
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
    });
  });
});
