import { Request, Response, NextFunction } from 'express';
import { AssessmentService } from './assessment.service';
import { sendSuccess } from '../../core/utils/response';
import { createAssessmentSchema, recordTelemetrySchema, saveAnswerSchema } from './assessment.schema';
import { User } from '../user/user.model';
import { ValidationError } from '../../core/utils/appError';

export class AssessmentController {
  static async createAssessment(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createAssessmentSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required to create an assessment');
      }

      const assessment = await AssessmentService.createAssessment(parsed, institutionId, userId);
      sendSuccess(res, assessment, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getAssessments(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      let studentCohort: any = undefined;
      const userId = user?.userId || user?._id?.toString();

      if (user.role === 'STUDENT' && userId) {
        const studentDoc = await User.findById(userId).select('departmentId batchId classId').lean();
        if (studentDoc) {
          studentCohort = {
            departmentId: studentDoc.departmentId?.toString(),
            batchId: studentDoc.batchId?.toString(),
            classId: studentDoc.classId?.toString(),
          };
        }
      }

      const assessments = await AssessmentService.getAssessments(institutionId, studentCohort);
      sendSuccess(res, assessments);
    } catch (error) {
      next(error);
    }
  }

  static async getAssessmentById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      const assessment = await AssessmentService.getAssessmentById(id, institutionId);
      sendSuccess(res, assessment);
    } catch (error) {
      next(error);
    }
  }

  static async startSession(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();
      const institutionId = user?.institutionId?.toString();
      const accessCode = req.body?.accessCode as string | undefined;

      if (!institutionId || !userId) {
        throw new ValidationError('Student authentication and institution required');
      }

      const sessionData = await AssessmentService.startSession(id, userId, institutionId, accessCode);
      sendSuccess(res, sessionData, 201);
    } catch (error) {
      next(error);
    }
  }

  static async recordTelemetry(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();

      const parsed = recordTelemetrySchema.parse(req.body);
      const result = await AssessmentService.recordTelemetry(id, userId, parsed.eventType, parsed.details);
      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  }

  static async saveAnswer(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();

      const parsed = saveAnswerSchema.parse(req.body);
      const result = await AssessmentService.saveAnswer(id, userId, parsed);
      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  }

  static async submitAssessment(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();

      const scorecard = await AssessmentService.submitAssessment(id, userId);
      sendSuccess(res, scorecard);
    } catch (error) {
      next(error);
    }
  }

  static async getLiveMonitor(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const monitorData = await AssessmentService.getLiveMonitor(id, institutionId);
      sendSuccess(res, monitorData);
    } catch (error) {
      next(error);
    }
  }

  static async getAssessmentAnalytics(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const analytics = await AssessmentService.getAssessmentAnalytics(id, institutionId);
      sendSuccess(res, analytics);
    } catch (error) {
      next(error);
    }
  }
}
