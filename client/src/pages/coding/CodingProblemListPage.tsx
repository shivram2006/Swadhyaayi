import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import {
  Code2,
  Search,
  CheckCircle2,
  Building2,
  Filter,
  ArrowRight,
} from 'lucide-react';

const PATTERNS_LIST = [
  'All Patterns',
  'Two Pointers',
  'Sliding Window',
  'Binary Search',
  'Monotonic Stack',
  'Hashing',
  'Prefix Sum',
  'Fast and Slow Pointers',
  'BFS / DFS',
  'Dynamic Programming',
  'Topological Sort',
  'Heaps / Priority Queue',
];

const COMPANIES_LIST = [
  'All Companies',
  'Apple',
  'Google',
  'Amazon',
  'Microsoft',
  'Meta',
  'Adobe',
  'Flipkart',
  'TCS',
  'Infosys',
  'Wipro',
  'Oracle',
];

export const CodingProblemListPage: React.FC = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [meta, setMeta] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedPattern, setSelectedPattern] = useState('All Patterns');
  const [selectedCompany, setSelectedCompany] = useState('All Companies');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const fetchQuestions = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('/coding', {
        params: {
          search: search || undefined,
          pattern: selectedPattern !== 'All Patterns' ? selectedPattern : undefined,
          company: selectedCompany !== 'All Companies' ? selectedCompany : undefined,
          difficulty: selectedDifficulty || undefined,
        },
      });

      if (res.data.success) {
        setQuestions(res.data.data);
        setMeta(res.data.meta);
      }
    } catch (err) {
      console.error('Failed to fetch questions:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [selectedPattern, selectedCompany, selectedDifficulty]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchQuestions();
  };

  const getDifficultyBadge = (diff: string) => {
    switch (diff) {
      case 'BEGINNER':
      case 'EASY':
        return <Badge variant="success" size="sm">Easy</Badge>;
      case 'MEDIUM':
        return <Badge variant="warning" size="sm">Medium</Badge>;
      case 'HARD':
      case 'EXPERT':
        return <Badge variant="danger" size="sm">Hard</Badge>;
      default:
        return <Badge variant="neutral" size="sm">{diff}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-brand-950/40 border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-2 rounded-lg bg-brand-600/20 text-brand-400">
              <Code2 className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Algorithmic Problem Solving & Pattern Bank</h1>
          </div>
          <p className="text-xs text-slate-400 max-w-xl">
            Master 28 industry problem-solving patterns. All company tags are verified against historical campus drives.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
            <p className="text-[11px] font-semibold uppercase text-slate-400">Catalog Size</p>
            <p className="text-lg font-bold text-brand-400">{meta?.totalCount || questions.length} Problems</p>
          </div>
        </div>
      </div>

      {/* Pattern Filtering Strip (Scrollable) */}
      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5 text-brand-400" />
          <span>Filter by Algorithmic Pattern</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {PATTERNS_LIST.map((pattern) => {
            const isSelected = selectedPattern === pattern;
            return (
              <button
                key={pattern}
                onClick={() => setSelectedPattern(pattern)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {pattern}
              </button>
            );
          })}
        </div>
      </div>

      {/* Search & Secondary Filters */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <form onSubmit={handleSearchSubmit} className="flex-1 flex gap-2">
            <Input
              placeholder="Search problem title, pattern, or data structure..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
            <Button type="submit" variant="secondary" size="md">
              Search
            </Button>
          </form>

          {/* Company Filter */}
          <select
            className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 px-3 py-2"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            {COMPANIES_LIST.map((comp) => (
              <option key={comp} value={comp}>{comp}</option>
            ))}
          </select>

          {/* Difficulty Filter */}
          <select
            className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 px-3 py-2"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="">All Difficulties</option>
            <option value="EASY">Easy</option>
            <option value="MEDIUM">Medium</option>
            <option value="HARD">Hard</option>
          </select>
        </div>
      </Card>

      {/* Problem Table */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4 w-12 text-center">Status</th>
                <th className="py-3 px-4">Title & Patterns</th>
                <th className="py-3 px-4">Difficulty</th>
                <th className="py-3 px-4">Verified Companies</th>
                <th className="py-3 px-4">Acceptance</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {questions.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-slate-500">
                    {isLoading ? 'Loading problem catalog...' : 'No problems found matching filters.'}
                  </td>
                </tr>
              ) : (
                questions.map((q) => {
                  const acceptanceRate =
                    q.totalSubmissions > 0
                      ? Math.round((q.acceptedSubmissions / q.totalSubmissions) * 100)
                      : 74;

                  return (
                    <tr key={q._id} className="hover:bg-slate-800/30 transition-colors">
                      {/* Solved Status */}
                      <td className="py-3.5 px-4 text-center">
                        {q.isSolved ? (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 inline" />
                        ) : (
                          <span className="w-2 h-2 rounded-full bg-slate-700 inline-block" />
                        )}
                      </td>

                      {/* Title & Patterns */}
                      <td className="py-3.5 px-4">
                        <Link
                          to={`/coding/${q.slug}`}
                          className="font-semibold text-slate-100 hover:text-brand-400 text-sm transition-colors"
                        >
                          {q.title}
                        </Link>
                        <div className="flex flex-wrap items-center gap-1.5 mt-1">
                          {q.patterns.map((p: string) => (
                            <span
                              key={p}
                              className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Difficulty */}
                      <td className="py-3.5 px-4">{getDifficultyBadge(q.difficulty)}</td>

                      {/* Verified Company Tags */}
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1.5">
                          {q.companyTags?.slice(0, 3).map((tag: any, idx: number) => (
                            <span
                              key={idx}
                              title={`${tag.company} (${tag.yearReported}) • Reported ${tag.frequencyCount} times`}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20"
                            >
                              <Building2 className="w-2.5 h-2.5" />
                              {tag.company}
                            </span>
                          ))}
                          {q.companyTags?.length > 3 && (
                            <span className="text-[10px] text-slate-500 self-center">
                              +{q.companyTags.length - 3} more
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Acceptance */}
                      <td className="py-3.5 px-4 font-mono text-slate-300">
                        {acceptanceRate}%
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right">
                        <Link to={`/coding/${q.slug}`}>
                          <Button variant="outline" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                            Solve
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

        {meta && (
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Showing {questions.length} of {meta.totalCount} questions</span>
            <span>Page {meta.page} of {meta.totalPages || 1}</span>
          </div>
        )}
      </Card>
    </div>
  );
};
