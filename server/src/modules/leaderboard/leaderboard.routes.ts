import { Router } from 'express';
import { LeaderboardController } from './leaderboard.controller';
import { optionalAuthenticateToken } from '../../core/middleware/authMiddleware';

const router = Router();

// Retrieve 3-Level Leaderboard (Global, Institution, Class) with optional student rank enrichment
router.get('/', optionalAuthenticateToken, LeaderboardController.getLeaderboard);

export const leaderboardRouter = router;
