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

const HR_KEYWORDS = [
  'team', 'project', 'learned', 'challenge', 'result', 'improved', 'communication',
  'collaborate', 'deadline', 'ownership', 'feedback', 'goal', 'experience', 'built',
];

const TECH_KEYWORDS = [
  'complexity', 'database', 'api', 'cache', 'index', 'async', 'test', 'scale',
  'architecture', 'latency', 'security', 'token', 'state', 'performance', 'query', 'design',
];

interviewRouter.post('/evaluate', async (req: Request, res: Response) => {
  const interviewType = req.body?.interviewType === 'technical' ? 'technical' : 'hr';
  const role = String(req.body?.role || 'Software Engineer (SDE)').trim();
  const questions: { id: string; title: string; text: string }[] = Array.isArray(req.body?.questions)
    ? req.body.questions
    : [];
  const answersMap: Record<string, { answer?: string }> = req.body?.answers || {};

  const keywords = interviewType === 'technical' ? TECH_KEYWORDS : HR_KEYWORDS;
  let answeredCount = 0;
  let totalWords = 0;
  let totalScoreSum = 0;
  let keywordHitsTotal = 0;

  const perQuestionFeedback = questions.map((q, idx) => {
    const raw = String(answersMap[String(idx)]?.answer || '').trim();
    const words = raw ? raw.split(/\s+/).filter(Boolean) : [];
    const wc = words.length;

    if (!raw) {
      return {
        index: idx,
        title: q.title,
        score: 0,
        status: 'Skipped',
        feedback: 'No response was recorded for this question.',
        idealTip:
          interviewType === 'hr'
            ? 'Use the STAR method (Situation, Task, Action, Result) in 4–6 concise sentences.'
            : 'State the core concept first, then explain tradeoffs and a real project example.',
      };
    }

    answeredCount += 1;
    totalWords += wc;
    const lower = raw.toLowerCase();
    const kwHits = keywords.filter((kw) => lower.includes(kw)).length;
    keywordHitsTotal += kwHits;

    // Score 1..10 based on depth (word count), structure (sentences), and domain relevance
    const sentences = raw.split(/[.!?]+/).filter((s) => s.trim().length > 3).length;
    const depthPts = Math.min(4.5, (wc / 35) * 4.5);
    const structurePts = Math.min(2.5, (sentences / 3) * 2.5);
    const relevancePts = Math.min(3.0, 1.0 + kwHits * 0.65);
    const qScore = Math.max(2, Math.min(10, Math.round(depthPts + structurePts + relevancePts)));
    totalScoreSum += qScore;

    let feedback = 'Good structured response with clear reasoning.';
    if (wc < 15) {
      feedback = 'Answer is quite brief. Elaborate with a concrete example and measurable outcome.';
    } else if (kwHits === 0) {
      feedback =
        interviewType === 'technical'
          ? 'Clear explanation, though adding specific technical terms and tradeoffs would strengthen it.'
          : 'Clear answer; tying it back to specific team impact or results will make it stronger.';
    }

    return {
      index: idx,
      title: q.title,
      score: qScore,
      status: 'Answered',
      feedback,
      idealTip:
        interviewType === 'hr'
          ? 'Highlight your specific contribution and quantify the outcome where possible.'
          : 'Mention time/space or scalability tradeoffs to show senior-level engineering judgment.',
    };
  });

  const totalQs = Math.max(1, questions.length);
  const completenessScore = Math.round((answeredCount / totalQs) * 100);
  const avgQ = answeredCount > 0 ? totalScoreSum / answeredCount : 0;
  const communicationScore = answeredCount > 0 ? Math.min(100, Math.round(avgQ * 9.5 + (totalWords / answeredCount >= 25 ? 5 : 0))) : 0;
  const technicalOrRoleFitScore = answeredCount > 0 ? Math.min(100, Math.round(avgQ * 8.5 + Math.min(15, keywordHitsTotal * 2))) : 0;
  const clarityScore = answeredCount > 0 ? Math.min(100, Math.round(avgQ * 9.2)) : 0;

  const overallScore = Math.round(
    completenessScore * 0.30 +
      communicationScore * 0.25 +
      technicalOrRoleFitScore * 0.25 +
      clarityScore * 0.20
  );

  let grade = 'Needs Practice';
  let verdict = 'Keep practicing structured answers and complete all 10 questions.';
  if (overallScore >= 82) {
    grade = 'Excellent';
    verdict = `Strong performance! You are well-prepared for ${role} ${interviewType === 'technical' ? 'technical' : 'HR'} rounds.`;
  } else if (overallScore >= 65) {
    grade = 'Good';
    verdict = `Solid foundation for ${role}. Adding deeper examples and tradeoffs will push you to the top tier.`;
  } else if (overallScore >= 45) {
    grade = 'Average';
    verdict = 'Decent attempt — focus on answering every question with concrete examples.';
  }

  const strengths: string[] = [];
  if (completenessScore >= 80) strengths.push(`Completed ${answeredCount}/${questions.length} questions consistently.`);
  if (answeredCount > 0 && totalWords / answeredCount >= 25) strengths.push('Provided detailed, well-developed responses instead of one-liners.');
  if (keywordHitsTotal >= 4) strengths.push(`Used relevant ${interviewType === 'technical' ? 'engineering & architecture' : 'behavioral & ownership'} terminology.`);
  if (strengths.length === 0) strengths.push('Completed the mock interview flow and practiced speaking/writing under interview structure.');

  const improvements: string[] = [];
  if (completenessScore < 100) improvements.push(`Answer all 10 questions (currently ${questions.length - answeredCount} skipped) for full score.`);
  if (answeredCount === 0 || totalWords / answeredCount < 25) improvements.push('Aim for 3–5 clear sentences per answer with a real project or STAR example.');
  if (keywordHitsTotal < 4) {
    improvements.push(
      interviewType === 'technical'
        ? `Include concrete ${role} concepts (tradeoffs, complexity, caching, testing, or scaling).`
        : 'Include measurable outcomes, teamwork, and ownership details in behavioral stories.'
    );
  }

  res.json({
    success: true,
    data: {
      interviewType,
      role,
      overallScore,
      grade,
      verdict,
      answeredCount,
      totalQuestions: questions.length,
      metrics: {
        communicationScore,
        technicalOrRoleFitScore,
        completenessScore,
        clarityScore,
      },
      strengths,
      improvements,
      perQuestionFeedback,
    },
  });
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
