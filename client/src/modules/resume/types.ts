export type TargetRole = 'mern' | 'java' | 'aiml' | 'frontend' | 'backend' | 'devops' | 'sde' | 'general';

export interface IResumePersonal {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  codingProfiles?: {
    leetcode?: string;
    codeforces?: string;
    hackerrank?: string;
    swadhyayi?: string;
  };
}

export interface IResumeEducation {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  current: boolean;
  cgpaOrPercentage: string;
  location: string;
}

export interface IResumeSkills {
  languages: string[];
  frameworks: string[];
  databases: string[];
  toolsAndCloud: string[];
  coreFundamentals: string[];
}

export interface IResumeExperience {
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface IResumeProject {
  title: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  startDate?: string;
  endDate?: string;
  bullets: string[];
}

export interface IResumeCertification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface IATSScoreCache {
  totalScore: number;
  sectionScores: {
    completeness: number;
    actionVerbs: number;
    quantifiableMetrics: number;
    keywordMatch: number;
  };
  matchedKeywords: string[];
  missingKeywords: string[];
  formattingIssues: string[];
  detectedMetricsCount: number;
  strongActionVerbsCount: number;
  weakVerbsCount: number;
  lastCalculatedAt: string;
}

export interface IATSAnalysisResult {
  totalScore: number;
  sectionScores: {
    completeness: number;
    actionVerbs: number;
    quantifiableMetrics: number;
    keywordMatch: number;
  };
  matchedKeywords: string[];
  missingKeywords: string[];
  formattingIssues: string[];
  detectedMetricsCount: number;
  strongActionVerbsCount: number;
  weakVerbsCount: number;
  strongActionVerbsFound: string[];
  weakVerbsFound: string[];
  quantifiableBullets: string[];
}

export interface IATSUploadCheckResult {
  analysis: IATSAnalysisResult;
  structuredResume: Partial<IResume>;
  targetRole: TargetRole;
  filename: string;
  extractedTextLength: number;
  snippet: string;
}

export interface IResume {
  _id: string;
  institutionId: string;
  userId: string;
  title: string;
  targetRole: TargetRole;
  isDefault: boolean;
  personalInfo: IResumePersonal;
  summary: string;
  education: IResumeEducation[];
  skills: IResumeSkills;
  experience: IResumeExperience[];
  projects: IResumeProject[];
  certifications: IResumeCertification[];
  achievements: string[];
  atsScoreCache?: IATSScoreCache;
  createdAt: string;
  updatedAt: string;
}
