import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Code2,
  Flame,
  Trophy,
  FileCheck,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const StudentDashboard: React.FC = () => {
  const { user } = useAuth();
  const metrics = user?.metrics || {
    codingProblemsSolved: 42,
    aptitudeTestsTaken: 15,
    globalRank: 124,
    institutionRank: 7,
    currentStreak: 12,
    longestStreak: 24,
    totalPoints: 1850,
  };

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div>
          <h1 className="text-2xl sm:text-3xl font-medium text-[#ededed] tracking-tight">
            Student Workspace
          </h1>
          <p className="mt-1 text-sm text-[#a1a1a6]">
            {user?.firstName} {user?.lastName} · Daily DSA practice, aptitude drills and institutional tests
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link to="/tests">
            <Button variant="secondary" size="md">
              Upcoming tests
            </Button>
          </Link>
          <Link to="/coding">
            <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Continue DSA practice
            </Button>
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-5">
          <div className="flex items-center justify-between text-xs text-[#85858b]">
            <span>Daily streak</span>
            <Flame className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-medium text-[#ededed] mt-3 tabular-nums">{metrics.currentStreak}d</h3>
          <p className="text-xs text-[#a1a1a6] mt-1 tabular-nums">Longest: {metrics.longestStreak} days</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-xs text-[#85858b]">
            <span>Coding solved</span>
            <Code2 className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-medium text-[#ededed] mt-3 tabular-nums">{metrics.codingProblemsSolved}</h3>
          <p className="text-xs text-[#4cc38a] mt-1 tabular-nums">+3 vs last week</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-xs text-[#85858b]">
            <span>College rank</span>
            <Trophy className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-medium text-[#ededed] mt-3 tabular-nums">#{metrics.institutionRank}</h3>
          <p className="text-xs text-[#a1a1a6] mt-1 tabular-nums">Global: #{metrics.globalRank}</p>
        </Card>

        <Card className="p-5">
          <div className="flex items-center justify-between text-xs text-[#85858b]">
            <span>ATS resume score</span>
            <FileCheck className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
          </div>
          <h3 className="text-3xl font-medium text-[#ededed] mt-3 tabular-nums">84 / 100</h3>
          <p className="text-xs text-[#a1a1a6] mt-1">Full stack profile</p>
        </Card>
      </div>

      {/* Main Sections: Progress & Tests */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Practice Progress & Recommendations */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Coding Pattern Mastery</CardTitle>
                <CardDescription>Track your readiness across core problem-solving patterns</CardDescription>
              </div>
              <Link to="/coding" className="text-xs font-semibold text-brand-400 hover:text-brand-300">
                View All Questions &rarr;
              </Link>
            </CardHeader>

            <div className="space-y-4">
              {[
                { label: 'Two Pointers & Sliding Window', solved: 14, total: 20, pct: 70 },
                { label: 'Binary Search & Divide & Conquer', solved: 8, total: 15, pct: 53 },
                { label: 'Trees, BST & Graphs (BFS/DFS)', solved: 12, total: 30, pct: 40 },
                { label: 'Dynamic Programming (1D & 2D)', solved: 6, total: 25, pct: 24 },
              ].map((pat) => (
                <div key={pat.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-[#dedee2]">{pat.label}</span>
                    <span className="font-mono tabular-nums text-[#a1a1a6]">
                      {pat.solved} / {pat.total} ({pat.pct}%)
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-[#232325] overflow-hidden">
                    <div className="h-full bg-brand-500 rounded-full" style={{ width: `${pat.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Practice Problems */}
          <Card>
            <CardHeader>
              <div>
                <CardTitle>Recommended For You</CardTitle>
                <CardDescription>Tailored based on upcoming college placement drives</CardDescription>
              </div>
            </CardHeader>
            <div className="divide-y divide-slate-800">
              {[
                { title: 'Subarray Sum Equals K', pattern: 'Prefix Sum', diff: 'Medium', company: 'Amazon' },
                { title: 'Course Schedule II', pattern: 'Topological Sort', diff: 'Medium', company: 'Google' },
                { title: 'Trapping Rain Water', pattern: 'Two Pointers / Stack', diff: 'Hard', company: 'Microsoft' },
              ].map((p, idx) => (
                <div key={idx} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-100 hover:text-brand-400 cursor-pointer">
                        {p.title}
                      </p>
                      <div className="flex items-center gap-2 mt-0.5 text-xs text-slate-400">
                        <span>{p.pattern}</span>
                        <span>•</span>
                        <span className="text-amber-400 font-medium">{p.company}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={p.diff === 'Hard' ? 'danger' : 'warning'}>{p.diff}</Badge>
                    <Link to="/coding">
                      <Button variant="outline" size="sm">
                        Solve
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Right 1 Col: Upcoming Tests & Career Track */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <div>
                <CardTitle className="text-base">Assigned Institutional Tests</CardTitle>
                <CardDescription>Scheduled by college faculty & placement cell</CardDescription>
              </div>
            </CardHeader>
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-brand-500/30 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-wider">Placement Mock 03</span>
                  <Badge variant="brand" size="sm">Scheduled</Badge>
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mt-1">Full Stack Diagnostic Assessment</h4>
                <p className="text-xs text-slate-400 mt-0.5">MCQ Aptitude + 2 Coding Problems</p>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                  <span>Duration: 90 mins</span>
                  <Link to="/tests">
                    <Button variant="primary" size="sm">
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <CardHeader>
              <div>
                <CardTitle className="text-base">Active Career Roadmap</CardTitle>
                <CardDescription>Full Stack MERN Development</CardDescription>
              </div>
            </CardHeader>
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-300">Stage 3: Advanced Backend & Microservices</span>
                <span className="text-emerald-400">65% Complete</span>
              </div>
              <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden mb-3">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <Link to="/roadmaps">
                <Button variant="outline" size="sm" className="w-full">
                  Explore Roadmap Nodes
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
