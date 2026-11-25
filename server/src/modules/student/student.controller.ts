import { Request, Response, NextFunction } from 'express';
import { StudentService } from './student.service';
import { sendSuccess } from '../../core/utils/response';
import { UnauthorizedError } from '../../core/utils/appError';

export class StudentController {
  private static getTenantId(req: Request): string {
    const tenantId = req.user?.institutionId;
    if (!tenantId) throw new UnauthorizedError('Tenant context missing from token');
    return tenantId;
  }

  static async createStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const student = await StudentService.createStudent(tenantId, req.body);
      sendSuccess(res, student, 201);
    } catch (error) {
      next(error);
    }
  }

  static async bulkImport(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const { csvContent, defaultPassword } = req.body;
      const result = await StudentService.bulkImportStudents(tenantId, csvContent, defaultPassword);
      sendSuccess(res, result, 200);
    } catch (error) {
      next(error);
    }
  }

  static async getStudents(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const { departmentId, batchId, classId, search, status, page, limit } = req.query;

      const result = await StudentService.getStudents(
        tenantId,
        {
          departmentId: departmentId as string,
          batchId: batchId as string,
          classId: classId as string,
          search: search as string,
          status: status as string,
          page: page ? parseInt(page as string, 10) : 1,
          limit: limit ? parseInt(limit as string, 10) : 20,
        },
        { userId: req.user?.userId, role: req.user?.role }
      );

      sendSuccess(res, result.students, 200, result.meta);
    } catch (error) {
      next(error);
    }
  }

  static async getStudentById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const studentId = Array.isArray(req.params.studentId) ? req.params.studentId[0] : req.params.studentId;
      const student = await StudentService.getStudentById(tenantId, studentId);
      sendSuccess(res, student, 200);
    } catch (error) {
      next(error);
    }
  }

  static async transferStudent(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const studentId = Array.isArray(req.params.studentId) ? req.params.studentId[0] : req.params.studentId;
      const { targetClassId, reason } = req.body;
      const result = await StudentService.transferStudent(tenantId, studentId, targetClassId, reason);
      sendSuccess(res, result, 200);
    } catch (error) {
      next(error);
    }
  }

  static async updateStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const studentId = Array.isArray(req.params.studentId) ? req.params.studentId[0] : req.params.studentId;
      const { status } = req.body;
      const student = await StudentService.updateStudentStatus(tenantId, studentId, status);
      sendSuccess(res, student, 200);
    } catch (error) {
      next(error);
    }
  }

  static async updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const tenantId = StudentController.getTenantId(req);
      const studentId = req.user!.userId; // Students update their own profile
      const student = await StudentService.updateStudentProfile(tenantId, studentId, req.body);
      sendSuccess(res, student, 200);
    } catch (error) {
      next(error);
    }
  }
}
