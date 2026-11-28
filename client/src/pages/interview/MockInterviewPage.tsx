import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { VoiceOrb } from '../../components/interview/VoiceOrb';
import {
  Play,
  Pause,
  Mic,
  MicOff,
  RefreshCw,
  ChevronRight,
  Volume2,
  CheckCircle2,
  Briefcase,
  Code2,
  Users,
  Send,
  RotateCcw,
} from 'lucide-react';

interface InterviewQuestion {
  id: string;
  title: string;
  text: string;
  state: string;
}

interface AnswerRecord {
  questionIndex: number;
  title: string;
  question: string;
  answer: string;
}

interface QuestionFeedback {
  index: number;
  title: string;
  score: number;
  status: string;
  feedback: string;
  idealTip: string;
}

interface EvaluationResult {
  interviewType: 'hr' | 'technical';
  role: string;
  overallScore: number;
  grade: string;
  verdict: string;
  answeredCount: number;
  totalQuestions: number;
  metrics: {
    communicationScore: number;
    technicalOrRoleFitScore: number;
    completenessScore: number;
    clarityScore: number;
  };
  strengths: string[];
  improvements: string[];
  perQuestionFeedback: QuestionFeedback[];
}

const ROLES = [
  'Software Engineer (SDE)',
  'Frontend Developer',
  'Backend Developer',
  'Full Stack Developer',
  'Data Analyst / ML',
];

