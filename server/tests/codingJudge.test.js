const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');

const { CodeHarnessBuilder } = require(path.resolve(__dirname, '../dist/modules/coding/runner/codeHarness'));
const { DriverGenerator } = require(path.resolve(__dirname, '../dist/modules/coding/runner/driverGenerator'));
const { TestCaseComparator } = require(path.resolve(__dirname, '../dist/modules/coding/runner/testCaseComparator'));
const { SandboxRunner } = require(path.resolve(__dirname, '../dist/modules/coding/runner/sandboxRunner'));

test('CodeHarnessBuilder: returns raw code when driverCode is absent', () => {
  const raw = 'int main() { return 0; }';
  assert.equal(CodeHarnessBuilder.assemble('cpp', raw), raw);
});

test('CodeHarnessBuilder: strips duplicate C++ main() and injects <bits/stdc++.h>', () => {
  const user = 'class Solution { public: int f(int x) { return x; } };\nint main() { return 99; }';
  const driver = 'int main() { cout << Solution().f(5); return 0; }';
  const out = CodeHarnessBuilder.assemble('cpp', user, driver);
  assert.ok(out.includes('#include <bits/stdc++.h>'));
  assert.equal((out.match(/\bint\s+main\s*\(/g) || []).length, 1);
  assert.ok(out.includes('Solution().f(5)'));
});

test('CodeHarnessBuilder: normalizes Java public class Solution', () => {
  const user = 'public class Solution { public int f(int x) { return x; } }';
  const driver = 'public class Main { public static void main(String[] args) {} }';
  const out = CodeHarnessBuilder.assemble('java', user, driver);
  assert.ok(!out.includes('public class Solution'));
  assert.ok(out.includes('class Solution'));
  assert.ok(out.includes('public class Main'));
});

test('DriverGenerator: infers Two Sum multi-param types (int[], int -> int[])', () => {
  const bundle = DriverGenerator.generateFromCases('Two Sum', [
    { input: '[2,7,11,15]\n9', expectedOutput: '[0, 1]' },
  ]);
  assert.equal(bundle.methodName, 'twoSum');
  assert.deepEqual(bundle.params, [
    { name: 'arg0', type: 'int[]' },
    { name: 'arg1', type: 'int' },
  ]);
  assert.equal(bundle.returnType, 'int[]');
  assert.ok(bundle.starterCode.some((s) => s.language === 'cpp' && s.driverCode));
  assert.ok(bundle.starterCode.some((s) => s.language === 'python' && s.driverCode));
  assert.ok(bundle.starterCode.some((s) => s.language === 'javascript' && s.driverCode));
});

test('DriverGenerator: infers string param for Decode Ways', () => {
  const bundle = DriverGenerator.generateFromCases(
    'Decode Ways',
    [{ input: '12', expectedOutput: '2' }],
    'A string contains digits where 1 maps to A.'
  );
  assert.equal(bundle.params[0].type, 'string');
  assert.equal(bundle.returnType, 'int');
});

test('DriverGenerator: infers 2D matrix for Merge Intervals', () => {
  const bundle = DriverGenerator.generateFromCases('Merge Intervals', [
    { input: '[[1,3],[2,6]]', expectedOutput: '[[1, 6]]' },
  ]);
  assert.equal(bundle.params[0].type, 'int[][]');
  assert.equal(bundle.returnType, 'int[][]');
});

test('TestCaseComparator: handles whitespace and trailing newlines', () => {
  assert.equal(TestCaseComparator.compare('[0, 1]\n', '[0, 1]'), true);
  assert.equal(TestCaseComparator.compare('true\r\n', 'true'), true);
  assert.equal(TestCaseComparator.compare('6', '12'), false);
});

test('SandboxRunner: executes Python, JavaScript, and C++ Solutions and rejects hardcoded cheats', async () => {
  const cases = [
    { input: '[1,2,3]', expectedOutput: '6' },
    { input: '[2,5,5]', expectedOutput: '12' },
  ];
  const bundle = DriverGenerator.generateFromCases('Array Sum', cases);

  const pyDriver = bundle.starterCode.find((s) => s.language === 'python').driverCode;
  const jsDriver = bundle.starterCode.find((s) => s.language === 'javascript').driverCode;
  const cppDriver = bundle.starterCode.find((s) => s.language === 'cpp').driverCode;

  const pyGood = 'class Solution:\n    def arraySum(self, arg0: List[int]) -> int:\n        return sum(arg0)';
  const pyCheat = 'class Solution:\n    def arraySum(self, arg0: List[int]) -> int:\n        return 6';
  const jsGood = 'var arraySum = function(arg0) { return arg0.reduce((a, b) => a + b, 0); };';
  const cppGood = 'class Solution {\npublic:\n    int arraySum(vector<int>& arg0) {\n        int s = 0; for (int x : arg0) s += x; return s;\n    }\n};';

  const rPyGood = await SandboxRunner.evaluateBatch('python', CodeHarnessBuilder.assemble('python', pyGood, pyDriver), cases, 3000);
  const rPyCheat = await SandboxRunner.evaluateBatch('python', CodeHarnessBuilder.assemble('python', pyCheat, pyDriver), cases, 3000);
  const rJsGood = await SandboxRunner.evaluateBatch('javascript', CodeHarnessBuilder.assemble('javascript', jsGood, jsDriver), cases, 3000);
  const rCppGood = await SandboxRunner.evaluateBatch('cpp', CodeHarnessBuilder.assemble('cpp', cppGood, cppDriver), cases, 3000);

  assert.equal(rPyGood.overallStatus, 'ACCEPTED');
  assert.equal(rPyCheat.overallStatus, 'WRONG_ANSWER');
  assert.equal(rJsGood.overallStatus, 'ACCEPTED');
  assert.equal(rCppGood.overallStatus, 'ACCEPTED');
});
