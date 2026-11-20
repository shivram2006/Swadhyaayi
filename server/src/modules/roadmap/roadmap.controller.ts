import { Request, Response, NextFunction } from 'express';
import { RoadmapService } from './roadmap.service';
import { sendSuccess } from '../../core/utils/response';
import { createRoadmapSchema, updateRoadmapSchema, toggleProgressSchema } from './roadmap.schema';

export class RoadmapController {
  static async getCatalog(req: Request, res: Response, next: NextFunction) {
    try {
      const category = req.query.category as string | undefined;
      const search = req.query.search as string | undefined;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();

      const roadmaps = await RoadmapService.getCatalog(category, search, userId);
      sendSuccess(res, roadmaps);
    } catch (error) {
      next(error);
    }
  }

  static async getRoadmapBySlug(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = (Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug) as string;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();

      const roadmapData = await RoadmapService.getRoadmapBySlug(slug, userId);
      sendSuccess(res, roadmapData);
    } catch (error) {
      next(error);
    }
  }

  static async enroll(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = (Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug) as string;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();
      const institutionId = user?.institutionId?.toString();

      const progress = await RoadmapService.enrollRoadmap(slug, userId, institutionId);
      sendSuccess(res, progress, 201);
    } catch (error) {
      next(error);
    }
  }

  static async toggleProgress(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = (Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug) as string;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();
      const institutionId = user?.institutionId?.toString();

      const parsed = toggleProgressSchema.parse(req.body);

      const progress = await RoadmapService.toggleProgress(
        slug,
        userId,
        parsed.itemType,
        parsed.itemId,
        parsed.completed,
        institutionId
      );

      sendSuccess(res, progress);
    } catch (error) {
      next(error);
    }
  }

  static async createRoadmap(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createRoadmapSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      const roadmap = await RoadmapService.upsertRoadmap(parsed, institutionId);
      sendSuccess(res, roadmap, 201);
    } catch (error) {
      next(error);
    }
  }

  static async updateRoadmap(req: Request, res: Response, next: NextFunction) {
    try {
      const slug = (Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug) as string;
      const parsed = updateRoadmapSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      const roadmap = await RoadmapService.upsertRoadmap({ ...parsed, slug }, institutionId);
      sendSuccess(res, roadmap);
    } catch (error) {
      next(error);
    }
  }
}
