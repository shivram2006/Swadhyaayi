import { Request, Response, NextFunction } from 'express';
import { ResumeService } from './resume.service';
import { ResumeParser } from './resume.parser';
import { ResumeAnalyzer } from './resume.analyzer';
import { sendSuccess } from '../../core/utils/response';
import { createResumeSchema, updateResumeSchema, analyzeRawResumeSchema } from './resume.schema';
import { ValidationError } from '../../core/utils/appError';

export class ResumeController {
  static async checkAts(req: Request, res: Response, next: NextFunction) {
    try {
      const file = req.file;
      const { targetRole = 'sde', customJobDescription, rawText } = req.body;

      let text = (rawText || '').trim();

      if (file && file.buffer) {
        text = await ResumeParser.extractText(file.buffer, file.mimetype, file.originalname);
      }

      if (!text || text.length < 20) {
        throw new ValidationError(
          'Could not extract readable text from the provided resume. Please upload a valid PDF, DOCX, or paste resume text.'
        );
      }

      const structuredResume = ResumeParser.parseTextToResume(text, targetRole as any);
      const analysis = ResumeAnalyzer.analyze(structuredResume, customJobDescription);

      sendSuccess(res, {
        analysis,
        structuredResume,
        targetRole,
        filename: file?.originalname || 'Pasted Resume Text',
        extractedTextLength: text.length,
        snippet: text.slice(0, 400),
      });
    } catch (error) {
      next(error);
    }
  }

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
