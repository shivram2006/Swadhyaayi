import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantFilter(this: any) {
  if (this.getOptions()?.bypassTenantFilter) return;
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({ institutionId: new Types.ObjectId(context.tenantId) });
  }
}

export type TargetRole = 'mern' | 'java' | 'aiml' | 'frontend' | 'backend' | 'devops' | 'sde' | 'general';

export interface IResumePersonal {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  codingProfiles?: {
    leetcode?: string;
    codeforces?: string;
    hackerrank?: string;
    swadhyayi?: string;
  };
}

export interface IResumeEducation {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  current: boolean;
  cgpaOrPercentage: string;
  location: string;
}

export interface IResumeSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  toolsAndCloud: string[];
  coreFundamentals: string[];
}

export interface IResumeExperience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface IResumeProject {
  title: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  startDate?: string;
  endDate?: string;
  bullets: string[];
}

export interface IResumeCertification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface IATSScoreCache {
  totalScore: number;
  sectionScores: {
    completeness: number;
    actionVerbs: number;
    quantifiableMetrics: number;
    keywordMatch: number;
  };
  matchedKeywords: string[];
  missingKeywords: string[];
  formattingIssues: string[];
  detectedMetricsCount: number;
  strongActionVerbsCount: number;
  weakVerbsCount: number;
  lastCalculatedAt: Date;
}

export interface IResume extends Document {
  institutionId: Types.ObjectId;
  userId: Types.ObjectId;
  title: string;
  targetRole: TargetRole;
  isDefault: boolean;
  personalInfo: IResumePersonal;
  summary: string;
  education: IResumeEducation[];
  skills: IResumeSkills;
  experience: IResumeExperience[];
  projects: IResumeProject[];
  certifications: IResumeCertification[];
  achievements: string[];
  atsScoreCache?: IATSScoreCache;
  createdAt: Date;
  updatedAt: Date;
}

const ResumeSchema = new Schema<IResume>(
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
    title: {
      type: String,
      required: true,
      trim: true,
      default: 'Software Engineer Resume',
    },
    targetRole: {
      type: String,
      enum: ['mern', 'java', 'aiml', 'frontend', 'backend', 'devops', 'sde', 'general'],
      default: 'sde',
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    personalInfo: {
      fullName: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true },
      phone: { type: String, required: true, trim: true },
      location: { type: String, default: '' },
      linkedinUrl: { type: String, default: '' },
      githubUrl: { type: String, default: '' },
      portfolioUrl: { type: String, default: '' },
      codingProfiles: {
        leetcode: { type: String, default: '' },
        codeforces: { type: String, default: '' },
        hackerrank: { type: String, default: '' },
        swadhyayi: { type: String, default: '' },
      },
    },
    summary: {
      type: String,
      default: '',
    },
    education: [
      {
        institution: { type: String, required: true },
        degree: { type: String, required: true },
        fieldOfStudy: { type: String, required: true },
        startDate: { type: String, default: '' },
        endDate: { type: String, default: '' },
        current: { type: Boolean, default: false },
        cgpaOrPercentage: { type: String, default: '' },
        location: { type: String, default: '' },
      },
    ],
    skills: {
      languages: [{ type: String }],
      frameworks: [{ type: String }],
      databases: [{ type: String }],
      toolsAndCloud: [{ type: String }],
      coreFundamentals: [{ type: String }],
    },
    experience: [
      {
        company: { type: String, required: true },
        role: { type: String, required: true },
        location: { type: String, default: '' },
        startDate: { type: String, default: '' },
        endDate: { type: String, default: '' },
        current: { type: Boolean, default: false },
        bullets: [{ type: String }],
      },
    ],
    projects: [
      {
        title: { type: String, required: true },
        techStack: [{ type: String }],
        liveUrl: { type: String, default: '' },
        githubUrl: { type: String, default: '' },
        startDate: { type: String, default: '' },
        endDate: { type: String, default: '' },
        bullets: [{ type: String }],
      },
    ],
    certifications: [
      {
        name: { type: String, required: true },
        issuer: { type: String, required: true },
        issueDate: { type: String, default: '' },
        credentialUrl: { type: String, default: '' },
      },
    ],
    achievements: [{ type: String }],
    atsScoreCache: {
      totalScore: { type: Number, default: 0 },
      sectionScores: {
        completeness: { type: Number, default: 0 },
        actionVerbs: { type: Number, default: 0 },
        quantifiableMetrics: { type: Number, default: 0 },
        keywordMatch: { type: Number, default: 0 },
      },
      matchedKeywords: [{ type: String }],
      missingKeywords: [{ type: String }],
      formattingIssues: [{ type: String }],
      detectedMetricsCount: { type: Number, default: 0 },
      strongActionVerbsCount: { type: Number, default: 0 },
      weakVerbsCount: { type: Number, default: 0 },
      lastCalculatedAt: { type: Date },
    },
  },
  {
    timestamps: true,
  }
);

ResumeSchema.pre('find', applyTenantFilter);
ResumeSchema.pre('findOne', applyTenantFilter);
ResumeSchema.pre('countDocuments', applyTenantFilter);

export const Resume = model<IResume>('Resume', ResumeSchema);
