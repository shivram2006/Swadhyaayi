import { Schema, model, Document, Types } from 'mongoose';
import { getTenantContext } from '../../core/context/tenantContext';

function applyTenantOrGlobalFilter(this: any) {
  const context = getTenantContext();
  if (context?.tenantId && !context?.isSuperAdmin) {
    this.where({
      $or: [
        { isGlobal: true },
        { institutionId: new Types.ObjectId(context.tenantId) },
      ],
    });
  }
}

export type AptitudeCategory =
  | 'QUANTITATIVE'
  | 'LOGICAL_REASONING'
  | 'VERBAL_ABILITY'
  | 'DATA_INTERPRETATION'
  | 'TECHNICAL_MCQ';

export type AptitudeDifficulty = 'BEGINNER' | 'EASY' | 'MEDIUM' | 'HARD';

export interface IOption {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
}

export interface IQuestionAptitudeDocument extends Document {
  category: AptitudeCategory;
  subcategory: string; // e.g. "Time & Work", "Syllogisms"
  difficulty: AptitudeDifficulty;
  questionText: string;
  options: IOption[];
  correctOptionId: string;
  explanation: string;
  companyTags: {
    company: string;
    yearReported: number;
  }[];
  isGlobal: boolean;
  institutionId?: Types.ObjectId;
  status: 'PUBLISHED' | 'DRAFT';
  createdAt: Date;
  updatedAt: Date;
}

const QuestionAptitudeSchema = new Schema<IQuestionAptitudeDocument>(
  {
    category: {
      type: String,
      enum: ['QUANTITATIVE', 'LOGICAL_REASONING', 'VERBAL_ABILITY', 'DATA_INTERPRETATION', 'TECHNICAL_MCQ'],
      required: true,
      index: true,
    },
    subcategory: { type: String, required: true, trim: true, index: true },
    difficulty: {
      type: String,
      enum: ['BEGINNER', 'EASY', 'MEDIUM', 'HARD'],
      default: 'MEDIUM',
      index: true,
    },
    questionText: { type: String, required: true },
    options: [
      {
        id: { type: String, required: true },
        text: { type: String, required: true },
      },
    ],
    correctOptionId: { type: String, required: true },
    explanation: { type: String, required: true },
    companyTags: [
      {
        company: { type: String, required: true },
        yearReported: { type: Number, required: true },
      },
    ],
    isGlobal: { type: Boolean, default: true, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', index: true },
    status: { type: String, enum: ['PUBLISHED', 'DRAFT'], default: 'PUBLISHED', index: true },
  },
  { timestamps: true }
);

QuestionAptitudeSchema.index({ category: 1, subcategory: 1, difficulty: 1 });
QuestionAptitudeSchema.pre(/^find/, applyTenantOrGlobalFilter);

export const QuestionAptitude = model<IQuestionAptitudeDocument>('QuestionAptitude', QuestionAptitudeSchema);

// Practice & Mock Session Schema
export interface IAptitudeSessionDocument extends Document {
  userId: Types.ObjectId;
  institutionId?: Types.ObjectId;
  category?: string;
  subcategory?: string;
  mode: 'TOPIC_PRACTICE' | 'TIMED_MOCK';
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  accuracyPercentage: number;
  totalTimeSpentSeconds: number;
  averageSpeedSeconds: number;
  answers: {
    questionId: Types.ObjectId;
    selectedOptionId: string;
    isCorrect: boolean;
    timeSpentSeconds: number;
  }[];
  createdAt: Date;
}

const AptitudeSessionSchema = new Schema<IAptitudeSessionDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', index: true },
    category: { type: String },
    subcategory: { type: String },
    mode: { type: String, enum: ['TOPIC_PRACTICE', 'TIMED_MOCK'], default: 'TOPIC_PRACTICE' },
    totalQuestions: { type: Number, required: true },
    correctCount: { type: Number, required: true },
    wrongCount: { type: Number, required: true },
    accuracyPercentage: { type: Number, required: true },
    totalTimeSpentSeconds: { type: Number, required: true },
    averageSpeedSeconds: { type: Number, required: true },
    answers: [
      {
        questionId: { type: Schema.Types.ObjectId, ref: 'QuestionAptitude' },
        selectedOptionId: { type: String, required: true },
        isCorrect: { type: Boolean, required: true },
        timeSpentSeconds: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

AptitudeSessionSchema.index({ userId: 1, createdAt: -1 });

export const AptitudeSession = model<IAptitudeSessionDocument>('AptitudeSession', AptitudeSessionSchema);
