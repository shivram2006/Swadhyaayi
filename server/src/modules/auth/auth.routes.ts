import { Router } from 'express';
import { AuthController } from './auth.controller';
import { validateRequest } from '../../core/middleware/validateRequest';
import { registerInstitutionSchema, loginSchema, refreshTokenSchema } from './auth.schema';
import { authenticateToken } from '../../core/middleware/authMiddleware';

export const authRouter = Router();

authRouter.post('/register-institution', validateRequest(registerInstitutionSchema), AuthController.registerInstitution);
authRouter.post('/login', validateRequest(loginSchema), AuthController.login);
authRouter.post('/refresh-token', validateRequest(refreshTokenSchema), AuthController.refreshToken);
authRouter.post('/logout', authenticateToken, AuthController.logout);
authRouter.get('/me', authenticateToken, AuthController.getMe);
