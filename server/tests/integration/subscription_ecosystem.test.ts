import { describe, it, expect, vi } from 'vitest';
import request from 'supertest';
import { createApp } from '../../src/app';
import { generateAccessToken } from '../../src/core/utils/jwt';
import { Subscription } from '../../src/modules/subscription/subscription.model';
import { User } from '../../src/modules/user/user.model';

describe('SaaS Subscriptions & License Management API Integration Tests', () => {
  const app = createApp();

  const adminToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b001',
    role: 'INSTITUTION_ADMIN',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const superAdminToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b000',
    role: 'SUPER_ADMIN',
  });

  const studentToken = generateAccessToken({
    userId: '60d5ecb8b5c9c614b8e8b003',
    role: 'STUDENT',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
  });

  const mockSub = {
    _id: '60d5ecb8b5c9c614b8e8be01',
    institutionId: '60d5ecb8b5c9c614b8e8b999',
    tier: 'STANDARD_CAMPUS',
    status: 'ACTIVE',
    seatLimit: 500,
    activeSeatsUsed: 120,
    billingCycle: 'ANNUAL',
    pricing: { amount: 250000, currency: 'INR' },
    features: {
      maxConcurrentAssessments: 10,
      customBranding: true,
      dedicatedSandboxCluster: false,
      campusDrivesEnabled: true,
    },
    invoices: [
      {
        invoiceNumber: 'INV-2026-001',
        amount: 250000,
        currency: 'INR',
        status: 'PAID',
        issuedAt: new Date(),
        paidAt: new Date(),
      },
    ],
    save: vi.fn().mockResolvedValue(true),
  };

  describe('GET /api/v1/subscriptions/current', () => {
    it('should require authentication (returns 401)', async () => {
      const res = await request(app).get('/api/v1/subscriptions/current');
      expect(res.status).toBe(401);
    });

    it('should return active institutional subscription for college admin', async () => {
      vi.spyOn(Subscription, 'findOne').mockResolvedValue(mockSub as any);
      vi.spyOn(User, 'countDocuments').mockResolvedValue(120 as any);

      const res = await request(app)
        .get('/api/v1/subscriptions/current')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.tier).toBe('STANDARD_CAMPUS');
      expect(res.body.data.seatLimit).toBe(500);
      expect(res.body.data.activeSeatsUsed).toBe(120);
    });
  });

  describe('POST /api/v1/subscriptions/upgrade', () => {
    it('should allow INSTITUTION_ADMIN to upgrade tier and generate invoice', async () => {
      vi.spyOn(Subscription, 'findOne').mockResolvedValue(mockSub as any);
      vi.spyOn(User, 'countDocuments').mockResolvedValue(120 as any);

      const res = await request(app)
        .post('/api/v1/subscriptions/upgrade')
        .set('Authorization', `Bearer ${adminToken}`)
        .send({
          tier: 'ENTERPRISE_UNIVERSITY',
          billingCycle: 'ANNUAL',
        });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(mockSub.save).toHaveBeenCalled();
    });

    it('should forbid STUDENT from upgrading institutional subscription (returns 403)', async () => {
      const res = await request(app)
        .post('/api/v1/subscriptions/upgrade')
        .set('Authorization', `Bearer ${studentToken}`)
        .send({ tier: 'ENTERPRISE_UNIVERSITY' });

      expect(res.status).toBe(403);
    });
  });

  describe('GET /api/v1/subscriptions/invoices', () => {
    it('should return institutional billing history', async () => {
      vi.spyOn(Subscription, 'findOne').mockResolvedValue(mockSub as any);
      vi.spyOn(User, 'countDocuments').mockResolvedValue(120 as any);

      const res = await request(app)
        .get('/api/v1/subscriptions/invoices')
        .set('Authorization', `Bearer ${adminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(Array.isArray(res.body.data)).toBe(true);
      expect(res.body.data[0].invoiceNumber).toBe('INV-2026-001');
    });
  });

  describe('Super Admin Command Telemetry', () => {
    it('GET /api/v1/subscriptions/admin/telemetry: should return platform-wide MRR & subscriptions', async () => {
      const telemetryDoc = {
        _id: '60d5ecb8b5c9c614b8e8be99',
        institutionId: '60d5ecb8b5c9c614b8e8b999',
        tier: 'STANDARD_CAMPUS',
        status: 'ACTIVE',
        seatLimit: 500,
        activeSeatsUsed: 120,
        billingCycle: 'ANNUAL',
        pricing: { amount: 250000, currency: 'INR' },
      };
      vi.spyOn(Subscription, 'find').mockReturnValue({
        lean: vi.fn().mockResolvedValue([telemetryDoc]),
      } as any);

      const res = await request(app)
        .get('/api/v1/subscriptions/admin/telemetry')
        .set('Authorization', `Bearer ${superAdminToken}`);

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(res.body.data.totalSubscribedColleges).toBe(1);
      expect(res.body.data.annualRecurringRevenue).toBe(250000);
      expect(res.body.data.tierBreakdown.STANDARD_CAMPUS).toBe(1);
    });

    it('PATCH /api/v1/subscriptions/admin/:id/seats: should adjust seat limit for college', async () => {
      const subDoc = {
        ...mockSub,
        save: vi.fn().mockResolvedValue(true),
      };
      vi.spyOn(Subscription, 'findById').mockResolvedValue(subDoc as any);

      const res = await request(app)
        .patch('/api/v1/subscriptions/admin/60d5ecb8b5c9c614b8e8be01/seats')
        .set('Authorization', `Bearer ${superAdminToken}`)
        .send({ seatLimit: 1200 });

      expect(res.status).toBe(200);
      expect(res.body.success).toBe(true);
      expect(subDoc.seatLimit).toBe(1200);
      expect(subDoc.save).toHaveBeenCalled();
    });
  });

  describe('POST /api/v1/subscriptions/webhook', () => {
    it('should acknowledge payment gateway webhook events', async () => {
      const res = await request(app)
        .post('/api/v1/subscriptions/webhook')
        .send({
          event: 'payment.captured',
          amount: 250000,
          currency: 'INR',
        });

      expect(res.status).toBe(200);
      expect(res.body.data.received).toBe(true);
      expect(res.body.data.event).toBe('payment.captured');
    });
  });
});
