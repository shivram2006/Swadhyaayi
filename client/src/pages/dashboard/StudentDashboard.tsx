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
  Sparkles,
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
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-900/60 via-slate-900 to-slate-900 border border-brand-500/20 p-8 shadow-2xl">
        <div className="relative z-10 max-w-2xl">
          <Badge variant="brand" className="mb-3">
            <Sparkles className="w-3 h-3 mr-1" /> Placement Readiness: 78%
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Welcome back, {user?.firstName}!
          </h1>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            Your daily target is within reach. Solve 2 DSA problems and complete 1 aptitude drill to maintain your streak.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/coding">
              <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Continue DSA Practice
              </Button>
            </Link>
            <Link to="/tests">
              <Button variant="secondary" size="md">
                View Upcoming Tests
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Daily Streak</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">{metrics.currentStreak} Days</h3>
            <p className="text-xs text-slate-500">Longest: {metrics.longestStreak} days</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Coding Solved</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">{metrics.codingProblemsSolved}</h3>
            <p className="text-xs text-emerald-400 font-medium">+3 this week</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">College Rank</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">#{metrics.institutionRank}</h3>
            <p className="text-xs text-slate-500">Global: #{metrics.globalRank}</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <FileCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">ATS Resume Score</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">84 / 100</h3>
            <p className="text-xs text-brand-400 font-medium">MERN Profile</p>
          </div>
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
              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-300">Two Pointers & Sliding Window</span>
                  <span className="text-brand-400">14 / 20 (70%)</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-brand-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-300">Binary Search & Divide & Conquer</span>
                  <span className="text-brand-400">8 / 15 (53%)</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: '53%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-300">Trees, BST & Graphs (BFS/DFS)</span>
                  <span className="text-brand-400">12 / 30 (40%)</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-cyan-500 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium mb-1.5">
                  <span className="text-slate-300">Dynamic Programming (1D & 2D)</span>
                  <span className="text-brand-400">6 / 25 (24%)</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-rose-500 rounded-full" style={{ width: '24%' }}></div>
                </div>
              </div>
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
