import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../utils/appError';
import { sendError } from '../utils/response';
import { config } from '../../config';

export const errorHandler = (err: Error, req: Request, res: Response, _next: NextFunction): Response => {
  if (err instanceof AppError) {
    return sendError(res, err.message, err.statusCode, err.errorCode, err.details);
  }

  // Handle Zod schema validation errors
  if (err instanceof ZodError || err.name === 'ZodError') {
    const details = (err as ZodError).issues?.map((i) => ({
      field: i.path.join('.'),
      message: i.message,
    }));
    return sendError(res, 'Validation failed for request data', 400, 'VALIDATION_ERROR', details);
  }

  // Handle Mongoose duplicate key error (code 11000)
  if ((err as any).code === 11000) {
    const keys = Object.keys((err as any).keyValue || {});
    return sendError(
      res,
      `Duplicate entry detected for field: ${keys.join(', ')}`,
      409,
      'DUPLICATE_ENTITY_ERROR',
      (err as any).keyValue
    );
  }

  // Log unhandled server errors
  console.error('[UNHANDLED_EXCEPTION]', err);

  const message = config.env === 'production' ? 'Internal server error occurred' : err.message;
  return sendError(res, message, 500, 'INTERNAL_SERVER_ERROR');
};
