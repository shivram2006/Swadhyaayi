import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Users,
  CheckCircle2,
  Sparkles,
  Calendar,
  Download,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { SubscriptionApi } from '../../modules/subscription/subscriptionApi';
import { ISubscription, SubscriptionTier, BillingCycle } from '../../modules/subscription/types';

export const CollegeSubscriptionPage: React.FC = () => {
  const [subscription, setSubscription] = useState<ISubscription | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [upgrading, setUpgrading] = useState<boolean>(false);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('ANNUAL');

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      setLoading(true);
      const sub = await SubscriptionApi.getCurrentSubscription();
      setSubscription(sub);
      if (sub?.billingCycle) setBillingCycle(sub.billingCycle);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleUpgrade = async (tier: SubscriptionTier) => {
    if (!window.confirm(`Confirm upgrade to ${tier.replace('_', ' ')}?`)) return;
    try {
      setUpgrading(true);
      const updated = await SubscriptionApi.upgradeSubscription({
        tier,
        billingCycle,
      });
      setSubscription(updated);
      alert('Institutional plan upgraded successfully!');
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to upgrade plan');
    } finally {
      setUpgrading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh] text-slate-400">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm">Loading Institutional License...</p>
        </div>
      </div>
    );
  }

  const isEnterprise = subscription?.tier === 'ENTERPRISE_UNIVERSITY';
  const seatLimit = subscription?.seatLimit || 500;
  const activeSeats = subscription?.activeSeatsUsed || 0;
  const seatPercentage = isEnterprise && seatLimit === 0 ? 100 : Math.round((activeSeats / Math.max(seatLimit, 1)) * 100);

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">College Subscription & Licenses</h1>
            <Badge variant="brand" className="text-xs">
              B2B Institutional Tier
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Manage your university's student seat allocations, enterprise capabilities, and invoices.
          </p>
        </div>

        {/* Billing cycle switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
          <button
            onClick={() => setBillingCycle('ANNUAL')}
            className={`px-3 py-1 rounded transition-colors font-medium ${
              billingCycle === 'ANNUAL' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Annual (Save 20%)
          </button>
          <button
            onClick={() => setBillingCycle('MONTHLY')}
            className={`px-3 py-1 rounded transition-colors font-medium ${
              billingCycle === 'MONTHLY' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Current License Overview Card */}
      <Card className="p-6 bg-slate-900/80 border-slate-800 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-white">
                  {subscription?.tier.replace('_', ' ')}
                </h2>
                <Badge variant="success" className="text-[10px] font-mono">
                  {subscription?.status}
                </Badge>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Active through {new Date(subscription?.currentPeriodEnd || '').toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <span className="text-xs text-slate-400 uppercase font-semibold">Institutional Pricing</span>
            <p className="text-2xl font-black text-white font-mono mt-0.5">
              ₹{(subscription?.pricing.amount || 0).toLocaleString()}
              <span className="text-xs font-normal text-slate-400 font-sans">
                {' '}
                / {subscription?.billingCycle.toLowerCase()}
              </span>
            </p>
          </div>
        </div>

        {/* Seat Utilization Bar */}
        <div className="p-4 bg-slate-950 rounded-xl border border-slate-850 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold">
            <span className="text-slate-300 flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-400" />
              Student Seat Allocation
            </span>
            <span className="text-slate-200 font-mono">
              {activeSeats} / {isEnterprise && seatLimit === 0 ? 'Unlimited' : seatLimit} Seats Enrolled ({seatPercentage}%)
            </span>
          </div>
          <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                seatPercentage >= 95 ? 'bg-rose-500' : seatPercentage >= 80 ? 'bg-amber-500' : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.min(seatPercentage, 100)}%` }}
            ></div>
          </div>
          <div className="flex justify-between text-[11px] text-slate-500">
            <span>Quota enforced at student CSV import & enrollment</span>
            <span>
              {isEnterprise && seatLimit === 0 ? 'Unlimited seats available' : `${Math.max(0, seatLimit - activeSeats)} seats remaining`}
            </span>
          </div>
        </div>
      </Card>

      {/* Available Plans Comparison Grid */}
      <div>
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300 mb-4">
          Upgrade or Switch Institutional Plan
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Plan 1: Free Trial */}
          <Card className={`p-5 flex flex-col justify-between ${subscription?.tier === 'FREE_TRIAL' ? 'border-brand-500 bg-brand-500/5' : 'bg-slate-900/60 border-slate-800'}`}>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold text-white">Free Trial</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Pilot evaluation</p>
                </div>
                {subscription?.tier === 'FREE_TRIAL' && (
                  <Badge variant="brand" className="text-[10px]">Current</Badge>
                )}
              </div>
              <p className="text-2xl font-bold text-white font-mono">
                ₹0 <span className="text-xs text-slate-400 font-normal">/ 14 days</span>
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> Up to 50 Student Seats</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> Basic DSA & Aptitude Practice</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-brand-400" /> Up to 2 Concurrent Tests</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Button
                variant="outline"
                disabled={subscription?.tier === 'FREE_TRIAL' || upgrading}
                onClick={() => handleUpgrade('FREE_TRIAL')}
                className="w-full text-xs py-2"
              >
                {subscription?.tier === 'FREE_TRIAL' ? 'Active Plan' : 'Downgrade to Trial'}
              </Button>
            </div>
          </Card>

          {/* Plan 2: Standard Campus */}
          <Card className={`p-5 flex flex-col justify-between relative ${subscription?.tier === 'STANDARD_CAMPUS' ? 'border-brand-500 bg-brand-500/5 ring-1 ring-brand-500/30' : 'bg-slate-900/60 border-slate-800'}`}>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold text-white">Standard Campus</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Mid-sized engineering college</p>
                </div>
                {subscription?.tier === 'STANDARD_CAMPUS' && (
                  <Badge variant="brand" className="text-[10px]">Current Plan</Badge>
                )}
              </div>
              <p className="text-2xl font-bold text-brand-300 font-mono">
                {billingCycle === 'ANNUAL' ? '₹2,50,000' : '₹25,000'}
                <span className="text-xs text-slate-400 font-normal"> / {billingCycle.toLowerCase()}</span>
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Up to 500 Student Seats</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full 28 Algorithmic Patterns</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Up to 10 Concurrent Proctored Tests</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Full ATS Resume Builder Suite</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Campus Recruitment Drives</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Button
                variant={subscription?.tier === 'STANDARD_CAMPUS' ? 'outline' : 'primary'}
                disabled={subscription?.tier === 'STANDARD_CAMPUS' || upgrading}
                onClick={() => handleUpgrade('STANDARD_CAMPUS')}
                className="w-full text-xs py-2"
              >
                {subscription?.tier === 'STANDARD_CAMPUS' ? 'Active Plan' : 'Select Standard Campus'}
              </Button>
            </div>
          </Card>

          {/* Plan 3: Enterprise University */}
          <Card className={`p-5 flex flex-col justify-between ${subscription?.tier === 'ENTERPRISE_UNIVERSITY' ? 'border-purple-500 bg-purple-500/5 ring-1 ring-purple-500/30' : 'bg-slate-900/60 border-slate-800'}`}>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-1.5">
                    Enterprise
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">Large University / Multi-Department</p>
                </div>
                {subscription?.tier === 'ENTERPRISE_UNIVERSITY' && (
                  <Badge variant="brand" className="text-[10px]">Active</Badge>
                )}
              </div>
              <p className="text-2xl font-bold text-purple-300 font-mono">
                {billingCycle === 'ANNUAL' ? '₹6,00,000' : '₹60,000'}
                <span className="text-xs text-slate-400 font-normal"> / {billingCycle.toLowerCase()}</span>
              </p>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Unlimited Student Seats</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Up to 50 Concurrent Proctored Tests</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Custom University Branding</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Dedicated Sandboxed Execution Cluster</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Placement Officer Intelligence Radar</li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-800">
              <Button
                variant={subscription?.tier === 'ENTERPRISE_UNIVERSITY' ? 'outline' : 'primary'}
                disabled={subscription?.tier === 'ENTERPRISE_UNIVERSITY' || upgrading}
                onClick={() => handleUpgrade('ENTERPRISE_UNIVERSITY')}
                className="w-full text-xs py-2 bg-purple-600 hover:bg-purple-500 text-white"
              >
                {subscription?.tier === 'ENTERPRISE_UNIVERSITY' ? 'Active Enterprise' : 'Upgrade to Enterprise'}
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Invoices Table */}
      <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
          Billing & Invoices History
        </h3>

        {(subscription?.invoices || []).length === 0 ? (
          <p className="text-xs text-slate-500 italic py-4">No invoices generated yet</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-semibold">
                <tr>
                  <th className="py-2.5 px-3">Invoice Number</th>
                  <th className="py-2.5 px-3">Amount</th>
                  <th className="py-2.5 px-3">Date</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3 text-right">Receipt</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {subscription?.invoices.map((inv, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 text-slate-300">
                    <td className="py-2.5 px-3 font-mono font-bold text-white">{inv.invoiceNumber}</td>
                    <td className="py-2.5 px-3 font-mono font-semibold">₹{inv.amount.toLocaleString()}</td>
                    <td className="py-2.5 px-3 text-slate-400">{new Date(inv.issuedAt).toLocaleDateString()}</td>
                    <td className="py-2.5 px-3">
                      <Badge variant="success" className="text-[10px] font-mono">
                        {inv.status}
                      </Badge>
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <button
                        onClick={() => alert(`Downloading ${inv.invoiceNumber} receipt...`)}
                        className="inline-flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium"
                      >
                        <Download className="w-3 h-3" />
                        PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};
