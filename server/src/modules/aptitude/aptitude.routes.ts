import { Router } from 'express';
import { AptitudeController } from './aptitude.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';
import { validateRequest } from '../../core/middleware/validateRequest';
import {
  getAptitudeQuestionsSchema,
  checkAnswerSchema,
  submitAptitudeSessionSchema,
  createAptitudeQuestionSchema,
} from './aptitude.schema';

export const aptitudeRouter = Router();

aptitudeRouter.use(authenticateToken);

// Categories summary
aptitudeRouter.get('/categories', AptitudeController.getCategories);

// Questions query
aptitudeRouter.get('/questions', validateRequest(getAptitudeQuestionsSchema), AptitudeController.getQuestions);

// Single answer check (instant explanation in Practice Mode)
aptitudeRouter.post('/check-answer', validateRequest(checkAnswerSchema), AptitudeController.checkAnswer);

// Complete practice / mock session submission
aptitudeRouter.post('/submit-session', validateRequest(submitAptitudeSessionSchema), AptitudeController.submitSession);

// Student accuracy and speed analytics
aptitudeRouter.get('/analytics', AptitudeController.getAnalytics);

// Create MCQ question (Faculty & Admins)
aptitudeRouter.post(
  '/',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'FACULTY'),
  validateRequest(createAptitudeQuestionSchema),
  AptitudeController.createQuestion
);
