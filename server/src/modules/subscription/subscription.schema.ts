import { z } from 'zod';

export const upgradeSubscriptionSchema = z.object({
  tier: z.enum(['FREE_TRIAL', 'STANDARD_CAMPUS', 'ENTERPRISE_UNIVERSITY']),
  billingCycle: z.enum(['MONTHLY', 'ANNUAL']).default('ANNUAL'),
  additionalSeats: z.number().int().nonnegative().optional().default(0),
});

export const adjustSeatsSchema = z.object({
  seatLimit: z.number().int().nonnegative(),
});

export const billingWebhookSchema = z.object({
  event: z.string(),
  subscriptionId: z.string().optional(),
  institutionId: z.string().optional(),
  amount: z.number().optional(),
  currency: z.string().optional().default('INR'),
});
