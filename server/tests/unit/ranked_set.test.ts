import { describe, it, expect, beforeEach } from 'vitest';
import { RankedSetService } from '../../src/modules/leaderboard/rankedSet.service';

describe('RankedSetService Unit Tests', () => {
  const TEST_KEY = 'test:leaderboard:global';

  beforeEach(() => {
    RankedSetService.clear();
  });

  it('should insert members and maintain strict descending score order', () => {
    RankedSetService.addOrUpdate(TEST_KEY, 'student_a', 150);
    RankedSetService.addOrUpdate(TEST_KEY, 'student_b', 300);
    RankedSetService.addOrUpdate(TEST_KEY, 'student_c', 220);

    const range = RankedSetService.getRange(TEST_KEY, 0, -1);

    expect(range).toHaveLength(3);
    expect(range[0].member).toBe('student_b'); // 300
    expect(range[1].member).toBe('student_c'); // 220
    expect(range[2].member).toBe('student_a'); // 150
  });

  it('should update score when member already exists and reposition correctly', () => {
    RankedSetService.addOrUpdate(TEST_KEY, 'alice', 100);
    RankedSetService.addOrUpdate(TEST_KEY, 'bob', 200);

    expect(RankedSetService.getRank(TEST_KEY, 'alice')).toBe(2);

    // Alice earns 250 points, surpassing Bob
    RankedSetService.addOrUpdate(TEST_KEY, 'alice', 350);

    expect(RankedSetService.getRank(TEST_KEY, 'alice')).toBe(1);
    expect(RankedSetService.getRank(TEST_KEY, 'bob')).toBe(2);
    expect(RankedSetService.getCard(TEST_KEY)).toBe(2); // no duplicates
  });

  it('should return 1-based ranks accurately', () => {
    RankedSetService.addOrUpdate(TEST_KEY, 's1', 500);
    RankedSetService.addOrUpdate(TEST_KEY, 's2', 400);
    RankedSetService.addOrUpdate(TEST_KEY, 's3', 300);
    RankedSetService.addOrUpdate(TEST_KEY, 's4', 200);

    expect(RankedSetService.getRank(TEST_KEY, 's1')).toBe(1);
    expect(RankedSetService.getRank(TEST_KEY, 's3')).toBe(3);
    expect(RankedSetService.getRank(TEST_KEY, 'non_existent')).toBeNull();
  });

  it('should support pagination window slicing with getRange', () => {
    for (let i = 1; i <= 10; i++) {
      RankedSetService.addOrUpdate(TEST_KEY, `user_${i}`, i * 10);
    }

    // Top 3 (index 0 to 2)
    const page1 = RankedSetService.getRange(TEST_KEY, 0, 2);
    expect(page1).toHaveLength(3);
    expect(page1[0].member).toBe('user_10'); // 100
    expect(page1[1].member).toBe('user_9');  // 90
    expect(page1[2].member).toBe('user_8');  // 80

    // Next page (index 3 to 5)
    const page2 = RankedSetService.getRange(TEST_KEY, 3, 5);
    expect(page2).toHaveLength(3);
    expect(page2[0].member).toBe('user_7'); // 70
  });

  it('should isolate distinct leaderboard keys', () => {
    RankedSetService.addOrUpdate('key:college_a', 'user_1', 100);
    RankedSetService.addOrUpdate('key:college_b', 'user_2', 200);

    expect(RankedSetService.getCard('key:college_a')).toBe(1);
    expect(RankedSetService.getCard('key:college_b')).toBe(1);
    expect(RankedSetService.getRank('key:college_a', 'user_2')).toBeNull();
  });
});
