import { describe, it, expect } from 'vitest';
import { SandboxRunner } from '../../src/modules/coding/runner/sandboxRunner';

describe('SandboxRunner Unit Tests', () => {
  it('should successfully execute valid Python code and capture standard output', async () => {
    const code = `
import sys
data = sys.stdin.read().strip()
print(f"Echo: {data}")
`;
    const result = await SandboxRunner.executeSingle('python', code, 'Hello Swadhyayi', 2000);
    expect(result.status).toBe('ACCEPTED');
    expect(result.stdout).toBe('Echo: Hello Swadhyayi');
    expect(result.executionTimeMs).toBeGreaterThan(0);
  });

  it('should successfully execute JavaScript code in sandboxed Node sub-process', async () => {
    const code = `
const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
console.log(input.toUpperCase());
`;
    const result = await SandboxRunner.executeSingle('javascript', code, 'swadhyayi', 2000);
    expect(result.status).toBe('ACCEPTED');
    expect(result.stdout).toBe('SWADHYAYI');
  });

  it('should detect runtime errors and exceptions with error details', async () => {
    const code = `
raise ValueError("Deliberate algorithmic exception")
`;
    const result = await SandboxRunner.executeSingle('python', code, '', 2000);
    expect(result.status).toBe('RUNTIME_ERROR');
    expect(result.stderr).toContain('ValueError');
  });

  it('should terminate infinite loops with TIME_LIMIT_EXCEEDED within timeout limit', async () => {
    const infiniteLoopCode = `
while True:
    pass
`;
    // Pass short 500ms timeout to avoid delaying test suite
    const result = await SandboxRunner.executeSingle('python', infiniteLoopCode, '', 500);
    expect(result.status).toBe('TIME_LIMIT_EXCEEDED');
    expect(result.executionTimeMs).toBeGreaterThanOrEqual(450);
  });

  it('should evaluate batch testcases and detect WRONG_ANSWER with diff', async () => {
    const code = `
import sys
input_num = int(sys.stdin.read().strip())
print(input_num * 2) # Doubler
`;
    const testCases = [
      { input: '2', expectedOutput: '4' },
      { input: '5', expectedOutput: '11' }, // intentional failure: 5*2 = 10 != 11
    ];

    const result = await SandboxRunner.evaluateBatch('python', code, testCases, 2000);
    expect(result.overallStatus).toBe('WRONG_ANSWER');
    expect(result.passedCases).toBe(1);
    expect(result.totalCases).toBe(2);
    expect(result.firstFailedCase?.actualOutput).toBe('10');
    expect(result.firstFailedCase?.expectedOutput).toBe('11');
  });

  it('should successfully compile and execute C++ code using g++', async () => {
    const code = `
#include <iostream>
using namespace std;
int main() {
    cout << "true";
    return 0;
}
`;
    const result = await SandboxRunner.executeSingle('cpp', code, '', 15000);
    expect(result.status).toBe('ACCEPTED');
    expect(result.stdout).toBe('true');
  }, 25000);

  it('should pass stdin input to compiled C++ executable', async () => {
    const code = `
#include <iostream>
#include <string>
using namespace std;
int main() {
    string a, b;
    if (cin >> a >> b) {
        cout << (a == b ? "true" : "false");
    }
    return 0;
}
`;
    const result1 = await SandboxRunner.executeSingle('cpp', code, 'hello hello', 10000);
    expect(result1.status).toBe('ACCEPTED');
    expect(result1.stdout).toBe('true');

    const result2 = await SandboxRunner.executeSingle('cpp', code, 'hello world', 10000);
    expect(result2.status).toBe('ACCEPTED');
    expect(result2.stdout).toBe('false');
  }, 20000);
});
