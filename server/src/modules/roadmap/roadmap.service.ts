import { Types } from 'mongoose';
import { Roadmap, UserRoadmapProgress, IRoadmap } from './roadmap.model';
import { NotFoundError, ValidationError } from '../../core/utils/appError';

export class RoadmapService {
  static async getCatalog(category?: string, search?: string, userId?: string) {
    const query: any = { isActive: true };

    if (category && category !== 'All') {
      query.category = category;
    }

    if (search && search.trim()) {
      query.$or = [
        { title: { $regex: search.trim(), $options: 'i' } },
        { description: { $regex: search.trim(), $options: 'i' } },
        { slug: { $regex: search.trim(), $options: 'i' } },
      ];
    }

    const roadmaps = await Roadmap.find(query).sort({ category: 1, title: 1 });

    let userProgressMap: Record<string, { progressPercentage: number; isCompleted: boolean }> = {};

    if (userId && Types.ObjectId.isValid(userId)) {
      const userProgress = await UserRoadmapProgress.find({
        userId: new Types.ObjectId(userId),
      });

      userProgress.forEach((p) => {
        userProgressMap[p.roadmapSlug] = {
          progressPercentage: p.progressPercentage,
          isCompleted: p.isCompleted,
        };
      });
    }

    return roadmaps.map((r) => {
      const totalTopics = r.stages.reduce((acc, s) => acc + (s.topics?.length || 0), 0);
      const totalProjects = r.stages.reduce((acc, s) => acc + (s.capstoneProjects?.length || 0), 0);
      const userStatus = userProgressMap[r.slug];

      return {
        slug: r.slug,
        title: r.title,
        category: r.category,
        description: r.description,
        version: r.version,
        estimatedHours: r.estimatedHours,
        prerequisites: r.prerequisites,
        icon: r.icon,
        totalStages: r.stages.length,
        totalTopics,
        totalProjects,
        enrolled: !!userStatus,
        progressPercentage: userStatus ? userStatus.progressPercentage : 0,
        isCompleted: userStatus ? userStatus.isCompleted : false,
      };
    });
  }

  static async getRoadmapBySlug(slug: string, userId?: string) {
    const roadmap = await Roadmap.findOne({ slug: slug.toLowerCase(), isActive: true });
    if (!roadmap) {
      throw new NotFoundError(`Roadmap '${slug}' not found`);
    }

    let progressData = null;
    if (userId && Types.ObjectId.isValid(userId)) {
      progressData = await UserRoadmapProgress.findOne({
        userId: new Types.ObjectId(userId),
        roadmapSlug: slug.toLowerCase(),
      });
    }

    const totalTopics = roadmap.stages.reduce((acc, s) => acc + (s.topics?.length || 0), 0);
    const totalAssignments = roadmap.stages.reduce(
      (acc, s) => acc + (s.practicalAssignments?.length || 0),
      0
    );
    const totalProjects = roadmap.stages.reduce(
      (acc, s) => acc + (s.capstoneProjects?.length || 0),
      0
    );

    return {
      roadmap,
      summary: {
        totalStages: roadmap.stages.length,
        totalTopics,
        totalAssignments,
        totalProjects,
        estimatedHours: roadmap.estimatedHours,
      },
      progress: progressData
        ? {
            enrolled: true,
            progressPercentage: progressData.progressPercentage,
            completedTopicIds: progressData.completedTopicIds,
            completedAssignmentIds: progressData.completedAssignmentIds,
            completedProjectIds: progressData.completedProjectIds,
            lastActiveTopicId: progressData.lastActiveTopicId,
            lastStudiedAt: progressData.lastStudiedAt,
            isCompleted: progressData.isCompleted,
          }
        : {
            enrolled: false,
            progressPercentage: 0,
            completedTopicIds: [],
            completedAssignmentIds: [],
            completedProjectIds: [],
            isCompleted: false,
          },
    };
  }

