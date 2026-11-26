import { Router } from 'express';
import { SubscriptionController } from './subscription.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';

const router = Router();

// Public / Gateway Webhook (no token required)
router.post('/webhook', SubscriptionController.handleWebhook);

// Protected routes
router.use(authenticateToken);

// Institutional subscription management
router.get(
  '/current',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY'),
  SubscriptionController.getCurrentSubscription
);
router.post(
  '/upgrade',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN'),
  SubscriptionController.upgradeSubscription
);
router.get(
  '/invoices',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER'),
  SubscriptionController.getInvoices
);

// Student subscription activation
router.post(
  '/student/activate',
  requireRoles('STUDENT'),
  SubscriptionController.activateStudentSubscription
);

// Super Admin platform command
router.get('/admin/telemetry', requireRoles('SUPER_ADMIN'), SubscriptionController.getAdminTelemetry);
router.patch('/admin/:id/seats', requireRoles('SUPER_ADMIN'), SubscriptionController.adminAdjustSeats);

export default router;
