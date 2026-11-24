import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  X,
  Upload,
  FileText,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Target,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Award,
  ChevronDown,
  ChevronUp,
  FileCheck,
  TrendingUp,
} from 'lucide-react';
import { TargetRole, IATSUploadCheckResult } from '../../modules/resume/types';
import { ResumeApi } from '../../modules/resume/resumeApi';

interface ResumeAtsCheckerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessCreated?: () => void;
}

const ROLES: { id: TargetRole; label: string; desc: string; icon: string }[] = [
  { id: 'sde', label: 'SDE (Core SWE / DSA)', desc: 'DSA, System Design, C++/Java/Python, OOP', icon: '💻' },
  { id: 'mern', label: 'MERN / Full Stack', desc: 'React, Node.js, Express, MongoDB, TypeScript', icon: '🌐' },
  { id: 'java', label: 'Java / Spring Boot', desc: 'Java, Spring Boot, Microservices, SQL, Kafka', icon: '☕' },
  { id: 'aiml', label: 'AI / Machine Learning', desc: 'Python, PyTorch, TensorFlow, NLP, Scikit-learn', icon: '🧠' },
  { id: 'frontend', label: 'Frontend Engineer', desc: 'React, TypeScript, CSS, Next.js, Web Perf', icon: '🎨' },
  { id: 'backend', label: 'Backend & Cloud', desc: 'Node.js/Go/Python, APIs, Redis, Docker, SQL', icon: '⚙️' },
  { id: 'devops', label: 'DevOps & SRE', desc: 'Docker, K8s, CI/CD, AWS, Terraform, Linux', icon: '🚀' },
  { id: 'general', label: 'General Software Engineer', desc: 'Software engineering, Git, APIs, Testing', icon: '🛠️' },
];

