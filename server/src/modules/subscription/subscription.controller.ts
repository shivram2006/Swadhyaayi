import { Request, Response, NextFunction } from 'express';
import { SubscriptionService } from './subscription.service';
import { User } from '../user/user.model';
import { sendSuccess } from '../../core/utils/response';
import {
  upgradeSubscriptionSchema,
  adjustSeatsSchema,
  billingWebhookSchema,
} from './subscription.schema';
import { ValidationError } from '../../core/utils/appError';

export class SubscriptionController {
  static async getCurrentSubscription(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const subscription = await SubscriptionService.getSubscription(institutionId);
      sendSuccess(res, subscription);
    } catch (error) {
      next(error);
    }
  }

  static async upgradeSubscription(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const parsed = upgradeSubscriptionSchema.parse(req.body);
      const upgraded = await SubscriptionService.upgradeSubscription(
        institutionId,
        parsed.tier,
        parsed.billingCycle,
        parsed.additionalSeats
      );
      sendSuccess(res, upgraded);
    } catch (error) {
      next(error);
    }
  }

  static async getInvoices(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const invoices = await SubscriptionService.getInvoices(institutionId);
      sendSuccess(res, invoices);
    } catch (error) {
      next(error);
    }
  }

  static async getAdminTelemetry(_req: Request, res: Response, next: NextFunction) {
    try {
      const telemetry = await SubscriptionService.getAdminTelemetry();
      sendSuccess(res, telemetry);
    } catch (error) {
      next(error);
    }
  }

  static async adminAdjustSeats(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const parsed = adjustSeatsSchema.parse(req.body);
      const adjusted = await SubscriptionService.adminAdjustSeats(id, parsed.seatLimit);
      sendSuccess(res, adjusted);
    } catch (error) {
      next(error);
    }
  }

  static async handleWebhook(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = billingWebhookSchema.parse(req.body);
      // In production, verify Stripe/Razorpay signature
      sendSuccess(res, { received: true, event: parsed.event });
    } catch (error) {
      next(error);
    }
  }

  static async activateStudentSubscription(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();
      if (!userId) {
        throw new ValidationError('Student authentication required');
      }

      const plan = typeof req.body?.plan === 'string' && req.body.plan.trim()
        ? req.body.plan.trim()
        : 'PRO_ANNUAL';

      const updated = await User.findByIdAndUpdate(
        userId,
        {
          isSubscribed: true,
          subscriptionPlan: plan,
          subscribedAt: new Date(),
        },
        { new: true }
      ).select('isSubscribed subscriptionPlan subscribedAt');

      sendSuccess(res, {
        isSubscribed: !!updated?.isSubscribed,
        subscriptionPlan: updated?.subscriptionPlan,
        subscribedAt: updated?.subscribedAt,
      });
    } catch (error) {
      next(error);
    }
  }
}
