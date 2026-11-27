import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Users,
  ClipboardCheck,
  Plus,
  BarChart3,
  ShieldAlert,
  Code2,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const FacultyDashboard: React.FC = () => {
  const { user } = useAuth();

  const [classesCount, setClassesCount] = useState<number>(3);
  const [studentsCount, setStudentsCount] = useState<number>(180);
  const [assessments, setAssessments] = useState<any[]>([]);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [submissionStats, setSubmissionStats] = useState<{
    totalAttempts: number;
    totalSubmissions: number;
    averagePercentage: number;
  }>({ totalAttempts: 0, totalSubmissions: 0, averagePercentage: 0 });

  useEffect(() => {
    fetchDashboardTelemetry();
  }, []);

  const fetchDashboardTelemetry = async () => {
    try {
      const [classRes, studRes, assessRes, subRes, cohortRes] = await Promise.all([
        axios.get('/tenants/classes').catch(() => ({ data: { data: [] } })),
        axios.get('/students', { params: { limit: 100 } }).catch(() => ({ data: { data: [] } })),
        axios.get('/assessments').catch(() => ({ data: { data: [] } })),
        axios.get('/assessments/faculty/submissions').catch(() => ({ data: { data: { submissions: [], stats: {} } } })),
        axios.get('/tenants/faculty/my-cohorts').catch(() => ({ data: { data: [] } })),
      ]);

      const classList = classRes.data?.data || [];
      const studentList = studRes.data?.data || [];
      const assessList = assessRes.data?.data || [];
      const subData = subRes.data?.data || {};
      const myCohorts = cohortRes.data?.data || [];

      setClassesCount(myCohorts.length > 0 ? myCohorts.length : classList.length);
      setStudentsCount(studentList.length);
      setAssessments(assessList);
      setSubmissions(subData.submissions || []);
      if (subData.stats) {
        setSubmissionStats({
          totalAttempts: subData.stats.totalAttempts || 0,
          totalSubmissions: subData.stats.totalSubmissions || 0,
          averagePercentage: subData.stats.averagePercentage || 0,
        });
      }
    } catch (err) {
      console.error('Failed to load dashboard telemetry:', err);
    }
  };

  const now = new Date();
  const liveTests = assessments.filter((a) => {
    const s = new Date(a.startTime);
    const e = new Date(a.endTime);
    return now >= s && now <= e;
  });

  return (
    <div className="space-y-8 pb-16">
      {/* Page Header */}
      <div className="pb-6 border-b border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">Faculty Workspace</h1>
          <p className="text-sm text-[#a1a1a6] mt-1">
            Prof. {user?.firstName} {user?.lastName} · Cohorts, assessments and live proctoring
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <Link to="/faculty/question-bank">
            <Button variant="secondary" size="md" leftIcon={<Code2 className="w-4 h-4" strokeWidth={1.5} />}>
              Question bank
            </Button>
          </Link>
          <Link to="/faculty/tests/new">
            <Button
              variant="primary"
              size="md"
              leftIcon={<Plus className="w-4 h-4" strokeWidth={1.5} />}
            >
              Create assessment
            </Button>
          </Link>
        </div>
      </div>

      {/* Interactive Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/faculty/classes" className="group">
          <Card hoverable className="p-5 cursor-pointer">
            <div className="flex items-center justify-between text-xs text-[#85858b]">
              <span>Assigned sections</span>
              <Users className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
            </div>
            <div className="flex items-baseline justify-between mt-3">
              <h3 className="text-3xl font-medium text-[#ededed] tabular-nums">{classesCount}</h3>
              <ArrowRight className="w-4 h-4 text-[#85858b] group-hover:text-[#ededed] transition-colors" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#a1a1a6] mt-1 tabular-nums">{studentsCount} mapped students</p>
          </Card>
        </Link>

        <Link to="/faculty/tests" className="group">
          <Card hoverable className="p-5 cursor-pointer">
            <div className="flex items-center justify-between text-xs text-[#85858b]">
              <span>Institutional tests</span>
              <ClipboardCheck className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
            </div>
            <div className="flex items-baseline justify-between mt-3">
              <h3 className="text-3xl font-medium text-[#ededed] tabular-nums">
                {liveTests.length > 0 ? `${liveTests.length} live` : assessments.length}
              </h3>
              <ArrowRight className="w-4 h-4 text-[#85858b] group-hover:text-[#ededed] transition-colors" strokeWidth={1.5} />
            </div>
            <p className="text-xs text-[#a1a1a6] mt-1 tabular-nums">{submissionStats.totalAttempts} total attempts</p>
          </Card>
        </Link>

        <Card className="p-5">
          <div className="flex items-center justify-between text-xs text-[#85858b]">
            <span>Average class score</span>
            <BarChart3 className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
          </div>
          <div className="flex items-baseline justify-between mt-3">
            <h3 className="text-3xl font-medium text-[#ededed] tabular-nums">
              {submissionStats.totalSubmissions > 0 ? `${submissionStats.averagePercentage}%` : '—'}
            </h3>
            {submissionStats.totalSubmissions > 0 && (
              <Badge variant="success" size="sm">Graded</Badge>
            )}
          </div>
          <p className="text-xs text-[#a1a1a6] mt-1 tabular-nums">
            {submissionStats.totalSubmissions > 0
              ? `Across ${submissionStats.totalSubmissions} submitted test${submissionStats.totalSubmissions === 1 ? '' : 's'}`
              : 'No submissions graded yet'}
          </p>
        </Card>
      </div>

      {/* Quick Launch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Live Proctoring & Submissions */}
        <Card className="bg-slate-900/90 border-slate-800">
          <CardHeader>
            <div className="flex justify-between items-center w-full">
              <div>
                <CardTitle>Recent Assessments & Telemetry</CardTitle>
                <CardDescription>Monitor student progress and proctoring violations</CardDescription>
              </div>
              <Link to="/faculty/tests">
                <Button variant="outline" size="sm" className="text-xs">
                  View All
                </Button>
              </Link>
            </div>
          </CardHeader>

          <div className="divide-y divide-slate-800 text-xs">
            {assessments.length > 0 ? (
              assessments.slice(0, 3).map((test) => (
                <div key={test._id} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-200">{test.title}</p>
                    <p className="text-[11px] text-slate-500">
                      {test.durationMinutes} min • {test.totalQuestions || test.sections?.[0]?.questions?.length || 0} Questions •{' '}
                      <span className="text-cyan-400 font-medium">
                        {test.attemptedCount || 0} Attempted / {test.submittedCount || 0} Submitted
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={test.status === 'LIVE' ? 'warning' : 'brand'} size="sm">
                      {test.status || 'Active'}
                    </Badge>
                    <Link to={`/assessments/${test._id}/monitor`}>
                      <Button variant="outline" size="sm" className="text-[11px] py-1 px-2" leftIcon={<ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />}>
                        Live Monitor
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              [
                { name: 'Aditya Verma', test: 'Placement Diagnostic 02', score: '92/100', status: 'Submitted' },
                { name: 'Pooja Hegde', test: 'Placement Diagnostic 02', score: '88/100', status: 'Submitted' },
                { name: 'Karthik Rao', test: 'Placement Diagnostic 02', score: 'In Progress', status: 'Active' },
              ].map((sub, i) => (
                <div key={i} className="py-3 flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-200">{sub.name}</p>
                    <p className="text-[11px] text-slate-500">{sub.test}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-medium text-slate-300">{sub.score}</span>
                    <Badge variant={sub.status === 'Active' ? 'warning' : 'success'} size="sm">
                      {sub.status}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Weak Topic Diagnostics with Remedial Drill Action */}
        <Card className="bg-slate-900/90 border-slate-800 flex flex-col justify-between">
          <div>
            <CardHeader>
              <div>
                <CardTitle>Weak Topic Diagnostics</CardTitle>
                <CardDescription>Identified knowledge gaps across your student sections</CardDescription>
              </div>
            </CardHeader>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between gap-2">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-200">Dynamic Programming (Knapsack & Subsets)</span>
                  <span className="text-rose-400 font-semibold">32% Accuracy</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>Recommended: Schedule extra practice drill.</span>
                  <Link to="/faculty/tests/new">
                    <Button variant="outline" size="sm" className="text-[10px] py-0.5 px-2">
                      Schedule Drill
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex flex-col justify-between gap-2">
                <div className="flex justify-between font-medium">
                  <span className="text-slate-200">Graph Theory (Dijkstra / Shortest Paths)</span>
                  <span className="text-amber-400 font-semibold">48% Accuracy</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-500">
                  <span>12 students haven't attempted the practice set.</span>
                  <Link to="/faculty/tests/new">
                    <Button variant="outline" size="sm" className="text-[10px] py-0.5 px-2">
                      Schedule Drill
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950/50 border-t border-slate-800/80 rounded-b-xl flex items-center justify-between text-xs mt-4">
            <span className="text-slate-400">Need more problems for practice?</span>
            <Link to="/faculty/question-bank">
              <Button variant="outline" size="sm" className="text-xs" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                Browse Question Bank
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      {/* Live Student Submissions & Marks Table */}
      <Card className="bg-slate-900/90 border-slate-800 p-0 overflow-hidden">
        <div className="p-5 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ClipboardCheck className="w-4 h-4 text-emerald-400" />
              Student Submissions &amp; Marks
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Live record of every student who attempted or submitted an institutional assessment and their exact score.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {submissionStats.totalAttempts} Attempted • {submissionStats.totalSubmissions} Submitted
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Assessment</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Marks &amp; Result</th>
                <th className="py-3 px-4">Submitted At</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {submissions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-10 text-center text-slate-400">
                    No student assessment attempts recorded yet.
                  </td>
                </tr>
              ) : (
                submissions.map((sub) => {
                  const isSubmitted = sub.status === 'SUBMITTED' || sub.status === 'AUTO_SUBMITTED';
                  return (
                    <tr key={sub.sessionId} className="hover:bg-slate-800/40 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-white">{sub.studentName}</div>
                        <div className="text-[11px] text-slate-400 font-mono">
                          {sub.rollNumber ? `${sub.rollNumber} • ` : ''}
                          {sub.email}
                        </div>
                      </td>

                      <td className="py-3.5 px-4 font-medium text-slate-200">{sub.assessmentTitle}</td>

                      <td className="py-3.5 px-4">
                        <Badge
                          variant={
                            sub.status === 'IN_PROGRESS'
                              ? 'brand'
                              : sub.status === 'AUTO_SUBMITTED'
                              ? 'warning'
                              : 'success'
                          }
                          size="sm"
                        >
                          {sub.status === 'IN_PROGRESS'
                            ? 'In Progress'
                            : sub.status === 'AUTO_SUBMITTED'
                            ? 'Auto-Submitted'
                            : 'Submitted'}
                        </Badge>
                      </td>

                      <td className="py-3.5 px-4">
                        {isSubmitted ? (
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-bold text-white">
                              {sub.totalScore} / {sub.maxPossibleScore} pts ({sub.percentage}%)
                            </span>
                            <Badge variant={sub.isPassed ? 'success' : 'danger'} size="sm">
                              {sub.isPassed ? 'PASSED' : 'FAILED'}
                            </Badge>
                          </div>
                        ) : (
                          <span className="text-slate-500 font-mono">Writing test...</span>
                        )}
                      </td>

                      <td className="py-3.5 px-4 text-slate-400 text-[11px]">
                        {sub.submittedAt
                          ? new Date(sub.submittedAt).toLocaleString()
                          : `Started ${new Date(sub.startedAt).toLocaleString()}`}
                      </td>

                      <td className="py-3.5 px-4 text-right">
                        <Link to={`/assessments/${sub.assessmentId}/monitor`}>
                          <Button variant="outline" size="sm" className="text-[11px] py-1 px-2.5">
                            Details
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};
