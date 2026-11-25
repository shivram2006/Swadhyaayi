import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

export const AptitudePracticePage: React.FC = () => {
  const [searchParams] = useSearchParams();

  const category = searchParams.get('category') || 'QUANTITATIVE';
  const mode = (searchParams.get('mode') as 'PRACTICE' | 'MOCK') || 'PRACTICE';

  const [questions, setQuestions] = useState<any[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Practice Mode state (instant verification per question)
  const [practiceAnswers, setPracticeAnswers] = useState<Record<string, any>>({});

  // Mock Mode state (recorded selections)
  const [mockSelections, setMockSelections] = useState<Record<string, string>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(mode === 'MOCK' ? 20 * 60 : 0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scorecard, setScorecard] = useState<any>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get('/aptitude/questions', {
          params: { category, mode, limit: 20 },
        });
        if (res.data.success && res.data.data.length > 0) {
          setQuestions(res.data.data);
        }
      } catch (err) {
        console.error('Failed to load aptitude questions:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchQuestions();
  }, [category, mode]);

  // Timer effect
  useEffect(() => {
    if (scorecard) return;

    const timer = setInterval(() => {
      if (mode === 'MOCK') {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            handleAutoSubmitMock();
            return 0;
          }
          return prev - 1;
        });
      } else {
        setElapsedSeconds((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mode, scorecard, mockSelections]);

  const handleSelectPracticeOption = async (questionId: string, optionId: string) => {
    if (practiceAnswers[questionId]) return; // already answered

    try {
      const res = await axios.post('/aptitude/check-answer', {
        questionId,
        selectedOptionId: optionId,
        timeSpentSeconds: 15,
      });

      if (res.data.success) {
        setPracticeAnswers((prev) => ({
          ...prev,
          [questionId]: res.data.data,
        }));
      }
    } catch (err) {
      console.error('Failed to check answer:', err);
    }
  };

  const handleSelectMockOption = (questionId: string, optionId: string) => {
    setMockSelections((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));
  };

  const handleAutoSubmitMock = async () => {
    await handleSubmitMock();
  };

  const handleSubmitMock = async () => {
    if (questions.length === 0) return;
    setIsSubmitting(true);

    try {
      const answers = questions.map((q) => ({
        questionId: q._id,
        selectedOptionId: mockSelections[q._id] || 'NONE',
        timeSpentSeconds: 60,
      }));

      const res = await axios.post('/aptitude/submit-session', {
        category,
        mode: 'TIMED_MOCK',
        totalTimeSpentSeconds: Math.max(1, 15 * 60 - timeRemainingSeconds),
        answers,
      });

      if (res.data.success) {
        setScorecard(res.data.data);
      }
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to submit mock exam');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  if (isLoading) {
    return <div className="p-12 text-center text-slate-400">Loading screening questions...</div>;
  }

  if (questions.length === 0) {
    return (
      <div className="p-12 text-center text-slate-400">
        <p>No questions found in this category.</p>
        <Link to="/aptitude">
          <Button variant="primary" size="sm" className="mt-4">Back to Aptitude Hub</Button>
        </Link>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const practiceResult = practiceAnswers[currentQ._id];
  const mockSelected = mockSelections[currentQ._id];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-3">
          <Link to="/aptitude" className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h2 className="text-sm font-bold text-white tracking-tight">
              {category.replace(/_/g, ' ')}
            </h2>
            <p className="text-[11px] text-slate-400">{currentQ.subcategory}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant={mode === 'MOCK' ? 'danger' : 'brand'}>
            {mode === 'MOCK' ? 'Timed Mock' : 'Practice Drill'}
          </Badge>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs font-semibold text-slate-200">
            <Clock className="w-3.5 h-3.5 text-brand-400" />
            <span>{mode === 'MOCK' ? formatTimer(timeRemainingSeconds) : formatTimer(elapsedSeconds)}</span>
          </div>

          {mode === 'MOCK' && (
            <Button
              variant="primary"
              size="sm"
              onClick={handleSubmitMock}
              isLoading={isSubmitting}
            >
              Submit Exam
            </Button>
          )}
        </div>
      </div>

      {/* Scorecard Modal on Completion */}
      {scorecard ? (
        <Card className="text-center p-8 bg-slate-900 border-brand-500/30 shadow-2xl">
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-3">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Diagnostic Scorecard</h2>
          <p className="text-xs text-slate-400 mt-1">Campus Placement Readiness Analysis</p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Accuracy</span>
              <p className="text-xl font-bold text-emerald-400 mt-0.5">{scorecard.accuracyPercentage}%</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Score</span>
              <p className="text-xl font-bold text-white mt-0.5">{scorecard.correctCount} / {scorecard.totalQuestions}</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Avg Speed</span>
              <p className="text-xl font-bold text-cyan-400 mt-0.5">{scorecard.averageSpeedSeconds}s</p>
            </div>
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] uppercase font-semibold text-slate-400">Points Awarded</span>
              <p className="text-xl font-bold text-brand-400 mt-0.5">+{scorecard.pointsEarned}</p>
            </div>
          </div>

          <div className="flex justify-center gap-3">
            <Button
              variant="outline"
              size="md"
              onClick={() => {
                setScorecard(null);
                setCurrentIdx(0);
                setMockSelections({});
              }}
              leftIcon={<RotateCcw className="w-4 h-4" />}
            >
              Retake Drill
            </Button>
            <Link to="/aptitude">
              <Button variant="primary" size="md">
                Back to Aptitude Hub
              </Button>
            </Link>
          </div>
        </Card>
      ) : (
        /* Active Question Display */
        <Card className="p-6 space-y-6">
          {/* Question Meta */}
          <div className="flex justify-between items-center text-xs text-slate-400 pb-3 border-b border-slate-800">
            <span className="font-semibold text-slate-300">
              Question {currentIdx + 1} of {questions.length}
            </span>
            <div className="flex items-center gap-2">
              <Badge variant="neutral" size="sm">{currentQ.difficulty}</Badge>
              {currentQ.companyTags?.slice(0, 2).map((ct: any, i: number) => (
                <span key={i} className="text-[10px] text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                  {ct.company}
                </span>
              ))}
            </div>
          </div>

          {/* Question Text */}
          <div className="text-sm sm:text-base font-medium text-slate-100 leading-relaxed whitespace-pre-line">
            {currentQ.questionText}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options?.map((opt: any) => {
              let optionStyle = 'bg-slate-950 hover:bg-slate-800/80 border-slate-800 text-slate-200';

              if (mode === 'PRACTICE' && practiceResult) {
                if (opt.id === practiceResult.correctOptionId) {
                  optionStyle = 'bg-emerald-500/10 border-emerald-500 text-emerald-300 font-semibold shadow-md shadow-emerald-500/10';
                } else if (opt.id === practiceResult.selectedOptionId && !practiceResult.isCorrect) {
                  optionStyle = 'bg-rose-500/10 border-rose-500 text-rose-300 font-semibold';
                }
              } else if (mode === 'MOCK') {
                if (mockSelected === opt.id) {
                  optionStyle = 'bg-brand-600/20 border-brand-500 text-brand-300 font-semibold';
                }
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => {
                    if (mode === 'PRACTICE') {
                      handleSelectPracticeOption(currentQ._id, opt.id);
                    } else {
                      handleSelectMockOption(currentQ._id, opt.id);
                    }
                  }}
                  className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm flex items-center gap-3 transition-all ${optionStyle}`}
                >
                  <span className="w-6 h-6 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs flex-shrink-0">
                    {opt.id}
                  </span>
                  <span>{opt.text}</span>
                </button>
              );
            })}
          </div>

          {/* Explanatory Walkthrough (Practice Mode Only) */}
          {mode === 'PRACTICE' && practiceResult && (
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 font-semibold text-xs">
                {practiceResult.isCorrect ? (
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                  </span>
                ) : (
                  <span className="text-rose-400 flex items-center gap-1">
                    <XCircle className="w-4 h-4" /> Incorrect. Correct option is {practiceResult.correctOptionId}.
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-300 whitespace-pre-line leading-relaxed font-mono pt-2 border-t border-slate-800/80">
                {practiceResult.explanation}
              </div>
            </div>
          )}

          {/* Bottom Question Switcher */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-800">
            <Button
              variant="outline"
              size="sm"
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx((prev) => prev - 1)}
              leftIcon={<ChevronLeft className="w-4 h-4" />}
            >
              Previous
            </Button>

            <span className="text-xs text-slate-500">
              {currentIdx + 1} / {questions.length}
            </span>

            {currentIdx < questions.length - 1 ? (
              <Button
                variant="primary"
                size="sm"
                onClick={() => setCurrentIdx((prev) => prev + 1)}
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                Next
              </Button>
            ) : mode === 'MOCK' ? (
              <Button variant="primary" size="sm" onClick={handleSubmitMock} isLoading={isSubmitting}>
                Submit Exam
              </Button>
            ) : (
              <Link to="/aptitude">
                <Button variant="primary" size="sm">
                  Finish Drill
                </Button>
              </Link>
            )}
          </div>
        </Card>
      )}
    </div>
  );
};
