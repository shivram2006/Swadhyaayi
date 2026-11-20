import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantFilter(this: any) {
  if (this.getOptions()?.bypassTenantFilter) return;
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({ institutionId: new Types.ObjectId(context.tenantId) });
  }
}

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
  issuedAt: Date;
  paidAt?: Date;
  pdfUrl?: string;
}

export interface ISubscription extends Document {
  institutionId: Types.ObjectId;
  tier: SubscriptionTier;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  seatLimit: number; // 0 = unlimited for Enterprise
  activeSeatsUsed: number;
  billingCycle: BillingCycle;
  pricing: {
    amount: number;
    currency: string;
  };
  features: ISubscriptionFeatures;
  paymentGateway?: {
    provider: 'RAZORPAY' | 'STRIPE' | 'OFFLINE_INVOICE';
    subscriptionId?: string;
    customerId?: string;
  };
  invoices: ISubscriptionInvoice[];
  createdAt: Date;
  updatedAt: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    institutionId: {
      type: Schema.Types.ObjectId,
      ref: 'Institution',
      required: true,
      unique: true,
      index: true,
    },
    tier: {
      type: String,
      enum: ['FREE_TRIAL', 'STANDARD_CAMPUS', 'ENTERPRISE_UNIVERSITY'],
      default: 'STANDARD_CAMPUS',
      index: true,
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'PAST_DUE', 'EXPIRED', 'CANCELLED'],
      default: 'ACTIVE',
      index: true,
    },
    currentPeriodStart: {
      type: Date,
      default: Date.now,
    },
    currentPeriodEnd: {
      type: Date,
      default: () => new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // default 1 year
    },
    seatLimit: {
      type: Number,
      default: 500, // Standard campus default
    },
    activeSeatsUsed: {
      type: Number,
      default: 0,
    },
    billingCycle: {
      type: String,
      enum: ['MONTHLY', 'ANNUAL'],
      default: 'ANNUAL',
    },
    pricing: {
      amount: { type: Number, default: 250000 }, // e.g. ₹2.5L / year
      currency: { type: String, default: 'INR' },
    },
    features: {
      maxConcurrentAssessments: { type: Number, default: 10 },
      customBranding: { type: Boolean, default: false },
      dedicatedSandboxCluster: { type: Boolean, default: false },
      campusDrivesEnabled: { type: Boolean, default: true },
    },
    paymentGateway: {
      provider: { type: String, enum: ['RAZORPAY', 'STRIPE', 'OFFLINE_INVOICE'], default: 'RAZORPAY' },
      subscriptionId: { type: String },
      customerId: { type: String },
    },
    invoices: [
      {
        invoiceNumber: { type: String, required: true },
        amount: { type: Number, required: true },
        currency: { type: String, default: 'INR' },
        status: { type: String, enum: ['PAID', 'PENDING', 'FAILED'], default: 'PAID' },
        issuedAt: { type: Date, default: Date.now },
        paidAt: { type: Date, default: Date.now },
        pdfUrl: { type: String, default: '' },
      },
    ],
  },
  {
    timestamps: true,
  }
);

SubscriptionSchema.pre('find', applyTenantFilter);
SubscriptionSchema.pre('findOne', applyTenantFilter);
SubscriptionSchema.pre('countDocuments', applyTenantFilter);

export const Subscription = model<ISubscription>('Subscription', SubscriptionSchema);