export const ResumeAtsCheckerModal: React.FC<ResumeAtsCheckerModalProps> = ({
  isOpen,
  onClose,
  onSuccessCreated,
}) => {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [targetRole, setTargetRole] = useState<TargetRole>('sde');
  const [activeTab, setActiveTab] = useState<'upload' | 'paste'>('upload');
  const [file, setFile] = useState<File | null>(null);
  const [rawText, setRawText] = useState<string>('');
  const [showJd, setShowJd] = useState<boolean>(false);
  const [customJd, setCustomJd] = useState<string>('');

  // Processing & Result State
  const [scanning, setScanning] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<IATSUploadCheckResult | null>(null);
  const [importing, setImporting] = useState<boolean>(false);
  const [dragOver, setDragOver] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selected = e.target.files[0];
      setFile(selected);
      setError(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const dropped = e.dataTransfer.files[0];
      const ext = dropped.name.toLowerCase();
      if (ext.endsWith('.pdf') || ext.endsWith('.docx') || ext.endsWith('.txt')) {
        setFile(dropped);
        setError(null);
      } else {
        setError('Please upload a PDF, DOCX, or TXT file.');
      }
    }
  };

  const handleScan = async () => {
    if (activeTab === 'upload' && !file) {
      setError('Please select or drop a resume file (PDF, DOCX, TXT).');
      return;
    }
    if (activeTab === 'paste' && (!rawText.trim() || rawText.trim().length < 50)) {
      setError('Please paste your resume text (at least 50 characters).');
      return;
    }

    try {
      setScanning(true);
      setError(null);
      const data = await ResumeApi.checkAtsScore(
        activeTab === 'upload' ? file : null,
        activeTab === 'paste' ? rawText : undefined,
        targetRole,
        showJd && customJd.trim() ? customJd.trim() : undefined
      );
      setResult(data);
    } catch (err: any) {
      setError(err?.response?.data?.message || err?.message || 'Failed to analyze resume ATS score.');
    } finally {
      setScanning(false);
    }
  };

  const handleImportToBuilder = async () => {
    if (!result?.structuredResume) return;
    try {
      setImporting(true);
      const created = await ResumeApi.createResume(result.structuredResume);
      if (onSuccessCreated) onSuccessCreated();
      onClose();
      navigate(`/resumes/${created._id}`);
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to import resume into editor');
    } finally {
      setImporting(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setFile(null);
    setRawText('');
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const getScoreTheme = (score: number) => {
    if (score >= 80) {
      return {
        text: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/30',
        label: 'Placement Ready (Top 10% ATS)',
        badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
        ring: 'stroke-emerald-500',
      };
    }
    if (score >= 60) {
      return {
        text: 'text-amber-400',
        bg: 'bg-amber-500/10',
        border: 'border-amber-500/30',
        label: 'Moderate ATS Match (Needs Optimization)',
        badgeBg: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
        ring: 'stroke-amber-500',
      };
    }
    return {
      text: 'text-rose-400',
      bg: 'bg-rose-500/10',
      border: 'border-rose-500/30',
      label: 'Needs Major Revision (High Rejection Risk)',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
      ring: 'stroke-rose-500',
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-auto">
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">ATS Resume & Role Analyzer</h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30 uppercase tracking-wider">
                  AI Screening Engine
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Upload your resume, target your desired role, and inspect real-time ATS match, power verbs & metrics.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {error && (
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
              <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {!result ? (
            /* Upload / Configuration Screen */
            <div className="space-y-6">
              {/* Step 1: Select Target Role */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-400" />
                  Step 1: Select Target Job Role
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {ROLES.map((r) => {
                    const isSelected = targetRole === r.id;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setTargetRole(r.id)}
                        className={`p-3 rounded-xl border text-left transition-all relative flex flex-col justify-between ${
                          isSelected
                            ? 'bg-brand-500/15 border-brand-500 text-white shadow-lg shadow-brand-500/10 ring-1 ring-brand-500/40'
                            : 'bg-slate-800/40 border-slate-700/60 text-slate-400 hover:border-slate-600 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-lg">{r.icon}</span>
                          {isSelected && (
                            <span className="w-2 h-2 rounded-full bg-brand-400 ring-2 ring-brand-400/30"></span>
                          )}
                        </div>
                        <div>
                          <p className="text-xs font-bold leading-tight line-clamp-1">{r.label}</p>
                          <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">{r.desc}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Upload or Paste Resume */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-brand-400" />
                  Step 2: Provide Your Resume
                </label>

                {/* Tab Switcher */}
                <div className="flex border-b border-slate-800 mb-4">
                  <button
                    type="button"
                    onClick={() => setActiveTab('upload')}
                    className={`flex items-center gap-2 pb-2.5 px-4 text-xs font-semibold transition-all border-b-2 ${
                      activeTab === 'upload'
                        ? 'border-brand-500 text-brand-300'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload File (.PDF, .DOCX, .TXT)
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('paste')}
                    className={`flex items-center gap-2 pb-2.5 px-4 text-xs font-semibold transition-all border-b-2 ${
                      activeTab === 'paste'
                        ? 'border-brand-500 text-brand-300'
                        : 'border-transparent text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Paste Resume Text
                  </button>
                </div>

                {activeTab === 'upload' ? (
                  <div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.txt"
                      className="hidden"
                    />

                    {!file ? (
                      <div
                        onDragOver={(e) => {
                          e.preventDefault();
                          setDragOver(true);
                        }}
                        onDragLeave={() => setDragOver(false)}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all ${
                          dragOver
                            ? 'border-brand-500 bg-brand-500/10'
                            : 'border-slate-700/80 bg-slate-800/30 hover:border-slate-600 hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="w-12 h-12 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mx-auto mb-3">
                          <Upload className="w-6 h-6" />
                        </div>
                        <p className="text-sm font-semibold text-white">
                          Click to browse or drag and drop your resume
                        </p>
                        <p className="text-xs text-slate-400 mt-1">
                          Supports PDF, DOCX (Microsoft Word), or TXT (Max 10MB)
                        </p>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl border border-brand-500/30 bg-brand-500/10 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-lg bg-brand-500/20 text-brand-300">
                            <FileCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-white line-clamp-1">{file.name}</p>
                            <p className="text-xs text-slate-400">
                              {(file.size / 1024).toFixed(1)} KB • Ready for ATS analysis
                            </p>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setFile(null);
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 font-medium transition-colors"
                        >
                          Change File
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div>
                    <textarea
                      value={rawText}
                      onChange={(e) => setRawText(e.target.value)}
                      rows={7}
                      placeholder="Paste your resume content here (e.g. experience bullet points, skills list, education details, summary)..."
                      className="w-full rounded-xl bg-slate-800/50 border border-slate-700/80 p-3.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 font-mono resize-y"
                    />
                    <div className="flex justify-between items-center text-[11px] text-slate-500 mt-1">
                      <span>Include projects, skills and bullet points for accurate scoring.</span>
                      <span>{rawText.length} characters</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Step 3: Optional Custom Job Description */}
              <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/30">
                <button
                  type="button"
                  onClick={() => setShowJd(!showJd)}
                  className="w-full flex items-center justify-between p-3.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    Target a Specific Job Description (Optional)
                  </span>
                  {showJd ? (
                    <ChevronUp className="w-4 h-4 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400" />
                  )}
                </button>

                {showJd && (
                  <div className="p-3.5 pt-0 border-t border-slate-800/60">
                    <p className="text-[11px] text-slate-400 mb-2">
                      Paste the exact job posting (e.g. from LinkedIn, Google, Amazon) to benchmark custom keyword density:
                    </p>
                    <textarea
                      value={customJd}
                      onChange={(e) => setCustomJd(e.target.value)}
                      rows={4}
                      placeholder="Paste the Job Description requirements & qualifications here..."
                      className="w-full rounded-lg bg-slate-800/60 border border-slate-700/80 p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500 resize-y"
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Analysis Result Screen */
            <div className="space-y-6">
              {/* Score Hero Banner */}
              {(() => {
                const theme = getScoreTheme(result.analysis.totalScore);
                const roleObj = ROLES.find((r) => r.id === result.targetRole) || ROLES[0];

                return (
                  <div
                    className={`p-6 rounded-2xl border ${theme.border} ${theme.bg} relative overflow-hidden`}
                  >
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                      <div className="flex items-center gap-5">
                        {/* Score Circle Gauge */}
                        <div className="relative flex items-center justify-center w-24 h-24 shrink-0">
                          <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                            <path
                              className="text-slate-800/80"
                              strokeWidth="3.5"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                            <path
                              className={theme.ring}
                              strokeDasharray={`${result.analysis.totalScore}, 100`}
                              strokeWidth="3.5"
                              strokeLinecap="round"
                              stroke="currentColor"
                              fill="none"
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className={`text-2xl font-black ${theme.text} leading-none`}>
                              {result.analysis.totalScore}
                            </span>
                            <span className="text-[10px] text-slate-400 font-mono mt-0.5">/100</span>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`px-2.5 py-1 rounded-full text-xs font-bold border ${theme.badgeBg}`}
                            >
                              {theme.label}
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                              Target: {roleObj.label}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-white mt-2">
                            ATS Benchmark Diagnosis
                          </h3>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Source: {result.filename} ({result.extractedTextLength.toLocaleString()} characters analyzed)
                          </p>
                        </div>
                      </div>

                      {/* Quick CTAs */}
                      <div className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto">
                        <button
                          type="button"
                          onClick={handleImportToBuilder}
                          disabled={importing}
                          className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
                        >
                          <Sparkles className={`w-4 h-4 ${importing ? 'animate-spin' : ''}`} />
                          {importing ? 'Importing...' : 'Open in Harvard Builder'}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={handleReset}
                          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-300 transition-colors"
                        >
                          <RefreshCw className="w-3.5 h-3.5" />
                          Scan Another
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* 4-Pillar Score Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {/* 1. Completeness */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Section Completeness</span>
                    <span className="font-mono font-bold text-white">
                      {result.analysis.sectionScores.completeness}/25
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all"
                      style={{
                        width: `${(result.analysis.sectionScores.completeness / 25) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Contact, Skills, Education, Experience & Projects
                  </p>
                </div>

                {/* 2. Action Verbs */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Action Verbs</span>
                    <span className="font-mono font-bold text-white">
                      {result.analysis.sectionScores.actionVerbs}/25
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-emerald-500 h-full rounded-full transition-all"
                      style={{
                        width: `${(result.analysis.sectionScores.actionVerbs / 25) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    {result.analysis.strongActionVerbsCount} strong verbs, {result.analysis.weakVerbsCount} weak
                  </p>
                </div>

                {/* 3. Google XYZ Metrics */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Google XYZ Metrics</span>
                    <span className="font-mono font-bold text-white">
                      {result.analysis.sectionScores.quantifiableMetrics}/25
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-500 h-full rounded-full transition-all"
                      style={{
                        width: `${(result.analysis.sectionScores.quantifiableMetrics / 25) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    {result.analysis.detectedMetricsCount} quantified impact metrics detected
                  </p>
                </div>

                {/* 4. Keyword Match */}
                <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Role Keywords</span>
                    <span className="font-mono font-bold text-white">
                      {result.analysis.sectionScores.keywordMatch}/25
                    </span>
                  </div>
                  <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-purple-500 h-full rounded-full transition-all"
                      style={{
                        width: `${(result.analysis.sectionScores.keywordMatch / 25) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-[10px] text-slate-400">
                    {result.analysis.matchedKeywords.length} keywords matched for {result.targetRole.toUpperCase()}
                  </p>
                </div>
              </div>

              {/* Keywords Breakdown (Matched vs Missing) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Matched Keywords */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Matched Keywords ({result.analysis.matchedKeywords.length})
                    </span>
                    <span className="text-[11px] text-slate-500">Found in resume</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {result.analysis.matchedKeywords.length > 0 ? (
                      result.analysis.matchedKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-medium capitalize"
                        >
                          ✓ {kw}
                        </span>
                      ))
                    ) : (
                      <p className="text-xs text-slate-500">
                        No standard target keywords detected yet.
                      </p>
                    )}
                  </div>
                </div>

                {/* Missing Keywords */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <TrendingUp className="w-4 h-4" />
                      Missing Keywords for {result.targetRole.toUpperCase()} ({result.analysis.missingKeywords.length})
                    </span>
                    <span className="text-[11px] text-slate-500">Recruiter search tags</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto pr-1">
                    {result.analysis.missingKeywords.length > 0 ? (
                      result.analysis.missingKeywords.map((kw, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 rounded-lg text-xs bg-amber-500/10 text-amber-300 border border-amber-500/30 font-medium capitalize"
                        >
                          + {kw}
                        </span>
                      ))
                    ) : (
                      <p className="text-xs text-emerald-400 font-medium">
                        All major track keywords matched! Outstanding keyword density.
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Verbs Insight */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Zap className="w-4 h-4 text-brand-400" />
                    Power Verbs & Tone Analysis
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Strong Action Verbs Found ({result.analysis.strongActionVerbsFound?.length || 0}):
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {result.analysis.strongActionVerbsFound && result.analysis.strongActionVerbsFound.length > 0 ? (
                        result.analysis.strongActionVerbsFound.map((v, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-xs bg-blue-500/15 text-blue-300 border border-blue-500/30 capitalize"
                          >
                            {v}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-slate-500">No strong power verbs identified.</span>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="text-[11px] text-slate-400 mb-2">
                      Passive / Weak Verbs Detected ({result.analysis.weakVerbsFound?.length || 0}):
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {result.analysis.weakVerbsFound && result.analysis.weakVerbsFound.length > 0 ? (
                        result.analysis.weakVerbsFound.map((v, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-xs bg-rose-500/15 text-rose-300 border border-rose-500/30 line-through capitalize"
                            title="Replace with an active verb (e.g. Architected, Streamlined, Spearheaded)"
                          >
                            {v}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-emerald-400">Zero weak verbs detected. Excellent!</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actionable Recommendations & Formatting Tips */}
              {result.analysis.formattingIssues.length > 0 && (
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    Actionable ATS Recommendations
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside">
                    {result.analysis.formattingIssues.map((issue, i) => (
                      <li key={i} className="text-slate-300">
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-800 bg-slate-950/60">
          {!result ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleScan}
                disabled={scanning}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
              >
                <Sparkles className={`w-4 h-4 ${scanning ? 'animate-spin' : ''}`} />
                {scanning ? 'Analyzing ATS Score...' : 'Scan & Check ATS Score'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Scan Another Resume
              </button>
              <div className="flex items-center gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleImportToBuilder}
                  disabled={importing}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white text-xs font-bold transition-all shadow-lg shadow-brand-500/20"
                >
                  <Sparkles className={`w-4 h-4 ${importing ? 'animate-spin' : ''}`} />
                  {importing ? 'Importing...' : 'Open in Harvard Resume Builder'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
