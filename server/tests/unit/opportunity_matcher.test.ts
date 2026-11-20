import { describe, it, expect } from 'vitest';
import { OpportunityMatcher } from '../../src/modules/opportunity/opportunity.matcher';

describe('Opportunity Matcher Unit Tests', () => {
  const opportunityRequirements = {
    skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
    minCgpa: 7.5,
    allowedBatches: ['2025', '2026'],
  };

  it('should score high (>85) and mark eligible when candidate satisfies all criteria', () => {
    const candidate = {
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'Docker', 'Redis'],
      cgpa: 8.5,
      graduationYear: '2026',
      codingProblemsSolved: 45,
    };

    const result = OpportunityMatcher.calculate(opportunityRequirements, candidate);
    expect(result.isEligible).toBe(true);
    expect(result.ineligibilityReasons.length).toBe(0);
    expect(result.breakdown.skills).toBe(50);
    expect(result.breakdown.cgpa).toBe(20);
    expect(result.breakdown.batch).toBe(15);
    expect(result.breakdown.codingMastery).toBe(15);
    expect(result.matchScore).toBe(100);
    expect(result.matchedSkills.length).toBe(4);
    expect(result.missingSkills.length).toBe(0);
  });

  it('should mark ineligible and give 0 CGPA points when candidate CGPA is below cutoff', () => {
    const candidate = {
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      cgpa: 7.1, // below 7.5
      graduationYear: '2026',
      codingProblemsSolved: 20,
    };

    const result = OpportunityMatcher.calculate(opportunityRequirements, candidate);
    expect(result.isEligible).toBe(false);
    expect(result.breakdown.cgpa).toBe(0);
    expect(result.ineligibilityReasons[0]).toContain('Minimum CGPA of 7.5 required');
  });

  it('should mark ineligible when candidate graduation batch is not allowed', () => {
    const candidate = {
      skills: ['React', 'Node.js', 'MongoDB'],
      cgpa: 8.0,
      graduationYear: '2024', // not in [2025, 2026]
      codingProblemsSolved: 10,
    };

    const result = OpportunityMatcher.calculate(opportunityRequirements, candidate);
    expect(result.isEligible).toBe(false);
    expect(result.breakdown.batch).toBe(0);
    expect(result.ineligibilityReasons[0]).toContain('Only graduation batches 2025, 2026 are eligible');
  });

  it('should accurately calculate partial skill overlap and identify missing skills', () => {
    const candidate = {
      skills: ['react', 'python'], // only matches React
      cgpa: 8.0,
      graduationYear: '2025',
      codingProblemsSolved: 15,
    };

    const result = OpportunityMatcher.calculate(opportunityRequirements, candidate);
    expect(result.isEligible).toBe(true);
    expect(result.matchedSkills).toContain('React');
    expect(result.missingSkills).toContain('Node.js');
    expect(result.missingSkills).toContain('MongoDB');
    expect(result.missingSkills).toContain('TypeScript');
    // 1 matched out of 4 = 25% * 50 = 13 pts (approx 12.5)
    expect(result.breakdown.skills).toBe(13);
  });

  it('should cap coding mastery bonus at 15 points max', () => {
    const superstarCandidate = {
      skills: ['React'],
      cgpa: 9.9,
      graduationYear: '2026',
      codingProblemsSolved: 500,
    };

    const result = OpportunityMatcher.calculate(opportunityRequirements, superstarCandidate);
    expect(result.breakdown.codingMastery).toBe(15);
  });
});
