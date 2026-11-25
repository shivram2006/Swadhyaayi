import { Request, Response, NextFunction } from 'express';
import { TenantService } from './tenant.service';
import { sendSuccess } from '../../core/utils/response';
import { UnauthorizedError } from '../../core/utils/appError';

export class TenantController {
  private static getTenantId(req: Request): string {
    const tenantId = req.user?.institutionId;
    if (!tenantId) {
      throw new UnauthorizedError('Tenant context missing from token');
    }
    return tenantId;
  }

  static async createDepartment(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const dept = await TenantService.createDepartment(tenantId, req.body);
      sendSuccess(res, dept, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getDepartments(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const depts = await TenantService.getDepartments(tenantId);
      sendSuccess(res, depts, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createBatch(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const batch = await TenantService.createBatch(tenantId, req.body);
      sendSuccess(res, batch, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getBatches(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const batches = await TenantService.getBatches(tenantId);
      sendSuccess(res, batches, 200);
    } catch (error) {
      next(error);
    }
  }

  static async upgradeBatch(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const batchId = Array.isArray(req.params.batchId) ? req.params.batchId[0] : req.params.batchId;
      const batch = await TenantService.upgradeBatch(tenantId, batchId);
      sendSuccess(res, batch, 200);
    } catch (error) {
      next(error);
    }
  }

  static async createClass(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const newClass = await TenantService.createClass(tenantId, req.body);
      sendSuccess(res, newClass, 201);
    } catch (error) {
      next(error);
    }
  }

  static async getClasses(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const classes = await TenantService.getClasses(tenantId);
      sendSuccess(res, classes, 200);
    } catch (error) {
      next(error);
    }
  }

  static async getTenantOverview(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const overview = await TenantService.getTenantOverview(tenantId);
      sendSuccess(res, overview, 200);
    } catch (error) {
      next(error);
    }
  }

  static async getFacultyMembers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const faculty = await TenantService.getFacultyMembers(tenantId);
      sendSuccess(res, faculty, 200);
    } catch (error) {
      next(error);
    }
  }

  static async getMyCohorts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = req.user!.userId;
      const cohorts = await TenantService.getMyAssignedCohorts(userId);
      sendSuccess(res, cohorts, 200);
    } catch (error) {
      next(error);
    }
  }

  static async assignFacultyCohorts(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = TenantController.getTenantId(req);
      const facultyId = Array.isArray(req.params.facultyId) ? req.params.facultyId[0] : req.params.facultyId;
      const updated = await TenantService.assignFacultyCohorts(tenantId, facultyId, req.body.cohorts || []);
      sendSuccess(res, updated, 200);
    } catch (error) {
      next(error);
    }
  }
}
