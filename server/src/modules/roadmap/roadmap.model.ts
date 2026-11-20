import { Schema, model, Document, Types } from 'mongoose';

export interface IRoadmapResource {
  title: string;
  url?: string;
  type: 'DOCUMENTATION' | 'COURSE' | 'BOOK' | 'VIDEO';
}

export interface IRoadmapTopic {
  topicId: string;
  title: string;
  subtopics: string[];
  toolsAndTechnologies: string[];
  industrySkills: string[];
  recommendedResources: IRoadmapResource[];
}

export interface IRoadmapAssignment {
  id: string;
  title: string;
  description: string;
  difficulty: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
}

export interface IRoadmapProject {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface IRoadmapInterviewQuestion {
  question: string;
  concept: string;
}

export interface IRoadmapStage {
  stageId: string;
  title: string;
  order: number;
  topics: IRoadmapTopic[];
  practicalAssignments: IRoadmapAssignment[];
  capstoneProjects: IRoadmapProject[];
  interviewPreparation: IRoadmapInterviewQuestion[];
}

export interface IRoadmap extends Document {
  slug: string;
  title: string;
  category: string;
  description: string;
  version: number;
  estimatedHours: number;
  prerequisites: string[];
  icon: string;
  stages: IRoadmapStage[];
  isActive: boolean;
  institutionId?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const RoadmapSchema = new Schema<IRoadmap>(
  {
    slug: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    title: { type: String, required: true, trim: true },
    category: { type: String, required: true, index: true, trim: true },
    description: { type: String, required: true },
    version: { type: Number, default: 1 },
    estimatedHours: { type: Number, default: 120 },
    prerequisites: [{ type: String }],
    icon: { type: String, default: 'Compass' },
    stages: [
      {
        stageId: { type: String, required: true },
        title: { type: String, required: true },
        order: { type: Number, required: true },
        topics: [
          {
            topicId: { type: String, required: true },
            title: { type: String, required: true },
            subtopics: [{ type: String }],
            toolsAndTechnologies: [{ type: String }],
            industrySkills: [{ type: String }],
            recommendedResources: [
              {
                title: { type: String, required: true },
                url: { type: String },
                type: {
                  type: String,
                  enum: ['DOCUMENTATION', 'COURSE', 'BOOK', 'VIDEO'],
                  default: 'DOCUMENTATION',
                },
              },
            ],
          },
        ],
        practicalAssignments: [
          {
            id: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            difficulty: {
              type: String,
              enum: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'],
              default: 'INTERMEDIATE',
            },
          },
        ],
        capstoneProjects: [
          {
            id: { type: String, required: true },
            title: { type: String, required: true },
            description: { type: String, required: true },
            deliverables: [{ type: String }],
          },
        ],
        interviewPreparation: [
          {
            question: { type: String, required: true },
            concept: { type: String, required: true },
          },
        ],
      },
    ],
    isActive: { type: Boolean, default: true, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', index: true },
  },
  { timestamps: true }
);

RoadmapSchema.index({ category: 1, isActive: 1 });

export const Roadmap = model<IRoadmap>('Roadmap', RoadmapSchema);

// ==========================================
// USER PROGRESS MODEL
// ==========================================

export interface IUserRoadmapProgress extends Document {
  userId: Types.ObjectId;
  institutionId?: Types.ObjectId;
  roadmapId: Types.ObjectId;
  roadmapSlug: string;
  completedTopicIds: string[];
  completedAssignmentIds: string[];
  completedProjectIds: string[];
  progressPercentage: number;
  totalTopics: number;
  lastActiveTopicId?: string;
  startedAt: Date;
  lastStudiedAt: Date;
  isCompleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserRoadmapProgressSchema = new Schema<IUserRoadmapProgress>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    institutionId: { type: Schema.Types.ObjectId, ref: 'Institution', index: true },
    roadmapId: { type: Schema.Types.ObjectId, ref: 'Roadmap', required: true, index: true },
    roadmapSlug: { type: String, required: true, index: true },
    completedTopicIds: [{ type: String }],
    completedAssignmentIds: [{ type: String }],
    completedProjectIds: [{ type: String }],
    progressPercentage: { type: Number, default: 0, min: 0, max: 100 },
    totalTopics: { type: Number, default: 0 },
    lastActiveTopicId: { type: String },
    startedAt: { type: Date, default: Date.now },
    lastStudiedAt: { type: Date, default: Date.now },
    isCompleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

UserRoadmapProgressSchema.index({ userId: 1, roadmapSlug: 1 }, { unique: true });

export const UserRoadmapProgress = model<IUserRoadmapProgress>(
  'UserRoadmapProgress',
  UserRoadmapProgressSchema
);
