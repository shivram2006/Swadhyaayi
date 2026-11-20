import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Trophy,
  Globe,
  GraduationCap,
  Users,
  Code2,
  BrainCircuit,
  Flame,
  Search,
  ChevronLeft,
  ChevronRight,
  Medal,
  Award,
  Crown,
  Sparkles,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { useAuth } from '../../context/AuthContext';

type Scope = 'GLOBAL' | 'INSTITUTION' | 'CLASS';
type Metric = 'OVERALL' | 'CODING' | 'APTITUDE' | 'STREAK';
type Timeframe = 'ALL_TIME' | 'MONTHLY' | 'WEEKLY';

interface LeaderboardEntry {
  rank: number;
  userId: string;
  name: string;
  email: string;
  rollNumber?: string;
  avatarUrl?: string;
  institutionName?: string;
  institutionCode?: string;
  departmentCode?: string;
  score: number;
  codingProblemsSolved: number;
  codingScore: number;
  aptitudeScore: number;
  currentStreak: number;
}

interface MyRank {
  rank: number;
  percentile: number;
  score: number;
  totalStudents: number;
}

export const LeaderboardPage: React.FC = () => {
  const { user } = useAuth();

  const [scope, setScope] = useState<Scope>('GLOBAL');
  const [metric, setMetric] = useState<Metric>('OVERALL');
  const [timeframe, setTimeframe] = useState<Timeframe>('ALL_TIME');
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [limit] = useState<number>(20);

  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [myRank, setMyRank] = useState<MyRank | null>(null);
  const [totalStudents, setTotalStudents] = useState<number>(0);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchLeaderboard();
  }, [scope, metric, timeframe, page]);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/leaderboards', {
        params: {
          scope,
          metric,
          timeframe,
          page,
          limit,
          search: search.trim() || undefined,
        },
      });

      if (res.data?.success) {
        setEntries(res.data.data.entries || []);
        setMyRank(res.data.data.myRank || null);
        setTotalStudents(res.data.data.totalStudents || 0);
        setTotalPages(res.data.data.totalPages || 1);
      }
    } catch (err) {
      console.error('Error loading leaderboard:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchLeaderboard();
  };

  // Top 3 Podium
  const top1 = entries[0];
  const top2 = entries[1];
  const top3 = entries[2];

  const getMetricLabel = () => {
    if (metric === 'CODING') return 'Coding Points';
    if (metric === 'APTITUDE') return 'Aptitude Points';
    if (metric === 'STREAK') return 'Day Streak';
    return 'Placement Points';
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-900/40 via-purple-900/30 to-brand-900/40 border border-amber-500/20 p-6 sm:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5" />
            Three-Level Competitive Arena
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Placement Readiness Leaderboard
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Real-time merit rankings across all partner institutions, your college campus, and your departmental cohort. Earn points by solving coding patterns and mastering aptitude tests.
          </p>
        </div>

        {/* Sticky Standing Preview */}
        {myRank && (
          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg">
                #{myRank.rank}
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Your Standing in {scope} Scope</div>
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <span>Top {myRank.percentile}% Percentile</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-amber-400 font-mono">{myRank.score} pts</span>
                </div>
              </div>
            </div>

            <Badge variant="brand" className="text-xs py-1 px-3">
              Total {totalStudents} Ranked Students
            </Badge>
          </div>
        )}
      </div>

      {/* Control Bar: Scope Tabs & Timeframe */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Scope Tabs */}
        <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl">
          <button
            onClick={() => { setScope('GLOBAL'); setPage(1); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              scope === 'GLOBAL'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            Global (All Colleges)
          </button>
          <button
            onClick={() => { setScope('INSTITUTION'); setPage(1); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              scope === 'INSTITUTION'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            My College
          </button>
          <button
            onClick={() => { setScope('CLASS'); setPage(1); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              scope === 'CLASS'
                ? 'bg-brand-600 text-white shadow-md shadow-brand-600/25'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            My Class Section
          </button>
        </div>

        {/* Timeframe Toggle */}
        <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto">
          {(['ALL_TIME', 'MONTHLY', 'WEEKLY'] as Timeframe[]).map((tf) => (
            <button
              key={tf}
              onClick={() => { setTimeframe(tf); setPage(1); }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                timeframe === tf
                  ? 'bg-slate-800 text-slate-100 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tf === 'ALL_TIME' ? 'All Time' : tf === 'MONTHLY' ? 'This Month' : 'This Week'}
            </button>
          ))}
        </div>
      </div>

      {/* Metric Filter Strip & Search */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Metric Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <button
            onClick={() => { setMetric('OVERALL'); setPage(1); }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              metric === 'OVERALL'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Overall Score
          </button>
          <button
            onClick={() => { setMetric('CODING'); setPage(1); }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              metric === 'CODING'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            Coding Masters
          </button>
          <button
            onClick={() => { setMetric('APTITUDE'); setPage(1); }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              metric === 'APTITUDE'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
            Aptitude Specialists
          </button>
          <button
            onClick={() => { setMetric('STREAK'); setPage(1); }}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
              metric === 'STREAK'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-rose-400" />
            Daily Streaks
          </button>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearchSubmit} className="relative min-w-[240px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search student or roll no..."
            className="w-full pl-9 pr-4 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500"
          />
        </form>
      </div>

      {/* Top 3 Podium (Only shown on Page 1 when not actively searching) */}
      {page === 1 && !search && entries.length >= 3 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          {/* Silver - 2nd Place */}
          <Card className="p-5 flex flex-col items-center text-center bg-slate-900/90 border-slate-800 relative order-2 md:order-1 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-400 flex items-center justify-center mb-3 relative">
              <Medal className="w-6 h-6 text-slate-300" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-slate-700 text-white font-bold text-xs flex items-center justify-center">
                2
              </span>
            </div>
            <h3 className="text-sm font-bold text-white truncate max-w-[200px]">{top2.name}</h3>
            <p className="text-xs text-slate-400">{top2.institutionName}</p>
            <div className="mt-3 px-3 py-1 rounded-full bg-slate-800 text-slate-200 font-mono text-xs font-bold">
              {top2.score} pts
            </div>
          </Card>

          {/* Gold - 1st Place */}
          <Card className="p-6 flex flex-col items-center text-center bg-gradient-to-b from-amber-950/30 to-slate-900 border-amber-500/40 relative order-1 md:order-2 shadow-lg shadow-amber-500/5">
            <div className="w-14 h-14 rounded-full bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center mb-3 relative">
              <Crown className="w-7 h-7 text-amber-400" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center">
                1
              </span>
            </div>
            <h3 className="text-base font-extrabold text-white truncate max-w-[220px]">{top1.name}</h3>
            <p className="text-xs text-amber-300/80 font-medium">{top1.institutionName}</p>
            <div className="mt-3 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-sm font-extrabold">
              {top1.score} pts
            </div>
          </Card>

          {/* Bronze - 3rd Place */}
          <Card className="p-5 flex flex-col items-center text-center bg-slate-900/90 border-slate-800 relative order-3 md:order-3 hover:border-slate-700 transition-colors">
            <div className="w-12 h-12 rounded-full bg-amber-900/30 border-2 border-amber-600 flex items-center justify-center mb-3 relative">
              <Award className="w-6 h-6 text-amber-600" />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-amber-700 text-white font-bold text-xs flex items-center justify-center">
                3
              </span>
            </div>
            <h3 className="text-sm font-bold text-white truncate max-w-[200px]">{top3.name}</h3>
            <p className="text-xs text-slate-400">{top3.institutionName}</p>
            <div className="mt-3 px-3 py-1 rounded-full bg-slate-800 text-slate-200 font-mono text-xs font-bold">
              {top3.score} pts
            </div>
          </Card>
        </div>
      )}

      {/* Main Leaderboard Table */}
      <Card className="p-0 overflow-hidden bg-slate-900 border-slate-800">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="py-3 px-4 w-16 text-center">Rank</th>
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Campus & Dept</th>
                <th className="py-3 px-4 text-center">Problems Solved</th>
                <th className="py-3 px-4 text-center">Daily Streak</th>
                <th className="py-3 px-4 text-right">{getMetricLabel()}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-xs">
              {loading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    <div className="flex flex-col items-center gap-2">
                      <div className="w-6 h-6 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                      <span>Retrieving leaderboard standings...</span>
                    </div>
                  </td>
                </tr>
              ) : entries.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-400">
                    No ranked students found for the selected criteria.
                  </td>
                </tr>
              ) : (
                entries.map((entry) => {
                  const isCurrentUser = user && (entry.userId === (user as any)._id || entry.userId === (user as any).userId);

                  return (
                    <tr
                      key={entry.userId}
                      className={`transition-colors ${
                        isCurrentUser
                          ? 'bg-brand-900/20 border-l-2 border-l-brand-500 font-medium'
                          : 'hover:bg-slate-800/40'
                      }`}
                    >
                      {/* Rank Column */}
                      <td className="py-3.5 px-4 text-center font-bold">
                        {entry.rank === 1 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-black">
                            🥇
                          </span>
                        ) : entry.rank === 2 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-slate-400/20 text-slate-300 text-xs font-black">
                            🥈
                          </span>
                        ) : entry.rank === 3 ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-700/20 text-amber-600 text-xs font-black">
                            🥉
                          </span>
                        ) : (
                          <span className="text-slate-400 font-mono">#{entry.rank}</span>
                        )}
                      </td>

                      {/* Student Info */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200 font-bold text-xs uppercase flex-shrink-0">
                            {entry.name.slice(0, 2)}
                          </div>
                          <div>
                            <div className="font-semibold text-white flex items-center gap-2">
                              <span>{entry.name}</span>
                              {isCurrentUser && (
                                <Badge variant="brand" className="text-[10px] py-0 px-1.5">
                                  You
                                </Badge>
                              )}
                            </div>
                            <div className="text-[11px] text-slate-500 font-mono">
                              {entry.rollNumber || entry.email}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Institution / Dept */}
                      <td className="py-3.5 px-4 text-slate-300">
                        <div className="truncate max-w-[200px] font-medium">{entry.institutionName}</div>
                        <div className="text-[11px] text-slate-500">{entry.departmentCode}</div>
                      </td>

                      {/* Problems Solved */}
                      <td className="py-3.5 px-4 text-center font-mono text-slate-200">
                        {entry.codingProblemsSolved}
                      </td>

                      {/* Streak */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-rose-400 font-mono font-semibold">
                          <Flame className="w-3.5 h-3.5" />
                          {entry.currentStreak}d
                        </span>
                      </td>

                      {/* Score Column */}
                      <td className="py-3.5 px-4 text-right">
                        <span className="font-bold text-white font-mono text-sm">
                          {entry.score}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Bar */}
        {totalPages > 1 && (
          <div className="p-4 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              Page <span className="font-semibold text-white">{page}</span> of{' '}
              <span className="font-semibold text-white">{totalPages}</span>
            </span>

            <div className="flex items-center gap-2">
              <Button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page <= 1}
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                Previous
              </Button>
              <Button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page >= totalPages}
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1"
              >
                Next
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
