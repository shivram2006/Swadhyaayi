import { Request, Response, NextFunction } from 'express';
import { CodingService } from './coding.service';
import { sendSuccess } from '../../core/utils/response';
import { CodingDifficulty, CodingCategory } from './coding.model';

export class CodingController {
  static async getQuestions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { pattern, company, difficulty, category, topic, search, page, limit } = req.query;

      const result = await CodingService.getQuestions(
        {
          pattern: pattern as string,
          company: company as string,
          difficulty: difficulty as CodingDifficulty,
          category: category as CodingCategory,
          topic: topic as string,
          search: search as string,
          page: page ? parseInt(page as string, 10) : 1,
          limit: limit ? parseInt(limit as string, 10) : 25,
        },
        req.user?.userId
      );

      sendSuccess(res, result.questions, 200, result.meta);
    } catch (error) {
      next(error);
    }
  }

  static async getQuestionBySlug(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const slug = Array.isArray(req.params.slug) ? req.params.slug[0] : req.params.slug;
      const question = await CodingService.getQuestionBySlug(slug, req.user?.role);
      sendSuccess(res, question, 200);
    } catch (error) {
      next(error);
    }
  }

  static async runCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const { questionId, language, code, customInput } = req.body;
      const result = await CodingService.runCode(userId, questionId, language, code, customInput);
      sendSuccess(res, result, 200);
    } catch (error) {
      next(error);
    }
  }

  static async submitCode(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const institutionId = req.user?.institutionId;
      const { questionId, language, code } = req.body;
      const result = await CodingService.submitCode(userId, institutionId, questionId, language, code);
      sendSuccess(res, result, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getSubmissions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const questionId = Array.isArray(req.params.questionId) ? req.params.questionId[0] : req.params.questionId;
      const submissions = await CodingService.getSubmissions(userId, questionId);
      sendSuccess(res, submissions, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createQuestion(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const isSuperAdmin = req.user?.role === 'SUPER_ADMIN';
      const question = await CodingService.createQuestion(
        req.body,
        req.user?.institutionId,
        isSuperAdmin
      );
      sendSuccess(res, question, 201);
    } catch (error) {
      next(error);
    }
  }
}
