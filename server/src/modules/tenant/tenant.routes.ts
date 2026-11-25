import { Router } from 'express';
import { TenantController } from './tenant.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';
import { validateRequest } from '../../core/middleware/validateRequest';
import { createDepartmentSchema, createBatchSchema, createClassSchema, upgradeBatchSchema } from './tenant.schema';

export const tenantRouter = Router();

// All tenant routes require authentication
tenantRouter.use(authenticateToken);

// Department management
tenantRouter.get('/departments', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY', 'STUDENT'), TenantController.getDepartments);
tenantRouter.post(
  '/departments',
  requireRoles('INSTITUTION_ADMIN'),
  validateRequest(createDepartmentSchema),
  TenantController.createDepartment
);

// Batch management
tenantRouter.get('/batches', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'), TenantController.getBatches);
tenantRouter.post(
  '/batches',
  requireRoles('INSTITUTION_ADMIN'),
  validateRequest(createBatchSchema),
  TenantController.createBatch
);
tenantRouter.post(
  '/batches/:batchId/upgrade',
  requireRoles('INSTITUTION_ADMIN'),
  validateRequest(upgradeBatchSchema),
  TenantController.upgradeBatch
);

// Class management
tenantRouter.get('/classes', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'), TenantController.getClasses);
tenantRouter.post(
  '/classes',
  requireRoles('INSTITUTION_ADMIN'),
  validateRequest(createClassSchema),
  TenantController.createClass
);

// Institutional Overview
tenantRouter.get('/overview', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'), TenantController.getTenantOverview);

// Faculty Cohort Assignment (Course, Semester, Section)
tenantRouter.get('/faculty', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'), TenantController.getFacultyMembers);
tenantRouter.get('/faculty/my-cohorts', requireRoles('FACULTY', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'), TenantController.getMyCohorts);
tenantRouter.put('/faculty/:facultyId/cohorts', requireRoles('INSTITUTION_ADMIN'), TenantController.assignFacultyCohorts);
