import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FileText,
  Plus,
  Sparkles,
  Target,
  ArrowRight,
  Trash2,
  Edit3,
  Award,
  Zap,
  Upload,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { ResumeApi } from '../../modules/resume/resumeApi';
import { IResume } from '../../modules/resume/types';
import { ResumeAtsCheckerModal } from './ResumeAtsCheckerModal';

export const ResumeListPage: React.FC = () => {
  const navigate = useNavigate();
  const [resumes, setResumes] = useState<IResume[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [syncing, setSyncing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isCheckerOpen, setIsCheckerOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchResumes();
  }, []);

  const fetchResumes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await ResumeApi.getResumes();
      setResumes(data);
    } catch (err: any) {
      setError(err?.response?.data?.message || 'Failed to load resumes');
    } finally {
      setLoading(false);
    }
  };

  const handleSyncProfile = async () => {
    try {
      setSyncing(true);
      const draft = await ResumeApi.syncFromProfile();
      // Create new resume directly with the synced data
      const created = await ResumeApi.createResume(draft);
      navigate(`/resumes/${created._id}`);
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to sync profile data into resume');
    } finally {
      setSyncing(false);
    }
  };

  const handleDeleteResume = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!window.confirm('Are you sure you want to delete this resume?')) return;
    try {
      await ResumeApi.deleteResume(id);
      setResumes((prev) => prev.filter((r) => r._id !== id));
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to delete resume');
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (score >= 60) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  };

  return (
    <div className="space-y-6">
      {/* Top Header & Fast Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">ATS Resume Suite</h1>
            <Badge variant="brand" className="text-xs">
              Harvard & Tech Standard
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Build machine-parseable, high-impact resumes tailored to campus placement ATS filters with real-time scoring.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            onClick={() => setIsCheckerOpen(true)}
            className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white shadow-lg shadow-brand-500/20"
          >
            <Upload className="w-4 h-4" />
            Upload & Check ATS
          </Button>

          <Button
            variant="outline"
            onClick={handleSyncProfile}
            disabled={syncing}
            className="flex items-center gap-2 border-brand-500/30 text-brand-300 hover:bg-brand-500/10"
          >
            <Sparkles className={`w-4 h-4 ${syncing ? 'animate-spin' : 'text-brand-400'}`} />
            {syncing ? 'Syncing...' : 'One-Click Sync Profile'}
          </Button>

          <Button
            variant="primary"
            onClick={() => navigate('/resumes/new')}
            className="flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create New Resume
          </Button>
        </div>
      </div>

      {/* Overview Analytics Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 bg-slate-900/60 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total Resumes
            </span>
            <FileText className="w-4 h-4 text-brand-400" />
          </div>
          <p className="text-2xl font-bold text-white mt-2">{resumes.length}</p>
          <p className="text-xs text-slate-500 mt-1">Multi-track targeted versions</p>
        </Card>

        <Card className="p-4 bg-slate-900/60 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Highest ATS Score
            </span>
            <Award className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-bold text-emerald-400 mt-2">
            {resumes.length > 0
              ? Math.max(...resumes.map((r) => r.atsScoreCache?.totalScore || 0))
              : 0}
            <span className="text-xs text-slate-400 font-normal"> / 100</span>
          </p>
          <p className="text-xs text-slate-500 mt-1">Optimized for enterprise screeners</p>
        </Card>

        <Card className="p-4 bg-slate-900/60 border-slate-800">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Google XYZ Formula
            </span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-bold text-amber-400 mt-2">
            {resumes.reduce((acc, r) => acc + (r.atsScoreCache?.detectedMetricsCount || 0), 0)}
          </p>
          <p className="text-xs text-slate-500 mt-1">Total quantifiable impact metrics</p>
        </Card>
      </div>

      {/* Upload ATS Score Quick Diagnostic Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-950/40 via-purple-950/20 to-slate-900/60 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-lg shadow-brand-500/5">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="p-3 rounded-xl bg-brand-500/20 text-brand-300 border border-brand-500/30 shrink-0">
            <Upload className="w-5 h-5 text-brand-400" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-sm font-bold text-white">
                Have an existing resume? Check your ATS Score & Role Match Instantly
              </h3>
              <Badge variant="brand" className="text-[10px] py-0 px-2 font-mono">
                PDF • DOCX • TEXT
              </Badge>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Select your role (SDE, MERN, Java, AI/ML, DevOps, Frontend, Backend) and upload your resume to diagnose keywords, power verbs & metrics against recruiter filters.
            </p>
          </div>
        </div>
        <Button
          variant="primary"
          onClick={() => setIsCheckerOpen(true)}
          className="shrink-0 flex items-center gap-2 text-xs bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white shadow-lg shadow-brand-500/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          Upload & Check ATS Score
        </Button>
      </div>

      {/* Error state */}
      {error && (
        <div className="p-4 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
          {error}
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="p-6 bg-slate-900/40 border-slate-800 animate-pulse space-y-4">
              <div className="h-6 bg-slate-800 rounded w-2/3"></div>
              <div className="h-4 bg-slate-800 rounded w-1/3"></div>
              <div className="h-16 bg-slate-800 rounded"></div>
            </Card>
          ))}
        </div>
      ) : resumes.length === 0 ? (
        /* Empty State */
        <Card className="p-12 text-center bg-slate-900/40 border-slate-800 space-y-4 max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center mx-auto text-brand-400">
            <FileText className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">No Resumes Created Yet</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-sm mx-auto">
              Companies filter over 75% of applicants via ATS. Use our One-Click Sync to pull your verified coding stats and college credentials into a Harvard-compliant template.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              onClick={() => setIsCheckerOpen(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 hover:from-brand-500 hover:to-purple-500 text-white shadow-lg shadow-brand-500/20"
            >
              <Upload className="w-4 h-4" />
              Upload Resume & Check ATS
            </Button>
            <Button
              variant="outline"
              onClick={handleSyncProfile}
              disabled={syncing}
              className="flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              {syncing ? 'Syncing...' : 'One-Click Sync from Profile'}
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate('/resumes/new')}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Start from Scratch
            </Button>
          </div>
        </Card>
      ) : (
        /* Resume Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumes.map((resume) => {
            const score = resume.atsScoreCache?.totalScore || 0;
            const target = resume.targetRole?.toUpperCase() || 'SDE';

            return (
              <Card
                key={resume._id}
                onClick={() => navigate(`/resumes/${resume._id}`)}
                className="p-5 bg-slate-900/70 border-slate-800 hover:border-brand-500/40 transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-1">
                        {resume.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="neutral" className="text-[10px] uppercase font-mono">
                          <Target className="w-2.5 h-2.5 mr-1" />
                          {target}
                        </Badge>
                        {resume.isDefault && (
                          <span className="text-[10px] text-amber-400 font-medium">Default</span>
                        )}
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1.5 rounded-xl border text-sm font-bold font-mono ${getScoreColor(
                        score
                      )}`}
                    >
                      {score}
                      <span className="text-[10px] font-normal text-slate-400">/100</span>
                    </div>
                  </div>

                  {/* Section Breakdown Mini Bars */}
                  <div className="mt-5 space-y-2 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Action Verbs</span>
                      <span className="text-slate-300 font-mono">
                        {resume.atsScoreCache?.sectionScores?.actionVerbs || 0}/25
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-brand-500 h-full rounded-full transition-all"
                        style={{
                          width: `${((resume.atsScoreCache?.sectionScores?.actionVerbs || 0) / 25) * 100}%`,
                        }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-slate-400">
                      <span>Quantifiable Results</span>
                      <span className="text-slate-300 font-mono">
                        {resume.atsScoreCache?.sectionScores?.quantifiableMetrics || 0}/25
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-emerald-500 h-full rounded-full transition-all"
                        style={{
                          width: `${((resume.atsScoreCache?.sectionScores?.quantifiableMetrics || 0) / 25) * 100}%`,
                        }}
                      ></div>
                    </div>

                    <div className="flex justify-between text-slate-400">
                      <span>Role Keyword Match</span>
                      <span className="text-slate-300 font-mono">
                        {resume.atsScoreCache?.sectionScores?.keywordMatch || 0}/25
                      </span>
                    </div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-purple-500 h-full rounded-full transition-all"
                        style={{
                          width: `${((resume.atsScoreCache?.sectionScores?.keywordMatch || 0) / 25) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="text-[11px] text-slate-500">
                    Updated {new Date(resume.updatedAt).toLocaleDateString()}
                  </span>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={(e) => handleDeleteResume(e, resume._id)}
                      className="p-1.5 rounded text-slate-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
                      title="Delete Resume"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => navigate(`/resumes/${resume._id}`)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-brand-500/20 hover:text-brand-300 transition-colors text-slate-300 font-medium"
                    >
                      <Edit3 className="w-3 h-3" />
                      Edit
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Upload Resume & ATS Diagnostic Modal */}
      <ResumeAtsCheckerModal
        isOpen={isCheckerOpen}
        onClose={() => setIsCheckerOpen(false)}
        onSuccessCreated={fetchResumes}
      />
    </div>
  );
};