export const MockInterviewPage: React.FC = () => {
  // Phase: 'setup' -> 'active' -> 'summary'
  const [phase, setPhase] = useState<'setup' | 'active' | 'summary'>('setup');
  const [interviewType, setInterviewType] = useState<'hr' | 'technical'>('hr');
  const [selectedRole, setSelectedRole] = useState<string>(ROLES[0]);

  const [questions, setQuestions] = useState<InterviewQuestion[]>([]);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>('');
  const [currentState, setCurrentState] = useState<string>('smiling');
  const [loadingSpeech, setLoadingSpeech] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Web Audio API analyser for ChatGPT-style orb bubbling
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Candidate answer & speech-to-text
  const [answerText, setAnswerText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [answers, setAnswers] = useState<Record<number, AnswerRecord>>({});
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [evaluating, setEvaluating] = useState<boolean>(false);
  const recognitionRef = useRef<any>(null);
  const autoMicTimerRef = useRef<number | null>(null);
  const phaseRef = useRef<'setup' | 'active' | 'summary'>(phase);
  const isRecordingRef = useRef<boolean>(isRecording);

  phaseRef.current = phase;
  isRecordingRef.current = isRecording;

  const apiBase = (axios.defaults.baseURL || 'http://localhost:5000/api/v1').replace(/\/$/, '');

  const clearAutoMicTimer = () => {
    if (autoMicTimerRef.current !== null) {
      window.clearTimeout(autoMicTimerRef.current);
      autoMicTimerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearAutoMicTimer();
      if (recognitionRef.current) {
        try { recognitionRef.current.stop(); } catch {}
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
      }
    };
  }, []);

  const ensureAudioAnalyser = () => {
    const el = audioRef.current;
    if (!el) return;
    if (!audioCtxRef.current) {
      const Ctx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new Ctx();
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 128;
      analyser.smoothingTimeConstant = 0.75;
      const src = ctx.createMediaElementSource(el);
      src.connect(analyser);
      analyser.connect(ctx.destination);
      audioCtxRef.current = ctx;
      analyserRef.current = analyser;
      sourceNodeRef.current = src;
    }
    if (audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume().catch(() => {});
    }
  };

  const stopAudioAndMic = () => {
    clearAutoMicTimer();
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsSpeaking(false);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch {}
    }
    setIsRecording(false);
  };

  const speakQuestion = async (text: string, state: string = 'speaking') => {
    clearAutoMicTimer();
    setError(null);
    setLoadingSpeech(true);
    setCurrentSubtitle(text);
    setCurrentState(state);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    try {
      const res = await axios.post('/interview/speech', { text });
      const jobId = res.data?.data?.job_id;
      if (jobId) {
        setAudioUrl(`${apiBase}/interview/media/${jobId}?t=${Date.now()}`);
      }
    } catch (err: any) {
      setError(err?.response?.data?.detail || err?.response?.data?.error?.message || 'Failed to generate interviewer speech.');
    } finally {
      setLoadingSpeech(false);
    }
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el || !audioUrl || phase !== 'active') return;
    ensureAudioAnalyser();
    el.src = audioUrl;
    el.play().catch(() => {});
  }, [audioUrl, phase]);

  const handleStartInterview = async () => {
    ensureAudioAnalyser();
    setError(null);
    setLoadingSpeech(true);
    try {
      const res = await axios.post('/interview/session-questions', {
        interviewType,
        role: selectedRole,
      });
      const list: InterviewQuestion[] = res.data?.data?.questions || [];
      if (!list.length) {
        setError('Could not load interview questions.');
        setLoadingSpeech(false);
        return;
      }
      setQuestions(list);
      setActiveIdx(0);
      setAnswers({});
      setAnswerText('');
      setPhase('active');
      await speakQuestion(list[0].text, list[0].state);
    } catch {
      setError('Failed to start interview session. Make sure backend & Python voice service are running.');
      setLoadingSpeech(false);
    }
  };

  const handleTogglePlayback = () => {
    const el = audioRef.current;
    if (!el || !audioUrl) return;
    ensureAudioAnalyser();
    if (el.paused) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  };

  const saveCurrentAnswer = (idx: number) => {
    const q = questions[idx];
    if (!q) return;
    const trimmed = answerText.trim();
    if (trimmed) {
      setAnswers((prev) => ({
        ...prev,
        [idx]: {
          questionIndex: idx,
          title: q.title,
          question: q.text,
          answer: trimmed,
        },
      }));
    }
  };

  const handleNextQuestion = () => {
    ensureAudioAnalyser();
    stopAudioAndMic();
    saveCurrentAnswer(activeIdx);
    const nextIdx = activeIdx + 1;
    if (nextIdx < questions.length) {
      setActiveIdx(nextIdx);
      setAnswerText(answers[nextIdx]?.answer || '');
      speakQuestion(questions[nextIdx].text, questions[nextIdx].state);
    }
  };

  const handleJumpToQuestion = (idx: number) => {
    if (idx === activeIdx) return;
    ensureAudioAnalyser();
    stopAudioAndMic();
    saveCurrentAnswer(activeIdx);
    setActiveIdx(idx);
    setAnswerText(answers[idx]?.answer || '');
    speakQuestion(questions[idx].text, questions[idx].state);
  };

  const handleSubmitInterview = async () => {
    stopAudioAndMic();
    const finalAnswers: Record<number, AnswerRecord> = { ...answers };
    const currentQ = questions[activeIdx];
    if (currentQ && answerText.trim()) {
      finalAnswers[activeIdx] = {
        questionIndex: activeIdx,
        title: currentQ.title,
        question: currentQ.text,
        answer: answerText.trim(),
      };
      setAnswers(finalAnswers);
    }

    setEvaluating(true);
    setPhase('summary');
    try {
      const res = await axios.post('/interview/evaluate', {
        interviewType,
        role: selectedRole,
        questions,
        answers: finalAnswers,
      });
      setEvaluation(res.data?.data || null);
    } catch {
      setError('Could not compute evaluation report.');
    } finally {
      setEvaluating(false);
    }
  };

  const startMic = (silentIfUnsupported = false) => {
    if (isRecordingRef.current) return;
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      if (!silentIfUnsupported) {
        alert('Speech recognition is not supported in this browser. You can type your response below.');
      }
      return;
    }

    try {
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = false;
      rec.lang = 'en-IN';
      rec.onresult = (event: any) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript + ' ';
        }
        setAnswerText((prev) => `${prev}${prev ? ' ' : ''}${transcript.trim()}`);
      };
      rec.onerror = () => setIsRecording(false);
      rec.onend = () => setIsRecording(false);
      rec.start();
      recognitionRef.current = rec;
      setIsRecording(true);
    } catch {
      setIsRecording(false);
    }
  };

  const handleToggleMic = () => {
    clearAutoMicTimer();
    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      return;
    }
    startMic(false);
  };

  const handleAudioEnded = () => {
    setIsSpeaking(false);
    clearAutoMicTimer();
    if (phaseRef.current === 'active') {
      autoMicTimerRef.current = window.setTimeout(() => {
        if (phaseRef.current === 'active') {
          startMic(true);
        }
      }, 1000);
    }
  };

  const answeredCount = Object.keys(answers).length;

  return (
    <div className="space-y-6 pb-12">
      <audio
        ref={audioRef}
        crossOrigin="anonymous"
        onPlay={() => {
          clearAutoMicTimer();
          setIsSpeaking(true);
        }}
        onPause={() => setIsSpeaking(false)}
        onEnded={handleAudioEnded}
      />

      {/* Header */}
      <div className="pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
            AI Mock Interview
          </h1>
          <p className="text-sm text-[#a1a1a6] mt-1">
            {phase === 'setup'
              ? 'Choose your interview track (HR or Technical) and target role for a 10-question session.'
              : `${interviewType === 'technical' ? 'Technical' : 'HR'} Interview · ${selectedRole}`}
          </p>
        </div>
        {phase === 'active' && (
          <div className="flex items-center gap-2">
            <Badge variant="neutral" size="sm">
              Question {activeIdx + 1} / {questions.length}
            </Badge>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => speakQuestion(currentSubtitle, currentState)}
              leftIcon={<RefreshCw className={`w-3.5 h-3.5 ${loadingSpeech ? 'animate-spin' : ''}`} strokeWidth={1.5} />}
            >
              Replay
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={handleSubmitInterview}
              leftIcon={<Send className="w-3.5 h-3.5" />}
            >
              Submit Interview
            </Button>
          </div>
        )}
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-[#e5484d]/10 border border-[#e5484d]/30 text-[#e5484d] text-xs">
          {error}
        </div>
      )}

      {/* PHASE 1: SETUP SCREEN */}
      {phase === 'setup' && (
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="p-6 space-y-6">
            <div>
              <h2 className="text-base font-medium text-[#ededed]">1. Select Interview Type</h2>
              <p className="text-xs text-[#85858b] mt-0.5">Choose whether you want an HR behavioral round or a Technical round.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                <button
                  type="button"
                  onClick={() => setInterviewType('hr')}
                  className={`p-4 rounded-xl border text-left transition-colors ${
                    interviewType === 'hr'
                      ? 'bg-[#232325] border-white/[0.3] text-[#ededed]'
                      : 'bg-[#0f0f10] border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Users className="w-4 h-4 text-[#38bdf8]" />
                    <span className="text-sm font-medium">HR Interview</span>
                  </div>
                  <p className="text-xs text-[#85858b] mt-1.5">
                    10 behavioral, strengths, teamwork, conflict, and career-goal questions.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setInterviewType('technical')}
                  className={`p-4 rounded-xl border text-left transition-colors ${
                    interviewType === 'technical'
                      ? 'bg-[#232325] border-white/[0.3] text-[#ededed]'
                      : 'bg-[#0f0f10] border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-4 h-4 text-[#38bdf8]" />
                    <span className="text-sm font-medium">Technical Interview</span>
                  </div>
                  <p className="text-xs text-[#85858b] mt-1.5">
                    10 role-specific architecture, DSA, debugging, and system questions.
                  </p>
                </button>
              </div>
            </div>

            <div>
              <h2 className="text-base font-medium text-[#ededed]">2. Select Target Role</h2>
              <p className="text-xs text-[#85858b] mt-0.5">Questions will be tailored for this role (starting with &ldquo;Tell me about yourself&rdquo;).</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                {ROLES.map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setSelectedRole(role)}
                    className={`p-3 rounded-lg border text-left flex items-center gap-2.5 transition-colors ${
                      selectedRole === role
                        ? 'bg-[#232325] border-white/[0.3] text-[#ededed]'
                        : 'bg-[#0f0f10] border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed]'
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5 text-[#85858b]" />
                    <span className="text-xs font-medium">{role}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <Button
                variant="primary"
                size="md"
                onClick={handleStartInterview}
                disabled={loadingSpeech}
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                {loadingSpeech ? 'Starting Interview...' : 'Start 10-Question Interview'}
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* PHASE 2: ACTIVE INTERVIEW */}
      {phase === 'active' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Voice Orb + Answer Input */}
          <div className="lg:col-span-8 space-y-5">
            <Card className="p-0 overflow-hidden bg-[#0b0c10]">
              <div className="relative min-h-[300px] bg-gradient-to-b from-[#0d1117] via-[#0b0c10] to-[#0f1014] flex flex-col items-center justify-center py-6 px-6">
                <VoiceOrb
                  isSpeaking={isSpeaking}
                  isListening={isRecording}
                  isLoading={loadingSpeech}
                  analyser={analyserRef.current}
                />

                <div className="mt-2 flex items-center gap-3">
                  {audioUrl && (
                    <Button
                      type="button"
                      variant="secondary"
                      size="sm"
                      onClick={handleTogglePlayback}
                      leftIcon={isSpeaking ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    >
                      {isSpeaking ? 'Pause' : 'Listen'}
                    </Button>
                  )}
                  <span className="text-xs text-[#85858b] flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5" />
                    {loadingSpeech
                      ? 'Generating next question...'
                      : isSpeaking
                        ? 'Anjali is speaking...'
                        : isRecording
                          ? 'Listening to your answer...'
                          : 'Your turn to answer'}
                  </span>
                </div>
              </div>

              {currentSubtitle && (
                <div className="p-4 border-t border-white/[0.08] bg-[#19191b]">
                  <span className="text-[11px] font-mono text-[#85858b] block mb-1">
                    Question {activeIdx + 1} of {questions.length} · Anjali Sharma
                  </span>
                  <p className="text-sm text-[#ededed] leading-relaxed">{currentSubtitle}</p>
                </div>
              )}
            </Card>

            {/* Candidate Response Area */}
            <Card className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-[#ededed]">Your Answer (Q{activeIdx + 1})</h3>
                <Button
                  type="button"
                  variant={isRecording ? 'danger' : 'secondary'}
                  size="sm"
                  onClick={handleToggleMic}
                  leftIcon={isRecording ? <MicOff className="w-3.5 h-3.5" /> : <Mic className="w-3.5 h-3.5" />}
                >
                  {isRecording ? 'Stop Mic' : 'Speak Answer'}
                </Button>
              </div>
              <textarea
                rows={4}
                value={answerText}
                onChange={(e) => setAnswerText(e.target.value)}
                placeholder="Speak using your microphone or type your structured response here..."
                className="w-full bg-[#0f0f10] border border-white/[0.08] rounded-lg p-3 text-sm text-[#ededed] placeholder-[#85858b] focus:outline-none focus:border-white/[0.2]"
              />
              <div className="flex justify-between items-center gap-2">
                <span className="text-xs text-[#85858b]">
                  Answered {answeredCount} of {questions.length}
                </span>
                <div className="flex items-center gap-2">
                  {activeIdx + 1 < questions.length ? (
                    <Button
                      variant="primary"
                      size="sm"
                      disabled={loadingSpeech}
                      onClick={handleNextQuestion}
                      rightIcon={<ChevronRight className="w-4 h-4" />}
                    >
                      Save &amp; Next Question
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleSubmitInterview}
                      leftIcon={<Send className="w-3.5 h-3.5" />}
                    >
                      Submit Interview
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Right: 10-Question Progress List */}
          <div className="lg:col-span-4 space-y-5">
            <Card className="p-5 space-y-3">
              <div>
                <h3 className="text-sm font-medium text-[#ededed]">Interview Questions (10)</h3>
                <p className="text-xs text-[#85858b] mt-0.5">
                  Starts with basics and progresses through {interviewType === 'technical' ? 'technical' : 'HR'} rounds.
                </p>
              </div>
              <div className="space-y-1.5 max-h-[460px] overflow-y-auto pr-1">
                {questions.map((q, idx) => {
                  const isDone = Boolean(answers[idx]?.answer);
                  const isCurrent = activeIdx === idx;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`w-full text-left p-2.5 rounded-lg border transition-colors ${
                        isCurrent
                          ? 'bg-[#232325] border-white/[0.25] text-[#ededed]'
                          : 'bg-[#0f0f10] border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium truncate">
                          {idx + 1}. {q.title}
                        </span>
                        {isDone ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                        ) : (
                          <Play className="w-3 h-3 text-[#85858b] shrink-0" strokeWidth={1.5} />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </Card>
          </div>
        </div>
      )}

      {/* PHASE 3: SUBMITTED INTERVIEW RESULTS & EVALUATION */}
      {phase === 'summary' && (
        <div className="max-w-4xl mx-auto space-y-5">
          {evaluating ? (
            <Card className="p-8 flex flex-col items-center justify-center gap-3 text-sm text-[#a1a1a6]">
              <div className="w-7 h-7 border-2 border-[#ededed] border-t-transparent rounded-full animate-spin" />
              <span>Evaluating your 10-question interview performance...</span>
            </Card>
          ) : (
            <>
              <Card className="p-6 space-y-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <Badge variant="neutral" size="sm">
                      {evaluation?.grade || 'Completed'}
                    </Badge>
                    <h2 className="text-xl font-medium text-[#ededed] mt-2">
                      {interviewType === 'technical' ? 'Technical' : 'HR'} Interview Results — {selectedRole}
                    </h2>
                    <p className="text-xs text-[#a1a1a6] mt-1">
                      {evaluation?.verdict || `You completed ${answeredCount} out of ${questions.length} questions.`}
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-3xl font-semibold text-[#38bdf8] tabular-nums">
                        {evaluation?.overallScore ?? 0}
                        <span className="text-sm text-[#85858b] font-normal"> / 100</span>
                      </div>
                      <div className="text-[11px] text-[#85858b]">
                        {evaluation?.answeredCount ?? answeredCount} / {questions.length} Answered
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => {
                        setPhase('setup');
                        setAudioUrl(null);
                        setQuestions([]);
                        setAnswers({});
                        setAnswerText('');
                        setEvaluation(null);
                      }}
                      leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                    >
                      New Interview
                    </Button>
                  </div>
                </div>

                {evaluation?.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-white/[0.08]">
                    {[
                      { label: 'Communication', val: evaluation.metrics.communicationScore },
                      { label: interviewType === 'technical' ? 'Technical Fit' : 'Role Fit', val: evaluation.metrics.technicalOrRoleFitScore },
                      { label: 'Completeness', val: evaluation.metrics.completenessScore },
                      { label: 'Clarity', val: evaluation.metrics.clarityScore },
                    ].map((m) => (
                      <div key={m.label} className="p-3 rounded-lg bg-[#0f0f10] border border-white/[0.06] space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-[#85858b]">{m.label}</span>
                          <span className="text-[#ededed] font-medium tabular-nums">{m.val}%</span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-white/[0.08] overflow-hidden">
                          <div
                            className="h-full rounded-full bg-[#38bdf8]"
                            style={{ width: `${m.val}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Card>

              {evaluation && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-5 space-y-2">
                    <h3 className="text-sm font-medium text-[#34d399]">Key Strengths</h3>
                    <ul className="space-y-1.5 text-xs text-[#a1a1a6] list-disc list-inside">
                      {evaluation.strengths.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="p-5 space-y-2">
                    <h3 className="text-sm font-medium text-[#f59e0b]">Areas to Improve</h3>
                    <ul className="space-y-1.5 text-xs text-[#a1a1a6] list-disc list-inside">
                      {evaluation.improvements.map((imp, i) => (
                        <li key={i}>{imp}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-[#ededed]">Question-by-Question Breakdown</h3>
                {questions.map((q, idx) => {
                  const rec = answers[idx];
                  const fb = evaluation?.perQuestionFeedback?.find((f) => f.index === idx);
                  return (
                    <Card key={q.id} className="p-4 space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-medium text-[#ededed]">
                          Q{idx + 1}. {q.title}
                        </span>
                        <div className="flex items-center gap-2">
                          {fb && (
                            <span className="text-xs font-semibold text-[#38bdf8] tabular-nums">
                              {fb.score}/10
                            </span>
                          )}
                          <Badge variant="neutral" size="sm">
                            {rec?.answer ? 'Answered' : 'Skipped'}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-[#85858b]">{q.text}</p>
                      {rec?.answer && (
                        <div className="p-3 rounded-lg bg-[#0f0f10] border border-white/[0.06] text-xs text-[#ededed]">
                          {rec.answer}
                        </div>
                      )}
                      {fb && (
                        <div className="text-xs text-[#a1a1a6] pt-1 space-y-1">
                          <p><span className="text-[#ededed] font-medium">Feedback:</span> {fb.feedback}</p>
                          <p><span className="text-[#38bdf8] font-medium">Pro Tip:</span> {fb.idealTip}</p>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};
