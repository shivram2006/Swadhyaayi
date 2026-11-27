export class CodeHarnessBuilder {
  static normalizeLanguage(language: string): 'cpp' | 'python' | 'javascript' | 'java' | 'other' {
    const lang = (language || '').toLowerCase();
    if (lang === 'cpp' || lang === 'c++' || lang === 'c' || lang.includes('g++')) return 'cpp';
    if (lang === 'python' || lang === 'py') return 'python';
    if (lang === 'javascript' || lang === 'js' || lang === 'node') return 'javascript';
    if (lang === 'java') return 'java';
    return 'other';
  }

  /**
   * Strips a top-level `int main(...) { ... }` block from student C++ code
   * when a hidden driver provides `main()`, preventing duplicate-symbol errors.
   */
  private static stripCppMain(code: string): string {
    const match = /\bint\s+main\s*\([^)]*\)\s*\{/.exec(code);
    if (!match) return code;

    const startIdx = match.index;
    let braceIdx = code.indexOf('{', startIdx);
    let depth = 0;
    let endIdx = -1;

    for (let i = braceIdx; i < code.length; i++) {
      if (code[i] === '{') depth++;
      else if (code[i] === '}') {
        depth--;
        if (depth === 0) {
          endIdx = i + 1;
          break;
        }
      }
    }

    if (endIdx === -1) return code;
    return `${code.slice(0, startIdx).trimEnd()}\n${code.slice(endIdx).trimStart()}`.trim();
  }

  /**
   * Merges student solution code with hidden driverCode when present.
   * Falls back to raw userCode for standalone stdin/stdout problems.
   */
  static assemble(language: string, userCode: string, driverCode?: string): string {
    if (!driverCode || !driverCode.trim()) {
      return userCode;
    }

    const norm = this.normalizeLanguage(language);

    if (norm === 'cpp') {
      const cleanedUser = /\bint\s+main\s*\(/.test(driverCode)
        ? this.stripCppMain(userCode)
        : userCode;
      const hasStd = /\busing\s+namespace\s+std\s*;/.test(cleanedUser);
      const hasBits = cleanedUser.includes('<bits/stdc++.h>');
      const preamble = [
        hasBits ? '' : '#include <bits/stdc++.h>',
        hasStd ? '' : 'using namespace std;',
      ]
        .filter(Boolean)
        .join('\n');

      return `${preamble ? preamble + '\n\n' : ''}${cleanedUser}\n\n${driverCode}`;
    }

    if (norm === 'python') {
      const preamble = 'from typing import *\nimport sys, json, math, collections, heapq\n';
      return `${preamble}\n${userCode}\n\n${driverCode}`;
    }

    if (norm === 'javascript') {
      return `${userCode}\n\n${driverCode}`;
    }

    if (norm === 'java') {
      const normalizedUser = userCode.replace(/\bpublic\s+class\s+Solution\b/g, 'class Solution');
      const hasUtil = /\bimport\s+java\.util\.\*/.test(normalizedUser);
      const preamble = hasUtil ? '' : 'import java.util.*;\n';
      return `${preamble}${normalizedUser}\n\n${driverCode}`;
    }

    return `${userCode}\n\n${driverCode}`;
  }
}
