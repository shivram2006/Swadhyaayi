import { Types } from 'mongoose';
import { User } from '../user/user.model';
import {
  LeaderboardScope,
  LeaderboardMetric,
  LeaderboardTimeframe,
  ILeaderboardResponse,
  ILeaderboardEntry,
} from './leaderboard.types';
import { ValidationError } from '../../core/utils/appError';

interface GetLeaderboardParams {
  scope?: LeaderboardScope;
  metric?: LeaderboardMetric;
  timeframe?: LeaderboardTimeframe;
  page?: number;
  limit?: number;
  search?: string;
  userId?: string;
  userInstitutionId?: string;
  userClassId?: string;
  targetInstitutionId?: string;
}

export class LeaderboardService {
  static async getLeaderboard(params: GetLeaderboardParams): Promise<ILeaderboardResponse> {
    const scope = params.scope || 'GLOBAL';
    const metric = params.metric || 'OVERALL';
    const timeframe = params.timeframe || 'ALL_TIME';
    const page = Math.max(1, params.page || 1);
    const limit = Math.min(100, Math.max(1, params.limit || 20));
    const skip = (page - 1) * limit;

    const query: any = { role: 'STUDENT', status: 'ACTIVE' };

    // Apply Scope Filter
    if (scope === 'INSTITUTION') {
      const instId = params.targetInstitutionId || params.userInstitutionId;
      if (!instId || !Types.ObjectId.isValid(instId)) {
        throw new ValidationError('Institution scope requires an active institution ID');
      }
      query.institutionId = new Types.ObjectId(instId);
    } else if (scope === 'CLASS') {
      const classId = params.userClassId;
      if (!classId || !Types.ObjectId.isValid(classId)) {
        throw new ValidationError('Class scope requires the student to be assigned to a class section');
      }
      query.classId = new Types.ObjectId(classId);
    }

    // Search filter
    if (params.search && params.search.trim()) {
      const s = params.search.trim();
      query.$or = [
        { firstName: { $regex: s, $options: 'i' } },
        { lastName: { $regex: s, $options: 'i' } },
        { rollNumber: { $regex: s, $options: 'i' } },
      ];
    }

    // Determine Sorting Criteria based on Metric
    let sortCriteria: any = {};
    let scoreField = 'metrics.totalPoints';

    switch (metric) {
      case 'CODING':
        scoreField = 'metrics.codingScore';
        sortCriteria = { 'metrics.codingScore': -1, 'metrics.codingProblemsSolved': -1, createdAt: 1 };
        break;
      case 'APTITUDE':
        scoreField = 'metrics.aptitudeScore';
        sortCriteria = { 'metrics.aptitudeScore': -1, 'metrics.aptitudeTestsTaken': -1, createdAt: 1 };
        break;
      case 'STREAK':
        scoreField = 'metrics.currentStreak';
        sortCriteria = { 'metrics.currentStreak': -1, 'metrics.totalPoints': -1, createdAt: 1 };
        break;
      case 'OVERALL':
      default:
        scoreField = 'metrics.totalPoints';
        sortCriteria = { 'metrics.totalPoints': -1, 'metrics.codingProblemsSolved': -1, createdAt: 1 };
        break;
    }

    const bypassTenantFilter = scope === 'GLOBAL';
    const findOpts = bypassTenantFilter ? { bypassTenantFilter: true } : undefined;

    // Query Total Count and Page Entries in Parallel
    const countQuery = User.countDocuments(query, findOpts);

    const studentsQuery = User.find(query, null, findOpts)
      .sort(sortCriteria)
      .skip(skip)
      .limit(limit)
      .populate('institutionId', 'name code')
      .populate('departmentId', 'name code')
      .lean();

    const [totalStudents, rawStudents] = await Promise.all([countQuery, studentsQuery]);
    const studentList = Array.isArray(rawStudents) ? rawStudents : [];

    // Format Entries with 1-based Ranks
    const entries: ILeaderboardEntry[] = studentList.map((stu: any, idx: number) => {
      let scoreVal = 0;
      if (metric === 'CODING') scoreVal = stu.metrics?.codingScore || 0;
      else if (metric === 'APTITUDE') scoreVal = stu.metrics?.aptitudeScore || 0;
      else if (metric === 'STREAK') scoreVal = stu.metrics?.currentStreak || 0;
      else scoreVal = stu.metrics?.totalPoints || 0;

      return {
        rank: skip + idx + 1,
        userId: stu._id.toString(),
        name: `${stu.firstName} ${stu.lastName}`.trim(),
        email: stu.email,
        rollNumber: stu.rollNumber,
        avatarUrl: stu.profile?.avatarUrl,
        institutionName: stu.institutionId?.name || 'Swadhyayi Partner Institute',
        institutionCode: stu.institutionId?.code || 'SWAD',
        departmentCode: stu.departmentId?.code || 'ENG',
        score: scoreVal,
        codingProblemsSolved: stu.metrics?.codingProblemsSolved || 0,
        codingScore: stu.metrics?.codingScore || 0,
        aptitudeScore: stu.metrics?.aptitudeScore || 0,
        currentStreak: stu.metrics?.currentStreak || 0,
      };
    });

    // Compute Personal Rank (`myRank`) if requesting user is authenticated
    let myRankInfo = undefined;

    if (params.userId && Types.ObjectId.isValid(params.userId)) {
      const myDoc = await User.findById(params.userId).lean();

      if (myDoc && myDoc.role === 'STUDENT') {
        let myScore = 0;
        if (metric === 'CODING') myScore = myDoc.metrics?.codingScore || 0;
        else if (metric === 'APTITUDE') myScore = myDoc.metrics?.aptitudeScore || 0;
        else if (metric === 'STREAK') myScore = myDoc.metrics?.currentStreak || 0;
        else myScore = myDoc.metrics?.totalPoints || 0;

        // Check if user is already in current page entries
        const existingEntry = entries.find((e) => e.userId === myDoc._id.toString());
        let exactRank: number;

        if (existingEntry) {
          exactRank = existingEntry.rank;
        } else {
          // Count students with strictly higher score in the exact same scope
          const higherQuery: any = { ...query, [scoreField]: { $gt: myScore } };
          delete higherQuery.$or; // Rank in entire scope, independent of search filter

          const higherCount = await User.countDocuments(higherQuery, findOpts);
          exactRank = higherCount + 1;
        }

        const effectiveTotal = Math.max(1, totalStudents);
        const percentile = Math.max(1, Math.round(((effectiveTotal - exactRank + 1) / effectiveTotal) * 100));

        myRankInfo = {
          rank: exactRank,
          percentile,
          score: myScore,
          totalStudents,
        };
      }
    }

    return {
      scope,
      metric,
      timeframe,
      totalStudents,
      page,
      totalPages: Math.ceil(totalStudents / limit) || 1,
      entries,
      myRank: myRankInfo,
    };
  }
}
