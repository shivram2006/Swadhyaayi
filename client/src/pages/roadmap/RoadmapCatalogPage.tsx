import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Compass,
  Search,
  Clock,
  Layers,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

interface RoadmapSummary {
  slug: string;
  title: string;
  category: string;
  description: string;
  version: number;
  estimatedHours: number;
  prerequisites: string[];
  icon: string;
  totalStages: number;
  totalTopics: number;
  totalProjects: number;
  enrolled: boolean;
  progressPercentage: number;
  isCompleted: boolean;
}

export const RoadmapCatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const [roadmaps, setRoadmaps] = useState<RoadmapSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Software Engineering',
    'AI & Data',
    'Cloud & DevOps',
    'Mobile Development',
    'Cybersecurity & Systems',
  ];

  useEffect(() => {
    fetchRoadmaps();
  }, [selectedCategory]);

  const fetchRoadmaps = async () => {
    try {
      setLoading(true);
      const params: any = {};
      if (selectedCategory !== 'All') params.category = selectedCategory;
      if (search.trim()) params.search = search.trim();

      const res = await axios.get('/roadmaps', { params });
      if (res.data?.success) {
        setRoadmaps(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching roadmaps:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchRoadmaps();
  };

  const filteredRoadmaps = roadmaps.filter((r) => {
    if (!search) return true;
    const term = search.toLowerCase();
    return (
      r.title.toLowerCase().includes(term) ||
      r.description.toLowerCase().includes(term) ||
      r.slug.toLowerCase().includes(term)
    );
  });

  const enrolledCount = roadmaps.filter((r) => r.enrolled).length;
  const completedCount = roadmaps.filter((r) => r.isCompleted).length;

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-brand-900/40 via-indigo-900/30 to-purple-900/40 border border-brand-500/20 p-6 sm:p-8">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            19 Verified Industry Career Tracks
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Industry-Ready Technical Roadmaps
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Curated, version-controlled engineering paths designed to bridge academic theory and corporate placement standards. Master stage-by-stage concepts, hands-on assignments, and capstone projects.
          </p>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-800/80">
          <div>
            <div className="text-xs text-slate-400 font-medium">Available Tracks</div>
            <div className="text-xl font-bold text-white mt-0.5">{roadmaps.length || 19}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">My Active Enrolled</div>
            <div className="text-xl font-bold text-brand-400 mt-0.5">{enrolledCount}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Tracks Completed</div>
            <div className="text-xl font-bold text-emerald-400 mt-0.5">{completedCount}</div>
          </div>
          <div>
            <div className="text-xs text-slate-400 font-medium">Curriculum Standard</div>
            <div className="text-xl font-bold text-purple-400 mt-0.5">2026 Enterprise</div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? 'bg-brand-600 text-white shadow-md shadow-brand-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <form onSubmit={handleSearchSubmit} className="relative min-w-[280px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tracks (e.g. MERN, AI, DevOps)..."
            className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-brand-500 transition-colors"
          />
        </form>
      </div>

      {/* Roadmap Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="h-64 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse p-6 space-y-4"
            >
              <div className="h-6 w-1/3 bg-slate-800 rounded"></div>
              <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
              <div className="h-20 bg-slate-800/50 rounded"></div>
            </div>
          ))}
        </div>
      ) : filteredRoadmaps.length === 0 ? (
        <Card className="p-12 text-center">
          <Compass className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white">No career roadmaps found</h3>
          <p className="text-slate-400 text-sm mt-1">
            Try adjusting your search query or selecting a different category filter.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredRoadmaps.map((r) => (
            <Card
              key={r.slug}
              className="flex flex-col justify-between hover:border-brand-500/50 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-200 group p-5 bg-slate-900/90"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="neutral" className="text-xs bg-slate-800/50 border-slate-700">
                    {r.category}
                  </Badge>
                  {r.isCompleted ? (
                    <Badge variant="success" className="flex items-center gap-1 text-[11px]">
                      <CheckCircle2 className="w-3 h-3" />
                      Completed
                    </Badge>
                  ) : r.enrolled ? (
                    <Badge variant="brand" className="text-[11px] bg-brand-500/20 text-brand-300 border-brand-500/40">
                      In Progress ({r.progressPercentage}%)
                    </Badge>
                  ) : (
                    <span className="text-[11px] text-slate-500">v{r.version}.0</span>
                  )}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors flex items-center gap-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {r.description}
                  </p>
                </div>

                {/* Progress Bar (if enrolled) */}
                {r.enrolled && (
                  <div className="space-y-1 pt-1">
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Track Mastery</span>
                      <span className="font-semibold text-brand-300">{r.progressPercentage}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-brand-500 to-indigo-500 rounded-full transition-all duration-300"
                        style={{ width: `${r.progressPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* Metadata Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>~{r.estimatedHours}h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5 text-slate-500" />
                    <span>{r.totalStages} Stages</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                    <span>{r.totalTopics} Topics</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-3 border-t border-slate-800/80">
                <Button
                  onClick={() => navigate(`/roadmaps/${r.slug}`)}
                  variant={r.enrolled ? 'primary' : 'outline'}
                  size="sm"
                  className="w-full flex items-center justify-center gap-1.5 text-xs font-semibold"
                >
                  {r.enrolled ? 'Continue Learning' : 'Explore Curriculum'}
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
