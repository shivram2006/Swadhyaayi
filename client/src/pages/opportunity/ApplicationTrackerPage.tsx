import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Trash2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { OpportunityApi } from '../../modules/opportunity/opportunityApi';
import { IJobApplication, ApplicationStage } from '../../modules/opportunity/types';

const KANBAN_STAGES: Array<{ id: ApplicationStage; title: string; color: string }> = [
  { id: 'SAVED', title: 'Wishlist / Saved', color: 'border-slate-700 bg-slate-900/40 text-slate-400' },
  { id: 'APPLIED', title: 'Applied', color: 'border-brand-500/30 bg-brand-500/5 text-brand-300' },
  { id: 'OA_SCHEDULED', title: 'Online Assessment (OA)', color: 'border-amber-500/30 bg-amber-500/5 text-amber-300' },
  { id: 'INTERVIEW', title: 'Technical Interview', color: 'border-purple-500/30 bg-purple-500/5 text-purple-300' },
  { id: 'OFFERED', title: 'Offer Extended 🎉', color: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-300' },
  { id: 'REJECTED', title: 'Archived / Rejected', color: 'border-rose-500/20 bg-rose-500/5 text-rose-400' },
];

export const ApplicationTrackerPage: React.FC = () => {
  const navigate = useNavigate();

  const [applications, setApplications] = useState<IJobApplication[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      setLoading(true);
      const data = await OpportunityApi.getApplications();
      setApplications(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleStageChange = async (appId: string, newStage: ApplicationStage) => {
    try {
      let offerDetails: any = undefined;
      if (newStage === 'OFFERED') {
        const ctcStr = prompt('Enter offered CTC in LPA (e.g. 18):', '18');
        if (ctcStr) {
          offerDetails = { ctc: parseFloat(ctcStr), accepted: true };
        }
      }

      const updated = await OpportunityApi.updateApplicationStage(appId, {
        stage: newStage,
        offerDetails,
      });

      setApplications((prev) =>
        prev.map((app) => (app._id === appId ? { ...app, stage: updated.stage, offerDetails: updated.offerDetails } : app))
      );
    } catch {
      alert('Failed to update stage');
    }
  };

  const handleDelete = async (appId: string) => {
    if (!window.confirm('Withdraw and remove this application from your tracker?')) return;
    try {
      await OpportunityApi.deleteApplication(appId);
      setApplications((prev) => prev.filter((a) => a._id !== appId));
    } catch {
      alert('Failed to delete application');
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/jobs')}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-white tracking-tight">Application Pipeline Kanban</h1>
              <Badge variant="brand" className="text-xs">
                Active Tracking
              </Badge>
            </div>
            <p className="text-sm text-slate-400 mt-1">
              Manage your off-campus and campus recruitment funnel from application to final offer.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            onClick={() => navigate('/jobs')}
            className="flex items-center gap-2 text-xs"
          >
            <Sparkles className="w-4 h-4" />
            Discover New Roles
          </Button>
        </div>
      </div>

      {/* Summary KPI row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-500 font-semibold uppercase text-[10px]">Total Applications</span>
          <p className="text-xl font-bold text-white mt-1">{applications.length}</p>
        </div>
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-500 font-semibold uppercase text-[10px]">Active Assessments & Interviews</span>
          <p className="text-xl font-bold text-amber-400 mt-1">
            {applications.filter((a) => a.stage === 'OA_SCHEDULED' || a.stage === 'INTERVIEW').length}
          </p>
        </div>
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-500 font-semibold uppercase text-[10px]">Offers Received</span>
          <p className="text-xl font-bold text-emerald-400 mt-1">
            {applications.filter((a) => a.stage === 'OFFERED').length}
          </p>
        </div>
        <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
          <span className="text-slate-500 font-semibold uppercase text-[10px]">Conversion Rate</span>
          <p className="text-xl font-bold text-brand-300 mt-1">
            {applications.length > 0
              ? `${Math.round(
                  (applications.filter((a) => a.stage === 'OFFERED').length / applications.length) * 100
                )}%`
              : '0%'}
          </p>
        </div>
      </div>

      {/* Horizontal Kanban Columns */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 animate-pulse">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-64 rounded-xl bg-slate-900/40 border border-slate-800"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 items-start">
        {KANBAN_STAGES.map((col) => {
          const colApps = applications.filter((a) => a.stage === col.id);

          return (
            <div key={col.id} className="space-y-3 min-w-[200px]">
              {/* Column Header */}
              <div className={`p-2.5 rounded-lg border flex items-center justify-between text-xs font-bold ${col.color}`}>
                <span>{col.title}</span>
                <span className="px-1.5 py-0.5 rounded-full bg-slate-950/80 text-[10px] font-mono">
                  {colApps.length}
                </span>
              </div>

              {/* Cards in column */}
              <div className="space-y-2.5 min-h-[400px] p-1.5 rounded-xl bg-slate-950/40 border border-slate-850">
                {colApps.length === 0 ? (
                  <div className="h-24 flex items-center justify-center text-slate-700 text-xs italic">
                    Empty stage
                  </div>
                ) : (
                  colApps.map((app) => {
                    const opp = app.opportunityId;
                    if (!opp) return null;

                    return (
                      <Card
                        key={app._id}
                        className="p-3 bg-slate-900 border-slate-800 hover:border-slate-750 transition-all text-xs space-y-2.5"
                      >
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider line-clamp-1">
                              {opp.company?.name}
                            </span>
                            <button
                              onClick={() => handleDelete(app._id)}
                              className="text-slate-600 hover:text-rose-400 p-0.5"
                              title="Delete Application"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                          <h4 className="text-xs font-bold text-white mt-0.5 line-clamp-1">{opp.title}</h4>
                        </div>

                        {app.offerDetails?.ctc && (
                          <div className="px-2 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold">
                            Offer: {app.offerDetails.ctc} LPA
                          </div>
                        )}

                        {app.appliedDate && (
                          <div className="text-[10px] text-slate-500 flex items-center gap-1 font-mono">
                            <Clock className="w-2.5 h-2.5" />
                            Applied: {new Date(app.appliedDate).toLocaleDateString()}
                          </div>
                        )}

                        {/* Move Stage Selector */}
                        <div className="pt-2 border-t border-slate-850 flex items-center justify-between gap-1">
                          <select
                            value={app.stage}
                            onChange={(e) => handleStageChange(app._id, e.target.value as ApplicationStage)}
                            className="w-full bg-slate-950 border border-slate-800 rounded px-1.5 py-1 text-[10px] text-slate-300 focus:outline-none focus:border-brand-500 font-mono"
                          >
                            {KANBAN_STAGES.map((s) => (
                              <option key={s.id} value={s.id}>
                                Move: {s.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </Card>
                    );
                  })
                )}
              </div>
            </div>
          );
        })}
      </div>
      )}
    </div>
  );
};
