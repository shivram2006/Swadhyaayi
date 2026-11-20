import { z } from 'zod';

export const roadmapResourceSchema = z.object({
  title: z.string().min(1, 'Resource title is required'),
  url: z.string().url().optional().or(z.literal('')),
  type: z.enum(['DOCUMENTATION', 'COURSE', 'BOOK', 'VIDEO']).default('DOCUMENTATION'),
});

export const roadmapTopicSchema = z.object({
  topicId: z.string().min(1, 'Topic ID is required'),
  title: z.string().min(1, 'Topic title is required'),
  subtopics: z.array(z.string()).default([]),
  toolsAndTechnologies: z.array(z.string()).default([]),
  industrySkills: z.array(z.string()).default([]),
  recommendedResources: z.array(roadmapResourceSchema).default([]),
});

export const roadmapAssignmentSchema = z.object({
  id: z.string().min(1, 'Assignment ID is required'),
  title: z.string().min(1, 'Assignment title is required'),
  description: z.string().min(1, 'Description is required'),
  difficulty: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']).default('INTERMEDIATE'),
});

export const roadmapProjectSchema = z.object({
  id: z.string().min(1, 'Project ID is required'),
  title: z.string().min(1, 'Project title is required'),
  description: z.string().min(1, 'Description is required'),
  deliverables: z.array(z.string()).default([]),
});

export const roadmapInterviewQuestionSchema = z.object({
  question: z.string().min(1, 'Interview question is required'),
  concept: z.string().min(1, 'Concept explanation is required'),
});

export const roadmapStageSchema = z.object({
  stageId: z.string().min(1, 'Stage ID is required'),
  title: z.string().min(1, 'Stage title is required'),
  order: z.number().int().min(1),
  topics: z.array(roadmapTopicSchema).min(1, 'Each stage must have at least one topic'),
  practicalAssignments: z.array(roadmapAssignmentSchema).default([]),
  capstoneProjects: z.array(roadmapProjectSchema).default([]),
  interviewPreparation: z.array(roadmapInterviewQuestionSchema).default([]),
});

export const createRoadmapSchema = z.object({
  slug: z
    .string()
    .min(3)
    .max(80)
    .regex(/^[a-z0-9-]+$/, 'Slug must be lower-case alphanumeric with dashes'),
  title: z.string().min(3).max(150),
  category: z.string().min(2).max(100),
  description: z.string().min(10),
  version: z.number().int().min(1).default(1),
  estimatedHours: z.number().min(1).default(100),
  prerequisites: z.array(z.string()).default([]),
  icon: z.string().default('Compass'),
  stages: z.array(roadmapStageSchema).min(1, 'Roadmap must contain at least one stage'),
  isActive: z.boolean().default(true),
});

export const updateRoadmapSchema = createRoadmapSchema.partial().omit({ slug: true });

export const toggleProgressSchema = z.object({
  itemType: z.enum(['topic', 'assignment', 'project']),
  itemId: z.string().min(1, 'Item ID is required'),
  completed: z.boolean(),
});
