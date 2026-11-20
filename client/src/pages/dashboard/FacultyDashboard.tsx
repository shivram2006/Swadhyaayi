import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { Users, ClipboardCheck, Plus, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const FacultyDashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-white tracking-tight">Faculty Workspace</h1>
          <p className="text-xs text-slate-400 mt-1">
            Professor {user?.firstName} {user?.lastName} • Manage tests, assignments & student diagnostics
          </p>
        </div>
        <Link to="/faculty/tests/new">
          <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
            Create Assessment
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Assigned Sections</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">3 Classes</h3>
            <p className="text-xs text-slate-500">180 Active Students</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
            <ClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Tests</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">2 Live</h3>
            <p className="text-xs text-brand-400 font-medium">94% Participation</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <BarChart3 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Average Class Score</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">72.4%</h3>
            <p className="text-xs text-emerald-400 font-medium">+5.2% vs last test</p>
          </div>
        </Card>
      </div>

      {/* Quick Launch Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Recent Class Submissions</CardTitle>
              <CardDescription>Live student attempt telemetry</CardDescription>
            </div>
          </CardHeader>
          <div className="divide-y divide-slate-800 text-xs">
            {[
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
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Weak Topic Diagnostic</CardTitle>
              <CardDescription>Identified knowledge gaps in your class</CardDescription>
            </div>
          </CardHeader>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <div className="flex justify-between font-medium mb-1">
                <span className="text-slate-300">Dynamic Programming (Knapsack & Subsets)</span>
                <span className="text-rose-400 font-semibold">32% Accuracy</span>
              </div>
              <p className="text-[11px] text-slate-500">Recommended: Schedule an extra practice drill.</p>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <div className="flex justify-between font-medium mb-1">
                <span className="text-slate-300">Graph Theory (Dijkstra / Shortest Paths)</span>
                <span className="text-amber-400 font-semibold">48% Accuracy</span>
              </div>
              <p className="text-[11px] text-slate-500">12 students haven't attempted the practice set.</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
