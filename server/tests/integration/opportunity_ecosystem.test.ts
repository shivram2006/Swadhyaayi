import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { Opportunity, JobApplication } from '../../src/modules/opportunity/opportunity.model';
import { User } from '../../src/modules/user/user.model';
import { Batch } from '../../src/modules/tenant/tenant.model';

describe('Jobs & Internships Portal API Integration Tests', () => {
  const app = createApp();

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const placementOfficerToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b005',
    role: 'PLACEMENT_OFFICER',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const mockOpportunity = {
    _id: '60d5ecb8b5c9c614b8e8bc01',
    title: 'Software Development Engineer 1',
    company: {
      name: 'Google',
      logoUrl: '',
      website: 'https://google.com',
      industry: 'Internet & Technology',
    },
    type: 'FULL_TIME',
    workMode: 'HYBRID',
    location: 'Bengaluru, India',
    salary: { min: 20, max: 28, currency: 'INR', period: 'LPA' },
    requirements: {
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      minCgpa: 7.5,
      allowedBatches: ['2025', '2026'],
    },
    description: 'Design and develop cloud services.',
    applyUrl: 'https://careers.google.com',
    source: 'CAMPUS_DRIVE',
    status: 'ACTIVE',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockApplication = {
    _id: '60d5ecb8b5c9c614b8e8bd01',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
    userId: '60d5ecb8b5c9c614b8e8b003',
    opportunityId: '60d5ecb8b5c9c614b8e8bc01',
    stage: 'APPLIED',
    appliedDate: new Date(),
    stageHistory: [{ stage: 'APPLIED', timestamp: new Date(), notes: 'Applied via Swadhyayi' }],
    notes: 'Campus drive round 1',
    save: vi.fn().mockResolvedValue(true),
  };

  describe('GET /api/v1/opportunities', () => {
    it('should require authentication token (returns 401)', async () => {
      const res = await request(app).get('/api/v1/opportunities');
      expect(res.status).toBe(401);
    });

    it('should return opportunities enriched with candidate match scoring', async () => {
      vi.spyOn(Opportunity, 'find').mockReturnValue({
        sort: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue([mockOpportunity]),
        }),
      } as any);

      vi.spyOn(User, 'findById').mockReturnValue({
        lean: vi.fn().mockResolvedValue({
          _id: '60d5ecb8b5c9c614b8e8b003',
          institutionId: '60d5ecb8b5c9c614b8e8b999',
          batchId: '60d5ecb8b5c9c614b8e8bb01',
          profile: {
            skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
            cgpa: 8.5,
          },
          metrics: { codingProblemsSolved: 40 },
        }),
      } as any);

      vi.spyOn(Batch, 'findById').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue({ graduationYear: '2026' }),
        }),
      } as any);

      vi.spyOn(JobApplication, 'find').mockReturnValue({
        select: vi.fn().mockReturnValue({
          lean: vi.fn().mockResolvedValue([]),
        }),
      } as any);

      const res = await request(app)
        .get('/api/v1/opportunities')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].matchDetails).toBeDefined();
      expect(res.body.data[0].matchDetails.isEligible).toBe(true);
      expect(res.body.data[0].matchDetails.matchScore).toBeGreaterThanOrEqual(90);
    });
  });

  describe('POST /api/v1/opportunities', () => {
    it('should allow PLACEMENT_OFFICER to create a campus placement drive', async () => {
      vi.spyOn(Opportunity.prototype, 'save').mockResolvedValue(mockOpportunity as any);

      const payload = {
        title: 'Cloud Associate Engineer',
        company: { name: 'Microsoft', logoUrl: '', website: 'https://microsoft.com', industry: 'Cloud' },
        type: 'FULL_TIME',
        workMode: 'HYBRID',
        location: 'Bengaluru, India',
        salary: { min: 18, max: 24, currency: 'INR', period: 'LPA' },
        requirements: {
          skills: ['Azure', 'C#', 'SQL'],
          minCgpa: 7.0,
          allowedBatches: ['2026'],
        },
        description: 'Campus placement drive for Microsoft Azure team.',
        applyUrl: 'https://careers.microsoft.com',
        source: 'CAMPUS_DRIVE',
      };

      const res = await request(app)
        .post('/api/v1/opportunities')
        .set('Authorization', `Bearer ${placementOfficerToken}`)
        .send(payload);

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.title).toBe('Cloud Associate Engineer');
    });

    it('should forbid STUDENT from creating an opportunity (returns 403 Forbidden)', async () => {
      const res = await request(app)
        .post('/api/v1/opportunities')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({ title: 'Illegal Job' });

      expect(res.status).toBe(403);
    });
  });

  describe('Applications Pipeline Endpoints', () => {
    it('POST /api/v1/applications: should allow student to apply or save an opportunity', async () => {
      vi.spyOn(Opportunity, 'findById').mockResolvedValue(mockOpportunity as any);
      vi.spyOn(JobApplication, 'findOne').mockResolvedValue(null);
      vi.spyOn(JobApplication.prototype, 'save').mockResolvedValue(mockApplication as any);

      const res = await request(app)
        .post('/api/v1/applications')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          opportunityId: '60d5ecb8b5c9c614b8e8bc01',
          stage: 'APPLIED',
          notes: 'Submitted resume via campus portal',
        });

      expect(res.status).toBe(201);
      expect(res.body.success).toBe(true);
      expect(res.body.data.stage).toBe('APPLIED');
    });

    it('GET /api/v1/applications: should return student applications list', async () => {
      vi.spyOn(JobApplication, 'find').mockReturnValue({
        populate: vi.fn().mockReturnValue({
          sort: vi.fn().mockReturnValue({
            lean: vi.fn().mockResolvedValue([mockApplication]),
          }),
        }),
      } as any);

      const res = await request(app)
        .get('/api/v1/applications')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
    });

    it('PATCH /api/v1/applications/:id/stage: should update stage and append to stageHistory', async () => {
      const appDoc = {
        ...mockApplication,
        save: vi.fn().mockResolvedValue(true),
        userId: { toString: () => '60d5ecb8b5c9c614b8e8b003' },
      };
      vi.spyOn(JobApplication, 'findById').mockResolvedValue(appDoc as any);

      const res = await request(app)
        .patch('/api/v1/applications/60d5ecb8b5c9c614b8e8bd01/stage')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({
          stage: 'OA_SCHEDULED',
          notes: 'Test scheduled on HackerEarth for Saturday 10 AM',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(appDoc.save).toHaveBeenCalled();
    });

    it('DELETE /api/v1/applications/:id: should allow student to withdraw application', async () => {
      const appDoc = {
        ...mockApplication,
        userId: { toString: () => '60d5ecb8b5c9c614b8e8b003' },
      };
      vi.spyOn(JobApplication, 'findById').mockResolvedValue(appDoc as any);
      vi.spyOn(JobApplication, 'deleteOne').mockResolvedValue({ deletedCount: 1 } as any);

      const res = await request(app)
        .delete('/api/v1/applications/60d5ecb8b5c9c614b8e8bd01')
        .set('Authorization', `Bearer ${studentToken}`);

      expect(res.status).toBe(200);
      expect(res.body.data.message).toBe('Application deleted successfully');
    });

    it('GET /api/v1/applications/analytics: should allow PLACEMENT_OFFICER to view placement statistics', async () => {
      vi.spyOn(Opportunity, 'countDocuments').mockResolvedValue(15 as any);
      vi.spyOn(JobApplication, 'find').mockReturnValue({
        lean: vi.fn().mockResolvedValue([
          { stage: 'OFFERED', offerDetails: { ctc: 24 } },
          { stage: 'OFFERED', offerDetails: { ctc: 18 } },
          { stage: 'INTERVIEW' },
          { stage: 'APPLIED' },
        ]),
      } as any);

      const res = await request(app)
        .get('/api/v1/applications/analytics')
        .set('Authorization', `Bearer ${placementOfficerToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.totalOffers).toBe(2);
      expect(res.body.data.averageCtc).toBe(21);
      expect(res.body.data.highestCtc).toBe(24);
      expect(res.body.data.stageFunnel.OFFERED).toBe(2);
    });
  });
});
