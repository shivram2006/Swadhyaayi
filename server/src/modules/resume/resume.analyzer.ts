import { TargetRole } from './resume.model';

export const STRONG_ACTION_VERBS = new Set([
  'accelerated', 'achieved', 'administered', 'allocated', 'analyzed', 'architected',
  'automated', 'authored', 'bolstered', 'boosted', 'built', 'calculated', 'centralized',
  'championed', 'clarified', 'collaborated', 'composed', 'computed', 'conceptualized',
  'configured', 'consolidated', 'constructed', 'converted', 'coordinated', 'crafted',
  'customized', 'debugged', 'decreased', 'delivered', 'deployed', 'designed', 'developed',
  'devised', 'diagnosed', 'directed', 'distributed', 'documented', 'doubled', 'drafted',
  'eliminated', 'enabled', 'enforced', 'engineered', 'enhanced', 'established', 'evaluated',
  'executed', 'expanded', 'expedited', 'extracted', 'fabricated', 'facilitated', 'finalized',
  'formulated', 'fostered', 'generated', 'governed', 'guided', 'halted', 'headed', 'identified',
  'implemented', 'improved', 'improvised', 'increased', 'initiated', 'inspected', 'installed',
  'instituted', 'integrated', 'interfaced', 'investigated', 'launched', 'led', 'leveraged',
  'maintained', 'managed', 'mapped', 'maximized', 'measured', 'mediated', 'migrated', 'minimized',
  'modeled', 'moderated', 'modernized', 'monitored', 'negotiated', 'optimized', 'orchestrated',
  'organized', 'originated', 'overhauled', 'oversaw', 'partnered', 'performed', 'piloted',
  'pioneered', 'planned', 'prepared', 'presented', 'prioritized', 'produced', 'programmed',
  'promoted', 'proposed', 'provided', 'published', 're-engineered', 'realized', 'rebuilt',
  'reconciled', 'rectified', 'redesigned', 'reduced', 'refactored', 'refined', 'reformed',
  'regulated', 'reinforced', 'remodeled', 'reorganized', 'replaced', 'restructured', 'revamped',
  'revitalized', 'revolutionized', 'routed', 'saved', 'scaled', 'scheduled', 'secured',
  'simplified', 'simulated', 'slashed', 'solved', 'spearheaded', 'standardized', 'streamlined',
  'strengthened', 'structured', 'supervised', 'synthesized', 'systematized', 'tested',
  'tracked', 'trained', 'transformed', 'transitioned', 'translated', 'tripled', 'troubleshot',
  'unified', 'upgraded', 'utilized', 'validated', 'verified', 'visualized', 'yielded'
]);

export const WEAK_VERBS = new Set([
  'assisted', 'helped', 'worked', 'worked on', 'handled', 'responsible', 'responsible for',
  'tried', 'did', 'learned', 'participated', 'supported', 'attempted', 'got', 'made'
]);

export const TRACK_KEYWORDS: Record<TargetRole, string[]> = {
  mern: [
    'react', 'node.js', 'express', 'mongodb', 'typescript', 'javascript', 'rest api',
    'redux', 'zustand', 'tailwind css', 'jwt', 'docker', 'redis', 'vitest', 'jest',
    'html5', 'css3', 'git', 'full stack', 'mongoose', 'async'
  ],
  java: [
    'java', 'spring boot', 'hibernate', 'microservices', 'rest api', 'sql', 'mysql',
    'postgresql', 'kafka', 'docker', 'junit', 'git', 'oop', 'multithreading',
    'design patterns', 'dsa', 'maven', 'jpa'
  ],
  aiml: [
    'python', 'pytorch', 'tensorflow', 'scikit-learn', 'pandas', 'numpy', 'machine learning',
    'deep learning', 'nlp', 'computer vision', 'sql', 'docker', 'data analysis',
    'neural networks', 'transformers', 'regression', 'classification', 'git'
  ],
  frontend: [
    'react', 'typescript', 'javascript', 'html5', 'css3', 'tailwind css', 'next.js',
    'redux', 'responsive design', 'vite', 'webpack', 'ui/ux', 'dom', 'accessibility',
    'rest api', 'graphql', 'web performance', 'git'
  ],
  backend: [
    'node.js', 'express', 'python', 'go', 'postgresql', 'mongodb', 'redis', 'rest api',
    'graphql', 'docker', 'microservices', 'kubernetes', 'rabbitmq', 'kafka', 'ci/cd',
    'system design', 'caching', 'git', 'sql'
  ],
  devops: [
    'docker', 'kubernetes', 'ci/cd', 'github actions', 'aws', 'terraform', 'linux',
    'bash', 'shell scripting', 'prometheus', 'grafana', 'nginx', 'git', 'ansible',
    'cloud computing', 'monitoring', 'networking'
  ],
  sde: [
    'data structures', 'algorithms', 'c++', 'java', 'python', 'system design',
    'object-oriented programming', 'problem solving', 'operating systems',
    'database management', 'computer networks', 'git', 'sql', 'concurrency'
  ],
  general: [
    'software engineering', 'programming', 'git', 'problem solving', 'data structures',
    'algorithms', 'database', 'rest api', 'debugging', 'testing', 'teamwork', 'agile'
  ],
};

