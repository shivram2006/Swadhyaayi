import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Video, Play, Mic, MicOff, Send, RefreshCw, ChevronRight } from 'lucide-react';

interface StarterQuestion {
  id: string;
  title: string;
  text: string;
  state: string;
}

export const MockInterviewPage: React.FC = () => {
  const [questions, setQuestions] = useState<StarterQuestion[]>([]);
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>('');
  const [currentState, setCurrentState] = useState<string>('smiling');
  const [rendering, setRendering] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Candidate answer & speech-to-text
  const [answerText, setAnswerText] = useState<string>('');
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [submittedAnswers, setSubmittedAnswers] = useState<{ question: string; answer: string }[]>([]);
  const recognitionRef = useRef<any>(null);

  const apiBase = (axios.defaults.baseURL || 'http://localhost:5000/api/v1').replace(/\/$/, '');

  useEffect(() => {
    loadStarterQuestions();
  }, []);

  const loadStarterQuestions = async () => {
    try {
      const res = await axios.get('/interview/starter-questions');
      const list: StarterQuestion[] = res.data?.data?.questions || [];
      setQuestions(list);
      if (list.length > 0) {
        // Trigger initial basic question ("Tell me about yourself")
        renderQuestion(list[0].text, list[0].state, list[0].id);
      }
    } catch {
      setError('Avatar engine is offline. Make sure the Python avatar service is running on port 8001.');
    }
  };

  const renderQuestion = async (text: string, state: string = 'speaking', preRenderedId?: string) => {
    setError(null);
    setRendering(true);
    setCurrentSubtitle(text);
    setCurrentState(state);
    try {
      if (preRenderedId) {
        // Check if already prerendered or trigger prerender-basics once
        try {
          const st = await axios.get(`/interview/status/${preRenderedId}`);
          if (st.data?.data?.status === 'COMPLETED') {
            setVideoUrl(`${apiBase}/interview/media/${preRenderedId}?t=${Date.now()}`);
            setRendering(false);
            return;
          }
        } catch {
          // Not prerendered yet — render below
        }
      }

      const res = await axios.post('/interview/render', {
        text,
        state,
        async_mode: false,
      });
      const jobId = res.data?.data?.job_id;
      if (jobId) {
        setVideoUrl(`${apiBase}/interview/media/${jobId}?t=${Date.now()}`);
      }
    } catch (err: any) {
      setError(err?.response?.data?.detail || err?.response?.data?.error?.message || 'Failed to generate avatar video.');
    } finally {
      setRendering(false);
    }
  };

  const handleSelectQuestion = (idx: number) => {
    setActiveIdx(idx);
    const q = questions[idx];
    if (q) {
      renderQuestion(q.text, q.state, q.id);
    }
  };

  const handleToggleMic = () => {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert('Speech recognition is not supported in this browser. You can type your response below.');
      return;
    }

    if (isRecording && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
      return;
    }

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
  };

  const handleSaveAndNext = () => {
    if (answerText.trim()) {
      setSubmittedAnswers((prev) => [
        ...prev,
        { question: currentSubtitle || 'Interview Question', answer: answerText.trim() },
      ]);
      setAnswerText('');
    }
    if (activeIdx + 1 < questions.length) {
      handleSelectQuestion(activeIdx + 1);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
            AI Mock Interview
          </h1>
          <p className="text-sm text-[#a1a1a6] mt-1">
            Interactive HR &amp; technical interview with Anjali Sharma (Piper TTS + MediaPipe lip-sync).
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="neutral" size="sm">State: {currentState}</Badge>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => renderQuestion(currentSubtitle || questions[activeIdx]?.text || 'Tell me about yourself.', currentState)}
            leftIcon={<RefreshCw className={`w-3.5 h-3.5 ${rendering ? 'animate-spin' : ''}`} strokeWidth={1.5} />}
          >
            Re-render
          </Button>
        </div>
      </div>

      {error && (
        <div className="p-3 rounded-lg bg-[#e5484d]/10 border border-[#e5484d]/30 text-[#e5484d] text-xs">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Avatar Video Stage + Response Box */}
        <div className="lg:col-span-8 space-y-5">
          <Card className="p-0 overflow-hidden bg-[#0f0f10]">
            <div className="relative aspect-video bg-[#0f0f10] flex items-center justify-center">
              {rendering ? (
                <div className="flex flex-col items-center gap-2 text-xs text-[#a1a1a6]">
                  <div className="w-7 h-7 border-2 border-[#ededed] border-t-transparent rounded-full animate-spin" />
                  <span>Synthesizing Piper speech &amp; lip-synced video...</span>
                </div>
              ) : videoUrl ? (
                <video
                  key={videoUrl}
                  src={videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center space-y-2 p-6">
                  <Video className="w-8 h-8 text-[#85858b] mx-auto" strokeWidth={1.5} />
                  <p className="text-xs text-[#a1a1a6]">Select a question to start the AI mock interview.</p>
                </div>
              )}
            </div>

            {currentSubtitle && (
              <div className="p-4 border-t border-white/[0.08] bg-[#19191b]">
                <span className="text-[11px] font-mono text-[#85858b] block mb-1">
                  Anjali Sharma · Human Resources
                </span>
                <p className="text-sm text-[#ededed] leading-relaxed">{currentSubtitle}</p>
              </div>
            )}
          </Card>

          {/* Candidate Response Area */}
          <Card className="p-5 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-[#ededed]">Your Answer</h3>
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
            <div className="flex justify-end gap-2">
              <Button
                variant="primary"
                size="sm"
                onClick={handleSaveAndNext}
                rightIcon={<ChevronRight className="w-4 h-4" />}
              >
                {activeIdx + 1 < questions.length ? 'Save & Next Question' : 'Save Answer'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Right: Basic Starter Questions & Custom Prompt */}
        <div className="lg:col-span-4 space-y-5">
          <Card className="p-5 space-y-3">
            <div>
              <h3 className="text-sm font-medium text-[#ededed]">Basic Starter Questions</h3>
              <p className="text-xs text-[#85858b] mt-0.5">
                Standard HR &amp; opening questions (starting with &ldquo;Tell me about yourself&rdquo;)
              </p>
            </div>
            <div className="space-y-2">
              {questions.map((q, idx) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => handleSelectQuestion(idx)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    activeIdx === idx
                      ? 'bg-[#232325] border-white/[0.2] text-[#ededed]'
                      : 'bg-[#0f0f10] border-white/[0.08] text-[#a1a1a6] hover:text-[#ededed]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">{idx + 1}. {q.title}</span>
                    <Play className="w-3 h-3 text-[#85858b]" strokeWidth={1.5} />
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-5 space-y-3">
            <h3 className="text-sm font-medium text-[#ededed]">Custom Interview Prompt</h3>
            <textarea
              rows={3}
              value={customPrompt}
              onChange={(e) => setCustomPrompt(e.target.value)}
              placeholder="Type any custom question for Anjali to ask..."
              className="w-full bg-[#0f0f10] border border-white/[0.08] rounded-lg p-2.5 text-xs text-[#ededed] placeholder-[#85858b] focus:outline-none focus:border-white/[0.2]"
            />
            <Button
              variant="secondary"
              size="sm"
              className="w-full"
              disabled={!customPrompt.trim() || rendering}
              onClick={() => renderQuestion(customPrompt.trim(), 'speaking')}
              leftIcon={<Send className="w-3.5 h-3.5" />}
            >
              Ask via Avatar
            </Button>
          </Card>

          {submittedAnswers.length > 0 && (
            <Card className="p-5 space-y-2">
              <h3 className="text-xs font-medium text-[#85858b]">
                Recorded Responses ({submittedAnswers.length})
              </h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {submittedAnswers.map((item, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-[#0f0f10] border border-white/[0.06] text-xs">
                    <p className="text-[#ededed] font-medium line-clamp-1">{item.question}</p>
                    <p className="text-[#a1a1a6] mt-1 line-clamp-2">{item.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
