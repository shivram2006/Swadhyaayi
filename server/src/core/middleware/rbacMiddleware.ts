import { Request, Response, NextFunction } from 'express';
import { ForbiddenError, UnauthorizedError } from '../utils/appError';

export type UserRole = 'SUPER_ADMIN' | 'INSTITUTION_ADMIN' | 'PLACEMENT_OFFICER' | 'FACULTY' | 'STUDENT';

export const requireRoles = (...allowedRoles: UserRole[]) => {
  return (req: Request, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      return next(new UnauthorizedError('Authentication required'));
    }

    // Super Admin has global platform permissions
    if (req.user.role === 'SUPER_ADMIN') {
      return next();
    }

    if (!allowedRoles.includes(req.user.role as UserRole)) {
      return next(
        new ForbiddenError(
          `Action requires one of the following roles: [${allowedRoles.join(', ')}]. You are '${req.user.role}'`
        )
      );
    }

    next();
  };
};
