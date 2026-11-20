import { Router } from 'express';
import { StudentController } from './student.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';
import { validateRequest } from '../../core/middleware/validateRequest';
import {
  createStudentSchema,
  bulkStudentUploadSchema,
  transferStudentSchema,
  updateStudentStatusSchema,
  updateStudentProfileSchema,
} from './student.schema';

export const studentRouter = Router();

studentRouter.use(authenticateToken);

// Student profile management (by student themselves)
studentRouter.patch('/profile', requireRoles('STUDENT'), validateRequest(updateStudentProfileSchema), StudentController.updateProfile);

// Query students (Admin, Placement Officer, Faculty)
studentRouter.get('/', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'), StudentController.getStudents);
studentRouter.get('/:studentId', requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY', 'STUDENT'), StudentController.getStudentById);

// Administrative operations
studentRouter.post(
  '/',
  requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'),
  validateRequest(createStudentSchema),
  StudentController.createStudent
);

studentRouter.post(
  '/bulk-import',
  requireRoles('INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'),
  validateRequest(bulkStudentUploadSchema),
  StudentController.bulkImport
);

studentRouter.post(
  '/:studentId/transfer',
  requireRoles('INSTITUTION_ADMIN'),
  validateRequest(transferStudentSchema),
  StudentController.transferStudent
);

studentRouter.patch(
  '/:studentId/status',
  requireRoles('INSTITUTION_ADMIN'),
  validateRequest(updateStudentStatusSchema),
  StudentController.updateStatus
);
