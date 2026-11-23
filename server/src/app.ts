import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import { config } from './config';
import { authRouter } from './modules/auth/auth.routes';
import { tenantRouter } from './modules/tenant/tenant.routes';
import { studentRouter } from './modules/student/student.routes';
import { codingRouter } from './modules/coding/coding.routes';
import { aptitudeRouter } from './modules/aptitude/aptitude.routes';
import { roadmapRouter } from './modules/roadmap/roadmap.routes';
import { leaderboardRouter } from './modules/leaderboard/leaderboard.routes';
import { assessmentRouter } from './modules/assessment/assessment.routes';
import resumeRouter from './modules/resume/resume.routes';
import { opportunityRouter, applicationRouter } from './modules/opportunity/opportunity.routes';
import subscriptionRouter from './modules/subscription/subscription.routes';
import { errorHandler } from './core/middleware/errorHandler';
import { sendSuccess } from './core/utils/response';
import { NotFoundError } from './core/utils/appError';

export const createApp = (): Application => {
  const app = express();

  // Security Headers
  app.use(helmet());

  // CORS configuration
  app.use(
    cors({
      origin: [config.clientUrl, 'http://localhost:3000', 'http://127.0.0.1:3000'],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Rate Limiting (1,000 requests per 15 minutes per IP)
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 1000,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      data: null,
      error: { code: 'RATE_LIMIT_EXCEEDED', message: 'Too many requests. Please try again later.' },
    },
  });
  app.use(limiter);

  // Core Parsers & Compression
  app.use(compression());
  app.use(cookieParser());
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Logging in non-test mode
  if (config.env !== 'test') {
    app.use(morgan('dev'));
  }

  // Root landing endpoint
  app.get('/', (_req: Request, res: Response) => {
    sendSuccess(res, {
      service: 'Swadhyaayi Enterprise API',
      status: 'ONLINE',
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      health: '/api/health',
    });
  });

  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    sendSuccess(res, {
      status: 'UP',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.env,
    });
  });

  // API Routes
  app.use('/api/v1/auth', authRouter);
  app.use('/api/v1/tenants', tenantRouter);
  app.use('/api/v1/students', studentRouter);
  app.use('/api/v1/coding', codingRouter);
  app.use('/api/v1/aptitude', aptitudeRouter);
  app.use('/api/v1/roadmaps', roadmapRouter);
  app.use('/api/v1/leaderboards', leaderboardRouter);
  app.use('/api/v1/assessments', assessmentRouter);
  app.use('/api/v1/resumes', resumeRouter);
  app.use('/api/v1/opportunities', opportunityRouter);
  app.use('/api/v1/applications', applicationRouter);
  app.use('/api/v1/subscriptions', subscriptionRouter);

  // 404 Fallback
  app.use((_req: Request, _res: Response, next) => {
    next(new NotFoundError('The requested endpoint does not exist on this server'));
  });

  // Global Error Handler
  app.use(errorHandler);

  return app;
};
