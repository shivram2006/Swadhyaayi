import { Router } from 'express';
import { RoadmapController } from './roadmap.controller';
import { authenticateToken, optionalAuthenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';

const router = Router();

// Public / Authenticated discovery
router.get('/', optionalAuthenticateToken, RoadmapController.getCatalog);
router.get('/:slug', optionalAuthenticateToken, RoadmapController.getRoadmapBySlug);

// Student tracking
router.post('/:slug/enroll', authenticateToken, RoadmapController.enroll);
router.post('/:slug/progress', authenticateToken, RoadmapController.toggleProgress);

// Admin Management (Super Admin & Institution Admin)
router.post(
  '/',
  authenticateToken,
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN'),
  RoadmapController.createRoadmap
);

router.put(
  '/:slug',
  authenticateToken,
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN'),
  RoadmapController.updateRoadmap
);

export const roadmapRouter = router;
