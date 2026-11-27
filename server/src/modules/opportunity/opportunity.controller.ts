import { Request, Response, NextFunction } from 'express';
import { OpportunityService } from './opportunity.service';
import { ExternalJobService } from './externalJob.service';
import { sendSuccess } from '../../core/utils/response';
import {
  createOpportunitySchema,
  createApplicationSchema,
  updateApplicationStageSchema,
} from './opportunity.schema';
import { ValidationError } from '../../core/utils/appError';

export class OpportunityController {
  // External Live Jobs (RapidAPI JSearch)
  static async getExternalJobs(req: Request, res: Response, next: NextFunction) {
    try {
      const { q, country, datePosted, remoteOnly, employmentTypes } = req.query;
      const result = await ExternalJobService.searchJobs({
        query: typeof q === 'string' ? q : undefined,
        country: typeof country === 'string' ? country : undefined,
        datePosted: typeof datePosted === 'string' ? datePosted : undefined,
        remoteOnly: remoteOnly === 'true',
        employmentTypes: typeof employmentTypes === 'string' ? employmentTypes : undefined,
      });
      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  }

  // Opportunities Endpoints
  static async getOpportunities(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const { type, workMode, source, search, onlyEligible } = req.query;

      const filters = {
        type: type as string | undefined,
        workMode: workMode as string | undefined,
        source: source as string | undefined,
        search: search as string | undefined,
        onlyEligible: onlyEligible === 'true',
      };

      const opportunities = await OpportunityService.getOpportunities(filters, user, institutionId);
      sendSuccess(res, opportunities);
    } catch (error) {
      next(error);
    }
  }

  static async getOpportunityById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const opportunity = await OpportunityService.getOpportunityById(id, user);
      sendSuccess(res, opportunity);
    } catch (error) {
      next(error);
    }
  }

  static async createOpportunity(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createOpportunitySchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.role === 'SUPER_ADMIN' ? undefined : user?.institutionId?.toString();

      const opportunity = await OpportunityService.createOpportunity(parsed, institutionId);
      sendSuccess(res, opportunity, 201);
    } catch (error) {
      next(error);
    }
  }

  // Applications Endpoints
  static async createApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const parsed = createApplicationSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required to apply for opportunities');
      }

      const application = await OpportunityService.createApplication(
        parsed.opportunityId,
        parsed.resumeId,
        parsed.stage,
        parsed.notes,
        institutionId,
        userId
      );
      sendSuccess(res, application, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getStudentApplications(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const applications = await OpportunityService.getStudentApplications(institutionId, userId);
      sendSuccess(res, applications);
    } catch (error) {
      next(error);
    }
  }

  static async updateApplicationStage(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const parsed = updateApplicationStageSchema.parse(req.body);
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();
      const userId = user?.userId || user?._id?.toString();

      const updated = await OpportunityService.updateApplicationStage(
        id,
        parsed.stage,
        parsed.notes,
        parsed.interviewDate,
        parsed.offerDetails,
        institutionId,
        userId
      );
      sendSuccess(res, updated);
    } catch (error) {
      next(error);
    }
  }

  static async deleteApplication(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();

      const result = await OpportunityService.deleteApplication(id, userId);
      sendSuccess(res, result);
    } catch (error) {
      next(error);
    }
  }

  static async getPlacementAnalytics(req: Request, res: Response, next: NextFunction) {
    try {
      const user = (req as any).user;
      const institutionId = user?.institutionId?.toString();

      if (!institutionId) {
        throw new ValidationError('Institution context required');
      }

      const analytics = await OpportunityService.getPlacementAnalytics(institutionId);
      sendSuccess(res, analytics);
    } catch (error) {
      next(error);
    }
  }
}
