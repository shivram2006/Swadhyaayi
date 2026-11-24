import { Router } from 'express';
import multer from 'multer';
import { ResumeController } from './resume.controller';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { requireRoles } from '../../core/middleware/rbacMiddleware';

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

const router = Router();

router.use(authenticateToken);

// Upload & Check ATS Score (PDF, DOCX, TXT or raw text)
router.post('/check-ats', upload.single('file'), ResumeController.checkAts);

// Student creates, lists, syncs, analyzes, updates, and deletes resumes
router.post(
  '/',
  requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY', 'STUDENT'),
  ResumeController.createResume
);
router.get('/', ResumeController.getStudentResumes);
router.get('/sync-profile', requireRoles('STUDENT'), ResumeController.syncProfile);
router.post('/analyze-raw', ResumeController.analyzeRaw);
router.get('/:id', ResumeController.getResumeById);
router.put('/:id', requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER', 'FACULTY', 'STUDENT'), ResumeController.updateResume);
router.delete('/:id', requireRoles('SUPER_ADMIN', 'INSTITUTION_ADMIN', 'STUDENT'), ResumeController.deleteResume);
router.post('/:id/analyze', ResumeController.analyzeResume);

export default router;
