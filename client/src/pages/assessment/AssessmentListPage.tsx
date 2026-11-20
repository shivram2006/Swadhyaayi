import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  ClipboardCheck,
  Clock,
  Calendar,
  Layers,
  ChevronRight,
  ShieldAlert,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';

interface AssessmentSummary {
  _id: string;
  title: string;
  description: string;
  type: string;
  status: string;
  startTime: string;
  endTime: string;
  durationMinutes: number;
  isEligible: boolean;
  totalSections: number;
  totalQuestions: number;
  totalPoints: number;
  proctoringEnabled: boolean;
}

export const AssessmentListPage: React.FC = () => {
  const navigate = useNavigate();

  const [assessments, setAssessments] = useState<AssessmentSummary[]>([]);
  const [activeTab, setActiveTab] = useState<'LIVE' | 'UPCOMING' | 'COMPLETED'>('LIVE');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchAssessments();
  }, []);

  const fetchAssessments = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/assessments');
      if (res.data?.success) {
        setAssessments(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching assessments:', err);
    } finally {
      setLoading(false);
    }
  };

  const now = new Date();

  const liveTests = assessments.filter((a) => {
    const s = new Date(a.startTime);
    const e = new Date(a.endTime);
    return now >= s && now <= e;
  });

  const upcomingTests = assessments.filter((a) => {
    const s = new Date(a.startTime);
    return now < s;
  });

  const pastTests = assessments.filter((a) => {
    const e = new Date(a.endTime);
    return now > e;
  });

  let currentList = liveTests;
  if (activeTab === 'UPCOMING') currentList = upcomingTests;
  if (activeTab === 'COMPLETED') currentList = pastTests;

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-12">
      {/* Banner */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-brand-900/40 border border-blue-500/20 p-6 sm:p-8">
        <div className="max-w-3xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Institutional Assessments & Proctored Tests
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Campus Placement Assessments
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Take timed institutional exams configured by your university placement cell. Simulated industry tests with section cutoffs, negative marking, and proctoring telemetry.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 flex items-center gap-2">
          <button
            onClick={() => setActiveTab('LIVE')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'LIVE'
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/25'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Live Tests ({liveTests.length})
          </button>
          <button
            onClick={() => setActiveTab('UPCOMING')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'UPCOMING'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Upcoming ({upcomingTests.length})
          </button>
          <button
            onClick={() => setActiveTab('COMPLETED')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'COMPLETED'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Past Assessments ({pastTests.length})
          </button>
        </div>
      </div>

      {/* Tests Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-48 rounded-xl bg-slate-900/60 border border-slate-800 animate-pulse p-6 space-y-3">
              <div className="h-5 w-1/3 bg-slate-800 rounded"></div>
              <div className="h-4 w-3/4 bg-slate-800 rounded"></div>
            </div>
          ))}
        </div>
      ) : currentList.length === 0 ? (
        <Card className="p-12 text-center bg-slate-900 border-slate-800">
          <ClipboardCheck className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No {activeTab.toLowerCase()} assessments</h3>
          <p className="text-xs text-slate-400 mt-1">
            Check back later for scheduled company recruitment mock tests or department quizzes.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {currentList.map((test) => {
            const isLive = activeTab === 'LIVE';

            return (
              <Card
                key={test._id}
                className="p-6 bg-slate-900/90 border-slate-800 flex flex-col justify-between hover:border-brand-500/40 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <Badge variant={isLive ? 'success' : 'brand'} className="text-[11px]">
                      {isLive ? 'Active Right Now' : test.type}
                    </Badge>
                    {test.proctoringEnabled && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        <ShieldAlert className="w-3 h-3" />
                        Proctored
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white">{test.title}</h3>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {test.description}
                    </p>
                  </div>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{test.durationMinutes} mins</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-slate-500" />
                      <span>{test.totalSections} Sections</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{test.totalPoints} pts</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-4 mt-4 border-t border-slate-800/80">
                  {isLive ? (
                    <Button
                      onClick={() => navigate(`/assessments/${test._id}/arena`)}
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2 font-bold"
                    >
                      Enter Test Arena
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  ) : activeTab === 'UPCOMING' ? (
                    <div className="text-center text-xs text-slate-500 py-1.5">
                      Opens on {new Date(test.startTime).toLocaleString()}
                    </div>
                  ) : (
                    <Button
                      onClick={() => navigate(`/assessments/${test._id}/arena`)}
                      variant="outline"
                      className="w-full text-xs font-semibold"
                    >
                      View Review & Details
                    </Button>
                  )}
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
};
