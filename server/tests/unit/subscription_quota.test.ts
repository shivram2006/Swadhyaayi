import { describe, it, expect, vi } from 'vitest';
import { SubscriptionService } from '../../src/modules/subscription/subscription.service';
import { Subscription } from '../../src/modules/subscription/subscription.model';
import { User } from '../../src/modules/user/user.model';

describe('SaaS Subscription & License Quota Unit Tests', () => {
  const institutionId = '60d5ecb8b5c9c614b8e8b999';

  it('should allow seat allocation when active seats are below seat limit', async () => {
    vi.spyOn(Subscription, 'findOne').mockResolvedValue({
      institutionId,
      tier: 'STANDARD_CAMPUS',
      status: 'ACTIVE',
      seatLimit: 500,
      activeSeatsUsed: 250,
      save: vi.fn().mockResolvedValue(true),
    } as any);

    vi.spyOn(User, 'countDocuments').mockResolvedValue(250 as any);

    const isAvailable = await SubscriptionService.checkSeatAvailability(institutionId, 10);
    expect(isAvailable).toBe(true);
  });

  it('should reject enrollment when requested seats exceed institutional seat limit', async () => {
    vi.spyOn(Subscription, 'findOne').mockResolvedValue({
      institutionId,
      tier: 'STANDARD_CAMPUS',
      status: 'ACTIVE',
      seatLimit: 500,
      activeSeatsUsed: 495,
      save: vi.fn().mockResolvedValue(true),
    } as any);

    vi.spyOn(User, 'countDocuments').mockResolvedValue(495 as any);

    await expect(SubscriptionService.checkSeatAvailability(institutionId, 10)).rejects.toThrow(
      /Seat limit exceeded/
    );
  });

  it('should allow unlimited seats for ENTERPRISE_UNIVERSITY tier (seatLimit = 0)', async () => {
    vi.spyOn(Subscription, 'findOne').mockResolvedValue({
      institutionId,
      tier: 'ENTERPRISE_UNIVERSITY',
      status: 'ACTIVE',
      seatLimit: 0,
      activeSeatsUsed: 5000,
      save: vi.fn().mockResolvedValue(true),
    } as any);

    vi.spyOn(User, 'countDocuments').mockResolvedValue(5000 as any);

    const isAvailable = await SubscriptionService.checkSeatAvailability(institutionId, 250);
    expect(isAvailable).toBe(true);
  });

  it('should reject seat allocation when subscription is EXPIRED or PAST_DUE', async () => {
    vi.spyOn(Subscription, 'findOne').mockResolvedValue({
      institutionId,
      tier: 'STANDARD_CAMPUS',
      status: 'EXPIRED',
      seatLimit: 500,
      activeSeatsUsed: 100,
      save: vi.fn().mockResolvedValue(true),
    } as any);

    vi.spyOn(User, 'countDocuments').mockResolvedValue(100 as any);

    await expect(SubscriptionService.checkSeatAvailability(institutionId, 1)).rejects.toThrow(
      /Institutional subscription is EXPIRED/
    );
  });

  it('should correctly configure features, pricing, and invoices upon upgrading to ENTERPRISE_UNIVERSITY', async () => {
    const existingDoc = {
      institutionId,
      tier: 'STANDARD_CAMPUS',
      status: 'ACTIVE',
      seatLimit: 500,
      activeSeatsUsed: 120,
      pricing: { amount: 250000, currency: 'INR' },
      features: {},
      invoices: [],
      save: vi.fn().mockResolvedValue(true),
    };

    vi.spyOn(Subscription, 'findOne').mockResolvedValue(existingDoc as any);
    vi.spyOn(User, 'countDocuments').mockResolvedValue(120 as any);

    const upgraded = await SubscriptionService.upgradeSubscription(
      institutionId,
      'ENTERPRISE_UNIVERSITY',
      'ANNUAL',
      0
    );

    expect(upgraded.tier).toBe('ENTERPRISE_UNIVERSITY');
    expect(upgraded.seatLimit).toBe(0); // Unlimited
    expect(upgraded.pricing.amount).toBe(600000);
    expect(upgraded.features.maxConcurrentAssessments).toBe(50);
    expect(upgraded.features.dedicatedSandboxCluster).toBe(true);
    expect(upgraded.invoices.length).toBe(1);
    expect(upgraded.invoices[0].amount).toBe(600000);
  });
});
