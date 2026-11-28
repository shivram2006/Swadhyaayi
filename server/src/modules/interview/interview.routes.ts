import { Router, Request, Response, NextFunction } from 'express';
import { authenticateToken } from '../../core/middleware/authMiddleware';
import { Readable } from 'stream';

export const interviewRouter = Router();

const AVATAR_ENGINE_URL = process.env.AVATAR_ENGINE_URL || 'http://127.0.0.1:8001';
const AVATAR_ENGINE_API_KEY = process.env.AVATAR_ENGINE_API_KEY || '';

function engineHeaders(extra: Record<string, string> = {}): Record<string, string> {
  const headers: Record<string, string> = { ...extra };
  if (AVATAR_ENGINE_API_KEY) {
    headers['x-avatar-key'] = AVATAR_ENGINE_API_KEY;
  }
  return headers;
}

interviewRouter.get('/media/:jobId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jobId = Array.isArray(req.params.jobId) ? req.params.jobId[0] : req.params.jobId;
    const upstream = await fetch(`${AVATAR_ENGINE_URL}/api/avatar/media/${encodeURIComponent(jobId)}`, {
      headers: engineHeaders(),
    });
    if (!upstream.ok) {
      res.status(upstream.status).json({ success: false, error: { message: 'Avatar media not found' } });
      return;
    }
    const contentType = upstream.headers.get('content-type') || 'video/mp4';
    res.setHeader('Content-Type', contentType);
    res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
    const len = upstream.headers.get('content-length');
    if (len) res.setHeader('Content-Length', len);
    if (upstream.body) {
      Readable.fromWeb(upstream.body as any).pipe(res);
    } else {
      const buf = Buffer.from(await upstream.arrayBuffer());
      res.send(buf);
    }
  } catch (err) {
    next(err);
  }
});

interviewRouter.use(authenticateToken);

interviewRouter.get('/starter-questions', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const upstream = await fetch(`${AVATAR_ENGINE_URL}/api/avatar/starter-questions`, {
      headers: engineHeaders(),
    });
    const data = await upstream.json();
    res.status(upstream.status).json({ success: upstream.ok, data });
  } catch (err) {
    next(err);
  }
});

interviewRouter.post('/prerender-basics', async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const upstream = await fetch(`${AVATAR_ENGINE_URL}/api/avatar/prerender-basics`, {
      method: 'POST',
      headers: engineHeaders(),
    });
    const data = await upstream.json();
    res.status(upstream.status).json({ success: upstream.ok, data });
  } catch (err) {
    next(err);
  }
});

interviewRouter.post('/speech', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const upstream = await fetch(`${AVATAR_ENGINE_URL}/api/avatar/speech`, {
      method: 'POST',
      headers: engineHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(req.body),
    });
    const data = await upstream.json();
    res.status(upstream.status).json({ success: upstream.ok, data });
  } catch (err) {
    next(err);
  }
});

interviewRouter.post('/render', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const upstream = await fetch(`${AVATAR_ENGINE_URL}/api/avatar/render`, {
      method: 'POST',
      headers: engineHeaders({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(req.body),
    });
    const data = await upstream.json();
    res.status(upstream.status).json({ success: upstream.ok, data });
  } catch (err) {
    next(err);
  }
});

interviewRouter.get('/status/:jobId', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const jobId = Array.isArray(req.params.jobId) ? req.params.jobId[0] : req.params.jobId;
    const upstream = await fetch(`${AVATAR_ENGINE_URL}/api/avatar/status/${encodeURIComponent(jobId)}`, {
      headers: engineHeaders(),
    });
    const data = await upstream.json();
    res.status(upstream.status).json({ success: upstream.ok, data });
  } catch (err) {
    next(err);
  }
});
