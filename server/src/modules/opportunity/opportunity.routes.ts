import { Router } from 'express';
import { OpportunityController } from './opportunity.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';

export const opportunityRouter = Router();
export const applicationRouter = Router();

// --- Opportunity Routes ---
opportunityRouter.use(authenticateToken);

opportunityRouter.get('/', OpportunityController.getOpportunities);
opportunityRouter.get('/external', OpportunityController.getExternalJobs);
opportunityRouter.post(
  '/',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'),
  OpportunityController.createOpportunity
);
opportunityRouter.get('/:id', OpportunityController.getOpportunityById);

// --- Application Routes ---
applicationRouter.use(authenticateToken);

applicationRouter.get('/analytics', requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'), OpportunityController.getPlacementAnalytics);
applicationRouter.post('/', requireRoles('STUDENT'), OpportunityController.createApplication);
applicationRouter.get('/', requireRoles('STUDENT'), OpportunityController.getStudentApplications);
applicationRouter.patch('/:id/stage', requireRoles('STUDENT'), OpportunityController.updateApplicationStage);
applicationRouter.delete('/:id', requireRoles('STUDENT'), OpportunityController.deleteApplication);
