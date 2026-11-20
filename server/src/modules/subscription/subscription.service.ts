import { Types } from 'mongoose';
import {
  Subscription,
  ISubscription,
  SubscriptionTier,
  BillingCycle,
} from './subscription.model';
import { User } from '../user/user.model';
import { NotFoundError, ValidationError } from '../../core/utils/appError';

export class SubscriptionService {
  static async getSubscription(institutionId: string): Promise<ISubscription> {
    if (!Types.ObjectId.isValid(institutionId)) {
      throw new ValidationError('Invalid institution ID format');
    }

    const instId = new Types.ObjectId(institutionId);
    let sub = await Subscription.findOne({ institutionId: instId });

    if (!sub) {
      // Auto-provision standard campus subscription for tenant
      sub = new Subscription({
        institutionId: instId,
        tier: 'STANDARD_CAMPUS',
        status: 'ACTIVE',
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        seatLimit: 500,
        activeSeatsUsed: 0,
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
            invoiceNumber: `INV-${Date.now().toString().slice(-6)}`,
            amount: 250000,
            currency: 'INR',
            status: 'PAID',
            issuedAt: new Date(),
            paidAt: new Date(),
          },
        ],
      });
      await sub.save();
    }

    // Refresh activeSeatsUsed count from real active students count in institution
    const realStudentCount = await User.countDocuments({
      institutionId: instId,
      role: 'STUDENT',
      status: 'ACTIVE',
    });

    if (sub.activeSeatsUsed !== realStudentCount) {
      sub.activeSeatsUsed = realStudentCount;
      await sub.save();
    }

    return sub;
  }

  static async checkSeatAvailability(institutionId: string, additionalSeats: number = 1): Promise<boolean> {
    const sub = await this.getSubscription(institutionId);

    if (sub.status !== 'ACTIVE') {
      throw new ValidationError(`Institutional subscription is ${sub.status}. Please renew your plan.`);
    }

    // Enterprise unlimited seats (seatLimit === 0)
    if (sub.tier === 'ENTERPRISE_UNIVERSITY' && sub.seatLimit === 0) {
      return true;
    }

    if (sub.activeSeatsUsed + additionalSeats > sub.seatLimit) {
      throw new ValidationError(
        `Seat limit exceeded: Cannot enroll ${additionalSeats} student(s). Allocated seats: ${sub.activeSeatsUsed}/${sub.seatLimit}. Please upgrade your institutional tier.`
      );
    }

    return true;
  }

  static async incrementActiveSeats(institutionId: string, count: number = 1): Promise<void> {
    const instId = new Types.ObjectId(institutionId);
    await Subscription.updateOne(
      { institutionId: instId },
      { $inc: { activeSeatsUsed: count } }
    );
  }

  static async upgradeSubscription(
    institutionId: string,
    tier: SubscriptionTier,
    billingCycle: BillingCycle = 'ANNUAL',
    additionalSeats: number = 0
  ): Promise<ISubscription> {
    const sub = await this.getSubscription(institutionId);

    sub.tier = tier;
    sub.billingCycle = billingCycle;
    sub.status = 'ACTIVE';

    if (tier === 'FREE_TRIAL') {
      sub.seatLimit = 50;
      sub.pricing = { amount: 0, currency: 'INR' };
      sub.currentPeriodEnd = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
      sub.features = {
        maxConcurrentAssessments: 2,
        customBranding: false,
        dedicatedSandboxCluster: false,
        campusDrivesEnabled: false,
      };
    } else if (tier === 'STANDARD_CAMPUS') {
      sub.seatLimit = Math.max(500, sub.seatLimit + additionalSeats);
      sub.pricing = {
        amount: billingCycle === 'ANNUAL' ? 250000 : 25000,
        currency: 'INR',
      };
      sub.currentPeriodEnd = new Date(
        Date.now() + (billingCycle === 'ANNUAL' ? 365 : 30) * 24 * 60 * 60 * 1000
      );
      sub.features = {
        maxConcurrentAssessments: 10,
        customBranding: true,
        dedicatedSandboxCluster: false,
        campusDrivesEnabled: true,
      };
    } else if (tier === 'ENTERPRISE_UNIVERSITY') {
      sub.seatLimit = 0; // Unlimited
      sub.pricing = {
        amount: billingCycle === 'ANNUAL' ? 600000 : 60000,
        currency: 'INR',
      };
      sub.currentPeriodEnd = new Date(
        Date.now() + (billingCycle === 'ANNUAL' ? 365 : 30) * 24 * 60 * 60 * 1000
      );
      sub.features = {
        maxConcurrentAssessments: 50,
        customBranding: true,
        dedicatedSandboxCluster: true,
        campusDrivesEnabled: true,
      };
    }

    // Generate invoice
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
    sub.invoices.push({
      invoiceNumber,
      amount: sub.pricing.amount,
      currency: sub.pricing.currency,
      status: 'PAID',
      issuedAt: new Date(),
      paidAt: new Date(),
    });

    await sub.save();
    return sub;
  }

  static async getInvoices(institutionId: string): Promise<any[]> {
    const sub = await this.getSubscription(institutionId);
    return sub.invoices || [];
  }

  static async getAdminTelemetry(): Promise<any> {
    const allSubs = await Subscription.find({ bypassTenantFilter: true }).lean();

    let mrr = 0;
    let arr = 0;
    let totalSeatsUtilized = 0;
    let totalCapacity = 0;

    const tierBreakdown = {
      FREE_TRIAL: 0,
      STANDARD_CAMPUS: 0,
      ENTERPRISE_UNIVERSITY: 0,
    };

    allSubs.forEach((s) => {
      if (s.status === 'ACTIVE') {
        const annualPrice = s.billingCycle === 'ANNUAL' ? s.pricing?.amount || 0 : (s.pricing?.amount || 0) * 12;
        arr += annualPrice;
        mrr += Math.round(annualPrice / 12);
      }

      totalSeatsUtilized += s.activeSeatsUsed || 0;
      totalCapacity += s.seatLimit || 0;

      if (tierBreakdown[s.tier] !== undefined) {
        tierBreakdown[s.tier]++;
      }
    });

    return {
      totalSubscribedColleges: allSubs.length,
      monthlyRecurringRevenue: mrr,
      annualRecurringRevenue: arr,
      totalSeatsUtilized,
      totalSeatCapacity: totalCapacity,
      tierBreakdown,
      subscriptions: allSubs,
    };
  }

  static async adminAdjustSeats(subscriptionId: string, seatLimit: number): Promise<ISubscription> {
    if (!Types.ObjectId.isValid(subscriptionId)) {
      throw new ValidationError('Invalid subscription ID format');
    }

    const sub = await Subscription.findById(subscriptionId);
    if (!sub) {
      throw new NotFoundError('Subscription not found');
    }

    sub.seatLimit = seatLimit;
    await sub.save();
    return sub;
  }
}
