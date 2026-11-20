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
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

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
        setQuestions(res.data.data.questions || []);

        // Populate existing answers if resuming
        const initialAnswers: Record<string, any> = {};
        if (res.data.data.session.answers) {
          res.data.data.session.answers.forEach((ans: any) => {
            initialAnswers[ans.questionId.toString()] = ans;
          });
        }
        setAnswers(initialAnswers);
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
    axios.post(`/assessments/${id}/save-answer`, {
      questionId: currentQ.questionId,
      type: currentQ.type,
      selectedOptionId: optionId,
    }).catch((e) => console.error('Save answer error:', e));
  };

  const handleCodeChange = (codeVal: string) => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const qIdStr = currentQ.questionId.toString();
    const updated = {
      ...answers,
      [qIdStr]: {
        ...answers[qIdStr],
        questionId: currentQ.questionId,
        type: currentQ.type,
        code: codeVal,
      },
    };
    setAnswers(updated);
  };

  const handleSaveCode = () => {
    const currentQ = questions[currentIdx];
    if (!currentQ) return;

    const qIdStr = currentQ.questionId.toString();
    axios.post(`/assessments/${id}/save-answer`, {
      questionId: currentQ.questionId,
      type: currentQ.type,
      code: answers[qIdStr]?.code || '',
      language: 'python',
    }).catch((e) => console.error('Save code error:', e));
  };

  const handleSubmitTest = async () => {
    if (!confirm('Are you sure you want to finish and submit this test?')) return;
    try {
      const res = await axios.post(`/assessments/${id}/submit`);
      if (res.data?.success) {
        setScorecard(res.data.data);
      }
    } catch (err) {
      console.error('Error submitting assessment:', err);
    }
  };

  const handleAutoSubmit = async () => {
    try {
      const res = await axios.post(`/assessments/${id}/submit`);
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

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

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
              <span>Question {currentIdx + 1} of {questions.length}</span>
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
        {/* Left 3 Columns: Question Presentation */}
        <div className="lg:col-span-3 space-y-4">
          <Card className="p-6 bg-slate-900/90 border-slate-800 min-h-[460px] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80">
                <Badge variant="brand" className="text-xs">
                  {currentQ?.type === 'CODING' ? 'Algorithmic Coding' : 'Multiple Choice MCQ'}
                </Badge>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  +{currentQ?.points} Points
                </span>
              </div>

              {/* Question Text */}
              <div className="text-sm sm:text-base font-semibold text-white leading-relaxed">
                {qData?.title || qData?.problemStatement || 'Loading question...'}
              </div>

              {/* Subtitle / Details */}
              {qData?.description && (
                <p className="text-xs text-slate-300 whitespace-pre-line leading-relaxed">
                  {qData.description}
                </p>
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

              {/* Coding Editor Area */}
              {currentQ?.type === 'CODING' && (
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>Write your solution in Python / JS:</span>
                    <Button onClick={handleSaveCode} variant="outline" size="sm">
                      Save Code Draft
                    </Button>
                  </div>
                  <textarea
                    rows={12}
                    value={answers[currentQ.questionId.toString()]?.code || ''}
                    onChange={(e) => handleCodeChange(e.target.value)}
                    placeholder="# Write your algorithmic solution here..."
                    className="w-full p-4 bg-slate-950 border border-slate-800 rounded-xl font-mono text-xs text-emerald-300 focus:outline-none focus:border-brand-500"
                  ></textarea>
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

      {/* Final Scorecard Modal */}
      {scorecard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4">
          <Card className="max-w-md w-full p-6 bg-slate-900 border-brand-500/40 space-y-5 text-center">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-400">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">Assessment Submitted</h2>
              <p className="text-xs text-slate-400 mt-1">
                Your performance scorecard has been recorded in the college placement ledger.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Total Score:</span>
                <span className="text-base font-mono font-bold text-brand-300">
                  {scorecard.totalScore} / {scorecard.maxPossibleScore}
                </span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Percentage:</span>
                <span className="font-mono font-bold text-white">{scorecard.percentage}%</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400">Placement Verdict:</span>
                <Badge variant={scorecard.isPassed ? 'success' : 'danger'}>
                  {scorecard.isPassed ? 'QUALIFIED / PASSED' : 'NEEDS PRACTICE'}
                </Badge>
              </div>
            </div>

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
