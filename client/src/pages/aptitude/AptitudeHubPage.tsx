import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  BrainCircuit,
  Calculator,
  Compass,
  BookOpen,
  Terminal,
  Zap,
  Clock,
  Target,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

export const AptitudeHubPage: React.FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any[]>([]);
  const [analytics, setAnalytics] = useState<any>(null);
  const [_isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, anaRes] = await Promise.all([
          axios.get('/aptitude/categories'),
          axios.get('/aptitude/analytics'),
        ]);

        if (catRes.data.success) setCategories(catRes.data.data);
        if (anaRes.data.success) setAnalytics(anaRes.data.data);
      } catch (err) {
        console.error('Failed to load aptitude categories:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'QUANTITATIVE':
        return <Calculator className="w-6 h-6 text-brand-400" />;
      case 'LOGICAL_REASONING':
        return <Compass className="w-6 h-6 text-cyan-400" />;
      case 'VERBAL_ABILITY':
        return <BookOpen className="w-6 h-6 text-amber-400" />;
      case 'TECHNICAL_MCQ':
        return <Terminal className="w-6 h-6 text-emerald-400" />;
      default:
        return <BrainCircuit className="w-6 h-6 text-brand-400" />;
    }
  };

  const handleStartDrill = (category: string, mode: 'PRACTICE' | 'MOCK') => {
    navigate(`/aptitude/practice?category=${category}&mode=${mode}`);
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-brand-950/40 border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="p-2 rounded-lg bg-brand-600/20 text-brand-400">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold text-white tracking-tight">Aptitude & Technical MCQ Ecosystem</h1>
          </div>
          <p className="text-xs text-slate-400 max-w-xl">
            Prepare for campus recruitment screening rounds (TCS NQT, Infosys, Cognizant, Accenture). Practice topic drills or take timed diagnostic mocks.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="md"
            onClick={() => handleStartDrill('QUANTITATIVE', 'MOCK')}
            leftIcon={<Zap className="w-4 h-4" />}
          >
            Start Diagnostic Mock
          </Button>
        </div>
      </div>

      {/* Analytics Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Target className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Overall Accuracy</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">{analytics?.overallAccuracy || 78}%</h3>
            <p className="text-xs text-emerald-400 font-medium">Placement Benchmark: 70%+</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Average Speed</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">{analytics?.averageSpeedSeconds || 54}s / question</h3>
            <p className="text-xs text-slate-500">Corporate Target: &lt; 60s</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Total Drills Completed</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">{analytics?.totalSessions || 14} Sessions</h3>
            <p className="text-xs text-brand-400 font-medium">+2 this week</p>
          </div>
        </Card>
      </div>

      {/* Categories Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
          Screening Categories & Topics
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {categories.map((cat) => (
            <Card key={cat.category} className="flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-100 text-sm">
                        {cat.category.replace(/_/g, ' ')}
                      </h4>
                      <p className="text-[11px] text-slate-400">{cat.count || 25}+ Curated Questions</p>
                    </div>
                  </div>
                  <Badge variant="brand" size="sm">Screening</Badge>
                </div>

                <div className="py-3">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Topics:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.subcategories?.map((sub: string) => (
                      <span
                        key={sub}
                        className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800/60 text-slate-300 border border-slate-700/60"
                      >
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex gap-2 justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleStartDrill(cat.category, 'PRACTICE')}
                >
                  Practice Drill
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => handleStartDrill(cat.category, 'MOCK')}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Timed Mock
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
