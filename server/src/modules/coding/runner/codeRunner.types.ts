export interface ExecutionResult {
  status: 'ACCEPTED' | 'WRONG_ANSWER' | 'TIME_LIMIT_EXCEEDED' | 'MEMORY_LIMIT_EXCEEDED' | 'RUNTIME_ERROR' | 'COMPILATION_ERROR';
  stdout: string;
  stderr: string;
  executionTimeMs: number;
  memoryUsedKb: number;
  errorLog?: string;
}

export interface ITestCaseInput {
  input: string;
  expectedOutput: string;
}

export interface BatchEvaluationResult {
  overallStatus: 'ACCEPTED' | 'WRONG_ANSWER' | 'TIME_LIMIT_EXCEEDED' | 'MEMORY_LIMIT_EXCEEDED' | 'RUNTIME_ERROR' | 'COMPILATION_ERROR';
  totalCases: number;
  passedCases: number;
  maxExecutionTimeMs: number;
  maxMemoryUsedKb: number;
  firstFailedCase?: {
    caseNumber: number;
    input: string;
    expectedOutput: string;
    actualOutput: string;
    errorLog?: string;
  };
}
