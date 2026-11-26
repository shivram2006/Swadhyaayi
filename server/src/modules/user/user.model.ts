import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantFilter(this: any) {
  if (this.getOptions()?.bypassTenantFilter) return;
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({ institutionId: new Types.ObjectId(context.tenantId) });
  }
}

export type UserRole = 'SUPER_ADMIN' | 'INSTITUTION_ADMIN' | 'PLACEMENT_OFFICER' | 'FACULTY' | 'STUDENT';

export interface IAcademicHistory {
  batchId?: Types.ObjectId;
  classId?: Types.ObjectId;
  departmentId?: Types.ObjectId;
  academicYear?: number;
  semester?: number;
  transitionedAt: Date;
  reason?: string;
}

export interface IUserDocument extends Document {
  institutionId?: Types.ObjectId;
  email: string;
  passwordHash: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  rollNumber?: string;
  departmentId?: Types.ObjectId;
  batchId?: Types.ObjectId;
  classId?: Types.ObjectId;
  course?: string;
  semester?: number;
  section?: string;
  assignedCohorts?: { course: string; semester: number; section: string }[];
  academicHistory: IAcademicHistory[];
  profile: {
    avatarUrl?: string;
    phoneNumber?: string;
    githubUrl?: string;
    linkedinUrl?: string;
    portfolioUrl?: string;
    skills: string[];
    targetDomain?: string;
    cgpa?: number;
    resumeUrl?: string;
  };
  metrics: {
    codingProblemsSolved: number;
    codingScore: number;
    aptitudeTestsTaken: number;
    aptitudeScore: number;
    globalRank: number;
    institutionRank: number;
    currentStreak: number;
    longestStreak: number;
    lastActiveDate: Date;
    totalPoints: number;
  };
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';
  isSubscribed?: boolean;
  subscriptionPlan?: string;
  subscribedAt?: Date;
  refreshTokenHash?: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>(
  {
    institutionId: {
      type: Schema.Types.ObjectId,
      ref: 'Institution',
      required: function (this: any) {
        return this.role !== 'SUPER_ADMIN';
      },
      index: true,
    },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    role: {
      type: String,
      enum: ['SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY', 'STUDENT'],
      required: true,
      index: true,
    },
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    rollNumber: { type: String, trim: true },
    departmentId: { type: Schema.Types.ObjectId, ref: 'Department', index: true },
    batchId: { type: Schema.Types.ObjectId, ref: 'Batch', index: true },
    classId: { type: Schema.Types.ObjectId, ref: 'Class', index: true },
    course: { type: String, trim: true, index: true },
    semester: { type: Number, index: true },
    section: { type: String, trim: true, uppercase: true, index: true },
    assignedCohorts: [
      {
        course: { type: String, required: true, trim: true },
        semester: { type: Number, required: true },
        section: { type: String, required: true, trim: true, uppercase: true },
      },
    ],
    academicHistory: [
      {
        batchId: { type: Schema.Types.ObjectId, ref: 'Batch' },
        classId: { type: Schema.Types.ObjectId, ref: 'Class' },
        departmentId: { type: Schema.Types.ObjectId, ref: 'Department' },
        academicYear: { type: Number },
        semester: { type: Number },
        transitionedAt: { type: Date, default: Date.now },
        reason: { type: String },
      },
    ],
    profile: {
      avatarUrl: { type: String },
      phoneNumber: { type: String },
      githubUrl: { type: String },
      linkedinUrl: { type: String },
      portfolioUrl: { type: String },
      skills: [{ type: String, trim: true }],
      targetDomain: { type: String, default: 'Full Stack MERN Developer' },
      cgpa: { type: Number, min: 0, max: 10 },
      resumeUrl: { type: String },
    },
    metrics: {
      codingProblemsSolved: { type: Number, default: 0 },
      codingScore: { type: Number, default: 0 },
      aptitudeTestsTaken: { type: Number, default: 0 },
      aptitudeScore: { type: Number, default: 0 },
      globalRank: { type: Number, default: 0 },
      institutionRank: { type: Number, default: 0 },
      currentStreak: { type: Number, default: 0 },
      longestStreak: { type: Number, default: 0 },
      lastActiveDate: { type: Date, default: Date.now },
      totalPoints: { type: Number, default: 0 },
    },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'SUSPENDED'],
      default: 'ACTIVE',
      index: true,
    },
    isSubscribed: { type: Boolean, default: false },
    subscriptionPlan: { type: String, trim: true },
    subscribedAt: { type: Date },
    refreshTokenHash: { type: String },
  },
  { timestamps: true }
);

UserSchema.index({ institutionId: 1, role: 1 });
UserSchema.index({ institutionId: 1, rollNumber: 1 });
UserSchema.index({ institutionId: 1, departmentId: 1, batchId: 1, classId: 1 });
UserSchema.index({ institutionId: 1, status: 1 });
UserSchema.pre(/^find/, applyTenantFilter);

export const User = model<IUserDocument>('User', UserSchema);
