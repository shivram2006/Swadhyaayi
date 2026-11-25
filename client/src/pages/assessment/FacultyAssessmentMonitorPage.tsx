import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ShieldAlert,
  ArrowLeft,
  Users,
  Download,
  Clock,
  RotateCcw,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

interface CandidateMonitorItem {
  sessionId: string;
  userId: string;
  name: string;
  rollNumber?: string;
  email: string;
  status: string;
  startedAt: string;
  submittedAt?: string;
  tabSwitchCount: number;
  isFlaggedForCheating: boolean;
  totalScore: number;
  maxPossibleScore?: number;
  percentage: number;
  isPassed: boolean;
}

export const FacultyAssessmentMonitorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [assessment, setAssessment] = useState<any>(null);
  const [candidates, setCandidates] = useState<CandidateMonitorItem[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'IN_PROGRESS' | 'SUBMITTED' | 'FLAGGED'>('ALL');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      fetchMonitorData(id);
    }
  }, [id]);

  const fetchMonitorData = async (assessmentId: string) => {
    try {
      setLoading(true);
      const res = await axios.get(`/assessments/${assessmentId}/monitor`);
      if (res.data?.success) {
        setAssessment(res.data.data.assessment);
        setCandidates(res.data.data.candidates || []);
      }
    } catch (err) {
      console.error('Failed to load proctoring monitor data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleExportCSV = () => {
    if (candidates.length === 0) return;

    const headers = ['Rank', 'Name', 'Roll Number', 'Email', 'Status', 'Tab Switches', 'Flagged', 'Score', 'Percentage', 'Verdict'];
    const rows = candidates.map((c, idx) => [
      idx + 1,
      `"${c.name}"`,
      `"${c.rollNumber || ''}"`,
      `"${c.email}"`,
      c.status,
      c.tabSwitchCount,
      c.isFlaggedForCheating ? 'YES' : 'NO',
      c.totalScore,
      `${c.percentage}%`,
      c.isPassed ? 'PASSED' : 'FAILED',
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `${assessment?.title || 'assessment'}_shortlist.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const totalCandidates = candidates.length;
  const inProgressCount = candidates.filter((c) => c.status === 'IN_PROGRESS').length;
  const submittedCount = candidates.filter((c) => c.status === 'SUBMITTED' || c.status === 'AUTO_SUBMITTED').length;
  const flaggedCount = candidates.filter((c) => c.isFlaggedForCheating).length;

  const filteredCandidates = candidates.filter((c) => {
    if (filter === 'IN_PROGRESS') return c.status === 'IN_PROGRESS';
    if (filter === 'SUBMITTED') return c.status === 'SUBMITTED' || c.status === 'AUTO_SUBMITTED';
    if (filter === 'FLAGGED') return c.isFlaggedForCheating;
    return true;
  });

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Top Back Nav */}
      <button
        onClick={() => navigate('/admin/tests')}
        className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Institutional Assessments
      </button>

      {/* Header and Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-slate-900 border border-slate-800 rounded-2xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Live Proctoring Radar
            </span>
          </div>
          <h1 className="text-2xl font-extrabold text-white">{assessment?.title || 'Assessment Monitor'}</h1>
          <p className="text-xs text-slate-400">
            Real-time candidate telemetry, violation detection, and score evaluation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            onClick={() => id && fetchMonitorData(id)}
            variant="outline"
            size="sm"
            className="flex items-center gap-1.5 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Refresh Telemetry
          </Button>

          <Button
            onClick={handleExportCSV}
            variant="primary"
            size="sm"
            className="flex items-center gap-1.5 text-xs font-bold"
          >
            <Download className="w-3.5 h-3.5" />
            Export Shortlist CSV
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <Card className="p-4 bg-slate-900 border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Total Candidates</div>
          <div className="text-2xl font-bold text-white mt-1 flex items-center justify-between">
            <span>{totalCandidates}</span>
            <Users className="w-5 h-5 text-slate-600" />
          </div>
        </Card>

        <Card className="p-4 bg-slate-900 border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Currently Writing Exam</div>
          <div className="text-2xl font-bold text-blue-400 mt-1 flex items-center justify-between">
            <span>{inProgressCount}</span>
            <Clock className="w-5 h-5 text-blue-500/50" />
          </div>
        </Card>

        <Card className="p-4 bg-slate-900 border-slate-800">
          <div className="text-xs text-slate-400 font-medium">Submitted Tests</div>
          <div className="text-2xl font-bold text-emerald-400 mt-1 flex items-center justify-between">
            <span>{submittedCount}</span>
            <span className="text-xs text-slate-500 font-normal">Graded</span>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900 border-rose-500/30 bg-rose-950/10">
          <div className="text-xs text-rose-300 font-medium">Flagged Malpractice</div>
          <div className="text-2xl font-bold text-rose-400 mt-1 flex items-center justify-between">
            <span>{flaggedCount}</span>
            <ShieldAlert className="w-5 h-5 text-rose-500" />
          </div>
        </Card>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setFilter('ALL')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === 'ALL'
              ? 'bg-slate-800 text-white font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          All Candidates ({totalCandidates})
        </button>
        <button
          onClick={() => setFilter('IN_PROGRESS')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === 'IN_PROGRESS'
              ? 'bg-blue-600 text-white font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Writing ({inProgressCount})
        </button>
        <button
          onClick={() => setFilter('SUBMITTED')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === 'SUBMITTED'
              ? 'bg-emerald-600 text-white font-semibold'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Submitted ({submittedCount})
        </button>
        <button
          onClick={() => setFilter('FLAGGED')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === 'FLAGGED'
              ? 'bg-rose-600 text-white font-semibold'
              : 'text-rose-400 hover:text-rose-300'
          }`}
        >
          Flagged Violations ({flaggedCount})
        </button>
      </div>

      {/* Candidates Telemetry Table */}
      <Card className="p-0 overflow-hidden bg-slate-900 border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Candidate</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-center">Tab Switches</th>
                <th className="py-3 px-4">Integrity Status</th>
                <th className="py-3 px-4 text-right">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    Loading live candidate telemetry...
                  </td>
                </tr>
              ) : filteredCandidates.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    No candidates found for this filter.
                  </td>
                </tr>
              ) : (
                filteredCandidates.map((c) => (
                  <tr key={c.sessionId} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white">{c.name}</div>
                      <div className="text-[11px] text-slate-500 font-mono">
                        {c.rollNumber || c.email}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <Badge
                        variant={
                          c.status === 'IN_PROGRESS'
                            ? 'brand'
                            : c.status === 'AUTO_SUBMITTED'
                            ? 'warning'
                            : 'success'
                        }
                        className="text-[10px]"
                      >
                        {c.status}
                      </Badge>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded font-mono font-bold text-xs ${
                          c.tabSwitchCount >= 3
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                            : c.tabSwitchCount > 0
                            ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            : 'text-slate-400'
                        }`}
                      >
                        {c.tabSwitchCount}
                      </span>
                    </td>

                    <td className="py-3.5 px-4">
                      {c.isFlaggedForCheating ? (
                        <span className="inline-flex items-center gap-1 text-rose-400 font-bold text-xs">
                          <ShieldAlert className="w-3.5 h-3.5" />
                          FLAGGED (Cheating)
                        </span>
                      ) : (
                        <span className="text-emerald-400 text-xs font-medium">Clean</span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right font-mono font-bold text-white">
                      {c.status === 'IN_PROGRESS'
                        ? '—'
                        : `${c.totalScore}${c.maxPossibleScore ? ` / ${c.maxPossibleScore}` : ''} pts (${c.percentage}%)`}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
