import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import { CheckCircle2, Sparkles, ShieldCheck, ArrowRight, LogOut } from 'lucide-react';

interface PlanOption {
  id: string;
  name: string;
  price: string;
  period: string;
  badge?: string;
  description: string;
  features: string[];
}

const STUDENT_PLANS: PlanOption[] = [
  {
    id: 'PRO_MONTHLY',
    name: 'Monthly Pro',
    price: '₹299',
    period: '/month',
    description: 'Flexible monthly access for coding practice and campus tests.',
    features: [
      'Full Coding Arena & Multi-Language Sandbox',
      'Topic-wise Aptitude & Reasoning Drills',
      'Proctored Institutional Assessments',
      'ATS Resume Builder & Score Diagnostics',
    ],
  },
  {
    id: 'PRO_ANNUAL',
    name: 'Annual Placement Pass',
    price: '₹1,999',
    period: '/year',
    badge: 'Most Popular',
    description: 'Complete placement preparation suite for the entire academic year.',
    features: [
      'Everything in Monthly Pro',
      'Company-Specific Coding & Mock Drives',
      'Career Roadmaps & Progress Analytics',
      'Priority Leaderboard & Opportunity Access',
    ],
  },
  {
    id: 'CAMPUS_PASS',
    name: 'Campus Sponsored Pass',
    price: '₹0',
    period: '/institutional',
    badge: 'College Covered',
    description: 'Activate using your university or college institutional enrollment.',
    features: [
      'All Mapped Semester Assessments',
      'Department & Section Leaderboard',
      'Faculty Diagnostic Assignments',
      'Core Coding & Aptitude Practice',
    ],
  },
];

export const StudentSubscriptionPage: React.FC = () => {
  const { user, markSubscribed, logout } = useAuth();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string>('PRO_ANNUAL');
  const [activating, setActivating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleActivate = async (planId: string) => {
    setError(null);
    setActivating(true);
    try {
      const res = await axios.post('/subscriptions/student/activate', { plan: planId });
      if (res.data?.success) {
        markSubscribed(planId);
        navigate('/dashboard/student', { replace: true });
      }
    } catch (err: any) {
      setError(err?.response?.data?.error?.message || 'Failed to activate subscription. Please try again.');
    } finally {
      setActivating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Student Subscription Required
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Choose Your Swadhyayi Student Plan
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Welcome, <span className="text-white font-semibold">{user?.firstName} {user?.lastName}</span> ({user?.email}). Activate a plan to unlock your Student Dashboard.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {user?.isSubscribed && (
              <Button
                variant="primary"
                size="sm"
                onClick={() => navigate('/dashboard/student')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Go to Dashboard
              </Button>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                await logout();
                navigate('/login');
              }}
              leftIcon={<LogOut className="w-4 h-4" />}
            >
              Sign Out
            </Button>
          </div>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STUDENT_PLANS.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <Card
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`p-6 cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 border-brand-500 ring-1 ring-brand-500/40 shadow-xl'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                    {plan.badge && (
                      <Badge variant="brand" size="sm">
                        {plan.badge}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-xs text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-xs text-slate-400">{plan.description}</p>
                  <ul className="space-y-2 pt-2 border-t border-slate-800/80">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  type="button"
                  variant={isSelected ? 'primary' : 'secondary'}
                  className="w-full mt-6"
                  isLoading={activating && isSelected}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPlan(plan.id);
                    handleActivate(plan.id);
                  }}
                  rightIcon={<ArrowRight className="w-4 h-4" />}
                >
                  Subscribe &amp; Enter Dashboard
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>Instant activation • Your progress, coding submissions, and assessments are saved to your account.</span>
        </div>
      </div>
    </div>
  );
};
