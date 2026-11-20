import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantOrGlobalFilter(this: any) {
  if (this.getOptions()?.bypassTenantFilter) return;
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    // Opportunities can be global (institutionId is null/undefined) OR specific to the tenant
    this.where({
      $or: [
        { institutionId: null },
        { institutionId: { $exists: false } },
        { institutionId: new Types.ObjectId(context.tenantId) },
      ],
    });
  }
}

function applyStrictTenantFilter(this: any) {
  if (this.getOptions()?.bypassTenantFilter) return;
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({ institutionId: new Types.ObjectId(context.tenantId) });
  }
}

export type OpportunityType = 'FULL_TIME' | 'INTERNSHIP' | 'CONTRACT';
export type WorkMode = 'REMOTE' | 'HYBRID' | 'ON_SITE';
export type OpportunitySource = 'CAMPUS_DRIVE' | 'VERIFIED_PARTNER' | 'LINKEDIN' | 'INTERNSHALA';
export type OpportunityStatus = 'ACTIVE' | 'EXPIRED' | 'CLOSED';
export type ApplicationStage = 'SAVED' | 'APPLIED' | 'OA_SCHEDULED' | 'INTERVIEW' | 'OFFERED' | 'REJECTED';

export interface IOpportunityCompany {
  name: string;
  logoUrl?: string;
  website?: string;
  industry?: string;
}

export interface IOpportunitySalary {
  min: number;
  max: number;
  currency: string;
  period: 'LPA' | 'PER_MONTH' | 'PER_HOUR';
}

export interface IOpportunityRequirements {
  skills: string[];
  minCgpa?: number;
  allowedBatches?: string[];
  allowedDepartments?: Types.ObjectId[];
}

export interface IOpportunity extends Document {
  institutionId?: Types.ObjectId; // null = global verified listing
  title: string;
  company: IOpportunityCompany;
  type: OpportunityType;
  workMode: WorkMode;
  location: string;
  salary: IOpportunitySalary;
  requirements: IOpportunityRequirements;
  description: string;
  applyUrl: string;
  source: OpportunitySource;
  deadline?: Date;
  status: OpportunityStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface IJobApplicationStageHistory {
  stage: ApplicationStage;
  timestamp: Date;
  notes?: string;
}

export interface IJobApplicationOfferDetails {
  ctc?: number;
  currency?: string;
  designation?: string;
  accepted?: boolean;
}

export interface IJobApplication extends Document {
  institutionId: Types.ObjectId;
  userId: Types.ObjectId;
  opportunityId: Types.ObjectId;
  resumeId?: Types.ObjectId;
  stage: ApplicationStage;
  appliedDate?: Date;
  stageHistory: IJobApplicationStageHistory[];
  interviewDate?: Date;
  offerDetails?: IJobApplicationOfferDetails;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const OpportunitySchema = new Schema<IOpportunity>(
  {
    institutionId: {
      type: Schema.Types.ObjectId,
      ref: 'Institution',
      required: false,
      index: true,
      default: null,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    company: {
      name: { type: String, required: true, trim: true },
      logoUrl: { type: String, default: '' },
      website: { type: String, default: '' },
      industry: { type: String, default: 'Information Technology' },
    },
    type: {
      type: String,
      enum: ['FULL_TIME', 'INTERNSHIP', 'CONTRACT'],
      default: 'FULL_TIME',
      index: true,
    },
    workMode: {
      type: String,
      enum: ['REMOTE', 'HYBRID', 'ON_SITE'],
      default: 'HYBRID',
      index: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
      default: 'Bengaluru, India',
    },
    salary: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
      currency: { type: String, default: 'INR' },
      period: { type: String, enum: ['LPA', 'PER_MONTH', 'PER_HOUR'], default: 'LPA' },
    },
    requirements: {
      skills: [{ type: String }],
      minCgpa: { type: Number, default: 0 },
      allowedBatches: [{ type: String }],
      allowedDepartments: [{ type: Schema.Types.ObjectId, ref: 'Department' }],
    },
    description: {
      type: String,
      required: true,
    },
    applyUrl: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      enum: ['CAMPUS_DRIVE', 'VERIFIED_PARTNER', 'LINKEDIN', 'INTERNSHALA'],
      default: 'VERIFIED_PARTNER',
      index: true,
    },
    deadline: {
      type: Date,
      required: false,
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'EXPIRED', 'CLOSED'],
      default: 'ACTIVE',
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

OpportunitySchema.pre('find', applyTenantOrGlobalFilter);
OpportunitySchema.pre('findOne', applyTenantOrGlobalFilter);
OpportunitySchema.pre('countDocuments', applyTenantOrGlobalFilter);

export const Opportunity = model<IOpportunity>('Opportunity', OpportunitySchema);

const JobApplicationSchema = new Schema<IJobApplication>(
  {
    institutionId: {
      type: Schema.Types.ObjectId,
      ref: 'Institution',
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    opportunityId: {
      type: Schema.Types.ObjectId,
      ref: 'Opportunity',
      required: true,
      index: true,
    },
    resumeId: {
      type: Schema.Types.ObjectId,
      ref: 'Resume',
      required: false,
    },
    stage: {
      type: String,
      enum: ['SAVED', 'APPLIED', 'OA_SCHEDULED', 'INTERVIEW', 'OFFERED', 'REJECTED'],
      default: 'SAVED',
      index: true,
    },
    appliedDate: {
      type: Date,
      default: null,
    },
    stageHistory: [
      {
        stage: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        notes: { type: String, default: '' },
      },
    ],
    interviewDate: {
      type: Date,
      default: null,
    },
    offerDetails: {
      ctc: { type: Number },
      currency: { type: String, default: 'INR' },
      designation: { type: String },
      accepted: { type: Boolean, default: false },
    },
    notes: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

JobApplicationSchema.index({ userId: 1, opportunityId: 1 }, { unique: true });
JobApplicationSchema.pre('find', applyStrictTenantFilter);
JobApplicationSchema.pre('findOne', applyStrictTenantFilter);
JobApplicationSchema.pre('countDocuments', applyStrictTenantFilter);

export const JobApplication = model<IJobApplication>('JobApplication', JobApplicationSchema);
