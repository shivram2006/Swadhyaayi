import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { BarChart3, Clock, FileText, Search, RefreshCw, Users, Award } from 'lucide-react';

interface StudentResultRow {
  sessionId: string;
  userId?: string;
  studentName: string;
  rollNumber: string;
  email: string;
  course?: string;
  semester?: number;
  section?: string;
  status: string;
  totalScore: number;
  maxPossibleScore: number;
  percentage: number;
  isPassed: boolean;
  tabSwitchCount: number;
  startedAt?: string;
  submittedAt?: string;
}

interface ArchivedAssessment {
  _id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  isDeleted: boolean;
  deletedAt?: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  totalQuestions: number;
  totalPoints: number;
  cohorts: { course: string; semester: number; section: string }[];
  analytics: {
    attemptedCount: number;
    submittedCount: number;
    passedCount: number;
    failedCount: number;
    passRate: number;
    averagePercentage: number;
    highestPercentage: number;
    lowestPercentage: number;
    scoreDistribution: { label: string; count: number }[];
  };
  results: StudentResultRow[];
}

export const FacultyResultsPage: React.FC = () => {
  const [assessments, setAssessments] = useState<ArchivedAssessment[]>([]);
  const [selectedId, setSelectedId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'ACTIVE' | 'DELETED'>('ALL');

  const fetchResults = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/assessments/faculty/results');
      const list: ArchivedAssessment[] = res.data?.data || [];
      setAssessments(list);
      if (list.length > 0 && !list.some((a) => a._id === selectedId)) {
        setSelectedId(list[0]._id);
      }
    } catch (err) {
      console.error('Failed to load assessment results archive:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  const visibleAssessments = assessments.filter((a) => {
    if (statusFilter === 'ACTIVE') return !a.isDeleted;
    if (statusFilter === 'DELETED') return a.isDeleted;
    return true;
  });

  const selected =
    visibleAssessments.find((a) => a._id === selectedId) || visibleAssessments[0] || null;

  const filteredRows = (selected?.results || []).filter((r) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      r.studentName.toLowerCase().includes(q) ||
      r.rollNumber.toLowerCase().includes(q) ||
      r.email.toLowerCase().includes(q)
    );
  });

  const maxBucketCount = Math.max(
    1,
    ...(selected?.analytics.scoreDistribution.map((b) => b.count) || [1])
  );

  // Donut chart geometry
  const totalGraded = (selected?.analytics.passedCount || 0) + (selected?.analytics.failedCount || 0);
  const passFraction = totalGraded > 0 ? (selected?.analytics.passedCount || 0) / totalGraded : 0;
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const passDash = circumference * passFraction;

  return (
    <div className="space-y-6 pb-16">
      {/* Header */}
      <div className="pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
            Assessment Results &amp; Analytics
          </h1>
          <p className="text-sm text-[#a1a1a6] mt-1">
            Preserved scores, cohort analytics, and performance charts across active and deleted tests.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg bg-[#0f0f10] border border-white/[0.08] p-1 text-xs">
            {(['ALL', 'ACTIVE', 'DELETED'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1 rounded-md font-medium transition-colors ${
                  statusFilter === tab
                    ? 'bg-[#ededed] text-[#141415]'
                    : 'text-[#a1a1a6] hover:text-[#ededed]'
                }`}
              >
                {tab === 'ALL' ? 'All' : tab === 'ACTIVE' ? 'Active' : 'Deleted'}
              </button>
            ))}
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={fetchResults}
            leftIcon={<RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} strokeWidth={1.5} />}
          >
            Refresh
          </Button>
        </div>
      </div>

      {loading ? (
        <Card className="p-12 text-center text-sm text-[#a1a1a6]">Loading preserved assessment results...</Card>
      ) : visibleAssessments.length === 0 ? (
        <Card className="p-12 text-center space-y-2">
          <BarChart3 className="w-8 h-8 text-[#85858b] mx-auto" strokeWidth={1.5} />
          <h3 className="text-base font-medium text-[#ededed]">No assessments found</h3>
          <p className="text-xs text-[#a1a1a6]">
            Create an assessment or switch filters to view preserved results and analytics.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Assessment Selector */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-medium text-[#85858b] px-1">
              Assessments ({visibleAssessments.length})
            </div>
            <div className="space-y-2 max-h-[75vh] overflow-y-auto pr-1">
              {visibleAssessments.map((item) => {
                const isSelected = selected?._id === item._id;
                return (
                  <button
                    key={item._id}
                    type="button"
                    onClick={() => setSelectedId(item._id)}
                    className={`w-full text-left p-4 rounded-xl border transition-colors ${
                      isSelected
                        ? 'bg-[#232325] border-white/[0.2]'
                        : 'bg-[#19191b] border-white/[0.08] hover:border-white/[0.14]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-sm font-medium text-[#ededed] line-clamp-1">{item.title}</p>
                      <Badge variant={item.isDeleted ? 'danger' : 'success'} size="sm">
                        {item.isDeleted ? 'Deleted' : item.status}
                      </Badge>
                    </div>
                    <div className="mt-2 flex items-center justify-between text-xs text-[#a1a1a6] font-mono tabular-nums">
                      <span>{item.analytics.submittedCount} submitted</span>
                      <span>Avg {item.analytics.averagePercentage}%</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Cross-Test Average Comparison Bar Chart */}
            <Card className="p-4 space-y-3">
              <p className="text-xs font-medium text-[#a1a1a6]">Average Score Across Tests</p>
              <div className="space-y-2.5">
                {assessments.slice(0, 6).map((a) => (
                  <div key={a._id} className="space-y-1">
                    <div className="flex justify-between text-[11px]">
                      <span className="text-[#dedee2] truncate max-w-[170px]">{a.title}</span>
                      <span className="font-mono tabular-nums text-[#a1a1a6]">
                        {a.analytics.averagePercentage}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-[#0f0f10] overflow-hidden">
                      <div
                        className="h-full bg-brand-500 rounded-full"
                        style={{ width: `${a.analytics.averagePercentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Right: Selected Assessment Details + Visual Analytics + Results Table */}
          {selected && (
            <div className="lg:col-span-8 space-y-6">
              {/* Assessment Details Card */}
              <Card className="p-6 space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge variant={selected.isDeleted ? 'danger' : 'brand'} size="sm">
                        {selected.isDeleted ? 'Deleted · Results Preserved' : selected.type.replace('_', ' ')}
                      </Badge>
                      {selected.cohorts.map((c, idx) => (
                        <Badge key={idx} variant="neutral" size="sm">
                          {c.course} · Sem {c.semester} · Sec {c.section}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="text-xl font-medium text-[#ededed]">{selected.title}</h2>
                    <p className="text-sm text-[#a1a1a6] mt-1">{selected.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/[0.08] text-xs">
                  <div>
                    <span className="text-[#85858b] block">Duration</span>
                    <span className="text-[#ededed] font-mono tabular-nums mt-0.5 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#85858b]" strokeWidth={1.5} />
                      {selected.durationMinutes} mins
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85858b] block">Questions / Points</span>
                    <span className="text-[#ededed] font-mono tabular-nums mt-0.5 flex items-center gap-1">
                      <FileText className="w-3.5 h-3.5 text-[#85858b]" strokeWidth={1.5} />
                      {selected.totalQuestions} Q · {selected.totalPoints} pts
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85858b] block">Window</span>
                    <span className="text-[#dedee2] font-mono tabular-nums mt-0.5 block">
                      {new Date(selected.startTime).toLocaleDateString()} – {new Date(selected.endTime).toLocaleDateString()}
                    </span>
                  </div>
                  <div>
                    <span className="text-[#85858b] block">{selected.isDeleted ? 'Deleted On' : 'Status'}</span>
                    <span className="text-[#dedee2] font-mono tabular-nums mt-0.5 block">
                      {selected.deletedAt ? new Date(selected.deletedAt).toLocaleString() : selected.status}
                    </span>
                  </div>
                </div>
              </Card>

              {/* KPI Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <Card className="p-4">
                  <span className="text-xs text-[#85858b]">Attempted</span>
                  <p className="text-2xl font-medium text-[#ededed] mt-2 tabular-nums">
                    {selected.analytics.attemptedCount}
                  </p>
                  <p className="text-xs text-[#a1a1a6] mt-0.5 tabular-nums">
                    {selected.analytics.submittedCount} submitted
                  </p>
                </Card>
                <Card className="p-4">
                  <span className="text-xs text-[#85858b]">Average Score</span>
                  <p className="text-2xl font-medium text-[#ededed] mt-2 tabular-nums">
                    {selected.analytics.averagePercentage}%
                  </p>
                  <p className="text-xs text-[#a1a1a6] mt-0.5 tabular-nums">
                    Lowest: {selected.analytics.lowestPercentage}%
                  </p>
                </Card>
                <Card className="p-4">
                  <span className="text-xs text-[#85858b]">Highest Score</span>
                  <p className="text-2xl font-medium text-[#4cc38a] mt-2 tabular-nums">
                    {selected.analytics.highestPercentage}%
                  </p>
                  <p className="text-xs text-[#a1a1a6] mt-0.5">Top percentile</p>
                </Card>
                <Card className="p-4">
                  <span className="text-xs text-[#85858b]">Pass Rate</span>
                  <p className="text-2xl font-medium text-brand-400 mt-2 tabular-nums">
                    {selected.analytics.passRate}%
                  </p>
                  <p className="text-xs text-[#a1a1a6] mt-0.5 tabular-nums">
                    {selected.analytics.passedCount} passed · {selected.analytics.failedCount} failed
                  </p>
                </Card>
              </div>

              {/* Charts Row: Score Distribution Bar Chart + Pass/Fail Donut */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-5 space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-[#ededed]">Score Distribution</h3>
                    <p className="text-xs text-[#85858b]">Number of students in each score band</p>
                  </div>
                  <div className="h-44 flex items-end justify-between gap-4 pt-4 px-2 border-b border-white/[0.08]">
                    {selected.analytics.scoreDistribution.map((bucket) => {
                      const heightPct = Math.round((bucket.count / maxBucketCount) * 100);
                      return (
                        <div key={bucket.label} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                          <span className="text-xs font-mono tabular-nums text-[#dedee2]">
                            {bucket.count}
                          </span>
                          <div className="w-full max-w-[44px] bg-[#0f0f10] rounded-t-md h-28 flex items-end overflow-hidden border border-white/[0.06]">
                            <div
                              className="w-full bg-brand-500 rounded-t-md transition-all"
                              style={{ height: `${bucket.count > 0 ? Math.max(heightPct, 12) : 0}%` }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="flex justify-between px-2 text-[11px] font-mono text-[#a1a1a6]">
                    {selected.analytics.scoreDistribution.map((b) => (
                      <span key={b.label} className="flex-1 text-center">{b.label}</span>
                    ))}
                  </div>
                </Card>

                <Card className="p-5 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-[#ededed]">Pass vs Fail Ratio</h3>
                    <p className="text-xs text-[#85858b]">40% passing cutoff across submitted attempts</p>
                  </div>
                  <div className="flex items-center justify-center gap-6 py-2">
                    <svg width="116" height="116" viewBox="0 0 116 116" className="-rotate-90">
                      <circle
                        cx="58"
                        cy="58"
                        r={radius}
                        fill="transparent"
                        stroke={totalGraded > 0 ? '#e5484d' : '#232325'}
                        strokeWidth="12"
                      />
                      {totalGraded > 0 && (
                        <circle
                          cx="58"
                          cy="58"
                          r={radius}
                          fill="transparent"
                          stroke="#4cc38a"
                          strokeWidth="12"
                          strokeDasharray={`${passDash} ${circumference}`}
                          strokeLinecap="butt"
                        />
                      )}
                    </svg>
                    <div className="space-y-2.5 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#4cc38a]" />
                        <span className="text-[#dedee2]">Passed:</span>
                        <span className="font-mono tabular-nums text-[#ededed] font-medium">
                          {selected.analytics.passedCount}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-sm bg-[#e5484d]" />
                        <span className="text-[#dedee2]">Failed:</span>
                        <span className="font-mono tabular-nums text-[#ededed] font-medium">
                          {selected.analytics.failedCount}
                        </span>
                      </div>
                      <div className="pt-1 border-t border-white/[0.08] text-[#a1a1a6] font-mono tabular-nums">
                        Pass rate: {selected.analytics.passRate}%
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Per-Student Bar Comparison */}
              {selected.results.length > 0 && (
                <Card className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-[#ededed]">Student Score Comparison</h3>
                      <p className="text-xs text-[#85858b]">Individual percentage vs 40% passing benchmark</p>
                    </div>
                    <Award className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
                  </div>
                  <div className="space-y-3">
                    {selected.results.slice(0, 12).map((r) => (
                      <div key={r.sessionId} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-[#ededed] font-medium">
                            {r.studentName}{' '}
                            <span className="text-[#85858b] font-mono">({r.rollNumber})</span>
                          </span>
                          <span className="font-mono tabular-nums text-[#dedee2]">
                            {r.totalScore}/{r.maxPossibleScore} ({r.percentage}%)
                          </span>
                        </div>
                        <div className="relative h-2 rounded-full bg-[#0f0f10] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${r.isPassed ? 'bg-[#4cc38a]' : 'bg-[#e5484d]'}`}
                            style={{ width: `${Math.min(100, Math.max(0, r.percentage))}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Full Student Results Table */}
              <Card className="p-0 overflow-hidden">
                <CardHeader className="px-5 pt-5 pb-4 mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 w-full">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
                        Student Results Ledger
                      </CardTitle>
                      <CardDescription>All attempts and final graded marks</CardDescription>
                    </div>
                    <div className="relative w-full sm:w-64">
                      <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-[#85858b]" strokeWidth={1.5} />
                      <input
                        type="text"
                        placeholder="Search student or roll no"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-8 pr-3 h-8 bg-[#0f0f10] border border-white/[0.08] rounded-lg text-xs text-[#ededed] placeholder-[#85858b] focus:outline-none focus:border-white/[0.2]"
                      />
                    </div>
                  </div>
                </CardHeader>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#0f0f10] text-[#85858b] border-b border-white/[0.08]">
                      <tr>
                        <th className="py-2.5 px-4 font-medium">Roll No</th>
                        <th className="py-2.5 px-4 font-medium">Student</th>
                        <th className="py-2.5 px-4 font-medium">Cohort</th>
                        <th className="py-2.5 px-4 font-medium">Marks</th>
                        <th className="py-2.5 px-4 font-medium">%</th>
                        <th className="py-2.5 px-4 font-medium">Result</th>
                        <th className="py-2.5 px-4 font-medium">Submitted</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                      {filteredRows.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-[#85858b]">
                            No student attempts recorded for this assessment.
                          </td>
                        </tr>
                      ) : (
                        filteredRows.map((row) => (
                          <tr key={row.sessionId} className="hover:bg-[#232325]/50">
                            <td className="py-2.5 px-4 font-mono text-[#dedee2]">{row.rollNumber}</td>
                            <td className="py-2.5 px-4">
                              <p className="font-medium text-[#ededed]">{row.studentName}</p>
                              <p className="text-[11px] text-[#85858b]">{row.email}</p>
                            </td>
                            <td className="py-2.5 px-4 text-[#a1a1a6]">
                              {row.course ? `${row.course} · Sem ${row.semester} · ${row.section}` : '—'}
                            </td>
                            <td className="py-2.5 px-4 font-mono tabular-nums text-[#ededed]">
                              {row.totalScore} / {row.maxPossibleScore}
                            </td>
                            <td className="py-2.5 px-4 font-mono tabular-nums text-[#ededed]">
                              {row.percentage}%
                            </td>
                            <td className="py-2.5 px-4">
                              {row.status === 'SUBMITTED' || row.status === 'AUTO_SUBMITTED' ? (
                                <Badge variant={row.isPassed ? 'success' : 'danger'} size="sm">
                                  {row.isPassed ? 'Passed' : 'Failed'}
                                </Badge>
                              ) : (
                                <Badge variant="warning" size="sm">In Progress</Badge>
                              )}
                            </td>
                            <td className="py-2.5 px-4 font-mono text-[#85858b]">
                              {row.submittedAt ? new Date(row.submittedAt).toLocaleString() : '—'}
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
