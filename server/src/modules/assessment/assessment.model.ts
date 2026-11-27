import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantFilter(this: any) {
  if (this.getOptions()?.bypassTenantFilter) return;
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({ institutionId: new Types.ObjectId(context.tenantId) });
  }
}

export type AssessmentType = 'PLACEMENT_MOCK' | 'CONTEST' | 'SEMESTER_EXAM' | 'PRACTICE';
export type AssessmentStatus = 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
export type SectionType = 'APTITUDE' | 'CODING';

export interface IAssessmentQuestionRef {
  questionId: Types.ObjectId;
  type: SectionType;
  points: number;
}

export interface IAssessmentSection {
  sectionId: string;
  title: string;
  type: SectionType;
  order: number;
  durationMinutes?: number;
  negativeMarkingRatio: number; // e.g. 0.25 (deduct 25% of points for incorrect answer)
  passingCutoffPercentage: number;
  questions: IAssessmentQuestionRef[];
}

export interface IAssessment extends Document {
  institutionId: Types.ObjectId;
  createdBy: Types.ObjectId;
  title: string;
  description: string;
  type: AssessmentType;
  status: AssessmentStatus;
  deletedAt?: Date;
  startTime: Date;
  endTime: Date;
  durationMinutes: number;
  targeting: {
    allStudents: boolean;
    departmentIds: Types.ObjectId[];
    batchIds: Types.ObjectId[];
    classIds: Types.ObjectId[];
    cohorts?: { course: string; semester: number; section: string }[];
    accessCode?: string;
  };
  sections: IAssessmentSection[];
  proctoring: {
    enableProctoring: boolean;
    maxTabSwitches: number;
    enforceFullscreen: boolean;
    blockCopyPaste: boolean;
    autoSubmitOnViolationLimit: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const AssessmentSchema = new Schema<IAssessment>(
  {
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    type: {
      type: String,
      enum: ['PLACEMENT_MOCK', 'CONTEST', 'SEMESTER_EXAM', 'PRACTICE'],
      default: 'PLACEMENT_MOCK',
      index: true,
    },
    status: {
      type: String,
      enum: ['DRAFT', 'PUBLISHED', 'ARCHIVED'],
      default: 'PUBLISHED',
      index: true,
    },
    deletedAt: { type: Date },
    startTime: { type: Date, required: true, index: true },
    endTime: { type: Date, required: true, index: true },
    durationMinutes: { type: Number, required: true, min: 5, max: 360 },
    targeting: {
      allStudents: { type: Boolean, default: true },
      departmentIds: [{ type: Schema.Types.ObjectId, ref: 'Department' }],
      batchIds: [{ type: Schema.Types.ObjectId, ref: 'Batch' }],
      classIds: [{ type: Schema.Types.ObjectId, ref: 'Class' }],
      cohorts: [
        {
          course: { type: String, trim: true },
          semester: { type: Number },
          section: { type: String, trim: true, uppercase: true },
        },
      ],
      accessCode: { type: String, trim: true },
    },
    sections: [
      {
        sectionId: { type: String, required: true },
        title: { type: String, required: true },
        type: { type: String, enum: ['APTITUDE', 'CODING'], required: true },
        order: { type: Number, required: true },
        durationMinutes: { type: Number },
        negativeMarkingRatio: { type: Number, default: 0, min: 0, max: 1 },
        passingCutoffPercentage: { type: Number, default: 40, min: 0, max: 100 },
        questions: [
          {
            questionId: { type: Schema.Types.ObjectId, required: true },
            type: { type: String, enum: ['APTITUDE', 'CODING'], required: true },
            points: { type: Number, required: true, min: 1 },
          },
        ],
      },
    ],
    proctoring: {
      enableProctoring: { type: Boolean, default: true },
      maxTabSwitches: { type: Number, default: 3 },
      enforceFullscreen: { type: Boolean, default: true },
      blockCopyPaste: { type: Boolean, default: true },
      autoSubmitOnViolationLimit: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

AssessmentSchema.index({ institutionId: 1, status: 1, startTime: 1, endTime: 1 });
AssessmentSchema.pre(/^find/, applyTenantFilter);

export const Assessment = model<IAssessment>('Assessment', AssessmentSchema);

// ==========================================
// ASSESSMENT SESSION MODEL (Student Attempt)
// ==========================================

export type SessionStatus = 'IN_PROGRESS' | 'SUBMITTED' | 'AUTO_SUBMITTED' | 'TERMINATED_VIOLATION';
export type ProctoringEventType = 'TAB_SWITCH' | 'FULLSCREEN_EXIT' | 'WINDOW_BLUR' | 'COPY_PASTE_ATTEMPT';

export interface IProctoringEvent {
  eventType: ProctoringEventType;
  timestamp: Date;
  details?: string;
}

export interface IStudentAnswer {
  questionId: Types.ObjectId;
  type: SectionType;
  selectedOptionId?: string;
  code?: string;
  language?: string;
  isCorrect?: boolean;
  scoreAwarded: number;
  timeSpentSeconds: number;
  testCasesPassed?: number;
  totalTestCases?: number;
  executionStatus?: string;
}

export interface IAssessmentSession extends Document {
  assessmentId: Types.ObjectId;
  userId: Types.ObjectId;
  institutionId: Types.ObjectId;
  status: SessionStatus;
  startedAt: Date;
  submittedAt?: Date;
  expiresAt: Date;
  shuffledQuestions: {
    sectionId: string;
    questionId: Types.ObjectId;
    type: SectionType;
    points: number;
  }[];
  answers: IStudentAnswer[];
  proctoringEvents: IProctoringEvent[];
  tabSwitchCount: number;
  isFlaggedForCheating: boolean;
  totalScore: number;
  maxPossibleScore: number;
  percentage: number;
  isPassed: boolean;
  rankInCohort?: number;
  createdAt: Date;
  updatedAt: Date;
}

const AssessmentSessionSchema = new Schema<IAssessmentSession>(
  {
    assessmentId: { type: Schema.Types.ObjectId, ref: 'Assessment', required: true, index: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', required: true, index: true },
    status: {
      type: String,
      enum: ['IN_PROGRESS', 'SUBMITTED', 'AUTO_SUBMITTED', 'TERMINATED_VIOLATION'],
      default: 'IN_PROGRESS',
      index: true,
    },
    startedAt: { type: Date, default: Date.now },
    submittedAt: { type: Date },
    expiresAt: { type: Date, required: true },
    shuffledQuestions: [
      {
        sectionId: { type: String, required: true },
        questionId: { type: Schema.Types.ObjectId, required: true },
        type: { type: String, enum: ['APTITUDE', 'CODING'], required: true },
        points: { type: Number, required: true },
      },
    ],
    answers: [
      {
        questionId: { type: Schema.Types.ObjectId, required: true },
        type: { type: String, enum: ['APTITUDE', 'CODING'], required: true },
        selectedOptionId: { type: String },
        code: { type: String },
        language: { type: String },
        isCorrect: { type: Boolean },
        scoreAwarded: { type: Number, default: 0 },
        timeSpentSeconds: { type: Number, default: 0 },
        testCasesPassed: { type: Number },
        totalTestCases: { type: Number },
        executionStatus: { type: String },
      },
    ],
    proctoringEvents: [
      {
        eventType: {
          type: String,
          enum: ['TAB_SWITCH', 'FULLSCREEN_EXIT', 'WINDOW_BLUR', 'COPY_PASTE_ATTEMPT'],
          required: true,
        },
        timestamp: { type: Date, default: Date.now },
        details: { type: String },
      },
    ],
    tabSwitchCount: { type: Number, default: 0 },
    isFlaggedForCheating: { type: Boolean, default: false },
    totalScore: { type: Number, default: 0 },
    maxPossibleScore: { type: Number, default: 0 },
    percentage: { type: Number, default: 0 },
    isPassed: { type: Boolean, default: false },
    rankInCohort: { type: Number },
  },
  { timestamps: true }
);

AssessmentSessionSchema.index({ assessmentId: 1, userId: 1 }, { unique: true });
AssessmentSessionSchema.index({ assessmentId: 1, status: 1, totalScore: -1 });
AssessmentSessionSchema.pre(/^find/, applyTenantFilter);

export const AssessmentSession = model<IAssessmentSession>('AssessmentSession', AssessmentSessionSchema);
