import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Clock,
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Award,
  ArrowLeft,
  Play,
  RotateCcw,
  Terminal,
  Check,
  Code2,
  FileCode,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

const getDefaultBoilerplate = (lang: string, title: string = 'solution'): string => {
  const cleanTitle = title.replace(/[^a-zA-Z0-9]/g, ' ').trim();
  const pascalName = cleanTitle
    ? cleanTitle
        .split(/\s+/)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join('')
    : 'Solution';
  const camelName = pascalName.charAt(0).toLowerCase() + pascalName.slice(1);

  if (lang === 'cpp') {
    return `#include <iostream>
#include <vector>
#include <string>
#include <unordered_map>
#include <algorithm>

using namespace std;

// Solution Class / Function
class Solution {
public:
    void ${camelName}() {
        // Write your algorithmic solution here
    }
};

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    Solution solver;
    solver.${camelName}();
    return 0;
}
`;
  }

  if (lang === 'java') {
    return `import java.util.*;

public class Solution {
    // LeetCode-style Solution Method
    public void ${camelName}() {
        // Write your solution here
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Solution solver = new Solution();
        solver.${camelName}();
        scanner.close();
    }
}
`;
  }

  if (lang === 'javascript') {
    return `// JavaScript (Node.js) Solution
const fs = require('fs');

function ${camelName}(input) {
    // Write your algorithmic solution here
    return input;
}

try {
    const input = fs.readFileSync(0, 'utf-8').trim();
    const result = ${camelName}(input);
    if (result !== undefined) {
        console.log(result);
    }
} catch (e) {
    ${camelName}("");
}
`;
  }

  // Default: Python 3
  return `# Python 3 Solution
import sys

def ${camelName}():
    # Write your algorithmic solution here
    pass

if __name__ == "__main__":
    try:
        input_data = sys.stdin.read().strip()
    except Exception:
        input_data = ""
    ${camelName}()
`;
};

const SUPPORTED_LANGUAGES = [
  { id: 'python', label: 'Python 3', ext: '.py' },
  { id: 'javascript', label: 'JavaScript (Node)', ext: '.js' },
  { id: 'cpp', label: 'C++ (GCC)', ext: '.cpp' },
  { id: 'java', label: 'Java 17', ext: '.java' },
];

