export type LeaderboardScope = 'GLOBAL' | 'INSTITUTION' | 'CLASS';
export type LeaderboardMetric = 'OVERALL' | 'CODING' | 'APTITUDE' | 'STREAK';
export type LeaderboardTimeframe = 'ALL_TIME' | 'MONTHLY' | 'WEEKLY';

export interface ILeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  email: string;
  rollNumber?: string;
  avatarUrl?: string;
  institutionName?: string;
  institutionCode?: string;
  departmentCode?: string;
  score: number;
  codingProblemsSolved: number;
  codingScore: number;
  aptitudeScore: number;
  currentStreak: number;
}

export interface ILeaderboardMyRank {
  rank: number;
  percentile: number;
  score: number;
  totalStudents: number;
}

export interface ILeaderboardResponse {
  scope: LeaderboardScope;
  metric: LeaderboardMetric;
  timeframe: LeaderboardTimeframe;
  totalStudents: number;
  page: number;
  totalPages: number;
  entries: ILeaderboardEntry[];
  myRank?: ILeaderboardMyRank;
}
