import { Router } from 'express';
import { CodingController } from './coding.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';
import { validateRequest } from '../../core/middleware/validateRequest';
import {
  getQuestionsQuerySchema,
  runCodeSchema,
  submitCodeSchema,
  createQuestionSchema,
} from './coding.schema';

export const codingRouter = Router();

codingRouter.use(authenticateToken);

// Problem list with filters (all authenticated users)
codingRouter.get('/', validateRequest(getQuestionsQuerySchema), CodingController.getQuestions);

// Problem details by slug
codingRouter.get('/:slug', CodingController.getQuestionBySlug);

// Run code against sample test cases / custom input
codingRouter.post('/run', validateRequest(runCodeSchema), CodingController.runCode);

// Submit code against hidden test cases
codingRouter.post('/submit', validateRequest(submitCodeSchema), CodingController.submitCode);

// Past submissions for a question
codingRouter.get('/:questionId/submissions', CodingController.getSubmissions);

// Create problem (Faculty & Admins)
codingRouter.post(
  '/',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'FACULTY'),
  validateRequest(createQuestionSchema),
  CodingController.createQuestion
);
