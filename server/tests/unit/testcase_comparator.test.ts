import { describe, it, expect } from 'vitest';
import { TestCaseComparator } from '../../src/modules/coding/runner/testCaseComparator';

describe('TestCaseComparator Unit Tests', () => {
  it('should treat identical outputs as matching', () => {
    const actual = '[0, 1]';
    const expected = '[0, 1]';
    expect(TestCaseComparator.compare(actual, expected)).toBe(true);
  });

  it('should ignore Windows vs Unix line endings (CRLF vs LF)', () => {
    const actual = 'line1\r\nline2\r\nline3';
    const expected = 'line1\nline2\nline3';
    expect(TestCaseComparator.compare(actual, expected)).toBe(true);
  });

  it('should strip trailing line spaces and trailing empty lines', () => {
    const actual = 'output with space   \nsecond line  \n\n\n';
    const expected = 'output with space\nsecond line';
    expect(TestCaseComparator.compare(actual, expected)).toBe(true);
  });

  it('should reject different numerical outputs or mismatched data', () => {
    const actual = '[0, 2]';
    const expected = '[0, 1]';
    expect(TestCaseComparator.compare(actual, expected)).toBe(false);
  });

  it('should handle empty strings and nullish values safely', () => {
    expect(TestCaseComparator.compare('', '')).toBe(true);
    expect(TestCaseComparator.compare('   \n  ', '')).toBe(true);
  });
});
