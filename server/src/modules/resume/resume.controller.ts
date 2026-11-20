import { Request, Response, NextFunction } from 'express';
import { ResumeService } from './resume.service';
import { sendSuccess } from '../../core/utils/response';
import { createResumeSchema, updateResumeSchema, analyzeRawResumeSchema } from './resume.schema';
import { ValidationError } from '../../core/utils/appError';

export class ResumeController {
  static async createResume(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createResumeSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required to create a resume');
      }

      const resume = await ResumeService.createResume(parsed, institutionId, userId);
      sendSuccess(res, resume, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getStudentResumes(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const resumes = await ResumeService.getStudentResumes(institutionId, userId);
      sendSuccess(res, resumes);
    } catch (error) {
      next(error);
    }
  }

  static async syncProfile(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const draft = await ResumeService.syncFromStudentProfile(institutionId, userId);
      sendSuccess(res, draft);
    } catch (error) {
      next(error);
    }
  }

  static async analyzeRaw(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = analyzeRawResumeSchema.parse(req.body);
      const analysis = ResumeService.analyzeRaw(parsed.resume, parsed.customJobDescription);
      sendSuccess(res, analysis);
    } catch (error) {
      next(error);
    }
  }

  static async getResumeById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const resume = await ResumeService.getResumeById(id, institutionId, user);
      sendSuccess(res, resume);
    } catch (error) {
      next(error);
    }
  }

  static async updateResume(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const parsed = updateResumeSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const updated = await ResumeService.updateResume(id, parsed, institutionId, userId);
      sendSuccess(res, updated);
    } catch (error) {
      next(error);
    }
  }

  static async deleteResume(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const result = await ResumeService.deleteResume(id, institutionId, userId);
      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  }

  static async analyzeResume(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const { customJobDescription, targetRole } = req.body;

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const analysis = await ResumeService.analyzeResume(id, customJobDescription, targetRole, institutionId, user);
      sendSuccess(res, analysis);
    } catch (error) {
      next(error);
    }
  }
}