export const AssessmentArenaPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(true);
  const [assessment, setAssessment] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);

  // Student answers mapping: questionId -> answer payload
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(0);

  // Language & Code states
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python');
  const [codeByLangByQuestion, setCodeByLangByQuestion] = useState<Record<string, Record<string, string>>>({});
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  // Execution & Console states
  const [activeConsoleTab, setActiveConsoleTab] = useState<'testcases' | 'custom' | 'result'>('testcases');
  const [activeTestCaseIdx, setActiveTestCaseIdx] = useState<number>(0);
  const [customInput, setCustomInput] = useState<string>('');
  const [isRunningCode, setIsRunningCode] = useState<boolean>(false);
  const [executionResult, setExecutionResult] = useState<any>(null);

  // Proctoring telemetry states
  const [tabSwitchCount, setTabSwitchCount] = useState<number>(0);
  const [showWarningModal, setShowWarningModal] = useState<boolean>(false);
  const [warningMessage, setWarningMessage] = useState<string>('');
  const [scorecard, setScorecard] = useState<any>(null);

  useEffect(() => {
    if (id) {
      initiateAssessment(id);
    }
  }, [id]);

  const initiateAssessment = async (assessmentId: string) => {
    try {
      setLoading(true);
      const res = await axios.post(`/assessments/${assessmentId}/start`);
      if (res.data?.success) {
        setAssessment(res.data.data.assessment);
        setSession(res.data.data.session);
        const qList = res.data.data.questions || [];
        setQuestions(qList);

        // Populate existing answers if resuming
        const initialAnswers: Record<string, any> = {};
        const initialCodeMap: Record<string, Record<string, string>> = {};

        if (res.data.data.session.answers) {
          res.data.data.session.answers.forEach((ans: any) => {
            const qIdStr = ans.questionId.toString();
            initialAnswers[qIdStr] = ans;
            if (ans.code && ans.language) {
              if (!initialCodeMap[qIdStr]) initialCodeMap[qIdStr] = {};
              initialCodeMap[qIdStr][ans.language] = ans.code;
            }
          });
        }
        setAnswers(initialAnswers);
        setCodeByLangByQuestion(initialCodeMap);
        setTabSwitchCount(res.data.data.session.tabSwitchCount || 0);

        // Timer calculation
        const expiresAt = new Date(res.data.data.session.expiresAt).getTime();
        const now = Date.now();
        const diffSeconds = Math.max(0, Math.floor((expiresAt - now) / 1000));
        setTimeRemainingSeconds(diffSeconds);
      }
    } catch (err: any) {
      console.error('Failed to start assessment:', err);
      alert(err.response?.data?.error?.message || 'Failed to start assessment');
      navigate('/assessments');
    } finally {
      setLoading(false);
    }
  };

  // Timer countdown
  useEffect(() => {
    if (scorecard || timeRemainingSeconds <= 0) return;

    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleAutoSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemainingSeconds, scorecard]);

  // Tab switch listener
  useEffect(() => {
    const handleVisibilityChange = async () => {
      if (document.hidden && !scorecard && session) {
        try {
          const res = await axios.post(`/assessments/${id}/telemetry`, {
            eventType: 'TAB_SWITCH',
            details: 'Candidate navigated away from browser tab',
          });

          if (res.data?.success) {
            const count = res.data.data.tabSwitchCount;
            setTabSwitchCount(count);

            if (res.data.data.autoSubmitted) {
              alert('Assessment automatically submitted due to multiple proctoring violations.');
              handleAutoSubmit();
            } else {
              setWarningMessage(
                `Proctoring Warning: Tab switch #${count} recorded! Maximum allowed is ${
                  assessment?.proctoring?.maxTabSwitches ?? 3
                }. Violations are reported to the Placement Office.`
              );
              setShowWarningModal(true);
            }
          }
        } catch (err) {
          console.error('Error logging telemetry:', err);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [id, scorecard, session, assessment]);

  // Synchronize language and starter boilerplate whenever active question changes
  useEffect(() => {
    const currentQ = questions[currentIdx];
    if (!currentQ || currentQ.type !== 'CODING') return;

    const qIdStr = currentQ.questionId.toString();
    const existingAns = answers[qIdStr];
    const lang = existingAns?.language || selectedLanguage || 'python';
    setSelectedLanguage(lang);

    // Look for existing code draft
    let currentCode = codeByLangByQuestion[qIdStr]?.[lang];
    if (!currentCode && existingAns?.code) {
      currentCode = existingAns.code;
    }

    // If still no code, extract starterCode from question data or default boilerplate
    if (!currentCode) {
      const starterCodes = currentQ.questionData?.starterCode;
      if (Array.isArray(starterCodes)) {
        const found = starterCodes.find(
          (sc: any) => sc.language?.toLowerCase() === lang.toLowerCase()
        );
        if (found?.boilerplate) {
          currentCode = found.boilerplate;
        }
      }
      if (!currentCode) {
        currentCode = getDefaultBoilerplate(lang, currentQ.questionData?.title || 'solution');
      }
    }

    setCodeByLangByQuestion((prev) => ({
      ...prev,
      [qIdStr]: {
        ...(prev[qIdStr] || {}),
        [lang]: currentCode,
      },
    }));

    if (!answers[qIdStr]?.code) {
      setAnswers((prev) => ({
        ...prev,
        [qIdStr]: {
          ...(prev[qIdStr] || {}),
          questionId: currentQ.questionId,
          type: 'CODING',
          code: currentCode,
          language: lang,
        },
      }));
    }
  }, [currentIdx, questions]);

  const handleSelectOption = (optionId: string) => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const qIdStr = currentQ.questionId.toString();
    const updated = {
      ...answers,
      [qIdStr]: {
        questionId: currentQ.questionId,
        type: currentQ.type,
        selectedOptionId: optionId,
        timeSpentSeconds: (answers[qIdStr]?.timeSpentSeconds || 0) + 5,
      },
    };
    setAnswers(updated);

    // Auto-save in background
    axios
      .post(`/assessments/${id}/save-answer`, {
        questionId: currentQ.questionId,
        type: currentQ.type,
        selectedOptionId: optionId,
      })
      .catch((e) => console.error('Save answer error:', e));
  };

  const handleLanguageChange = (newLang: string) => {
    const currentQ = questions[currentIdx];
    if (!currentQ || currentQ.type !== 'CODING') return;

    const qIdStr = currentQ.questionId.toString();
    setSelectedLanguage(newLang);

    // Check if code exists for this language
    let langCode = codeByLangByQuestion[qIdStr]?.[newLang];
    if (!langCode) {
      const starterCodes = currentQ.questionData?.starterCode;
      if (Array.isArray(starterCodes)) {
        const found = starterCodes.find(
          (sc: any) => sc.language?.toLowerCase() === newLang.toLowerCase()
        );
        if (found?.boilerplate) {
          langCode = found.boilerplate;
        }
      }
      if (!langCode) {
        langCode = getDefaultBoilerplate(newLang, currentQ.questionData?.title || 'solution');
      }
    }

    setCodeByLangByQuestion((prev) => ({
      ...prev,
      [qIdStr]: {
        ...(prev[qIdStr] || {}),
        [newLang]: langCode,
      },
    }));

    setAnswers((prev) => ({
      ...prev,
      [qIdStr]: {
        ...(prev[qIdStr] || {}),
        questionId: currentQ.questionId,
        type: 'CODING',
        code: langCode,
        language: newLang,
      },
    }));

    // Auto-save draft
    axios
      .post(`/assessments/${id}/save-answer`, {
        questionId: currentQ.questionId,
        type: 'CODING',
        code: langCode,
        language: newLang,
      })
      .catch((e) => console.error('Save code draft error:', e));
  };

  const handleCodeChange = (codeVal: string) => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const qIdStr = currentQ.questionId.toString();
    setCodeByLangByQuestion((prev) => ({
      ...prev,
      [qIdStr]: {
        ...(prev[qIdStr] || {}),
        [selectedLanguage]: codeVal,
      },
    }));

    setAnswers((prev) => ({
      ...prev,
      [qIdStr]: {
        ...prev[qIdStr],
        questionId: currentQ.questionId,
        type: currentQ.type,
        code: codeVal,
        language: selectedLanguage,
      },
    }));
  };

  const handleResetBoilerplate = () => {
    const currentQ = questions[currentIdx];
    if (!currentQ || currentQ.type !== 'CODING') return;

    if (!confirm(`Reset ${selectedLanguage.toUpperCase()} code to LeetCode-style boilerplate?`)) return;

    let bp = '';
    const starterCodes = currentQ.questionData?.starterCode;
    if (Array.isArray(starterCodes)) {
      const found = starterCodes.find(
        (sc: any) => sc.language?.toLowerCase() === selectedLanguage.toLowerCase()
      );
      if (found?.boilerplate) {
        bp = found.boilerplate;
      }
    }
    if (!bp) {
      bp = getDefaultBoilerplate(selectedLanguage, currentQ.questionData?.title || 'solution');
    }

    handleCodeChange(bp);
  };

  const handleSaveCode = async () => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const qIdStr = currentQ.questionId.toString();
    const currentCode =
      codeByLangByQuestion[qIdStr]?.[selectedLanguage] || answers[qIdStr]?.code || '';

    try {
      await axios.post(`/assessments/${id}/save-answer`, {
        questionId: currentQ.questionId,
        type: currentQ.type,
        code: currentCode,
        language: selectedLanguage,
      });
      setSaveStatus('Draft Saved!');
      setTimeout(() => setSaveStatus(null), 2500);
    } catch (e) {
      console.error('Save code error:', e);
      setSaveStatus('Save Failed');
      setTimeout(() => setSaveStatus(null), 2500);
    }
  };

  const handleRunCode = async () => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const qIdStr = currentQ.questionId.toString();
    const currentCode =
      codeByLangByQuestion[qIdStr]?.[selectedLanguage] || answers[qIdStr]?.code || '';

    if (!currentCode.trim()) {
      alert('Please write code before running tests.');
      return;
    }

    setIsRunningCode(true);
    setActiveConsoleTab('result');
    setExecutionResult(null);

    try {
      const payload: any = {
        questionId: currentQ.questionId,
        type: currentQ.type,
        language: selectedLanguage,
        code: currentCode,
      };

      // Auto-persist the latest code & language when running tests
      axios
        .post(`/assessments/${id}/save-answer`, {
          questionId: currentQ.questionId,
          type: currentQ.type,
          code: currentCode,
          language: selectedLanguage,
        })
        .catch(() => {});

      if (activeConsoleTab === 'custom' && customInput.trim()) {
        payload.customInput = customInput;
      }

      const res = await axios.post(`/assessments/${id}/run-code`, payload);
      if (res.data?.success) {
        setExecutionResult(res.data.data);
      }
    } catch (err: any) {
      console.error('Execution error:', err);
      setExecutionResult({
        overallStatus: 'RUNTIME_ERROR',
        errorLog: err.response?.data?.error?.message || err.message || 'Execution failed',
      });
    } finally {
      setIsRunningCode(false);
    }
  };

  const buildSubmitAnswersPayload = () => {
    const merged: Record<string, any> = { ...answers };
    const currentQ = questions[currentIdx];
    if (currentQ && currentQ.type === 'CODING') {
      const qIdStr = currentQ.questionId.toString();
      const latestCode =
        codeByLangByQuestion[qIdStr]?.[selectedLanguage] ?? merged[qIdStr]?.code ?? '';
      merged[qIdStr] = {
        ...merged[qIdStr],
        questionId: currentQ.questionId,
        type: 'CODING',
        code: latestCode,
        language: selectedLanguage,
      };
    }
    return Object.values(merged);
  };

  const handleSubmitTest = async () => {
    if (!confirm('Are you sure you want to finish and submit this test? All algorithmic and aptitude answers will be evaluated.'))
      return;
    try {
      const res = await axios.post(`/assessments/${id}/submit`, {
        answers: buildSubmitAnswersPayload(),
      });
      if (res.data?.success) {
        setScorecard(res.data.data);
      }
    } catch (err) {
      console.error('Error submitting assessment:', err);
    }
  };

  const handleAutoSubmit = async () => {
    try {
      const res = await axios.post(`/assessments/${id}/submit`, {
        answers: buildSubmitAnswersPayload(),
      });
      if (res.data?.success) {
        setScorecard(res.data.data);
      }
    } catch (err) {
      console.error('Auto-submit error:', err);
    }
  };

  const enterFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => console.log(err));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm">Initializing Secure Proctored Environment...</p>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const qData = currentQ?.questionData;
  const isAnswered = currentQ && !!answers[currentQ.questionId.toString()];
  const currentCode =
    currentQ &&
    (codeByLangByQuestion[currentQ.questionId.toString()]?.[selectedLanguage] ??
      answers[currentQ.questionId.toString()]?.code ??
      '');

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const sampleTestCases = qData?.sampleTestCases || [];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between -m-6 p-6">
      {/* Top Proctored Header Bar */}
      <header className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 font-bold">
            {currentIdx + 1}
          </div>
          <div>
            <h1 className="text-sm sm:text-base font-bold text-white">{assessment?.title}</h1>
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>Section: {currentQ?.sectionId}</span>
              <span className="text-slate-600">•</span>
              <span>
                Question {currentIdx + 1} of {questions.length}
              </span>
            </div>
          </div>
        </div>

        {/* Center Timer & Proctoring Status */}
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold ${
              timeRemainingSeconds < 300
                ? 'bg-rose-500/10 border-rose-500/30 text-rose-400 animate-pulse'
                : 'bg-slate-900 border-slate-800 text-amber-400'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{formatTime(timeRemainingSeconds)}</span>
          </div>

          <button
            onClick={enterFullscreen}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 hover:text-white"
            title="Toggle Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen</span>
          </button>

          {/* Violations Badge */}
          {tabSwitchCount > 0 && (
            <Badge variant="danger" className="text-xs flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5" />
              {tabSwitchCount} Violations
            </Badge>
          )}

          <Button onClick={handleSubmitTest} variant="danger" size="sm" className="font-bold">
            Finish Test
          </Button>
        </div>
      </header>

      {/* Main Examination Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 py-6 flex-1">
        {/* Left 3 Columns: Question Presentation & LeetCode Editor */}
        <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
          <Card className="p-6 bg-slate-900/90 border-slate-800 flex-1 flex flex-col justify-between">
            <div className="space-y-4 flex-1">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <Badge variant={currentQ?.type === 'CODING' ? 'brand' : 'neutral'} className="text-xs">
                  {currentQ?.type === 'CODING' ? 'Algorithmic Coding Challenge' : 'Multiple Choice MCQ'}
                </Badge>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  +{currentQ?.points} Points
                </span>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                {qData?.title || qData?.problemStatement || qData?.questionText || 'Loading question...'}
              </div>

              {/* Subtitle / Details */}
              {qData?.description && (
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 whitespace-pre-line leading-relaxed font-sans max-h-48 overflow-y-auto">
                  {qData.description}
                </div>
              )}

              {/* MCQ Options Rendering */}
              {currentQ?.type === 'APTITUDE' && qData?.options && (
                <div className="grid grid-cols-1 gap-2.5 pt-4">
                  {qData.options.map((opt: any) => {
                    const qIdStr = currentQ.questionId.toString();
                    const isSelected = answers[qIdStr]?.selectedOptionId === opt.id;

                    return (
                      <button
                        key={opt.id}
                        onClick={() => handleSelectOption(opt.id)}
                        className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-brand-600/20 border-brand-500 text-white shadow-sm'
                            : 'bg-slate-950/80 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-950'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs ${
                              isSelected ? 'bg-brand-500 text-white' : 'bg-slate-800 text-slate-400'
                            }`}
                          >
                            {opt.id}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-brand-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* LEETCODE STYLE CODING ARENA */}
              {currentQ?.type === 'CODING' && (
                <div className="space-y-4 pt-2">
                  {/* Editor Top Bar: Language Selector & Action Buttons */}
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-brand-400" />
                      <span className="text-xs font-semibold text-slate-300">Language:</span>
                      <select
                        value={selectedLanguage}
                        onChange={(e) => handleLanguageChange(e.target.value)}
                        className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white font-mono focus:outline-none focus:border-brand-500 cursor-pointer"
                      >
                        {SUPPORTED_LANGUAGES.map((lang) => (
                          <option key={lang.id} value={lang.id}>
                            {lang.label}
                          </option>
                        ))}
                      </select>

                      <button
                        onClick={handleResetBoilerplate}
                        className="p-1.5 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800 transition-colors ml-1 text-xs flex items-center gap-1"
                        title="Reset code to LeetCode boilerplate"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline text-[11px]">Reset Boilerplate</span>
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      {saveStatus && (
                        <span className="text-xs text-emerald-400 font-mono animate-fade-in flex items-center gap-1">
                          <Check className="w-3 h-3" /> {saveStatus}
                        </span>
                      )}

                      <Button
                        onClick={handleSaveCode}
                        variant="outline"
                        size="sm"
                        leftIcon={<FileCode className="w-3.5 h-3.5" />}
                        className="text-xs border-slate-700 hover:bg-slate-800"
                      >
                        Save Draft
                      </Button>

                      <Button
                        onClick={handleRunCode}
                        isLoading={isRunningCode}
                        variant="primary"
                        size="sm"
                        leftIcon={<Play className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />}
                        className="text-xs bg-emerald-600 hover:bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-600/30"
                      >
                        Run Code
                      </Button>
                    </div>
                  </div>

                  {/* Code Editor Box */}
                  <div className="relative rounded-xl border border-slate-800 overflow-hidden bg-slate-950 shadow-inner">
                    <div className="px-3 py-1.5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                      <span>solution{SUPPORTED_LANGUAGES.find((l) => l.id === selectedLanguage)?.ext || '.py'}</span>
                      <span className="text-slate-500">Ctrl + S or "Save Draft" to persist</span>
                    </div>

                    <textarea
                      rows={14}
                      value={currentCode}
                      onChange={(e) => handleCodeChange(e.target.value)}
                      placeholder="# Write your algorithmic solution here..."
                      className="w-full p-4 bg-slate-950 font-mono text-xs text-emerald-300 focus:outline-none focus:ring-0 border-0 leading-relaxed resize-y selection:bg-brand-500/30"
                      spellCheck={false}
                    ></textarea>
                  </div>

                  {/* Interactive Testcase & Console Tabs */}
                  <div className="rounded-xl border border-slate-800 bg-slate-950/90 overflow-hidden text-xs">
                    <div className="flex border-b border-slate-800 bg-slate-900/80 px-3">
                      <button
                        onClick={() => setActiveConsoleTab('testcases')}
                        className={`py-2 px-3 border-b-2 font-medium transition-colors ${
                          activeConsoleTab === 'testcases'
                            ? 'border-brand-500 text-brand-300'
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Sample Testcases ({sampleTestCases.length || 1})
                      </button>
                      <button
                        onClick={() => setActiveConsoleTab('custom')}
                        className={`py-2 px-3 border-b-2 font-medium transition-colors ${
                          activeConsoleTab === 'custom'
                            ? 'border-brand-500 text-brand-300'
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Custom Input
                      </button>
                      <button
                        onClick={() => setActiveConsoleTab('result')}
                        className={`py-2 px-3 border-b-2 font-medium transition-colors flex items-center gap-1.5 ${
                          activeConsoleTab === 'result'
                            ? 'border-brand-500 text-brand-300'
                            : 'border-transparent text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <Terminal className="w-3.5 h-3.5" />
                        Run Output
                        {executionResult && (
                          <span
                            className={`w-2 h-2 rounded-full ${
                              executionResult.overallStatus === 'ACCEPTED' || executionResult.status === 'ACCEPTED'
                                ? 'bg-emerald-400'
                                : 'bg-rose-400'
                            }`}
                          />
                        )}
                      </button>
                    </div>

                    <div className="p-4">
                      {/* TAB 1: Sample Test Cases */}
                      {activeConsoleTab === 'testcases' && (
                        <div className="space-y-3">
                          {sampleTestCases.length > 0 ? (
                            <>
                              <div className="flex gap-2">
                                {sampleTestCases.map((_: any, idx: number) => (
                                  <button
                                    key={idx}
                                    onClick={() => setActiveTestCaseIdx(idx)}
                                    className={`px-3 py-1 rounded-lg font-mono text-xs font-semibold border ${
                                      activeTestCaseIdx === idx
                                        ? 'bg-brand-500/20 border-brand-500 text-brand-300'
                                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                                    }`}
                                  >
                                    Case {idx + 1}
                                  </button>
                                ))}
                              </div>

                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                                <div>
                                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
                                    Sample Input:
                                  </span>
                                  <pre className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 whitespace-pre-wrap">
                                    {sampleTestCases[activeTestCaseIdx]?.input || '(Empty)'}
                                  </pre>
                                </div>
                                <div>
                                  <span className="text-[11px] text-slate-500 uppercase tracking-wider block mb-1">
                                    Expected Output:
                                  </span>
                                  <pre className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-emerald-400 whitespace-pre-wrap">
                                    {sampleTestCases[activeTestCaseIdx]?.output || '(None)'}
                                  </pre>
                                </div>
                              </div>
                            </>
                          ) : (
                            <p className="text-slate-400 text-xs italic">
                              Standard algorithmic test suite is configured for this problem. Click "Run Code" to test execution.
                            </p>
                          )}
                        </div>
                      )}

                      {/* TAB 2: Custom Input */}
                      {activeConsoleTab === 'custom' && (
                        <div className="space-y-2">
                          <span className="text-[11px] text-slate-400 block">
                            Type stdin inputs to evaluate against your solution:
                          </span>
                          <textarea
                            rows={3}
                            value={customInput}
                            onChange={(e) => setCustomInput(e.target.value)}
                            placeholder="e.g. 5&#10;1 2 3 4 5"
                            className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 font-mono text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                          />
                        </div>
                      )}

                      {/* TAB 3: Run Result / Console */}
                      {activeConsoleTab === 'result' && (
                        <div>
                          {isRunningCode ? (
                            <div className="py-6 flex items-center justify-center gap-2 text-slate-400">
                              <div className="w-4 h-4 border-2 border-brand-500 border-t-transparent rounded-full animate-spin" />
                              <span>Compiling and running against test suite...</span>
                            </div>
                          ) : executionResult ? (
                            <div className="space-y-3 font-mono text-xs">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {executionResult.overallStatus === 'ACCEPTED' || executionResult.status === 'ACCEPTED' ? (
                                    <Badge variant="success" className="text-xs font-bold">
                                      Accepted
                                    </Badge>
                                  ) : (
                                    <Badge variant="danger" className="text-xs font-bold">
                                      {executionResult.overallStatus || executionResult.status || 'Failed'}
                                    </Badge>
                                  )}

                                  {executionResult.totalCases !== undefined && (
                                    <span className="text-slate-400">
                                      {executionResult.passedCases} / {executionResult.totalCases} Sample Cases Passed
                                    </span>
                                  )}
                                </div>

                                {executionResult.maxExecutionTimeMs !== undefined && (
                                  <span className="text-slate-500 text-[11px]">
                                    Runtime: {executionResult.maxExecutionTimeMs} ms
                                  </span>
                                )}
                              </div>

                              {executionResult.output && (
                                <div>
                                  <span className="text-[11px] text-slate-500 block mb-1">Standard Output:</span>
                                  <pre className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 whitespace-pre-wrap">
                                    {executionResult.output}
                                  </pre>
                                </div>
                              )}

                              {executionResult.firstFailedCase && (
                                <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 space-y-1.5">
                                  <span className="font-bold block">
                                    First Failed Testcase (Case #{executionResult.firstFailedCase.caseNumber}):
                                  </span>
                                  <p className="text-[11px]">Input: {executionResult.firstFailedCase.input}</p>
                                  <p className="text-[11px]">Expected: {executionResult.firstFailedCase.expectedOutput}</p>
                                  <p className="text-[11px]">Actual Output: {executionResult.firstFailedCase.actualOutput}</p>
                                  {executionResult.firstFailedCase.errorLog && (
                                    <pre className="p-2 bg-slate-950 rounded text-rose-400 text-[10px] whitespace-pre-wrap mt-1">
                                      {executionResult.firstFailedCase.errorLog}
                                    </pre>
                                  )}
                                </div>
                              )}

                              {executionResult.errorLog && !executionResult.firstFailedCase && (
                                <pre className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 whitespace-pre-wrap">
                                  {executionResult.errorLog}
                                </pre>
                              )}
                            </div>
                          ) : (
                            <p className="text-slate-500 text-xs italic py-2">
                              No execution result yet. Click "Run Code" above to compile & verify your solution.
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Question Stepper */}
            <div className="flex items-center justify-between pt-5 border-t border-slate-800/80 mt-6">
              <Button
                onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))}
                disabled={currentIdx === 0}
                variant="outline"
                size="sm"
                className="flex items-center gap-1 text-xs"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Previous Question
              </Button>

              <span className="text-xs text-slate-500">
                {isAnswered ? (
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Response Recorded
                  </span>
                ) : (
                  <span>Unanswered</span>
                )}
              </span>

              <Button
                onClick={() => setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))}
                disabled={currentIdx >= questions.length - 1}
                variant="primary"
                size="sm"
                className="flex items-center gap-1 text-xs"
              >
                Next Question
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Right 1 Column: Question Palette */}
        <div className="space-y-4">
          <Card className="p-5 bg-slate-900/90 border-slate-800 space-y-4">
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Question Palette
            </h4>

            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const answered = !!answers[q.questionId.toString()];
                const isCurrent = idx === currentIdx;

                return (
                  <button
                    key={q.questionId}
                    onClick={() => setCurrentIdx(idx)}
                    className={`h-9 rounded-lg text-xs font-bold font-mono transition-all border ${
                      isCurrent
                        ? 'border-brand-400 ring-2 ring-brand-500/30 bg-brand-600 text-white'
                        : answered
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                        : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    {idx + 1}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-500/20 border border-emerald-500/40"></span>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-slate-950 border border-slate-800"></span>
                <span>Unanswered</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-brand-600 border border-brand-400"></span>
                <span>Current Question</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Proctoring Warning Modal */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <Card className="max-w-md w-full p-6 bg-slate-900 border-rose-500/50 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-white">Proctoring Security Alert</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{warningMessage}</p>
            <Button
              onClick={() => setShowWarningModal(false)}
              variant="danger"
              className="w-full font-bold"
            >
              I Understand & Return to Exam
            </Button>
          </Card>
        </div>
      )}

      {/* Final Detailed Scorecard Modal */}
      {scorecard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
          <Card className="max-w-xl w-full p-6 bg-slate-900 border-brand-500/40 space-y-5 text-center my-8 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Assessment Submitted & Graded</h2>
              <p className="text-xs text-slate-400 mt-1">
                Your algorithmic execution results and answers have been evaluated.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Total Score</span>
                <span className="text-lg font-mono font-bold text-brand-300">
                  {scorecard.totalScore} / {scorecard.maxPossibleScore}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Percentage</span>
                <span className="text-lg font-mono font-bold text-white">{scorecard.percentage}%</span>
              </div>
              <div>
                <span className="text-[11px] text-slate-500 uppercase tracking-wider block">Status</span>
                <Badge variant={scorecard.isPassed ? 'success' : 'danger'} className="mt-1">
                  {scorecard.isPassed ? 'QUALIFIED' : 'NEEDS PRACTICE'}
                </Badge>
              </div>
            </div>

            {/* Detailed per-question scorecard */}
            {scorecard.answers && scorecard.answers.length > 0 && (
              <div className="space-y-2 text-left">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Question Breakdown & Evaluation
                </h4>
                <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                  {scorecard.answers.map((ansItem: any, idx: number) => {
                    const matchedQ = questions.find(
                      (q) => q.questionId.toString() === ansItem.questionId.toString()
                    );
                    const qTitle =
                      matchedQ?.questionData?.title ||
                      matchedQ?.questionData?.problemStatement ||
                      `Question ${idx + 1}`;

                    return (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-950 border border-slate-800/80 flex items-center justify-between text-xs"
                      >
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-slate-500 font-bold">#{idx + 1}</span>
                            <span className="font-semibold text-slate-200">{qTitle}</span>
                            <Badge variant={ansItem.type === 'CODING' ? 'brand' : 'neutral'} size="sm">
                              {ansItem.type}
                            </Badge>
                          </div>

                          <div className="text-[11px] text-slate-400 flex items-center gap-2">
                            {ansItem.type === 'CODING' && ansItem.testCasesPassed !== undefined && (
                              <span>
                                Testcases: {ansItem.testCasesPassed}/{ansItem.totalTestCases} passed
                              </span>
                            )}
                            {ansItem.executionStatus && (
                              <span
                                className={
                                  ansItem.executionStatus === 'ACCEPTED'
                                    ? 'text-emerald-400'
                                    : 'text-amber-400'
                                }
                              >
                                ({ansItem.executionStatus})
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="text-right">
                          <span
                            className={`font-mono font-bold text-xs ${
                              ansItem.scoreAwarded > 0
                                ? 'text-emerald-400'
                                : ansItem.scoreAwarded < 0
                                ? 'text-rose-400'
                                : 'text-slate-400'
                            }`}
                          >
                            {ansItem.scoreAwarded > 0 ? `+${ansItem.scoreAwarded}` : ansItem.scoreAwarded} pts
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <Button
              onClick={() => navigate('/assessments')}
              variant="primary"
              className="w-full flex items-center justify-center gap-1.5 font-bold"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Assessments Dashboard
            </Button>
          </Card>
        </div>
      )}
    </div>
  );
};