const METRIC_PATTERNS = [
  /\b\d+(\.\d+)?%/i, // percentages (e.g. 45%, 99.9%)
  /\b\d+x\b/i, // multipliers (e.g. 3x, 10x)
  /\b\d+\s*(ms|milliseconds|seconds|mins|hours)\b/i, // latency / time
  /\b\d+[kKmMbB]?\+?\s*(users|requests|records|queries|qps|events|transactions|customers|students|downloads)\b/i, // scale
  /(\$|₹|\bINR\b|\bUSD\b)\s*\d+/i, // monetary / cost
  /\b\d+\+?\s*(endpoints|microservices|servers|clusters|nodes|pipelines|modules|features|testcases|tasks)\b/i, // engineering scale
  /\btop\s*\d+(\.\d+)?%?/i, // ranking (e.g. top 5%, top 10)
  /\b(first|second|third|1st|2nd|3rd)\s*(place|rank|prize)\b/i, // competitive achievements
];

export interface IATSAnalysisResult {
  totalScore: number;
  sectionScores: {
    completeness: number; // Max 25
    actionVerbs: number; // Max 25
    quantifiableMetrics: number; // Max 25
    keywordMatch: number; // Max 25
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

export class ResumeAnalyzer {
  static analyze(resume: any, customJobDescription?: string): IATSAnalysisResult {
    const formattingIssues: string[] = [];
    const allBullets: string[] = [];

    // Gather all bullet points from experience and projects
    if (Array.isArray(resume.experience)) {
      resume.experience.forEach((exp: any) => {
        if (Array.isArray(exp.bullets)) {
          exp.bullets.forEach((b: string) => {
            if (b && typeof b === 'string' && b.trim()) allBullets.push(b.trim());
          });
        }
      });
    }

    if (Array.isArray(resume.projects)) {
      resume.projects.forEach((proj: any) => {
        if (Array.isArray(proj.bullets)) {
          proj.bullets.forEach((b: string) => {
            if (b && typeof b === 'string' && b.trim()) allBullets.push(b.trim());
          });
        }
      });
    }

    // 1. SECTION COMPLETENESS (Max 25 pts)
    let completenessScore = 0;

    // Contact details (Max 5 pts)
    const pInfo = resume.personalInfo || {};
    if (pInfo.fullName && pInfo.fullName.trim().length >= 3) completenessScore += 1;
    else formattingIssues.push('Full name is missing or too short.');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (pInfo.email && emailRegex.test(pInfo.email.trim())) completenessScore += 1;
    else formattingIssues.push('Valid email address is missing.');

    if (pInfo.phone && pInfo.phone.trim().length >= 7) completenessScore += 1;
    else formattingIssues.push('Contact phone number is missing.');

    if (pInfo.linkedinUrl && pInfo.linkedinUrl.includes('linkedin.com')) completenessScore += 1;
    else formattingIssues.push('LinkedIn profile link is missing or invalid.');

    if (pInfo.githubUrl && pInfo.githubUrl.includes('github.com')) completenessScore += 1;
    else formattingIssues.push('GitHub profile link is missing or invalid.');

    // Summary (Max 4 pts)
    const summary = (resume.summary || '').trim();
    if (summary.length >= 40 && summary.length <= 400) {
      completenessScore += 4;
    } else if (summary.length > 0) {
      completenessScore += 2;
      formattingIssues.push('Professional summary should ideally be between 40 and 400 characters for optimal ATS parsing.');
    } else {
      formattingIssues.push('Professional summary section is empty.');
    }

    // Education (Max 4 pts)
    if (Array.isArray(resume.education) && resume.education.length > 0) {
      const primaryEdu = resume.education[0];
      if (primaryEdu.institution && primaryEdu.degree && primaryEdu.fieldOfStudy) {
        completenessScore += 4;
      } else {
        completenessScore += 2;
        formattingIssues.push('Education details are incomplete (ensure Degree, Institution, and Field of Study are filled).');
      }
    } else {
      formattingIssues.push('No education entries found. University degree is critical for campus placement ATS.');
    }

    // Skills (Max 4 pts)
    const skills = resume.skills || {};
    const skillCategoriesPopulated = [
      skills.languages?.length > 0,
      skills.frameworks?.length > 0,
      skills.databases?.length > 0,
      skills.toolsAndCloud?.length > 0,
      skills.coreFundamentals?.length > 0,
    ].filter(Boolean).length;

    if (skillCategoriesPopulated >= 3) {
      completenessScore += 4;
    } else if (skillCategoriesPopulated >= 1) {
      completenessScore += 2;
      formattingIssues.push('Expand technical skills across at least 3 categories (Languages, Frameworks, Databases, Tools).');
    } else {
      formattingIssues.push('Technical skills section is empty.');
    }

    // Projects (Max 4 pts)
    if (Array.isArray(resume.projects) && resume.projects.length >= 2) {
      completenessScore += 4;
    } else if (Array.isArray(resume.projects) && resume.projects.length === 1) {
      completenessScore += 2;
      formattingIssues.push('Include at least 2 technical projects to showcase hands-on application.');
    } else {
      formattingIssues.push('No projects found. Student resumes require at least 2 strong engineering projects.');
    }

    // Experience / Achievements (Max 4 pts)
    const hasExperience = Array.isArray(resume.experience) && resume.experience.length > 0;
    const hasAchievements = Array.isArray(resume.achievements) && resume.achievements.length > 0;
    const hasCertifications = Array.isArray(resume.certifications) && resume.certifications.length > 0;

    if (hasExperience && (hasAchievements || hasCertifications)) {
      completenessScore += 4;
    } else if (hasExperience || hasAchievements || hasCertifications) {
      completenessScore += 3;
    } else {
      formattingIssues.push('Add either Work Experience / Internships, Certifications, or Platform Achievements.');
    }

    completenessScore = Math.min(25, completenessScore);

    // 2. ACTION VERBS & GOOGLE XYZ EVALUATION (Max 25 pts)
    const strongVerbsFound = new Set<string>();
    const weakVerbsFound = new Set<string>();

    allBullets.forEach((bullet) => {
      const words = bullet.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ').split(/\s+/).filter(Boolean);
      // Check first 3 words of bullet for initial verb
      const initialWords = words.slice(0, 3);
      for (const w of initialWords) {
        if (STRONG_ACTION_VERBS.has(w)) {
          strongVerbsFound.add(w);
        }
        if (WEAK_VERBS.has(w)) {
          weakVerbsFound.add(w);
        }
      }
      // Also check if strong verbs exist anywhere in bullet
      for (const w of words) {
        if (STRONG_ACTION_VERBS.has(w)) {
          strongVerbsFound.add(w);
        }
      }
    });

    const strongVerbCount = strongVerbsFound.size;
    const weakVerbCount = weakVerbsFound.size;

    // 6 or more strong unique action verbs = 25 pts
    let actionVerbsScore = Math.round(Math.min(25, (strongVerbCount / 6) * 25));
    // Penalize if weak verbs are used prominently
    if (weakVerbCount > 0) {
      actionVerbsScore = Math.max(0, actionVerbsScore - weakVerbCount * 2);
      formattingIssues.push(`Replace weak verbs (${Array.from(weakVerbsFound).slice(0, 3).join(', ')}) with strong impact verbs (e.g. Architected, Engineered, Optimized).`);
    }

    // 3. QUANTIFIABLE METRICS DETECTION (Max 25 pts)
    const quantifiableBullets: string[] = [];

    allBullets.forEach((bullet) => {
      const hasMetric = METRIC_PATTERNS.some((pattern) => pattern.test(bullet));
      if (hasMetric) {
        quantifiableBullets.push(bullet);
      }
    });

    const metricCount = quantifiableBullets.length;
    let quantifiableMetricsScore = 0;
    if (metricCount >= 4) {
      quantifiableMetricsScore = 25;
    } else if (metricCount === 3) {
      quantifiableMetricsScore = 20;
    } else if (metricCount === 2) {
      quantifiableMetricsScore = 15;
    } else if (metricCount === 1) {
      quantifiableMetricsScore = 8;
    } else {
      quantifiableMetricsScore = 0;
      formattingIssues.push('Zero quantifiable metrics found. Use the Google XYZ formula: "Accomplished [X] measured by [Y] by doing [Z]" (e.g. "reduced latency by 35%").');
    }

    // 4. TECH-STACK KEYWORD DENSITY & ROLE MATCHING (Max 25 pts)
    const targetRole: TargetRole = (resume.targetRole as TargetRole) || 'sde';
    let expectedKeywords: string[] = TRACK_KEYWORDS[targetRole] || TRACK_KEYWORDS.sde;

    // If custom JD provided, extract key technical tokens from JD
    if (customJobDescription && customJobDescription.trim().length > 30) {
      const jdWords = customJobDescription.toLowerCase().replace(/[^a-z0-9\s#+.]/g, ' ').split(/\s+/).filter(Boolean);
      // Filter unique JD keywords matching known engineering keywords
      const allKnownKeywords = Array.from(
        new Set(Object.values(TRACK_KEYWORDS).flat())
      );
      const jdMatches = allKnownKeywords.filter((kw) => customJobDescription.toLowerCase().includes(kw));
      if (jdMatches.length >= 5) {
        expectedKeywords = jdMatches;
      }
    }

    // Search for keywords in entire resume text (skills, summary, project titles, techStacks, bullets)
    const resumeTextBlob = [
      resume.summary || '',
      JSON.stringify(resume.skills || {}),
      JSON.stringify(resume.projects || []),
      JSON.stringify(resume.experience || []),
    ].join(' ').toLowerCase();

    const matchedKeywords: string[] = [];
    const missingKeywords: string[] = [];

    expectedKeywords.forEach((kw) => {
      // Check word boundary or substring for tech terms
      const regex = new RegExp(`\\b${kw.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'i');
      if (regex.test(resumeTextBlob) || resumeTextBlob.includes(kw.toLowerCase())) {
        matchedKeywords.push(kw);
      } else {
        missingKeywords.push(kw);
      }
    });

    const matchRatio = expectedKeywords.length > 0 ? matchedKeywords.length / expectedKeywords.length : 1;
    const keywordScore = Math.round(Math.min(25, matchRatio * 25));

    if (missingKeywords.length > 0) {
      formattingIssues.push(`Target role (${targetRole.toUpperCase()}) missing keywords: ${missingKeywords.slice(0, 5).join(', ')}.`);
    }

    const totalScore = Math.min(
      100,
      Math.max(0, completenessScore + actionVerbsScore + quantifiableMetricsScore + keywordScore)
    );

    return {
      totalScore,
      sectionScores: {
        completeness: completenessScore,
        actionVerbs: actionVerbsScore,
        quantifiableMetrics: quantifiableMetricsScore,
        keywordMatch: keywordScore,
      },
      matchedKeywords,
      missingKeywords,
      formattingIssues,
      detectedMetricsCount: metricCount,
      strongActionVerbsCount: strongVerbCount,
      weakVerbsCount: weakVerbCount,
      strongActionVerbsFound: Array.from(strongVerbsFound),
      weakVerbsFound: Array.from(weakVerbsFound),
      quantifiableBullets,
    };
  }
}
