export type OpportunityType = 'FULL_TIME' | 'INTERNSHIP' | 'CONTRACT';
export type WorkMode = 'REMOTE' | 'HYBRID' | 'ON_SITE';
export type OpportunitySource = 'CAMPUS_DRIVE' | 'VERIFIED_PARTNER' | 'LINKEDIN' | 'INTERNSHALA';
export type ApplicationStage = 'SAVED' | 'APPLIED' | 'OA_SCHEDULED' | 'INTERVIEW' | 'OFFERED' | 'REJECTED';

export interface IOpportunityCompany {
  name: string;
  logoUrl?: string;
  website?: string;
  industry?: string;
}

export interface IOpportunitySalary {
  min: number;
  max: number;
  currency: string;
  period: 'LPA' | 'PER_MONTH' | 'PER_HOUR';
}

export interface IOpportunityRequirements {
  skills: string[];
  minCgpa?: number;
  allowedBatches?: string[];
  allowedDepartments?: string[];
}

export interface IOpportunityMatchDetails {
  matchScore: number;
  isEligible: boolean;
  ineligibilityReasons: string[];
  matchedSkills: string[];
  missingSkills: string[];
  breakdown: {
    skills: number;
    cgpa: number;
    batch: number;
    codingMastery: number;
  };
}

export interface IOpportunity {
  _id: string;
  institutionId?: string;
  isExternal?: boolean;
  publisher?: string;
  postedAt?: string;
  title: string;
  company: IOpportunityCompany;
  type: OpportunityType;
  workMode: WorkMode;
  location: string;
  salary: IOpportunitySalary;
  requirements: IOpportunityRequirements;
  description: string;
  applyUrl: string;
  source: OpportunitySource;
  deadline?: string;
  status: 'ACTIVE' | 'EXPIRED' | 'CLOSED';
  matchDetails?: IOpportunityMatchDetails;
  applicationStatus?: {
    isApplied: boolean;
    stage: ApplicationStage | null;
    appliedDate: string | null;
    applicationId?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface IJobApplication {
  _id: string;
  institutionId: string;
  userId: string;
  opportunityId: IOpportunity;
  resumeId?: string;
  stage: ApplicationStage;
  appliedDate?: string;
  stageHistory: Array<{
    stage: ApplicationStage;
    timestamp: string;
    notes?: string;
  }>;
  interviewDate?: string;
  offerDetails?: {
    ctc?: number;
    currency?: string;
    designation?: string;
    accepted?: boolean;
  };
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface IPlacementAnalytics {
  totalOpportunities: number;
  totalApplications: number;
  totalOffers: number;
  interviewPipeline: number;
  averageCtc: number;
  highestCtc: number;
  stageFunnel: {
    SAVED: number;
    APPLIED: number;
    OA_SCHEDULED: number;
    INTERVIEW: number;
    OFFERED: number;
    REJECTED: number;
  };
}
