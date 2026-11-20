import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Badge } from '../../components/common/Badge';
import { Shield, Building2, Users, Cpu, Activity, CheckCircle2 } from 'lucide-react';

export const SuperAdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-950/30 via-slate-900 to-slate-900 border border-rose-500/20 flex justify-between items-center">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Shield className="w-5 h-5 text-rose-400" />
            <h1 className="text-2xl font-bold text-white tracking-tight">SaaS Super Admin Telemetry</h1>
          </div>
          <p className="text-xs text-slate-400">
            Global Platform Governance, Multi-Tenant Health & Subscription Quota Control
          </p>
        </div>
        <Badge variant="danger">Super Admin Root</Badge>
      </div>

      {/* Global Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Colleges Onboarded</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">18 Institutions</h3>
            <p className="text-xs text-emerald-400 font-medium">100% SLA uptime</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Students</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">14,280</h3>
            <p className="text-xs text-slate-400">Across 74 Batches</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Code Submissions Today</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">28,491</h3>
            <p className="text-xs text-slate-400">Judge0 Sandboxed</p>
          </div>
        </Card>

        <Card className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Activity className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Avg API Latency</p>
            <h3 className="text-2xl font-bold text-white mt-0.5">38ms</h3>
            <p className="text-xs text-emerald-400 font-medium">Redis Cached</p>
          </div>
        </Card>
      </div>

      {/* System Health & Global Question Bank Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div>
              <CardTitle>Tenant Health Status</CardTitle>
              <CardDescription>Active institutional subscriptions and resource usage</CardDescription>
            </div>
          </CardHeader>
          <div className="divide-y divide-slate-800 text-xs">
            {[
              { name: 'National Institute of Tech, Surat', code: 'nit-surat', plan: 'Enterprise', students: '2,400', status: 'Healthy' },
              { name: 'Indian Institute of Info Tech', code: 'iiit-h', plan: 'Enterprise', students: '1,800', status: 'Healthy' },
              { name: 'Vellore Tech University', code: 'vtu', plan: 'Professional', students: '950', status: 'Healthy' },
            ].map((tenant, idx) => (
              <div key={idx} className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-semibold text-slate-200">{tenant.name}</p>
                  <p className="text-[11px] font-mono text-slate-500">ID: {tenant.code} • {tenant.students} Students</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="brand" size="sm">{tenant.plan}</Badge>
                  <Badge variant="success" size="sm">
                    <CheckCircle2 className="w-3 h-3 mr-1" />
                    {tenant.status}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <CardHeader>
            <div>
              <CardTitle>Global Question Bank Governance</CardTitle>
              <CardDescription>Shared pool of vetted DSA and aptitude problems</CardDescription>
            </div>
          </CardHeader>
          <div className="space-y-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-200">DSA & Coding Questions</p>
                <p className="text-[11px] text-slate-500">Classified by 28 patterns, 16 verified companies</p>
              </div>
              <span className="font-mono font-bold text-brand-400">1,240 Problems</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-200">Aptitude & Technical MCQs</p>
                <p className="text-[11px] text-slate-500">Quant, Logical, Verbal, Core CS</p>
              </div>
              <span className="font-mono font-bold text-cyan-400">3,850 MCQs</span>
            </div>

            <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex justify-between items-center">
              <div>
                <p className="font-semibold text-slate-200">Career Roadmaps</p>
                <p className="text-[11px] text-slate-500">Full Stack, AI/ML, Cloud, SDE, DevOps</p>
              </div>
              <span className="font-mono font-bold text-emerald-400">19 Tracks</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
