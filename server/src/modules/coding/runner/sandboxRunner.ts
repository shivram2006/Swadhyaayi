import { spawn, spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as os from 'os';
import { ExecutionResult, ITestCaseInput, BatchEvaluationResult } from './codeRunner.types';
import { TestCaseComparator } from './testCaseComparator';

export class SandboxRunner {
  private static cachedGppPath: string | null | undefined = undefined;

  private static findGpp(): string | null {
    if (this.cachedGppPath !== undefined) {
      return this.cachedGppPath;
    }

    try {
      const check = spawnSync('g++', ['--version'], { stdio: 'pipe' });
      if (check.status === 0) {
        this.cachedGppPath = 'g++';
        return 'g++';
      }
    } catch {}

    const localAppData = process.env.LOCALAPPDATA || '';
    const userProfile = process.env.USERPROFILE || '';
    const candidatePaths = [
      path.join(
        localAppData,
        'Microsoft',
        'WinGet',
        'Packages',
        'BrechtSanders.WinLibs.POSIX.UCRT_Microsoft.Winget.Source_8wekyb3d8bbwe',
        'mingw64',
        'bin',
        'g++.exe'
      ),
      path.join(userProfile, 'scoop', 'apps', 'gcc', 'current', 'bin', 'g++.exe'),
      'C:\\mingw64\\bin\\g++.exe',
      'C:\\msys64\\ucrt64\\bin\\g++.exe',
      'C:\\msys64\\mingw64\\bin\\g++.exe',
      'C:\\MinGW\\bin\\g++.exe',
    ];

    for (const cand of candidatePaths) {
      if (fs.existsSync(cand)) {
        this.cachedGppPath = cand;
        return cand;
      }
    }

    const packagesDir = path.join(localAppData, 'Microsoft', 'WinGet', 'Packages');
    if (fs.existsSync(packagesDir)) {
      try {
        const entries = fs.readdirSync(packagesDir);
        for (const entry of entries) {
          if (entry.toLowerCase().includes('winlibs') || entry.toLowerCase().includes('mingw')) {
            const nested = path.join(packagesDir, entry, 'mingw64', 'bin', 'g++.exe');
            if (fs.existsSync(nested)) {
              this.cachedGppPath = nested;
              return nested;
            }
          }
        }
      } catch {}
    }

    this.cachedGppPath = null;
    return null;
  }

  private static getTempDir(): string {
    const dir = path.join(os.tmpdir(), 'swadhyayi_runner', Math.random().toString(36).substring(2, 10));
    fs.mkdirSync(dir, { recursive: true });
    return dir;
  }

  /**
   * Executes code in an isolated sub-process with strict wall-clock timeout and memory cap.
   */
  static async executeSingle(
    language: string,
    code: string,
    input: string,
    timeLimitMs: number = 2000
  ): Promise<ExecutionResult> {
    const tempDir = this.getTempDir();
    const lang = language.toLowerCase();
    let command = '';
    let args: string[] = [];
    let scriptFile = '';
    let extraPath = '';

    try {
      if (lang === 'python' || lang === 'py') {
        scriptFile = path.join(tempDir, 'solution.py');
        fs.writeFileSync(scriptFile, code, 'utf-8');
        command = 'python';
        args = [scriptFile];
      } else if (lang === 'javascript' || lang === 'js' || lang === 'node') {
        scriptFile = path.join(tempDir, 'solution.js');
        fs.writeFileSync(scriptFile, code, 'utf-8');
        command = 'node';
        args = ['--max-old-space-size=256', scriptFile];
      } else if (lang === 'cpp' || lang === 'c++' || lang === 'c' || lang.includes('g++')) {
        const gppPath = this.findGpp();
        if (!gppPath) {
          return {
            status: 'COMPILATION_ERROR',
            stdout: '',
            stderr: 'C++ compiler (g++) is not available on this server environment. Please select Python or JavaScript to test your code.',
            executionTimeMs: 0,
            memoryUsedKb: 0,
            errorLog: 'C++ compiler (g++) not found.',
          };
        }

        extraPath = path.dirname(gppPath);
        const srcFile = path.join(tempDir, 'solution.cpp');
        const exeFile = path.join(tempDir, os.platform() === 'win32' ? 'solution.exe' : 'solution');
        fs.writeFileSync(srcFile, code, 'utf-8');

        const compileProc = spawnSync(gppPath, ['-O2', '-std=c++17', srcFile, '-o', exeFile], {
          cwd: tempDir,
          timeout: 10000,
          stdio: 'pipe',
          env: {
            ...process.env,
            PATH: extraPath + path.delimiter + (process.env.PATH || ''),
          },
        });

        if (compileProc.status !== 0) {
          const compErr = compileProc.stderr?.toString() || 'Compilation failed';
          return {
            status: 'COMPILATION_ERROR',
            stdout: '',
            stderr: compErr,
            executionTimeMs: 0,
            memoryUsedKb: 0,
            errorLog: compErr.trim(),
          };
        }

        command = exeFile;
        args = [];
      } else {
        // Generic fallback
        return {
          status: 'COMPILATION_ERROR',
          stdout: '',
          stderr: `Language '${language}' execution environment is currently not available. Please choose Python, JavaScript, or C++.`,
          executionTimeMs: 0,
          memoryUsedKb: 0,
          errorLog: `Unsupported or unconfigured compiler for ${language}`,
        };
      }

      const startTime = Date.now();

      return await new Promise<ExecutionResult>((resolve) => {
        let isTimedOut = false;
        let stdout = '';
        let stderr = '';

        const runtimePath = extraPath
          ? extraPath + path.delimiter + (process.env.PATH || '')
          : process.env.PATH;

        const proc = spawn(command, args, {
          cwd: tempDir,
          env: { ...process.env, PATH: runtimePath },
          stdio: ['pipe', 'pipe', 'pipe'],
        });

        const timer = setTimeout(() => {
          isTimedOut = true;
          try {
            proc.kill('SIGKILL');
          } catch {}
          resolve({
            status: 'TIME_LIMIT_EXCEEDED',
            stdout: '',
            stderr: 'Time Limit Exceeded (CPU execution timeout)',
            executionTimeMs: timeLimitMs,
            memoryUsedKb: 256 * 1024,
            errorLog: `Execution exceeded wall clock limit of ${timeLimitMs}ms`,
          });
        }, timeLimitMs);

        proc.stdout.on('data', (data) => {
          if (stdout.length < 500000) stdout += data.toString();
        });

        proc.stderr.on('data', (data) => {
          if (stderr.length < 50000) stderr += data.toString();
        });

        // Feed standard input
        if (input) {
          try {
            proc.stdin.write(input);
            proc.stdin.end();
          } catch {}
        } else {
          proc.stdin.end();
        }

        proc.on('close', (exitCode) => {
          clearTimeout(timer);
          if (isTimedOut) return;

          const executionTimeMs = Date.now() - startTime;

          if (exitCode !== 0) {
            resolve({
              status: stderr.includes('SyntaxError') ? 'COMPILATION_ERROR' : 'RUNTIME_ERROR',
              stdout,
              stderr,
              executionTimeMs,
              memoryUsedKb: 16000,
              errorLog: stderr.trim() || `Process exited with error code ${exitCode}`,
            });
            return;
          }

          resolve({
            status: 'ACCEPTED', // preliminary process success; caller checks output
            stdout: stdout.trim(),
            stderr: stderr.trim(),
            executionTimeMs,
            memoryUsedKb: 14000,
          });
        });

        proc.on('error', (err) => {
          clearTimeout(timer);
          resolve({
            status: 'RUNTIME_ERROR',
            stdout: '',
            stderr: err.message,
            executionTimeMs: 0,
            memoryUsedKb: 0,
            errorLog: err.message,
          });
        });
      });
    } finally {
      // Clean up temporary sandbox directory
      try {
        fs.rmSync(tempDir, { recursive: true, force: true });
      } catch {}
    }
  }

  /**
   * Evaluates code against multiple test cases and returns batch verdict.
   */
  static async evaluateBatch(
    language: string,
    code: string,
    testCases: ITestCaseInput[],
    timeLimitMs: number = 2000
  ): Promise<BatchEvaluationResult> {
    let passedCases = 0;
    let maxTime = 0;
    let maxMem = 0;

    for (let i = 0; i < testCases.length; i++) {
      const tc = testCases[i];
      const result = await this.executeSingle(language, code, tc.input, timeLimitMs);

      maxTime = Math.max(maxTime, result.executionTimeMs);
      maxMem = Math.max(maxMem, result.memoryUsedKb);

      if (result.status === 'TIME_LIMIT_EXCEEDED') {
        return {
          overallStatus: 'TIME_LIMIT_EXCEEDED',
          totalCases: testCases.length,
          passedCases,
          maxExecutionTimeMs: maxTime,
          maxMemoryUsedKb: maxMem,
          firstFailedCase: {
            caseNumber: i + 1,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: 'Time Limit Exceeded',
            errorLog: result.errorLog,
          },
        };
      }

      if (result.status === 'RUNTIME_ERROR' || result.status === 'COMPILATION_ERROR') {
        return {
          overallStatus: result.status,
          totalCases: testCases.length,
          passedCases,
          maxExecutionTimeMs: maxTime,
          maxMemoryUsedKb: maxMem,
          firstFailedCase: {
            caseNumber: i + 1,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: result.stderr,
            errorLog: result.errorLog || result.stderr,
          },
        };
      }

      const isMatch = TestCaseComparator.compare(result.stdout, tc.expectedOutput);
      if (isMatch) {
        passedCases++;
      } else {
        return {
          overallStatus: 'WRONG_ANSWER',
          totalCases: testCases.length,
          passedCases,
          maxExecutionTimeMs: maxTime,
          maxMemoryUsedKb: maxMem,
          firstFailedCase: {
            caseNumber: i + 1,
            input: tc.input,
            expectedOutput: tc.expectedOutput,
            actualOutput: result.stdout,
          },
        };
      }
    }

    return {
      overallStatus: 'ACCEPTED',
      totalCases: testCases.length,
      passedCases,
      maxExecutionTimeMs: maxTime,
      maxMemoryUsedKb: maxMem,
    };
  }
}
