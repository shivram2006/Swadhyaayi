import { Router } from 'express';
import { AssessmentController } from './assessment.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';

const router = Router();

router.use(authenticateToken);

// List assessments (Students see targeted tests; Faculty/Admins see all institutional tests)
router.get('/', AssessmentController.getAssessments);

// Faculty / TPO Institutional Submissions & Marks Overview
router.get(
  '/faculty/submissions',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  AssessmentController.getFacultySubmissions
);

router.get(
  '/faculty/results',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  AssessmentController.getFacultyResultsArchive
);

// Create Assessment (Faculty / Placement Officer / Admin)
router.post(
  '/',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  AssessmentController.createAssessment
);

// Get single assessment metadata
router.get('/:id', AssessmentController.getAssessmentById);

// Delete assessment before deadline (Creator Faculty / Admin)
router.delete(
  '/:id',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  AssessmentController.deleteAssessment
);

// Student Test Execution & Proctoring Lifecycle
router.post('/:id/start', requireRoles('STUDENT'), AssessmentController.startSession);
router.post('/:id/telemetry', requireRoles('STUDENT'), AssessmentController.recordTelemetry);
router.post('/:id/save-answer', requireRoles('STUDENT'), AssessmentController.saveAnswer);
router.post('/:id/run-code', requireRoles('STUDENT'), AssessmentController.runCode);
router.post('/:id/submit', requireRoles('STUDENT'), AssessmentController.submitAssessment);

// Faculty / TPO Proctoring & Analytics
router.get(
  '/:id/monitor',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  AssessmentController.getLiveMonitor
);

router.get(
  '/:id/analytics',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  AssessmentController.getAssessmentAnalytics
);

export const assessmentRouter = router;
