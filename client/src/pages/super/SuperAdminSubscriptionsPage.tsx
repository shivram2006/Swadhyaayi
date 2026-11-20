import React, { useState, useEffect } from 'react';
import {
  Building2,
  DollarSign,
  TrendingUp,
  Users,
  Edit2,
  X,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { SubscriptionApi } from '../../modules/subscription/subscriptionApi';
import { IAdminSubscriptionTelemetry, ISubscription } from '../../modules/subscription/types';

export const SuperAdminSubscriptionsPage: React.FC = () => {
  const [telemetry, setTelemetry] = useState<IAdminSubscriptionTelemetry | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedSub, setSelectedSub] = useState<ISubscription | null>(null);
  const [newSeatLimit, setNewSeatLimit] = useState<number>(500);
  const [saving, setSaving] = useState<boolean>(false);

  useEffect(() => {
    fetchTelemetry();
  }, []);

  const fetchTelemetry = async () => {
    try {
      setLoading(true);
      const data = await SubscriptionApi.getAdminTelemetry();
      setTelemetry(data);
    } catch {
      // Fallback
    } finally {
      setLoading(false);
    }
  };

  const handleAdjustSeats = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSub) return;
    try {
      setSaving(true);
      await SubscriptionApi.adminAdjustSeats(selectedSub._id, newSeatLimit);
      alert('Seat quota adjusted successfully!');
      setSelectedSub(null);
      fetchTelemetry();
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to adjust seats');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-white tracking-tight">Platform SaaS & Licensing Command</h1>
            <Badge variant="brand" className="text-xs">
              Super Admin Core
            </Badge>
          </div>
          <p className="text-sm text-slate-400 mt-1">
            Global view of multi-tenant university subscriptions, recurring revenue, and student seat quotas.
          </p>
        </div>
      </div>

      {/* Top Telemetry KPI Cards */}
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
              <span>Annual Run Rate (ARR)</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-3xl font-extrabold text-emerald-400 font-mono">
              ₹{(telemetry?.annualRecurringRevenue || 0).toLocaleString()}
            </p>
            <p className="text-xs text-slate-500">Contracted institutional value</p>
          </Card>

          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Monthly Run Rate (MRR)</span>
              <TrendingUp className="w-4 h-4 text-brand-400" />
            </div>
            <p className="text-3xl font-extrabold text-brand-300 font-mono">
              ₹{(telemetry?.monthlyRecurringRevenue || 0).toLocaleString()}
            </p>
            <p className="text-xs text-slate-500">Active monthly recurring</p>
          </Card>

          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Subscribed Colleges</span>
              <Building2 className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-3xl font-extrabold text-white font-mono">
              {telemetry?.totalSubscribedColleges || 0}
            </p>
            <p className="text-xs text-slate-500">Active multi-tenant instances</p>
          </Card>

          <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase">
              <span>Total Seats Enrolled</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-3xl font-extrabold text-purple-300 font-mono">
              {telemetry?.totalSeatsUtilized || 0}
              <span className="text-sm font-normal text-slate-400"> / {telemetry?.totalSeatCapacity || 0}</span>
            </p>
            <p className="text-xs text-slate-500">Students actively provisioned</p>
          </Card>
        </div>
      )}

      {/* Subscriptions Table */}
      <Card className="p-6 bg-slate-900/80 border-slate-800 space-y-4">
        <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
          Institutional Licenses & Seat Quotas
        </h3>

        {(telemetry?.subscriptions || []).length === 0 ? (
          <p className="text-xs text-slate-500 italic py-4">No subscriptions registered</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-semibold">
                <tr>
                  <th className="py-2.5 px-3">Institution Tenant</th>
                  <th className="py-2.5 px-3">Tier</th>
                  <th className="py-2.5 px-3">Seat Quota</th>
                  <th className="py-2.5 px-3">Status</th>
                  <th className="py-2.5 px-3">Pricing</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-850">
                {telemetry?.subscriptions.map((sub) => (
                  <tr key={sub._id} className="hover:bg-slate-800/40 text-slate-300">
                    <td className="py-2.5 px-3 font-mono text-white">
                      {sub.institutionId}
                    </td>
                    <td className="py-2.5 px-3">
                      <Badge variant="brand" className="text-[10px] font-mono">
                        {sub.tier.replace('_', ' ')}
                      </Badge>
                    </td>
                    <td className="py-2.5 px-3 font-mono">
                      <span className="font-bold text-white">{sub.activeSeatsUsed}</span> /{' '}
                      {sub.seatLimit === 0 ? 'Unlimited' : sub.seatLimit} seats
                    </td>
                    <td className="py-2.5 px-3">
                      <Badge variant="success" className="text-[10px] font-mono">
                        {sub.status}
                      </Badge>
                    </td>
                    <td className="py-2.5 px-3 font-mono font-semibold text-emerald-400">
                      ₹{sub.pricing.amount.toLocaleString()} / {sub.billingCycle.toLowerCase()}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setSelectedSub(sub);
                          setNewSeatLimit(sub.seatLimit);
                        }}
                        className="text-[11px] px-2.5 py-1 border-slate-700"
                      >
                        <Edit2 className="w-3 h-3 mr-1" />
                        Adjust Quota
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Adjust Seat Quota Modal */}
      {selectedSub && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="bg-slate-900 border-slate-800 max-w-md w-full p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-400" />
                Override Institutional Seat Limit
              </h3>
              <button onClick={() => setSelectedSub(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdjustSeats} className="space-y-4 text-xs">
              <div>
                <span className="text-slate-400">Target Institution:</span>
                <p className="font-mono text-white font-bold mt-0.5">{selectedSub.institutionId}</p>
              </div>

              <div>
                <span className="text-slate-400">Current Plan & Usage:</span>
                <p className="text-slate-200 mt-0.5">
                  {selectedSub.tier} • {selectedSub.activeSeatsUsed} currently enrolled
                </p>
              </div>

              <Input
                label="New Seat Limit (0 = Unlimited Enterprise)"
                type="number"
                min="0"
                value={newSeatLimit.toString()}
                onChange={(e) => setNewSeatLimit(parseInt(e.target.value) || 0)}
                required
              />

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-800">
                <Button type="button" variant="outline" onClick={() => setSelectedSub(null)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={saving}>
                  {saving ? 'Updating...' : 'Save New Quota'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
