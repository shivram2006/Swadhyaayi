export type SubscriptionTier = 'FREE_TRIAL' | 'STANDARD_CAMPUS' | 'ENTERPRISE_UNIVERSITY';
export type SubscriptionStatus = 'ACTIVE' | 'PAST_DUE' | 'EXPIRED' | 'CANCELLED';
export type BillingCycle = 'MONTHLY' | 'ANNUAL';

export interface ISubscriptionFeatures {
  maxConcurrentAssessments: number;
  customBranding: boolean;
  dedicatedSandboxCluster: boolean;
  campusDrivesEnabled: boolean;
}

export interface ISubscriptionInvoice {
  invoiceNumber: string;
  amount: number;
  currency: string;
  status: 'PAID' | 'PENDING' | 'FAILED';
  issuedAt: string;
  paidAt?: string;
  pdfUrl?: string;
}

export interface ISubscription {
  _id: string;
  institutionId: string;
  tier: SubscriptionTier;
  status: SubscriptionStatus;
  currentPeriodStart: string;
  currentPeriodEnd: string;
  seatLimit: number;
  activeSeatsUsed: number;
  billingCycle: BillingCycle;
  pricing: {
    amount: number;
    currency: string;
  };
  features: ISubscriptionFeatures;
  invoices: ISubscriptionInvoice[];
  createdAt: string;
  updatedAt: string;
}

export interface IAdminSubscriptionTelemetry {
  totalSubscribedColleges: number;
  monthlyRecurringRevenue: number;
  annualRecurringRevenue: number;
  totalSeatsUtilized: number;
  totalSeatCapacity: number;
  tierBreakdown: {
    FREE_TRIAL: number;
    STANDARD_CAMPUS: number;
    ENTERPRISE_UNIVERSITY: number;
  };
  subscriptions: ISubscription[];
}
