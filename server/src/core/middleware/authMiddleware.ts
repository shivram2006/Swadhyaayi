import { Request, Response, NextFunction } from 'express';
import { verifyAccessToken, TokenPayload } from '../utils/jwt';
import { UnauthorizedError } from '../utils/appError';
import { runWithTenantContext } from '../context/tenantContext';

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}

export const authenticateToken = (req: Request, _res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return next(new UnauthorizedError('Missing or malformed Authorization header'));
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = payload;

    runWithTenantContext(
      {
        tenantId: payload.institutionId,
        userId: payload.userId,
        role: payload.role,
        isSuperAdmin: payload.role === 'SUPER_ADMIN',
      },
      () => {
        next();
      }
    );
  } catch (err) {
    return next(new UnauthorizedError('Token is invalid or has expired'));
  }
};

export const optionalAuthenticateToken = (req: Request, _res: Response, next: NextFunction): void => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

  if (!token) {
    return next();
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = payload;

    runWithTenantContext(
      {
        tenantId: payload.institutionId,
        userId: payload.userId,
        role: payload.role,
        isSuperAdmin: payload.role === 'SUPER_ADMIN',
      },
      () => {
        next();
      }
    );
  } catch (_err) {
    next();
  }
};

