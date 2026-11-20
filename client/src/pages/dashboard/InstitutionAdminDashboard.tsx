import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import {
  Building2,
  Users,
  GraduationCap,
  Layers,
  RefreshCw,
  CheckCircle2,
} from 'lucide-react';

export const InstitutionAdminDashboard: React.FC = () => {
  const { institution } = useAuth();
  const [overview, setOverview] = useState<any>(null);
  const [departments, setDepartments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [_isLoading, setIsLoading] = useState(true);

  // Modal forms
  const [deptForm, setDeptForm] = useState({ name: '', code: '' });
  const [batchForm, setBatchForm] = useState({ name: '', graduationYear: 2027, currentAcademicYear: 1 });
  const [classForm, setClassForm] = useState({ departmentId: '', batchId: '', section: 'A', semester: 1 });
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const fetchOverview = async () => {
    setIsLoading(true);
    try {
      const [ovRes, deptRes, batchRes, classRes] = await Promise.all([
        axios.get('/tenants/overview'),
        axios.get('/tenants/departments'),
        axios.get('/tenants/batches'),
        axios.get('/tenants/classes'),
      ]);

      if (ovRes.data.success) setOverview(ovRes.data.data);
      if (deptRes.data.success) setDepartments(deptRes.data.data);
      if (batchRes.data.success) setBatches(batchRes.data.data);
      if (classRes.data.success) setClasses(classRes.data.data);
    } catch (err) {
      console.error('Error fetching tenant details:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchOverview();
  }, []);

  const handleCreateDept = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/tenants/departments', deptForm);
      setDeptForm({ name: '', code: '' });
      setActionSuccess('Department created successfully!');
      fetchOverview();
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to create department');
    }
  };

  const handleCreateBatch = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/tenants/batches', batchForm);
      setBatchForm({ name: '', graduationYear: 2027, currentAcademicYear: 1 });
      setActionSuccess('Batch created successfully!');
      fetchOverview();
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to create batch');
    }
  };

  const handleUpgradeBatch = async (batchId: string) => {
    if (!confirm('Promote this batch to the next academic year? Semesters for classes will auto-advance.')) return;
    try {
      await axios.post(`/tenants/batches/${batchId}/upgrade`);
      setActionSuccess('Batch promoted to the next academic year successfully!');
      fetchOverview();
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to upgrade batch');
    }
  };

  const handleCreateClass = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('/tenants/classes', classForm);
      setClassForm({ departmentId: '', batchId: '', section: 'A', semester: 1 });
      setActionSuccess('Class section created successfully!');
      fetchOverview();
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to create class');
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Building2 className="w-5 h-5 text-brand-400" />
            <h1 className="text-xl font-bold text-white tracking-tight">{overview?.institution?.name || institution?.name || 'College Dashboard'}</h1>
          </div>
          <p className="text-xs text-slate-400">
            Institution Code: <span className="text-brand-300 font-mono font-semibold">{overview?.institution?.code || institution?.code}</span> • Isolated Tenant Environment
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={fetchOverview} leftIcon={<RefreshCw className="w-3.5 h-3.5" />}>
          Refresh Analytics
        </Button>
      </div>

      {actionSuccess && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{actionSuccess}</span>
        </div>
      )}

      {/* Metrics Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <Card className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Departments</p>
          <h3 className="text-2xl font-bold text-white mt-1">{overview?.metrics?.totalDepartments || departments.length}</h3>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Active Batches</p>
          <h3 className="text-2xl font-bold text-white mt-1">{overview?.metrics?.totalBatches || batches.length}</h3>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Class Sections</p>
          <h3 className="text-2xl font-bold text-white mt-1">{overview?.metrics?.totalClasses || classes.length}</h3>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Enrolled Students</p>
          <h3 className="text-2xl font-bold text-emerald-400 mt-1">{overview?.metrics?.totalStudents || 0}</h3>
        </Card>
        <Card className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Faculty Members</p>
          <h3 className="text-2xl font-bold text-brand-400 mt-1">{overview?.metrics?.totalFaculty || 0}</h3>
        </Card>
      </div>

      {/* Tabs / Operations: Departments, Batches, Classes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Departments */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-400" />
              Departments
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleCreateDept} className="space-y-3 mb-5 p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <Input
              placeholder="e.g. Computer Science"
              value={deptForm.name}
              onChange={(e) => setDeptForm({ ...deptForm, name: e.target.value })}
              required
            />
            <div className="flex gap-2">
              <Input
                placeholder="Code (e.g. CSE)"
                value={deptForm.code}
                onChange={(e) => setDeptForm({ ...deptForm, code: e.target.value })}
                required
              />
              <Button type="submit" variant="primary" size="sm">
                Add
              </Button>
            </div>
          </form>

          <div className="space-y-2">
            {departments.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-4">No departments created yet.</p>
            ) : (
              departments.map((d) => (
                <div key={d._id} className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">{d.name}</span>
                    <span className="ml-2 font-mono text-brand-400">({d.code})</span>
                  </div>
                  <Badge variant="brand" size="sm">Active</Badge>
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Column 2: Batches & Year Upgrades */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-emerald-400" />
              Batches & Progression
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleCreateBatch} className="space-y-3 mb-5 p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <Input
              placeholder="e.g. Batch 2023-2027"
              value={batchForm.name}
              onChange={(e) => setBatchForm({ ...batchForm, name: e.target.value })}
              required
            />
            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Grad Year"
                value={batchForm.graduationYear}
                onChange={(e) => setBatchForm({ ...batchForm, graduationYear: parseInt(e.target.value, 10) })}
                required
              />
              <Button type="submit" variant="primary" size="sm">
                Add
              </Button>
            </div>
          </form>

          <div className="space-y-2">
            {batches.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-4">No batches created yet.</p>
            ) : (
              batches.map((b) => (
                <div key={b._id} className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-semibold text-slate-200">{b.name}</span>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Year {b.currentAcademicYear} of 4 • Grad {b.graduationYear}
                    </div>
                  </div>
                  {b.status !== 'GRADUATED' ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleUpgradeBatch(b._id)}
                      title="Promote to Next Academic Year"
                    >
                      Promote &uarr;
                    </Button>
                  ) : (
                    <Badge variant="success" size="sm">Graduated</Badge>
                  )}
                </div>
              ))
            )}
          </div>
        </Card>

        {/* Column 3: Class Sections */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              Class Sections
            </CardTitle>
          </CardHeader>

          <form onSubmit={handleCreateClass} className="space-y-3 mb-5 p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <select
              className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2 px-3"
              value={classForm.departmentId}
              onChange={(e) => setClassForm({ ...classForm, departmentId: e.target.value })}
              required
            >
              <option value="">Select Department</option>
              {departments.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.name} ({d.code})
                </option>
              ))}
            </select>

            <select
              className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2 px-3"
              value={classForm.batchId}
              onChange={(e) => setClassForm({ ...classForm, batchId: e.target.value })}
              required
            >
              <option value="">Select Batch</option>
              {batches.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.name}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <Input
                placeholder="Section (e.g. A)"
                value={classForm.section}
                onChange={(e) => setClassForm({ ...classForm, section: e.target.value })}
                required
              />
              <Button type="submit" variant="primary" size="sm">
                Add Section
              </Button>
            </div>
          </form>

          <div className="space-y-2 max-h-64 overflow-y-auto">
            {classes.length === 0 ? (
              <p className="text-xs text-slate-500 text-center py-4">No classes created yet.</p>
            ) : (
              classes.map((c) => (
                <div key={c._id} className="p-2.5 rounded-lg bg-slate-950/50 border border-slate-800 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-slate-200">
                      {c.departmentId?.code} — Section {c.section}
                    </span>
                    <Badge variant="neutral" size="sm">Sem {c.semester}</Badge>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">{c.batchId?.name}</p>
                </div>
              ))
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};
