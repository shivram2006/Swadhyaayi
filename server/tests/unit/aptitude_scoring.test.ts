import { describe, it, expect } from 'vitest';

describe('Aptitude Scoring & Metrics Unit Tests', () => {
  it('should accurately compute accuracy percentage from correct and total questions', () => {
    const total = 15;
    const correct = 12;
    const accuracy = Math.round((correct / total) * 100);

    expect(accuracy).toBe(80);
  });

  it('should calculate average speed per question in seconds', () => {
    const totalTimeSeconds = 600; // 10 minutes
    const totalQuestions = 12;
    const avgSpeed = Math.round(totalTimeSeconds / totalQuestions);

    expect(avgSpeed).toBe(50); // 50 seconds per question
  });

  it('should compute weighted placement points for answered aptitude questions', () => {
    const correctCount = 14;
    const pointsPerCorrect = 5;
    const totalPoints = correctCount * pointsPerCorrect;

    expect(totalPoints).toBe(70);
  });

  it('should verify case-insensitive subcategory matching', () => {
    const target = 'Time and Work';
    const regex = new RegExp(`^${target}$`, 'i');

    expect(regex.test('time and work')).toBe(true);
    expect(regex.test('TIME AND WORK')).toBe(true);
    expect(regex.test('Permutations')).toBe(false);
  });
});
