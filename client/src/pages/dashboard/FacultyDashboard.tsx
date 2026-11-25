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

  useEffect(() => {
    fetchDashboardTelemetry();
  }, []);

  const fetchDashboardTelemetry = async () => {
    try {
      const [classRes, studRes, assessRes] = await Promise.all([
        axios.get('/tenant/classes').catch(() => ({ data: { data: [] } })),
        axios.get('/students', { params: { limit: 100 } }).catch(() => ({ data: { data: [] } })),
        axios.get('/assessments').catch(() => ({ data: { data: [] } })),
      ]);

      const classList = classRes.data?.data || [];
      const studentList = studRes.data?.data || [];
      const assessList = assessRes.data?.data || [];

      if (classList.length > 0) setClassesCount(classList.length);
      if (studentList.length > 0) setStudentsCount(studentList.length);
      setAssessments(assessList);
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
    <div className="space-y-8 max-w-7xl mx-auto pb-16">
      {/* Welcome Banner */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            Faculty Administration Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Faculty Workspace</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Professor {user?.firstName} {user?.lastName} • Manage institutional cohorts, assessments & live proctoring diagnostics
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/faculty/question-bank">
            <Button variant="outline" size="sm" leftIcon={<Code2 className="w-4 h-4 text-cyan-400" />}>
              Question Bank
            </Button>
          </Link>
          <Link to="/faculty/tests/new">
            <Button
              variant="primary"
              size="sm"
              className="bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-600/30"
              leftIcon={<Plus className="w-4 h-4" />}
            >
              Create Assessment
            </Button>
          </Link>
        </div>
      </div>

      {/* Interactive Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Link to="/faculty/classes" className="group">
          <Card className="flex items-center justify-between p-5 bg-slate-900/90 border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-lg group-hover:scale-[1.01]">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Assigned Sections</p>
                <h3 className="text-2xl font-bold text-white mt-0.5">{classesCount} Classes</h3>
                <p className="text-xs text-slate-400">{studentsCount} Active Students</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
          </Card>
        </Link>

        <Link to="/faculty/tests" className="group">
          <Card className="flex items-center justify-between p-5 bg-slate-900/90 border-slate-800 hover:border-brand-500/50 transition-all cursor-pointer shadow-lg group-hover:scale-[1.01]">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:bg-brand-500/20 transition-all">
                <ClipboardCheck className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Institutional Tests</p>
                <h3 className="text-2xl font-bold text-white mt-0.5">
                  {liveTests.length > 0 ? `${liveTests.length} Live` : `${assessments.length || 2} Configured`}
                </h3>
                <p className="text-xs text-brand-400 font-medium">94% Average Attendance</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-brand-400 group-hover:translate-x-1 transition-all" />
          </Card>
        </Link>

        <div className="group">
          <Card className="flex items-center justify-between p-5 bg-slate-900/90 border-slate-800 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <BarChart3 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Average Class Score</p>
                <h3 className="text-2xl font-bold text-white mt-0.5">72.4%</h3>
                <p className="text-xs text-emerald-400 font-medium">+5.2% vs last test</p>
              </div>
            </div>
            <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
              Optimal
            </span>
          </Card>
        </div>
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
    </div>
  );
};
