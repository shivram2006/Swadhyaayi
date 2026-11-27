import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Play,
  Send,
  CheckCircle2,
  XCircle,
  ChevronDown,
  Building2,
  ArrowLeft,
  FileText,
  History,
  Lightbulb,
  Sparkles,
} from 'lucide-react';

const getDefaultBoilerplate = (lang: string, title: string = 'solution'): string => {
  const cleanTitle = title.replace(/[^a-zA-Z0-9]/g, ' ').trim();
  const pascalName = cleanTitle ? cleanTitle.split(/\s+/).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('') : 'Solution';
  const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1);

  if (lang === 'cpp') {
    return `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

// Solution
void ${camelName}() {
    // Write your solution here
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    ${camelName}();
    return 0;
}
`;
  }

  if (lang === 'java') {
    return `import java.util.*;

public class Solution {
    // Write your solution here
    public static void ${camelName}() {
        
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ${camelName}();
        scanner.close();
    }
}
`;
  }

  if (lang === 'javascript') {
    return `function ${camelName}(input) {
    // Write your solution here
}

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8').trim();
console.log(${camelName}(input));
`;
  }

  return `def ${camelName}():
    # Write your solution here
    pass

import sys
input_data = sys.stdin.read().strip()
print(${camelName}())
`;
};

export const CodingWorkspacePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [question, setQuestion] = useState<any>(null);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [activeLeftTab, setActiveLeftTab] = useState<'description' | 'editorial' | 'submissions'>('description');
  const [activeConsoleTab, setActiveConsoleTab] = useState<'testcases' | 'custom' | 'result'>('testcases');
  const [activeTestCaseIdx, setActiveTestCaseIdx] = useState(0);

  // Editor states
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [codeByLanguage, setCodeByLanguage] = useState<Record<string, string>>({});
  const [customInput, setCustomInput] = useState('');

  // Execution states
  const [isRunning, setIsRunning] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [executionResult, setExecutionResult] = useState<any>(null);
  const [submissionResult, setSubmissionResult] = useState<any>(null);
  const [openHintIdx, setOpenHintIdx] = useState<number | null>(null);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const res = await axios.get(`/coding/${slug}`);
        if (res.data.success) {
          const q = res.data.data;
          setQuestion(q);

          // Populate cache with seeded starter codes
          const initialMap: Record<string, string> = {};
          if (Array.isArray(q.starterCode)) {
            q.starterCode.forEach((sc: any) => {
              if (sc.language && sc.boilerplate) {
                initialMap[sc.language] = sc.boilerplate;
              }
            });
          }

          // Default language and code
          const initialLang = initialMap['python'] ? 'python' : (q.starterCode?.[0]?.language || 'python');
          const initialCode = initialMap[initialLang] || getDefaultBoilerplate(initialLang, q.title);
          initialMap[initialLang] = initialCode;

          setCodeByLanguage(initialMap);
          setSelectedLanguage(initialLang);
          setCode(initialCode);

          // Fetch submissions
          const subRes = await axios.get(`/coding/${q._id}/submissions`);
          if (subRes.data.success) {
            setSubmissions(subRes.data.data);
          }
        }
      } catch (err) {
        console.error('Failed to load problem:', err);
      }
    };

    fetchQuestion();
  }, [slug]);

  const handleLanguageChange = (newLang: string) => {
    // 1. Cache current code
    const updatedMap: Record<string, string> = {
      ...codeByLanguage,
      [selectedLanguage]: code,
    };

    // 2. Fetch or generate code for selected language
    let targetCode = updatedMap[newLang];
    if (!targetCode) {
      const seeded = question?.starterCode?.find((s: any) => s.language === newLang);
      targetCode = seeded?.boilerplate || getDefaultBoilerplate(newLang, question?.title);
      updatedMap[newLang] = targetCode;
    }

    setCodeByLanguage(updatedMap);
    setSelectedLanguage(newLang);
    setCode(targetCode);
  };

  const handleResetToBoilerplate = () => {
    const seeded = question?.starterCode?.find((s: any) => s.language === selectedLanguage);
    const freshBoilerplate = seeded?.boilerplate || getDefaultBoilerplate(selectedLanguage, question?.title);
    setCode(freshBoilerplate);
    setCodeByLanguage((prev) => ({
      ...prev,
      [selectedLanguage]: freshBoilerplate,
    }));
  };

  const handleRunCode = async () => {
    if (!question) return;
    setIsRunning(true);
    setExecutionResult(null);
    setActiveConsoleTab('result');

    try {
      const payload: any = {
        questionId: question._id,
        language: selectedLanguage,
        code,
      };

      if (activeConsoleTab === 'custom' && customInput) {
        payload.customInput = customInput;
      }

      const res = await axios.post('/coding/run', payload);
      if (res.data.success) {
        setExecutionResult(res.data.data);
      }
    } catch (err: any) {
      setExecutionResult({
        overallStatus: 'RUNTIME_ERROR',
        firstFailedCase: {
          actualOutput: err.response?.data?.error?.message || 'Execution failed',
        },
      });
    } finally {
      setIsRunning(false);
    }
  };

  const handleSubmitCode = async () => {
    if (!question) return;
    setIsSubmitting(true);
    setSubmissionResult(null);
    setActiveConsoleTab('result');

    try {
      const res = await axios.post('/coding/submit', {
        questionId: question._id,
        language: selectedLanguage,
        code,
      });

      if (res.data.success) {
        setSubmissionResult(res.data.data);
        // Refresh submissions tab
        const subRes = await axios.get(`/coding/${question._id}/submissions`);
        if (subRes.data.success) setSubmissions(subRes.data.data);
      }
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Submission error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm">Loading problem environment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-5.5rem)] flex flex-col space-y-3 -m-4">
      {/* Top Bar Navigation */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <Link to="/coding" className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <span className="font-bold text-slate-200 text-sm flex items-center gap-2">
            {question.title}
            <Badge variant={question.difficulty === 'HARD' ? 'danger' : question.difficulty === 'MEDIUM' ? 'warning' : 'success'} size="sm">
              {question.difficulty}
            </Badge>
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRunCode}
            isLoading={isRunning}
            leftIcon={<Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />}
          >
            Run Code
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={handleSubmitCode}
            isLoading={isSubmitting}
            leftIcon={<Send className="w-3.5 h-3.5" />}
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-3 px-4 pb-4 overflow-hidden">
        {/* Left Pane: Tabs for Description, Editorial, Submissions */}
        <Card className="flex flex-col p-0 overflow-hidden border-slate-800 bg-slate-900/90">
          <div className="flex items-center border-b border-slate-800 bg-slate-950 px-2 text-xs font-medium">
            <button
              onClick={() => setActiveLeftTab('description')}
              className={`px-4 py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeLeftTab === 'description'
                  ? 'border-brand-500 text-white font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              Description
            </button>
            <button
              onClick={() => setActiveLeftTab('editorial')}
              className={`px-4 py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeLeftTab === 'editorial'
                  ? 'border-brand-500 text-white font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
              Editorial
            </button>
            <button
              onClick={() => setActiveLeftTab('submissions')}
              className={`px-4 py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                activeLeftTab === 'submissions'
                  ? 'border-brand-500 text-white font-semibold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <History className="w-3.5 h-3.5" />
              Submissions ({submissions.length})
            </button>
          </div>

          <div className="flex-1 p-5 overflow-y-auto text-xs leading-relaxed space-y-5">
            {activeLeftTab === 'description' && (
              <>
                {/* Patterns & Company Tags */}
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {question.patterns?.map((p: string) => (
                      <span key={p} className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-300 border border-brand-500/20 text-[11px] font-medium">
                        Pattern: {p}
                      </span>
                    ))}
                  </div>

                  {question.companyTags?.length > 0 && (
                    <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-slate-400 font-semibold">Reported In:</span>
                        {question.companyTags.map((tag: any, idx: number) => (
                          <span key={idx} className="text-slate-200 font-medium">
                            {tag.company} ({tag.yearReported})
                            {idx < question.companyTags.length - 1 ? ' • ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Problem Description Markdown */}
                <div className="text-slate-300 whitespace-pre-line font-sans text-sm leading-6">
                  {question.description?.replace(/\\n/g, '\n')}
                </div>

                {/* Sample Testcases */}
                <div className="space-y-3 pt-3 border-t border-slate-800">
                  <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-xs">Sample Test Cases</h4>
                  {question.sampleTestCases?.map((st: any, idx: number) => (
                    <div key={idx} className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs space-y-1.5">
                      <p className="text-slate-400"><strong className="text-slate-300">Input:</strong> {st.input}</p>
                      <p className="text-emerald-400"><strong className="text-slate-300">Output:</strong> {st.output}</p>
                      {st.explanation && <p className="text-slate-400 font-sans text-[11px] mt-1">{st.explanation}</p>}
                    </div>
                  ))}
                </div>

                {/* Hints Accordion */}
                {question.hints?.length > 0 && (
                  <div className="space-y-2 pt-3 border-t border-slate-800">
                    <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-xs flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                      Hints & Clues
                    </h4>
                    {question.hints.map((hint: string, idx: number) => {
                      const isOpen = openHintIdx === idx;
                      return (
                        <div key={idx} className="rounded-lg bg-slate-950 border border-slate-800">
                          <button
                            type="button"
                            onClick={() => setOpenHintIdx(isOpen ? null : idx)}
                            className="w-full p-2.5 text-left text-xs font-medium text-slate-300 flex justify-between items-center"
                          >
                            <span>Hint {idx + 1}</span>
                            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          {isOpen && (
                            <div className="p-3 pt-0 text-slate-400 text-xs border-t border-slate-800/60">
                              {hint}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}

            {activeLeftTab === 'editorial' && (
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-300 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 flex-shrink-0" />
                  <span>Editorial Solution & Complexity Analysis</span>
                </div>
                <div className="whitespace-pre-line text-slate-300 text-sm leading-relaxed">
                  {question.editorial?.solutionMarkdown?.replace(/\\n/g, '\n') || 'Editorial solution will be published shortly.'}
                </div>
                {question.editorial?.complexityAnalysis && (
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs">
                    {question.editorial.complexityAnalysis}
                  </div>
                )}
              </div>
            )}

            {activeLeftTab === 'submissions' && (
              <div className="space-y-2">
                {submissions.length === 0 ? (
                  <p className="text-center text-slate-500 py-8">No submissions yet for this problem.</p>
                ) : (
                  submissions.map((sub: any) => (
                    <div key={sub._id} className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center text-xs">
                      <div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`font-semibold ${
                              sub.status === 'ACCEPTED' ? 'text-emerald-400' : 'text-rose-400'
                            }`}
                          >
                            {sub.status.replace(/_/g, ' ')}
                          </span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400 uppercase font-mono">{sub.language}</span>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          {new Date(sub.createdAt).toLocaleString()}
                        </p>
                      </div>
                      <div className="text-right font-mono text-[11px] text-slate-400">
                        <p>{sub.executionTimeMs} ms</p>
                        <p>{sub.testCasesPassed} / {sub.totalTestCases} passed</p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </Card>

        {/* Right Pane: Code Editor & Execution Console */}
        <div className="flex flex-col space-y-3 overflow-hidden">
          {/* Top Bar Language Selector */}
          <div className="flex items-center justify-between px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-400 uppercase tracking-wider font-semibold">Language:</span>
              <select
                className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-brand-300 font-mono px-2.5 py-1"
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
              >
                <option value="python">Python 3</option>
                <option value="javascript">JavaScript (Node.js)</option>
                <option value="cpp">C++ (g++)</option>
                <option value="java">Java (OpenJDK)</option>
              </select>
            </div>

            <button
              onClick={handleResetToBoilerplate}
              className="text-slate-400 hover:text-white transition-colors"
            >
              Reset to Boilerplate
            </button>
          </div>

          {/* Interactive Code Editor (Full High-Performance Textarea) */}
          <div className="flex-1 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex flex-col min-h-[300px]">
            <textarea
              className="flex-1 w-full bg-slate-950 text-slate-100 font-mono text-xs p-4 leading-5 resize-none focus:outline-none scrollbar-thin selection:bg-brand-500 selection:text-white"
              value={code}
              onChange={(e) => {
                const val = e.target.value;
                setCode(val);
                setCodeByLanguage((prev) => ({ ...prev, [selectedLanguage]: val }));
              }}
              spellCheck={false}
              autoCapitalize="off"
              autoComplete="off"
            />
          </div>

          {/* Bottom Execution Console */}
          <Card className="p-0 border-slate-800 bg-slate-900/90 h-52 flex flex-col overflow-hidden">
            <div className="flex items-center border-b border-slate-800 bg-slate-950 px-2 text-xs font-medium">
              <button
                onClick={() => setActiveConsoleTab('testcases')}
                className={`px-3 py-2 border-b-2 transition-colors ${
                  activeConsoleTab === 'testcases' ? 'border-brand-500 text-white font-semibold' : 'border-transparent text-slate-400'
                }`}
              >
                Sample Testcases
              </button>
              <button
                onClick={() => setActiveConsoleTab('custom')}
                className={`px-3 py-2 border-b-2 transition-colors ${
                  activeConsoleTab === 'custom' ? 'border-brand-500 text-white font-semibold' : 'border-transparent text-slate-400'
                }`}
              >
                Custom Input
              </button>
              {(executionResult || submissionResult) && (
                <button
                  onClick={() => setActiveConsoleTab('result')}
                  className={`px-3 py-2 border-b-2 transition-colors ${
                    activeConsoleTab === 'result' ? 'border-brand-500 text-white font-semibold' : 'border-transparent text-slate-400'
                  }`}
                >
                  Verdict & Diagnostics
                </button>
              )}
            </div>

            <div className="flex-1 p-3 overflow-y-auto text-xs font-mono">
              {activeConsoleTab === 'testcases' && (
                <div className="space-y-2">
                  <div className="flex gap-2 mb-2">
                    {question.sampleTestCases?.map((_: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestCaseIdx(idx)}
                        className={`px-2.5 py-1 rounded text-[11px] font-semibold transition-colors ${
                          activeTestCaseIdx === idx ? 'bg-brand-600 text-white' : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        Case {idx + 1}
                      </button>
                    ))}
                  </div>
                  {question.sampleTestCases?.[activeTestCaseIdx] && (
                    <div className="space-y-1.5 text-xs">
                      <div>
                        <span className="text-slate-400 uppercase text-[10px] block">Input</span>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-slate-200">
                          {question.sampleTestCases[activeTestCaseIdx].input}
                        </div>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase text-[10px] block">Expected Output</span>
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-emerald-400">
                          {question.sampleTestCases[activeTestCaseIdx].output}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {activeConsoleTab === 'custom' && (
                <div className="h-full flex flex-col">
                  <span className="text-slate-400 uppercase text-[10px] mb-1">Standard Input (stdin)</span>
                  <textarea
                    rows={4}
                    className="w-full flex-1 bg-slate-950 border border-slate-800 rounded p-2 text-slate-200 focus:outline-none"
                    placeholder="Enter custom input..."
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                  />
                </div>
              )}

              {activeConsoleTab === 'result' && (
                <div className="space-y-2">
                  {/* Submission Verdict */}
                  {submissionResult && (
                    <div
                      className={`p-3 rounded-lg border ${
                        submissionResult.status === 'ACCEPTED'
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-sm">
                        <span className="flex items-center gap-1.5">
                          {submissionResult.status === 'ACCEPTED' ? (
                            <CheckCircle2 className="w-5 h-5" />
                          ) : (
                            <XCircle className="w-5 h-5" />
                          )}
                          {submissionResult.status.replace(/_/g, ' ')}
                        </span>
                        <span className="font-mono text-xs">
                          {submissionResult.testCasesPassed} / {submissionResult.totalTestCases} Testcases Passed
                        </span>
                      </div>
                      <div className="mt-2 text-xs flex gap-4 text-slate-300 font-sans">
                        <span>Runtime: <strong>{submissionResult.executionTimeMs} ms</strong></span>
                        <span>Memory: <strong>{submissionResult.memoryUsedKb} KB</strong></span>
                      </div>

                      {submissionResult.firstFailedCase && (
                        <div className="mt-3 p-2 rounded bg-slate-950/80 border border-rose-500/20 text-xs font-mono space-y-1">
                          <p className="text-slate-400">Failed on Case {submissionResult.firstFailedCase.caseNumber}:</p>
                          <p className="text-slate-300">Input: {submissionResult.firstFailedCase.input}</p>
                          <p className="text-emerald-400">Expected: {submissionResult.firstFailedCase.expectedOutput}</p>
                          <p className="text-rose-400">Actual: {submissionResult.firstFailedCase.actualOutput}</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Run Code Verdict */}
                  {executionResult && !submissionResult && (
                    <div className="space-y-2">
                      <div
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${
                          executionResult.overallStatus === 'SAMPLE_PASSED' ||
                          executionResult.overallStatus === 'ACCEPTED' ||
                          executionResult.status === 'ACCEPTED'
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                            : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                        }`}
                      >
                        <span className="font-bold">
                          {executionResult.overallStatus === 'SAMPLE_PASSED'
                            ? 'SAMPLE PASSED'
                            : executionResult.overallStatus || executionResult.status}
                        </span>
                        <span className="text-[11px] text-slate-300 font-sans">
                          {executionResult.passedCases !== undefined && `${executionResult.passedCases} / ${executionResult.totalCases} Sample Cases Passed`}
                        </span>
                      </div>

                      {executionResult.firstFailedCase && (
                        <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs font-mono space-y-1">
                          <p className="text-slate-400">Failed on Case {executionResult.firstFailedCase.caseNumber}</p>
                          <p className="text-slate-300">Input: {executionResult.firstFailedCase.input}</p>
                          <p className="text-emerald-400">Expected: {executionResult.firstFailedCase.expectedOutput}</p>
                          <p className="text-rose-400">Actual: {executionResult.firstFailedCase.actualOutput}</p>
                        </div>
                      )}

                      {executionResult.output && (
                        <div>
                          <span className="text-slate-400 text-[10px] block">Standard Output:</span>
                          <div className="p-2 rounded bg-slate-950 text-slate-200">{executionResult.output}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
