export interface ICandidateProfileForMatch {
  skills?: string[];
  cgpa?: number;
  graduationYear?: string;
  codingProblemsSolved?: number;
  departmentId?: string;
}

export interface IOpportunityMatchResult {
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

export class OpportunityMatcher {
  static calculate(
    opportunityRequirements: {
      skills?: string[];
      minCgpa?: number;
      allowedBatches?: string[];
      allowedDepartments?: any[];
    },
    candidate: ICandidateProfileForMatch
  ): IOpportunityMatchResult {
    const ineligibilityReasons: string[] = [];
    const candidateSkillsLower = new Set(
      (candidate.skills || []).map((s) => s.toLowerCase().trim())
    );

    const requiredSkills = opportunityRequirements.skills || [];
    const matchedSkills: string[] = [];
    const missingSkills: string[] = [];

    requiredSkills.forEach((reqSkill) => {
      const lower = reqSkill.toLowerCase().trim();
      let hasMatch = false;
      for (const cSkill of candidateSkillsLower) {
        if (cSkill.includes(lower) || lower.includes(cSkill)) {
          hasMatch = true;
          break;
        }
      }
      if (hasMatch) {
        matchedSkills.push(reqSkill);
      } else {
        missingSkills.push(reqSkill);
      }
    });

    // 1. Skills Score (Max 50 pts)
    const skillsRatio = requiredSkills.length > 0 ? matchedSkills.length / requiredSkills.length : 1;
    const skillsScore = Math.round(Math.min(50, skillsRatio * 50));

    // 2. CGPA Eligibility (Max 20 pts)
    let cgpaScore = 20;
    const minCgpa = opportunityRequirements.minCgpa || 0;
    const candidateCgpa = candidate.cgpa || 0;

    if (minCgpa > 0) {
      if (candidateCgpa < minCgpa) {
        cgpaScore = 0;
        ineligibilityReasons.push(`Minimum CGPA of ${minCgpa} required (Your CGPA: ${candidateCgpa || 'Not provided'})`);
      }
    }

    // 3. Batch Eligibility (Max 15 pts)
    let batchScore = 15;
    const allowedBatches = opportunityRequirements.allowedBatches || [];
    if (allowedBatches.length > 0 && candidate.graduationYear) {
      const isAllowed = allowedBatches.includes(candidate.graduationYear);
      if (!isAllowed) {
        batchScore = 0;
        ineligibilityReasons.push(`Only graduation batches ${allowedBatches.join(', ')} are eligible (Your batch: ${candidate.graduationYear})`);
      }
    }

    // 4. Coding Mastery (Max 15 pts)
    const problemsSolved = candidate.codingProblemsSolved || 0;
    const codingScore = Math.min(15, Math.round((problemsSolved / 30) * 15));

    const totalScore = Math.min(100, Math.max(0, skillsScore + cgpaScore + batchScore + codingScore));
    const isEligible = ineligibilityReasons.length === 0;

    return {
      matchScore: totalScore,
      isEligible,
      ineligibilityReasons,
      matchedSkills,
      missingSkills,
      breakdown: {
        skills: skillsScore,
        cgpa: cgpaScore,
        batch: batchScore,
        codingMastery: codingScore,
      },
    };
  }
}
