import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Briefcase,
  Search,
  MapPin,
  Building2,
  ExternalLink,
  Kanban,
  CheckCircle,
  AlertCircle,
  Filter,
  DollarSign,
  X,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { OpportunityApi } from '../../modules/opportunity/opportunityApi';
import { IOpportunity } from '../../modules/opportunity/types';

export const JobDiscoveryPage: React.FC = () => {
  const navigate = useNavigate();

  const [opportunities, setOpportunities] = useState<IOpportunity[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedOpp, setSelectedOpp] = useState<IOpportunity | null>(null);

  // Filters
  const [search, setSearch] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const [selectedWorkMode, setSelectedWorkMode] = useState<string>('ALL');
  const [onlyEligible, setOnlyEligible] = useState<boolean>(false);

  useEffect(() => {
    fetchOpportunities();
  }, [selectedType, selectedWorkMode, onlyEligible]);

  const fetchOpportunities = async () => {
    try {
      setLoading(true);
      const params: any = {};
      if (selectedType !== 'ALL') params.type = selectedType;
      if (selectedWorkMode !== 'ALL') params.workMode = selectedWorkMode;
      if (onlyEligible) params.onlyEligible = true;
      if (search.trim()) params.search = search.trim();

      const data = await OpportunityApi.getOpportunities(params);
      setOpportunities(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchOpportunities();
  };

  const handleApplyAndTrack = async (opp: IOpportunity) => {
    try {
      await OpportunityApi.createApplication({
        opportunityId: opp._id,
        stage: 'APPLIED',
        notes: 'Applied via Swadhyayi Job Discovery',
      });
      // Open external apply link
      window.open(opp.applyUrl, '_blank');
      // Update local status
      setOpportunities((prev) =>
        prev.map((item) =>
          item._id === opp._id
            ? {
                ...item,
                applicationStatus: {
                  isApplied: true,
                  stage: 'APPLIED',
                  appliedDate: new Date().toISOString(),
                },
              }
            : item
        )
      );
      setSelectedOpp(null);
    } catch {
      window.open(opp.applyUrl, '_blank');
    }
  };

  const handleSaveToPipeline = async (opp: IOpportunity, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await OpportunityApi.createApplication({
        opportunityId: opp._id,
        stage: 'SAVED',
        notes: 'Saved for later application',
      });
      setOpportunities((prev) =>
        prev.map((item) =>
          item._id === opp._id
            ? {
                ...item,
                applicationStatus: {
                  isApplied: true,
                  stage: 'SAVED',
                  appliedDate: null,
                },
              }
            : item
        )
      );
    } catch {
      alert('Failed to save to pipeline');
    }
  };

  const formatSalary = (salary: IOpportunity['salary']) => {
    if (!salary || (!salary.min && !salary.max)) return 'Competitive';
    const symbol = salary.currency === 'INR' ? '₹' : '$';
    if (salary.period === 'LPA') {
      return `${symbol}${salary.min} - ${salary.max} LPA`;
    }
    return `${symbol}${salary.min.toLocaleString()} - ${salary.max.toLocaleString()} / mo`;
  };

  return (
    <div className="space-y-6">
      {/* Header & Fast Pipeline Link */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Jobs & Internships Portal</h1>
            <Badge variant="brand" className="text-xs">
              Verified & Campus Drives
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Discover verified tech roles with real-time skill matching and eligibility audits.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            onClick={() => navigate('/applications')}
            className="flex items-center gap-2 border-slate-700 text-slate-200 hover:bg-slate-800/60"
          >
            <Kanban className="w-4 h-4 text-brand-400" />
            My Application Kanban
          </Button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <Card className="p-4 bg-slate-900/60 border-slate-800 space-y-3">
        <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-center gap-2">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by role title, company (Google, Amazon), or tech skills (React, Python)..."
              className="w-full pl-9 pr-4 py-2 bg-slate-950 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
            />
          </div>
          <Button type="submit" variant="primary" className="text-xs px-4 py-2 w-full sm:w-auto">
            Search
          </Button>
        </form>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-850 text-xs">
          {/* Role Type Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-500 font-semibold mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3" /> Type:
            </span>
            {['ALL', 'FULL_TIME', 'INTERNSHIP'].map((t) => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  selectedType === t
                    ? 'bg-brand-500 text-white font-medium shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {t === 'ALL' ? 'All Roles' : t === 'FULL_TIME' ? 'Full-Time' : 'Internships'}
              </button>
            ))}
          </div>

          {/* Work Mode Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-500 font-semibold mr-1">Work Mode:</span>
            {['ALL', 'REMOTE', 'HYBRID', 'ON_SITE'].map((m) => (
              <button
                key={m}
                onClick={() => setSelectedWorkMode(m)}
                className={`px-2.5 py-1 rounded-md transition-colors ${
                  selectedWorkMode === m
                    ? 'bg-brand-500 text-white font-medium shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {m === 'ALL' ? 'All Modes' : m.replace('_', '-')}
              </button>
            ))}
          </div>

          {/* Only Eligible Switch */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={onlyEligible}
              onChange={(e) => setOnlyEligible(e.target.checked)}
              className="rounded bg-slate-950 border-slate-800 text-brand-500 focus:ring-0 focus:ring-offset-0"
            />
            <span className="text-slate-300 font-medium">Only show eligible roles</span>
          </label>
        </div>
      </Card>

      {/* Opportunities List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Card key={i} className="p-5 bg-slate-900/40 border-slate-800 animate-pulse space-y-4">
              <div className="h-6 bg-slate-800 rounded w-2/3"></div>
              <div className="h-4 bg-slate-800 rounded w-1/3"></div>
              <div className="h-10 bg-slate-800 rounded"></div>
            </Card>
          ))}
        </div>
      ) : opportunities.length === 0 ? (
        <Card className="p-12 text-center bg-slate-900/40 border-slate-800 space-y-3 max-w-md mx-auto">
          <Briefcase className="w-10 h-10 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">No Opportunities Found</h3>
          <p className="text-xs text-slate-400">
            Try adjusting your search filters or unchecking "Only show eligible roles".
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {opportunities.map((opp) => {
            const match = opp.matchDetails;
            const score = match?.matchScore || 0;
            const isEligible = match ? match.isEligible : true;
            const appStatus = opp.applicationStatus;

            return (
              <Card
                key={opp._id}
                onClick={() => setSelectedOpp(opp)}
                className="p-5 bg-slate-900/70 border-slate-800 hover:border-brand-500/40 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Company & Source Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-bold text-white text-base">
                        {opp.company?.name?.charAt(0) || 'C'}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-slate-300 line-clamp-1">
                          {opp.company?.name}
                        </h4>
                        <div className="flex items-center gap-1.5 mt-0.5">
                          <Badge
                            variant={opp.source === 'CAMPUS_DRIVE' ? 'brand' : 'neutral'}
                            className="text-[10px] font-mono px-1.5 py-0"
                          >
                            {opp.source === 'CAMPUS_DRIVE' ? 'Campus Drive' : 'Verified Partner'}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Match Score Badge */}
                    {match && (
                      <div
                        className={`px-2.5 py-1 rounded-xl border text-xs font-bold font-mono text-center ${
                          isEligible && score >= 75
                            ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10'
                            : isEligible
                            ? 'text-brand-300 border-brand-500/30 bg-brand-500/10'
                            : 'text-rose-400 border-rose-500/30 bg-rose-500/10'
                        }`}
                        title={
                          isEligible
                            ? `Candidate Match: ${score}%`
                            : `Ineligible: ${match.ineligibilityReasons.join(', ')}`
                        }
                      >
                        {score}%
                        <span className="block text-[9px] font-normal leading-none uppercase">
                          {isEligible ? 'Match' : 'Ineligible'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors line-clamp-1">
                    {opp.title}
                  </h3>

                  {/* Meta Pills */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-semibold text-slate-200">
                      <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
                      {formatSalary(opp.salary)}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {opp.location} ({opp.workMode.replace('_', '-')})
                    </span>
                  </div>

                  {/* Required Skills Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(opp.requirements?.skills || []).slice(0, 4).map((skill, i) => {
                      const isMatched = match?.matchedSkills?.includes(skill);
                      return (
                        <span
                          key={i}
                          className={`text-[10px] px-2 py-0.5 rounded font-mono ${
                            isMatched
                              ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold'
                              : 'bg-slate-950 border border-slate-800 text-slate-400'
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                    {(opp.requirements?.skills || []).length > 4 && (
                      <span className="text-[10px] text-slate-500 py-0.5">
                        +{(opp.requirements?.skills || []).length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="mt-4 pt-3 border-t border-slate-850 flex items-center justify-between text-xs">
                  {appStatus?.isApplied ? (
                    <span className="px-2 py-0.5 rounded bg-brand-500/10 border border-brand-500/30 text-brand-300 font-medium text-[11px] flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-brand-400" />
                      {appStatus.stage?.replace('_', ' ')}
                    </span>
                  ) : (
                    <button
                      onClick={(e) => handleSaveToPipeline(opp, e)}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      Save to Pipeline
                    </button>
                  )}

                  <Button
                    variant="outline"
                    className="text-xs px-2.5 py-1 border-slate-750 text-slate-200 group-hover:border-brand-500/40"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Opportunity Detail & Match Radar Modal */}
      {selectedOpp && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-slate-800 max-w-2xl w-full p-6 space-y-5 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <Badge variant="brand" className="text-[10px] font-mono mb-2">
                  {selectedOpp.source === 'CAMPUS_DRIVE' ? 'Campus Recruitment Drive' : 'Verified Partner'}
                </Badge>
                <h2 className="text-xl font-bold text-white">{selectedOpp.title}</h2>
                <p className="text-sm text-slate-400 mt-0.5 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-slate-500" />
                  {selectedOpp.company?.name} • {selectedOpp.location}
                </p>
              </div>
              <button
                onClick={() => setSelectedOpp(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Match Radar Box */}
            {selectedOpp.matchDetails && (
              <div
                className={`p-4 rounded-xl border space-y-3 ${
                  selectedOpp.matchDetails.isEligible
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-rose-500/10 border-rose-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {selectedOpp.matchDetails.isEligible ? (
                      <CheckCircle className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-rose-400" />
                    )}
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {selectedOpp.matchDetails.isEligible
                          ? 'You are Eligible for this Role'
                          : 'Eligibility Alert'}
                      </h4>
                      <p className="text-xs text-slate-400">
                        Candidate Placement Match: {selectedOpp.matchDetails.matchScore}%
                      </p>
                    </div>
                  </div>

                  <span className="text-2xl font-black font-mono text-white">
                    {selectedOpp.matchDetails.matchScore}
                    <span className="text-xs text-slate-400 font-normal">/100</span>
                  </span>
                </div>

                {!selectedOpp.matchDetails.isEligible && (
                  <div className="text-xs text-rose-300 space-y-1 pt-1 border-t border-rose-500/20">
                    {selectedOpp.matchDetails.ineligibilityReasons.map((r, i) => (
                      <p key={i}>• {r}</p>
                    ))}
                  </div>
                )}

                {/* Skills Overlap */}
                <div className="pt-2 text-xs border-t border-slate-800/60">
                  <span className="font-semibold text-slate-300">Skill Alignment:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {selectedOpp.matchDetails.matchedSkills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-[10px]"
                      >
                        ✓ {s}
                      </span>
                    ))}
                    {selectedOpp.matchDetails.missingSkills.map((s, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-500 font-mono text-[10px]"
                      >
                        ✗ {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Compensation & Criteria */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-850">
                <span className="text-slate-500 uppercase font-semibold text-[10px]">Salary / Stipend</span>
                <p className="text-sm font-bold text-emerald-400 mt-1">
                  {formatSalary(selectedOpp.salary)}
                </p>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-850">
                <span className="text-slate-500 uppercase font-semibold text-[10px]">Min. CGPA Cutoff</span>
                <p className="text-sm font-bold text-slate-200 mt-1">
                  {selectedOpp.requirements?.minCgpa ? `${selectedOpp.requirements.minCgpa} CGPA` : 'No Cutoff'}
                </p>
              </div>
              <div className="p-3 bg-slate-950 rounded-lg border border-slate-850">
                <span className="text-slate-500 uppercase font-semibold text-[10px]">Eligible Batches</span>
                <p className="text-sm font-bold text-slate-200 mt-1">
                  {selectedOpp.requirements?.allowedBatches?.length
                    ? selectedOpp.requirements.allowedBatches.join(', ')
                    : 'All Batches'}
                </p>
              </div>
            </div>

            {/* Job Description */}
            <div className="space-y-2 text-xs text-slate-300">
              <h4 className="font-bold uppercase tracking-wider text-slate-400">Role Description</h4>
              <p className="leading-relaxed whitespace-pre-line text-slate-300 bg-slate-950 p-4 rounded-lg border border-slate-850">
                {selectedOpp.description}
              </p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              <Button variant="outline" onClick={() => setSelectedOpp(null)} className="text-xs">
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => handleApplyAndTrack(selectedOpp)}
                className="flex items-center gap-1.5 text-xs"
              >
                Apply & Track in Pipeline
                <ExternalLink className="w-3.5 h-3.5" />
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
