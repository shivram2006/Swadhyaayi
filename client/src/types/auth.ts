export type UserRole = 'SUPER_ADMIN' | 'INSTITUTION_ADMIN' | 'PLACEMENT_OFFICER' | 'FACULTY' | 'STUDENT';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  institutionId?: string;
  institutionName?: string;
  rollNumber?: string;
  departmentId?: string;
  batchId?: string;
  classId?: string;
  metrics?: {
    codingProblemsSolved: number;
    aptitudeTestsTaken: number;
    globalRank: number;
    institutionRank: number;
    currentStreak: number;
    longestStreak: number;
    totalPoints: number;
  };
}

export interface Institution {
  id: string;
  name: string;
  code: string;
  status: 'ACTIVE' | 'SUSPENDED' | 'EXPIRED' | 'TRIAL';
  settings?: {
    allowedDomains: string[];
    branding: {
      logoUrl?: string;
      primaryColor?: string;
    };
    enableProctoring: boolean;
  };
}

export interface AuthResponse {
  user: User;
  institution?: Institution;
  tokens: {
    accessToken: string;
    refreshToken?: string;
  };
}
