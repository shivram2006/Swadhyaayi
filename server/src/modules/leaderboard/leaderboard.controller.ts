import { Request, Response, NextFunction } from 'express';
import { LeaderboardService } from './leaderboard.service';
import { sendSuccess } from '../../core/utils/response';
import { LeaderboardScope, LeaderboardMetric, LeaderboardTimeframe } from './leaderboard.types';
import { User } from '../user/user.model';

export class LeaderboardController {
  static async getLeaderboard(req: Request, res: Response, next: NextFunction) {
    try {
      const scope = (req.query.scope as LeaderboardScope) || 'GLOBAL';
      const metric = (req.query.metric as LeaderboardMetric) || 'OVERALL';
      const timeframe = (req.query.timeframe as LeaderboardTimeframe) || 'ALL_TIME';
      const page = req.query.page ? parseInt(req.query.page as string, 10) : 1;
      const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 20;
      const search = req.query.search as string | undefined;
      const targetInstitutionId = req.query.institutionId as string | undefined;

      const user = (req as any).user;
      const userId = user?.userId || user?._id?.toString();
      let userInstitutionId = user?.institutionId?.toString();
      let userClassId: string | undefined = req.query.classId as string | undefined;

      // If user is authenticated and requesting CLASS scope without explicit classId, retrieve from user doc
      if (userId && !userClassId && scope === 'CLASS') {
        const studentDoc = await User.findById(userId).select('classId institutionId').lean();
        if (studentDoc) {
          userClassId = studentDoc.classId?.toString();
          if (!userInstitutionId) {
            userInstitutionId = studentDoc.institutionId?.toString();
          }
        }
      }

      const leaderboard = await LeaderboardService.getLeaderboard({
        scope,
        metric,
        timeframe,
        page,
        limit,
        search,
        userId,
        userInstitutionId,
        userClassId,
        targetInstitutionId,
      });

      sendSuccess(res, leaderboard);
    } catch (error) {
      next(error);
    }
  }
}
