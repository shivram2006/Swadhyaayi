import { Request, Response, NextFunction } from 'express';
import { AptitudeService } from './aptitude.service';
import { sendSuccess } from '../../core/utils/response';
import { AptitudeCategory, AptitudeDifficulty } from './aptitude.model';

export class AptitudeController {
  static async getCategories(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const categories = await AptitudeService.getCategories();
      sendSuccess(res, categories, 200);
    } catch (error) {
      next(error);
    }
  }

  static async getQuestions(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { category, subcategory, difficulty, limit, mode } = req.query;

      const questions = await AptitudeService.getQuestions({
        category: category as AptitudeCategory,
        subcategory: subcategory as string,
        difficulty: difficulty as AptitudeDifficulty,
        limit: limit ? parseInt(limit as string, 10) : 20,
        mode: mode as 'PRACTICE' | 'MOCK',
      });

      sendSuccess(res, questions, 200);
    } catch (error) {
      next(error);
    }
  }

  static async checkAnswer(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { questionId, selectedOptionId } = req.body;
      const result = await AptitudeService.checkAnswer(questionId, selectedOptionId);
      sendSuccess(res, result, 200);
    } catch (error) {
      next(error);
    }
  }

  static async submitSession(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const institutionId = req.user?.institutionId;
      const result = await AptitudeService.submitSession(userId, institutionId, req.body);
      sendSuccess(res, result, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getAnalytics(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const analytics = await AptitudeService.getStudentAnalytics(userId);
      sendSuccess(res, analytics, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createQuestion(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const isSuperAdmin = req.user?.role === 'SUPER_ADMIN';
      const question = await AptitudeService.createQuestion(
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
