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

const ROLE_TECH_QUESTIONS: Record<string, { title: string; text: string }[]> = {
  'Software Engineer (SDE)': [
    { title: 'Time & space complexity', text: 'How do you analyze time and space complexity when optimizing a slow algorithm in production?' },
    { title: 'Data structures choice', text: 'When would you choose a hash map versus a balanced binary search tree or trie?' },
    { title: 'API & database scaling', text: 'How would you scale a backend API and database experiencing high read and write traffic?' },
    { title: 'Debugging production issue', text: 'Walk me through how you debug a memory leak or intermittent timeout in production.' },
    { title: 'Concurrency & async', text: 'Explain how you handle race conditions and asynchronous tasks safely in your codebase.' },
    { title: 'Testing strategy', text: 'How do you structure unit, integration, and end-to-end tests for critical features?' },
    { title: 'System design basics', text: 'Design a URL shortener or rate limiter. What components and storage would you use?' },
  ],
  'Frontend Developer': [
    { title: 'React rendering & performance', text: 'How do React reconciliation and memoization hooks prevent unnecessary re-renders?' },
    { title: 'State management', text: 'How do you decide between local component state, context, and external state stores?' },
    { title: 'Browser performance', text: 'How do you diagnose and improve Core Web Vitals like LCP and CLS on a heavy web app?' },
    { title: 'Accessibility & responsive UI', text: 'What practices do you follow to make interactive forms and modals accessible with keyboard navigation?' },
    { title: 'Async UI & error handling', text: 'How do you handle race conditions, stale responses, and retries in frontend API calls?' },
    { title: 'CSS & layout architecture', text: 'How do you structure reusable design systems and responsive layouts without CSS bloat?' },
    { title: 'Security on the client', text: 'How do you protect a single-page application against XSS and insecure token storage?' },
  ],
  'Backend Developer': [
    { title: 'REST API & validation', text: 'What are your best practices for designing idempotent REST APIs and strict input validation?' },
    { title: 'SQL indexing & queries', text: 'How do database indexes work internally, and when can too many indexes hurt performance?' },
    { title: 'Caching strategies', text: 'Explain cache-aside versus write-through caching, and how you handle cache invalidation.' },
    { title: 'Authentication & RBAC', text: 'How do you design secure JWT authentication with refresh token rotation and role-based access control?' },
    { title: 'Queues & background jobs', text: 'When should a task be offloaded to a background worker queue instead of running in the HTTP request?' },
    { title: 'Transactions & locking', text: 'How do ACID transactions and isolation levels prevent dirty reads or double-spending bugs?' },
    { title: 'Observability & logging', text: 'What metrics, structured logs, and alerts do you set up for a critical microservice?' },
  ],
  'Full Stack Developer': [
    { title: 'End-to-end feature flow', text: 'Walk me through how you design a feature from database schema to API contract and React UI.' },
    { title: 'SQL vs NoSQL tradeoffs', text: 'How do you decide between a relational database and a document store for a new product?' },
    { title: 'Auth & session security', text: 'How do you keep sessions, cookies, and CORS policies secure across frontend and backend?' },
    { title: 'Performance bottlenecks', text: 'If a page takes four seconds to load, how do you pinpoint whether the bottleneck is frontend, network, or DB?' },
    { title: 'Error boundaries & retries', text: 'How do you ensure graceful degradation when an external third-party API goes down?' },
    { title: 'Deployment & CI/CD', text: 'What checks do you automate in CI/CD before deploying full-stack changes to production?' },
    { title: 'Code maintainability', text: 'How do you refactor growing business logic so both frontend and backend stay clean and testable?' },
  ],
  'Data Analyst / ML': [
    { title: 'Data cleaning & missing values', text: 'How do you handle missing values, outliers, and skewed distributions before modeling?' },
    { title: 'SQL & aggregations', text: 'How do window functions in SQL help solve ranking or rolling-average analytics problems?' },
    { title: 'Bias-variance tradeoff', text: 'Explain overfitting versus underfitting and how cross-validation helps you tune models.' },
    { title: 'Evaluation metrics', text: 'When is precision-recall or F1 score much better than raw accuracy?' },
    { title: 'Feature engineering', text: 'Give an example of feature engineering that significantly improved a model or dashboard insight.' },
    { title: 'A/B testing', text: 'How do you design an A/B test and check statistical significance before shipping a change?' },
    { title: 'Model deployment', text: 'How do you monitor data drift and model performance after deploying an ML service?' },
  ],
};

interviewRouter.post('/session-questions', async (req: Request, res: Response) => {
  const interviewType = req.body?.interviewType === 'technical' ? 'technical' : 'hr';
  const role = String(req.body?.role || 'Software Engineer (SDE)').trim();

  const intro = {
    id: 'q1_intro',
    title: 'Tell me about yourself',
    text: `Hello, I am Anjali Sharma. Welcome to your ${interviewType === 'technical' ? 'Technical' : 'HR'} mock interview for the ${role} role. To begin, please tell me about yourself, your background, and your key projects.`,
    state: 'smiling',
  };

  if (interviewType === 'hr') {
    const hrQuestions = [
      intro,
      { id: 'q2_role', title: `Why ${role}`, text: `Why are you interested in this ${role} position, and what excites you about working in this domain?`, state: 'encouraging' },
      { id: 'q3_strength', title: 'Core strengths', text: 'What would you consider your greatest professional strengths, and how have they helped your team?', state: 'listening' },
      { id: 'q4_weakness', title: 'Area of improvement', text: 'What is one skill or habit you are currently working to improve, and what steps are you taking?', state: 'listening' },
      { id: 'q5_teamwork', title: 'Team conflict resolution', text: 'Tell me about a time you disagreed with a teammate or peer. How did you resolve it constructively?', state: 'thinking' },
      { id: 'q6_pressure', title: 'Handling tight deadlines', text: 'Describe a situation where you had to deliver under a tight deadline or shifting requirements.', state: 'speaking' },
      { id: 'q7_ownership', title: 'Mistake & ownership', text: 'Tell me about a mistake you made in a project or task, how you owned up to it, and what you learned.', state: 'listening' },
      { id: 'q8_leadership', title: 'Initiative & leadership', text: 'Share an example where you took initiative without being asked and made a measurable impact.', state: 'encouraging' },
      { id: 'q9_culture', title: 'Ideal work environment', text: 'What kind of team culture and feedback style brings out your best performance?', state: 'smiling' },
      { id: 'q10_goals', title: 'Career goals', text: `Where do you see yourself growing in the next two to three years as a ${role}?`, state: 'smiling' },
    ];
    res.json({ success: true, data: { interviewType, role, questions: hrQuestions } });
    return;
  }

  const rolePool = ROLE_TECH_QUESTIONS[role] || ROLE_TECH_QUESTIONS['Software Engineer (SDE)'];
  const techQuestions = [
    intro,
    { id: 'q2_project', title: 'Architecture of recent project', text: `Walk me through the architecture of your best project relevant to the ${role} role and the key technical tradeoffs you made.`, state: 'listening' },
    ...rolePool.map((q, idx) => ({
      id: `q${idx + 3}_tech`,
      title: q.title,
      text: q.text,
      state: idx % 2 === 0 ? 'speaking' : 'thinking',
    })),
    { id: 'q10_learning', title: 'Debugging & continuous learning', text: `What is the hardest bug or technical challenge you solved recently as an aspiring ${role}, and what did it teach you?`, state: 'encouraging' },
  ];

  res.json({ success: true, data: { interviewType, role, questions: techQuestions.slice(0, 10) } });
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
