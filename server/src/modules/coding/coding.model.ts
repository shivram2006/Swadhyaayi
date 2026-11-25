import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantOrGlobalFilter(this: any) {
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    // Return global questions OR custom institutional questions created by this tenant
    this.where({
      $or: [
        { isGlobal: true },
        { institutionId: new Types.ObjectId(context.tenantId) },
      ],
    });
  }
}

export type CodingDifficulty = 'BEGINNER' | 'EASY' | 'MEDIUM' | 'HARD' | 'EXPERT';
export type CodingCategory = 'DSA' | 'DP' | 'CP' | 'PROBLEM_SOLVING' | 'COMPANY_SPECIFIC' | 'INTERVIEW_QUESTIONS';

export interface ICompanyTag {
  company: string;
  yearReported: number;
  verified: boolean;
  frequencyCount: number;
  sourceNote?: string;
}

export interface IStarterCode {
  language: string;
  boilerplate: string;
  driverCode?: string;
}

export interface ITestCase {
  input: string;
  output: string;
  explanation?: string;
}

export interface IHiddenTestCase {
  input: string;
  expectedOutput: string;
  weight?: number;
}

export interface IQuestionCodingDocument extends Document {
  title: string;
  slug: string;
  description: string;
  difficulty: CodingDifficulty;
  category: CodingCategory;
  patterns: string[];
  topics: string[];
  companyTags: ICompanyTag[];
  supportedLanguages: string[];
  starterCode: IStarterCode[];
  sampleTestCases: ITestCase[];
  hiddenTestCases: IHiddenTestCase[];
  timeLimitMs: number;
  memoryLimitMb: number;
  editorial?: {
    solutionMarkdown: string;
    complexityAnalysis: string;
  };
  hints: string[];
  isGlobal: boolean;
  isAssessmentOnly: boolean;
  institutionId?: Types.ObjectId;
  status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';
  totalSubmissions: number;
  acceptedSubmissions: number;
  createdAt: Date;
  updatedAt: Date;
}

const QuestionCodingSchema = new Schema<IQuestionCodingDocument>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ['BEGINNER', 'EASY', 'MEDIUM', 'HARD', 'EXPERT'],
      required: true,
      index: true,
    },
    category: {
      type: String,
      enum: ['DSA', 'DP', 'CP', 'PROBLEM_SOLVING', 'COMPANY_SPECIFIC', 'INTERVIEW_QUESTIONS'],
      default: 'DSA',
      index: true,
    },
    patterns: [{ type: String, trim: true, index: true }],
    topics: [{ type: String, trim: true, index: true }],
    companyTags: [
      {
        company: { type: String, required: true, trim: true, index: true },
        yearReported: { type: Number, required: true },
        verified: { type: Boolean, default: false },
        frequencyCount: { type: Number, default: 1 },
        sourceNote: { type: String },
      },
    ],
    supportedLanguages: [{ type: String, default: ['python', 'javascript', 'cpp', 'java'] }],
    starterCode: [
      {
        language: { type: String, required: true },
        boilerplate: { type: String, required: true },
        driverCode: { type: String },
      },
    ],
    sampleTestCases: [
      {
        input: { type: String, required: true },
        output: { type: String, required: true },
        explanation: { type: String },
      },
    ],
    hiddenTestCases: [
      {
        input: { type: String, required: true },
        expectedOutput: { type: String, required: true },
        weight: { type: Number, default: 1 },
      },
    ],
    timeLimitMs: { type: Number, default: 2000 },
    memoryLimitMb: { type: Number, default: 256 },
    editorial: {
      solutionMarkdown: { type: String },
      complexityAnalysis: { type: String },
    },
    hints: [{ type: String }],
    isGlobal: { type: Boolean, default: true, index: true },
    isAssessmentOnly: { type: Boolean, default: false, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', index: true },
    status: { type: String, enum: ['PUBLISHED', 'DRAFT', 'ARCHIVED'], default: 'PUBLISHED', index: true },
    totalSubmissions: { type: Number, default: 0 },
    acceptedSubmissions: { type: Number, default: 0 },
  },
  { timestamps: true }
);

QuestionCodingSchema.index({ patterns: 1, difficulty: 1 });
QuestionCodingSchema.index({ "companyTags.company": 1, difficulty: 1 });
QuestionCodingSchema.index({ isGlobal: 1, status: 1 });
QuestionCodingSchema.pre(/^find/, applyTenantOrGlobalFilter);

export const QuestionCoding = model<IQuestionCodingDocument>('QuestionCoding', QuestionCodingSchema);

// Submission Model
export type SubmissionStatus =
  | 'ACCEPTED'
  | 'WRONG_ANSWER'
  | 'TIME_LIMIT_EXCEEDED'
  | 'MEMORY_LIMIT_EXCEEDED'
  | 'RUNTIME_ERROR'
  | 'COMPILATION_ERROR'
  | 'PENDING';

export interface ISubmissionCodingDocument extends Document {
  userId: Types.ObjectId;
  institutionId?: Types.ObjectId;
  questionId: Types.ObjectId;
  language: string;
  code: string;
  status: SubmissionStatus;
  executionTimeMs: number;
  memoryUsedKb: number;
  testCasesPassed: number;
  totalTestCases: number;
  errorLog?: string;
  isContestSubmission: boolean;
  testId?: Types.ObjectId;
  createdAt: Date;
}

const SubmissionCodingSchema = new Schema<ISubmissionCodingDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', index: true },
    questionId: { type: Schema.Types.ObjectId, ref: 'QuestionCoding', required: true, index: true },
    language: { type: String, required: true },
    code: { type: String, required: true },
    status: {
      type: String,
      enum: [
        'ACCEPTED',
        'WRONG_ANSWER',
        'TIME_LIMIT_EXCEEDED',
        'MEMORY_LIMIT_EXCEEDED',
        'RUNTIME_ERROR',
        'COMPILATION_ERROR',
        'PENDING',
      ],
      required: true,
      index: true,
    },
    executionTimeMs: { type: Number, default: 0 },
    memoryUsedKb: { type: Number, default: 0 },
    testCasesPassed: { type: Number, default: 0 },
    totalTestCases: { type: Number, default: 0 },
    errorLog: { type: String },
    isContestSubmission: { type: Boolean, default: false },
    testId: { type: Schema.Types.ObjectId, ref: 'Test', index: true },
  },
  { timestamps: true }
);

SubmissionCodingSchema.index({ userId: 1, questionId: 1, status: 1 });
SubmissionCodingSchema.index({ questionId: 1, status: 1 });

export const SubmissionCoding = model<ISubmissionCodingDocument>('SubmissionCoding', SubmissionCodingSchema);
