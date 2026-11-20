import React, { useState, useEffect } from 'react';
import {
  Trophy,
  Users,
  TrendingUp,
  Plus,
  Building2,
  DollarSign,
  X,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { OpportunityApi } from '../../modules/opportunity/opportunityApi';
import { IPlacementAnalytics } from '../../modules/opportunity/types';

export const PlacementAnalyticsPage: React.FC = () => {
  const [analytics, setAnalytics] = useState<IPlacementAnalytics | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  // New drive form state
  const [newDrive, setNewDrive] = useState({
    title: '',
    companyName: '',
    location: 'Bengaluru, India',
    minCtc: 12,
    maxCtc: 18,
    minCgpa: 7.0,
    skills: 'Java, Python, SQL, DSA',
    allowedBatches: '2025, 2026',
    description: 'Campus recruitment drive.',
    applyUrl: 'https://college.edu/placements/apply',
  });

  useEffect(() => {
    fetchAnalytics();
  }, []);

  const fetchAnalytics = async () => {
    try {
      setLoading(true);
      const data = await OpportunityApi.getPlacementAnalytics();
      setAnalytics(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleCreateDrive = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await OpportunityApi.createOpportunity({
        title: newDrive.title,
        company: { name: newDrive.companyName },
        type: 'FULL_TIME',
        workMode: 'HYBRID',
        location: newDrive.location,
        salary: { min: newDrive.minCtc, max: newDrive.maxCtc, currency: 'INR', period: 'LPA' },
        requirements: {
          skills: newDrive.skills.split(',').map((s) => s.trim()).filter(Boolean),
          minCgpa: newDrive.minCgpa,
          allowedBatches: newDrive.allowedBatches.split(',').map((s) => s.trim()).filter(Boolean),
        },
        description: newDrive.description,
        applyUrl: newDrive.applyUrl,
        source: 'CAMPUS_DRIVE',
      });
      alert('Campus placement drive posted successfully!');
      setShowCreateModal(false);
      fetchAnalytics();
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to post drive');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Institutional Placement Intelligence</h1>
            <Badge variant="brand" className="text-xs">
              TPO Executive Radar
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Real-time analytics on university campus placement drives, conversion funnels, and compensation metrics.
          </p>
        </div>

        <Button
          variant="primary"
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 text-xs"
        >
          <Plus className="w-4 h-4" />
          Host Campus Placement Drive
        </Button>
      </div>

      {/* KPI Cards Grid */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="p-5 bg-slate-900/40 border-slate-800 h-28"></Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Offers Extended</span>
              <Trophy className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-emerald-400 font-mono">
              {analytics?.totalOffers || 0}
            </p>
            <p className="text-xs text-slate-500">Total verified job offers</p>
          </Card>

          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Average Package</span>
              <TrendingUp className="w-4 h-4 text-brand-400" />
            </div>
            <p className="text-3xl font-extrabold text-brand-300 font-mono">
              {analytics?.averageCtc || 0} <span className="text-sm font-normal text-slate-400">LPA</span>
            </p>
            <p className="text-xs text-slate-500">Across all placed candidates</p>
          </Card>

          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Highest Package</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-3xl font-extrabold text-amber-400 font-mono">
              {analytics?.highestCtc || 0} <span className="text-sm font-normal text-slate-400">LPA</span>
            </p>
            <p className="text-xs text-slate-500">Top compensation record</p>
          </Card>

          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Interview Pipeline</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-3xl font-extrabold text-purple-300 font-mono">
              {analytics?.interviewPipeline || 0}
            </p>
            <p className="text-xs text-slate-500">Candidates in OA / Tech rounds</p>
          </Card>
        </div>
      )}

      {/* Recruitment Funnel Section */}
      <Card className="p-6 bg-slate-900/80 border-slate-800 space-y-5">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
          Campus Recruitment Conversion Funnel
        </h3>

        <div className="space-y-4">
          {[
            { label: 'Applications Submitted', count: analytics?.stageFunnel?.APPLIED || 0, color: 'bg-brand-500' },
            { label: 'Online Assessment (OA)', count: analytics?.stageFunnel?.OA_SCHEDULED || 0, color: 'bg-amber-500' },
            { label: 'Technical & HR Interviews', count: analytics?.stageFunnel?.INTERVIEW || 0, color: 'bg-purple-500' },
            { label: 'Final Offers Made', count: analytics?.stageFunnel?.OFFERED || 0, color: 'bg-emerald-500' },
          ].map((step, idx) => {
            const maxVal = Math.max(analytics?.totalApplications || 1, 1);
            const percentage = Math.round((step.count / maxVal) * 100);

            return (
              <div key={idx} className="space-y-1.5 text-xs">
                <div className="flex justify-between items-center text-slate-300 font-medium">
                  <span>{step.label}</span>
                  <span className="font-mono text-white">
                    {step.count} candidates ({percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-850">
                  <div
                    className={`${step.color} h-full rounded-full transition-all duration-500`}
                    style={{ width: `${Math.max(percentage, 4)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Host Campus Placement Drive Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-slate-800 max-w-xl w-full p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-brand-400" />
                Host Campus Recruitment Drive
              </h3>
              <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateDrive} className="space-y-3 text-xs">
              <Input
                label="Role Title *"
                value={newDrive.title}
                onChange={(e) => setNewDrive({ ...newDrive, title: e.target.value })}
                placeholder="e.g. Graduate Software Engineer"
                required
              />

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Company Name *"
                  value={newDrive.companyName}
                  onChange={(e) => setNewDrive({ ...newDrive, companyName: e.target.value })}
                  placeholder="e.g. Oracle"
                  required
                />
                <Input
                  label="Location"
                  value={newDrive.location}
                  onChange={(e) => setNewDrive({ ...newDrive, location: e.target.value })}
                  placeholder="Bengaluru / Hyderabad"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Input
                  label="Min CTC (LPA)"
                  type="number"
                  value={newDrive.minCtc.toString()}
                  onChange={(e) => setNewDrive({ ...newDrive, minCtc: parseFloat(e.target.value) || 0 })}
                />
                <Input
                  label="Max CTC (LPA)"
                  type="number"
                  value={newDrive.maxCtc.toString()}
                  onChange={(e) => setNewDrive({ ...newDrive, maxCtc: parseFloat(e.target.value) || 0 })}
                />
                <Input
                  label="Min CGPA Cutoff"
                  type="number"
                  step="0.1"
                  value={newDrive.minCgpa.toString()}
                  onChange={(e) => setNewDrive({ ...newDrive, minCgpa: parseFloat(e.target.value) || 0 })}
                />
              </div>

              <Input
                label="Required Skills (comma-separated)"
                value={newDrive.skills}
                onChange={(e) => setNewDrive({ ...newDrive, skills: e.target.value })}
                placeholder="React, Node.js, TypeScript, SQL"
              />

              <Input
                label="Eligible Batches (comma-separated)"
                value={newDrive.allowedBatches}
                onChange={(e) => setNewDrive({ ...newDrive, allowedBatches: e.target.value })}
                placeholder="2025, 2026"
              />

              <Input
                label="Internal or External Application URL *"
                value={newDrive.applyUrl}
                onChange={(e) => setNewDrive({ ...newDrive, applyUrl: e.target.value })}
                placeholder="https://company.com/apply"
                required
              />

              <div className="space-y-1">
                <label className="font-semibold text-slate-300">Job Description</label>
                <textarea
                  rows={3}
                  value={newDrive.description}
                  onChange={(e) => setNewDrive({ ...newDrive, description: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-white focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <Button type="button" variant="outline" onClick={() => setShowCreateModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={submitting}>
                  {submitting ? 'Posting Drive...' : 'Publish Campus Drive'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
