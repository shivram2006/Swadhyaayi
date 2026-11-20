import { Response } from 'express';

export interface ApiResponse<T = any> {
  success: boolean;
  data: T | null;
  error: {
    code: string;
    message: string;
    details?: any;
  } | null;
  meta?: {
    page?: number;
    limit?: number;
    totalCount?: number;
    totalPages?: number;
  };
}

export const sendSuccess = <T>(res: Response, data: T, statusCode: number = 200, meta?: ApiResponse['meta']): Response => {
  const payload: ApiResponse<T> = {
    success: true,
    data,
    error: null,
    ...(meta ? { meta } : {}),
  };
  return res.status(statusCode).json(payload);
};

export const sendError = (
  res: Response,
  message: string,
  statusCode: number = 500,
  errorCode: string = 'INTERNAL_ERROR',
  details?: any
): Response => {
  const payload: ApiResponse = {
    success: false,
    data: null,
    error: {
      code: errorCode,
      message,
      ...(details ? { details } : {}),
    },
  };
  return res.status(statusCode).json(payload);
};
