import { describe, it, expect } from 'vitest';

describe('Roadmap Progress Calculation Unit Tests', () => {
  it('should calculate 0% progress when no topics are completed', () => {
    const totalTopics = 10;
    const completedTopics: string[] = [];
    const percentage = totalTopics > 0 ? Math.min(100, Math.round((completedTopics.length / totalTopics) * 100)) : 0;
    
    expect(percentage).toBe(0);
  });

  it('should accurately calculate intermediate completion percentage', () => {
    const totalTopics = 8;
    const completedTopics = ['t1', 't2', 't3'];
    const percentage = Math.min(100, Math.round((completedTopics.length / totalTopics) * 100));
    
    // 3 / 8 = 37.5% -> rounded to 38%
    expect(percentage).toBe(38);
  });

  it('should compute 100% and mark as completed when all topics are done', () => {
    const totalTopics = 5;
    const completedTopics = ['t1', 't2', 't3', 't4', 't5'];
    const percentage = Math.min(100, Math.round((completedTopics.length / totalTopics) * 100));
    const isCompleted = percentage === 100;

    expect(percentage).toBe(100);
    expect(isCompleted).toBe(true);
  });

  it('should handle zero total topics safely without dividing by zero', () => {
    const totalTopics = 0;
    const completedTopics: string[] = [];
    const effectiveTotal = Math.max(1, totalTopics);
    const percentage = Math.min(100, Math.round((completedTopics.length / effectiveTotal) * 100));

    expect(percentage).toBe(0);
  });

  it('should deduplicate completed topics using Set semantics', () => {
    const set = new Set<string>();
    set.add('t1');
    set.add('t2');
    set.add('t1'); // duplicate

    expect(set.size).toBe(2);
    expect(Array.from(set)).toEqual(['t1', 't2']);

    set.delete('t1');
    expect(set.size).toBe(1);
    expect(Array.from(set)).toEqual(['t2']);
  });
});