  static async enrollRoadmap(slug: string, userId: string, institutionId?: string) {
    const roadmap = await Roadmap.findOne({ slug: slug.toLowerCase(), isActive: true });
    if (!roadmap) {
      throw new NotFoundError(`Roadmap '${slug}' not found`);
    }

    const totalTopics = roadmap.stages.reduce((acc, s) => acc + (s.topics?.length || 0), 0);

    const uId = new Types.ObjectId(userId);
    const instId = institutionId && Types.ObjectId.isValid(institutionId) ? new Types.ObjectId(institutionId) : undefined;

    let progress = await UserRoadmapProgress.findOne({
      userId: uId,
      roadmapSlug: slug.toLowerCase(),
    });

    if (!progress) {
      progress = await UserRoadmapProgress.create({
        userId: uId,
        institutionId: instId,
        roadmapId: roadmap._id,
        roadmapSlug: slug.toLowerCase(),
        completedTopicIds: [],
        completedAssignmentIds: [],
        completedProjectIds: [],
        progressPercentage: 0,
        totalTopics,
        startedAt: new Date(),
        lastStudiedAt: new Date(),
        isCompleted: false,
      });
    }

    return progress;
  }

  static async toggleProgress(
    slug: string,
    userId: string,
    itemType: 'topic' | 'assignment' | 'project',
    itemId: string,
    completed: boolean,
    institutionId?: string
  ) {
    const roadmap = await Roadmap.findOne({ slug: slug.toLowerCase(), isActive: true });
    if (!roadmap) {
      throw new NotFoundError(`Roadmap '${slug}' not found`);
    }

    const totalTopics = roadmap.stages.reduce((acc, s) => acc + (s.topics?.length || 0), 0);
    const uId = new Types.ObjectId(userId);
    const instId = institutionId && Types.ObjectId.isValid(institutionId) ? new Types.ObjectId(institutionId) : undefined;

    let progress = await UserRoadmapProgress.findOne({
      userId: uId,
      roadmapSlug: slug.toLowerCase(),
    });

    if (!progress) {
      progress = new UserRoadmapProgress({
        userId: uId,
        institutionId: instId,
        roadmapId: roadmap._id,
        roadmapSlug: slug.toLowerCase(),
        completedTopicIds: [],
        completedAssignmentIds: [],
        completedProjectIds: [],
        progressPercentage: 0,
        totalTopics,
        startedAt: new Date(),
        lastStudiedAt: new Date(),
        isCompleted: false,
      });
    }

    // Toggle items
    if (itemType === 'topic') {
      const set = new Set(progress.completedTopicIds);
      if (completed) {
        set.add(itemId);
      } else {
        set.delete(itemId);
      }
      progress.completedTopicIds = Array.from(set);
    } else if (itemType === 'assignment') {
      const set = new Set(progress.completedAssignmentIds);
      if (completed) {
        set.add(itemId);
      } else {
        set.delete(itemId);
      }
      progress.completedAssignmentIds = Array.from(set);
    } else if (itemType === 'project') {
      const set = new Set(progress.completedProjectIds);
      if (completed) {
        set.add(itemId);
      } else {
        set.delete(itemId);
      }
      progress.completedProjectIds = Array.from(set);
    }

    // Calculate completion % based on topics
    const effectiveTotalTopics = Math.max(1, totalTopics);
    const pct = Math.min(100, Math.round((progress.completedTopicIds.length / effectiveTotalTopics) * 100));
    progress.progressPercentage = pct;
    progress.totalTopics = totalTopics;
    progress.isCompleted = pct === 100;
    progress.lastActiveTopicId = itemId;
    progress.lastStudiedAt = new Date();

    await progress.save();

    return progress;
  }

  static async upsertRoadmap(data: Partial<IRoadmap>, institutionId?: string) {
    if (!data.slug) {
      throw new ValidationError('Slug is required');
    }

    const existing = await Roadmap.findOne({ slug: data.slug.toLowerCase() });
    if (existing) {
      Object.assign(existing, data);
      existing.version = (existing.version || 1) + 1;
      if (institutionId && Types.ObjectId.isValid(institutionId)) {
        existing.institutionId = new Types.ObjectId(institutionId);
      }
      await existing.save();
      return existing;
    }

    const newRoadmap = await Roadmap.create({
      ...data,
      slug: data.slug.toLowerCase(),
      institutionId: institutionId && Types.ObjectId.isValid(institutionId) ? new Types.ObjectId(institutionId) : undefined,
    });
    return newRoadmap;
  }
}
