import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import {
  Users,
  UserPlus,
  Upload,
  Download,
  Search,
  ArrowRightLeft,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react';

export const StudentManagementPage: React.FC = () => {
  const [students, setStudents] = useState<any[]>([]);
  const [departments, setDepartments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [facultyList, setFacultyList] = useState<any[]>([]);
  const [meta, setMeta] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  // Modals
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [isTransferModalOpen, setIsTransferModalOpen] = useState(false);
  const [isFacultyCohortModalOpen, setIsFacultyCohortModalOpen] = useState(false);
  const [selectedStudentForTransfer, setSelectedStudentForTransfer] = useState<any>(null);
  const [selectedFacultyId, setSelectedFacultyId] = useState('');
  const [cohortRows, setCohortRows] = useState<{ course: string; semester: number; section: string }[]>([
    { course: '', semester: 1, section: '' },
  ]);

  // Form states
  const [studentForm, setStudentForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    rollNumber: '',
    course: '',
    semester: '1',
    section: '',
    departmentId: '',
    batchId: '',
    classId: '',
  });

  const [csvContent, setCsvContent] = useState('');
  const [bulkResult, setBulkResult] = useState<any>(null);
  const [transferClassId, setTransferClassId] = useState('');
  const [transferReason, setTransferReason] = useState('Academic section reorganization');
  const [actionMessage, setActionMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [studRes, deptRes, batchRes, classRes, facRes] = await Promise.all([
        axios.get('/students', {
          params: {
            search: search || undefined,
            departmentId: selectedDept || undefined,
            batchId: selectedBatch || undefined,
          },
        }),
        axios.get('/tenants/departments'),
        axios.get('/tenants/batches'),
        axios.get('/tenants/classes'),
        axios.get('/tenants/faculty').catch(() => ({ data: { success: false, data: [] } })),
      ]);

      if (studRes.data.success) {
        setStudents(studRes.data.data);
        setMeta(studRes.data.meta);
      }
      if (deptRes.data.success) setDepartments(deptRes.data.data);
      if (batchRes.data.success) setBatches(batchRes.data.data);
      if (classRes.data.success) setClasses(classRes.data.data);
      if (facRes.data?.success) setFacultyList(facRes.data.data);
    } catch (err) {
      console.error('Failed to fetch student data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [selectedDept, selectedBatch]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchData();
  };

  const handleCreateStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: any = {
        firstName: studentForm.firstName.trim(),
        lastName: studentForm.lastName.trim(),
        email: studentForm.email.trim(),
        rollNumber: studentForm.rollNumber.trim(),
        course: studentForm.course.trim() || undefined,
        semester: studentForm.semester ? Number(studentForm.semester) : undefined,
        section: studentForm.section.trim().toUpperCase() || undefined,
        departmentId: studentForm.departmentId || undefined,
        batchId: studentForm.batchId || undefined,
        classId: studentForm.classId || undefined,
      };
      await axios.post('/students', payload);
      setIsAddModalOpen(false);
      setStudentForm({
        firstName: '',
        lastName: '',
        email: '',
        rollNumber: '',
        course: '',
        semester: '1',
        section: '',
        departmentId: '',
        batchId: '',
        classId: '',
      });
      setActionMessage({ type: 'success', text: 'Student onboarded successfully!' });
      fetchData();
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.response?.data?.error?.message || 'Failed to create student' });
    }
  };

  const handleOpenFacultyModal = () => {
    const first = facultyList[0];
    setSelectedFacultyId(first?._id || '');
    setCohortRows(
      first?.assignedCohorts?.length > 0
        ? first.assignedCohorts.map((c: any) => ({
            course: c.course || '',
            semester: Number(c.semester) || 1,
            section: c.section || '',
          }))
        : [{ course: '', semester: 1, section: '' }]
    );
    setIsFacultyCohortModalOpen(true);
  };

  const handleSelectFacultyForCohorts = (facId: string) => {
    setSelectedFacultyId(facId);
    const fac = facultyList.find((f) => f._id === facId);
    setCohortRows(
      fac?.assignedCohorts?.length > 0
        ? fac.assignedCohorts.map((c: any) => ({
            course: c.course || '',
            semester: Number(c.semester) || 1,
            section: c.section || '',
          }))
        : [{ course: '', semester: 1, section: '' }]
    );
  };

  const handleSaveFacultyCohorts = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFacultyId) return;
    try {
      const validCohorts = cohortRows
        .filter((r) => r.course.trim() && r.section.trim() && r.semester)
        .map((r) => ({
          course: r.course.trim(),
          semester: Number(r.semester),
          section: r.section.trim().toUpperCase(),
        }));
      await axios.put(`/tenants/faculty/${selectedFacultyId}/cohorts`, {
        cohorts: validCohorts,
      });
      setIsFacultyCohortModalOpen(false);
      setActionMessage({ type: 'success', text: 'Faculty cohort assignments updated successfully!' });
      fetchData();
    } catch (err: any) {
      setActionMessage({
        type: 'error',
        text: err.response?.data?.error?.message || 'Failed to assign faculty cohorts',
      });
    }
  };

  const handleBulkUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('/students/bulk-import', { csvContent });
      setBulkResult(res.data.data);
      setActionMessage({
        type: 'success',
        text: `Bulk import completed! ${res.data.data.importedCount} students registered.`,
      });
      fetchData();
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.response?.data?.error?.message || 'Bulk import failed' });
    }
  };

  const handleTransferSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedStudentForTransfer || !transferClassId) return;

    try {
      await axios.post(`/students/${selectedStudentForTransfer._id}/transfer`, {
        targetClassId: transferClassId,
        reason: transferReason,
      });
      setIsTransferModalOpen(false);
      setSelectedStudentForTransfer(null);
      setActionMessage({ type: 'success', text: 'Student transferred successfully!' });
      fetchData();
    } catch (err: any) {
      setActionMessage({ type: 'error', text: err.response?.data?.error?.message || 'Transfer failed' });
    }
  };

  const downloadSampleCSV = () => {
    const sample = `firstName,lastName,email,rollNumber,departmentCode,batchName,section
Rahul,Verma,rahul.verma@nitsurat.ac.in,U23CS101,CSE,Batch 2023-2027,A
Sneha,Patel,sneha.patel@nitsurat.ac.in,U23CS102,CSE,Batch 2023-2027,A
Ankit,Sharma,ankit.sharma@nitsurat.ac.in,U23IT101,IT,Batch 2023-2027,A`;

    const blob = new Blob([sample], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'swadhyayi_students_template.csv';
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-5 h-5 text-brand-400" />
            <h1 className="text-xl font-bold text-white tracking-tight">Student Directory & Academic Onboarding</h1>
          </div>
          <p className="text-xs text-slate-400">
            Manage cohort enrollment, batch assignments, and bulk CSV ingestion.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={downloadSampleCSV}
            leftIcon={<Download className="w-4 h-4" />}
          >
            CSV Template
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsBulkModalOpen(true)}
            leftIcon={<Upload className="w-4 h-4" />}
          >
            Bulk CSV Upload
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={handleOpenFacultyModal}
            leftIcon={<Users className="w-4 h-4" />}
          >
            Assign Faculty Cohorts
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => setIsAddModalOpen(true)}
            leftIcon={<UserPlus className="w-4 h-4" />}
          >
            Add Student
          </Button>
        </div>
      </div>

      {actionMessage && (
        <div
          className={`p-3 rounded-lg text-xs flex items-center justify-between border ${
            actionMessage.type === 'success'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}
        >
          <div className="flex items-center gap-2">
            {actionMessage.type === 'success' ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
            <span>{actionMessage.text}</span>
          </div>
          <button onClick={() => setActionMessage(null)} className="text-slate-400 hover:text-white">&times;</button>
        </div>
      )}

      {/* Filter & Search Bar */}
      <Card className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <form onSubmit={handleSearchSubmit} className="flex-1 flex gap-2">
            <Input
              placeholder="Search by name, roll number, or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
            <Button type="submit" variant="secondary" size="md">Search</Button>
          </form>

          <select
            className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 px-3 py-2"
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
          >
            <option value="">All Departments</option>
            {departments.map((d) => (
              <option key={d._id} value={d._id}>{d.name} ({d.code})</option>
            ))}
          </select>

          <select
            className="bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 px-3 py-2"
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
          >
            <option value="">All Batches</option>
            {batches.map((b) => (
              <option key={b._id} value={b._id}>{b.name}</option>
            ))}
          </select>
        </div>
      </Card>

      {/* Student Table */}
      <Card className="p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-950 text-slate-400 font-semibold uppercase tracking-wider border-b border-slate-800">
              <tr>
                <th className="py-3 px-4">Roll Number</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Department & Section</th>
                <th className="py-3 px-4">Batch</th>
                <th className="py-3 px-4">Problems Solved</th>
                <th className="py-3 px-4">Rank</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {students.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-8 text-center text-slate-500">
                    {isLoading ? 'Loading students...' : 'No students found matching your criteria.'}
                  </td>
                </tr>
              ) : (
                students.map((s) => (
                  <tr key={s._id} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 font-mono font-medium text-brand-400">{s.rollNumber}</td>
                    <td className="py-3 px-4">
                      <p className="font-semibold text-slate-200">{s.firstName} {s.lastName}</p>
                      <p className="text-[11px] text-slate-400">{s.email}</p>
                    </td>
                    <td className="py-3 px-4 text-slate-300">
                      {s.course ? (
                        <span>
                          {s.course} • Sem {s.semester ?? '-'} • Sec {s.section || '-'}
                        </span>
                      ) : (
                        <span>
                          {s.departmentId?.code || '-'} • Sec {s.classId?.section || '-'}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-slate-400">{s.batchId?.name}</td>
                    <td className="py-3 px-4 font-mono font-semibold text-emerald-400">
                      {s.metrics?.codingProblemsSolved || 0}
                    </td>
                    <td className="py-3 px-4 font-mono font-semibold text-amber-400">
                      #{s.metrics?.institutionRank || '-'}
                    </td>
                    <td className="py-3 px-4">
                      <Badge variant={s.status === 'ACTIVE' ? 'success' : 'danger'} size="sm">
                        {s.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          setSelectedStudentForTransfer(s);
                          setIsTransferModalOpen(true);
                        }}
                        title="Transfer to different Section or Batch"
                        leftIcon={<ArrowRightLeft className="w-3.5 h-3.5" />}
                      >
                        Transfer
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {meta && (
          <div className="p-3 bg-slate-950 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
            <span>Showing {students.length} of {meta.totalCount} students</span>
            <span>Page {meta.page} of {meta.totalPages || 1}</span>
          </div>
        )}
      </Card>

      {/* Add Single Student Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-lg bg-slate-900 border-slate-800 shadow-2xl">
            <CardHeader>
              <CardTitle>Enroll New Student</CardTitle>
              <CardDescription>Add a student account with institutional class assignment</CardDescription>
            </CardHeader>
            <form onSubmit={handleCreateStudent} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="First Name"
                  placeholder="e.g. Aarav"
                  value={studentForm.firstName}
                  onChange={(e) => setStudentForm({ ...studentForm, firstName: e.target.value })}
                  required
                />
                <Input
                  label="Last Name"
                  placeholder="e.g. Patel"
                  value={studentForm.lastName}
                  onChange={(e) => setStudentForm({ ...studentForm, lastName: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Input
                  label="Institutional Email"
                  type="email"
                  placeholder="aarav@nitsurat.ac.in"
                  value={studentForm.email}
                  onChange={(e) => setStudentForm({ ...studentForm, email: e.target.value })}
                  required
                />
                <Input
                  label="Roll Number"
                  placeholder="U23CS042"
                  value={studentForm.rollNumber}
                  onChange={(e) => setStudentForm({ ...studentForm, rollNumber: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Input
                  label="Course"
                  placeholder="e.g. B.Tech CSE"
                  value={studentForm.course}
                  onChange={(e) => setStudentForm({ ...studentForm, course: e.target.value })}
                  required
                />
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Semester</label>
                  <input
                    type="number"
                    min={1}
                    max={12}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-2.5"
                    value={studentForm.semester}
                    onChange={(e) => setStudentForm({ ...studentForm, semester: e.target.value })}
                    required
                  />
                </div>
                <Input
                  label="Section"
                  placeholder="e.g. A"
                  value={studentForm.section}
                  onChange={(e) => setStudentForm({ ...studentForm, section: e.target.value })}
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Department (Opt)</label>
                  <select
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-2"
                    value={studentForm.departmentId}
                    onChange={(e) => setStudentForm({ ...studentForm, departmentId: e.target.value })}
                  >
                    <option value="">Select Dept</option>
                    {departments.map((d) => (
                      <option key={d._id} value={d._id}>{d.code}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Batch (Opt)</label>
                  <select
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-2"
                    value={studentForm.batchId}
                    onChange={(e) => setStudentForm({ ...studentForm, batchId: e.target.value })}
                  >
                    <option value="">Select Batch</option>
                    {batches.map((b) => (
                      <option key={b._id} value={b._id}>{b.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Class (Opt)</label>
                  <select
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-2"
                    value={studentForm.classId}
                    onChange={(e) => setStudentForm({ ...studentForm, classId: e.target.value })}
                  >
                    <option value="">Select Class</option>
                    {classes.map((c) => (
                      <option key={c._id} value={c._id}>{c.departmentId?.code} - {c.section}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-800">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsAddModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Enroll Student
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}

      {/* Bulk CSV Modal */}
      {isBulkModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl bg-slate-900 border-slate-800 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
                Bulk CSV Student Ingestion
              </CardTitle>
              <CardDescription>
                Paste your CSV content below or use the template. The system verifies department codes and section mappings before inserting.
              </CardDescription>
            </CardHeader>

            <form onSubmit={handleBulkUpload} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">
                  Paste CSV Data (Header: firstName,lastName,email,rollNumber,departmentCode,batchName,section)
                </label>
                <textarea
                  rows={8}
                  className="w-full bg-slate-950 font-mono text-xs border border-slate-800 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-brand-500"
                  placeholder={`firstName,lastName,email,rollNumber,departmentCode,batchName,section\nAarav,Patel,aarav@nit.ac.in,U23CS101,CSE,Batch 2023-2027,A`}
                  value={csvContent}
                  onChange={(e) => setCsvContent(e.target.value)}
                  required
                />
              </div>

              {bulkResult && (
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                  <div className="flex justify-between font-semibold mb-2">
                    <span className="text-emerald-400">Imported: {bulkResult.importedCount}</span>
                    <span className="text-rose-400">Failed / Errors: {bulkResult.failedCount}</span>
                  </div>
                  {bulkResult.errors?.length > 0 && (
                    <div className="max-h-24 overflow-y-auto space-y-1 text-slate-400">
                      {bulkResult.errors.map((err: any, idx: number) => (
                        <p key={idx} className="text-[11px] text-rose-300">
                          Row {err.row}: {err.error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              )}

              <div className="flex justify-between items-center pt-4 border-t border-slate-800">
                <Button type="button" variant="outline" size="sm" onClick={downloadSampleCSV} leftIcon={<Download className="w-4 h-4" />}>
                  Download CSV Template
                </Button>
                <div className="flex gap-2">
                  <Button type="button" variant="outline" size="sm" onClick={() => setIsBulkModalOpen(false)}>
                    Close
                  </Button>
                  <Button type="submit" variant="primary" size="sm">
                    Upload & Ingest Students
                  </Button>
                </div>
              </div>
            </form>
          </Card>
        </div>
      )}

      {/* Transfer Student Modal */}
      {isTransferModalOpen && selectedStudentForTransfer && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-slate-900 border-slate-800 shadow-2xl">
            <CardHeader>
              <CardTitle>Transfer Student Section / Batch</CardTitle>
              <CardDescription>
                Transferring <span className="font-semibold text-white">{selectedStudentForTransfer.firstName} {selectedStudentForTransfer.lastName}</span> ({selectedStudentForTransfer.rollNumber})
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleTransferSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Target Class Section</label>
                <select
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-3"
                  value={transferClassId}
                  onChange={(e) => setTransferClassId(e.target.value)}
                  required
                >
                  <option value="">Select Target Section</option>
                  {classes.map((c) => (
                    <option key={c._id} value={c._id}>
                      {c.departmentId?.code} — Section {c.section} ({c.batchId?.name})
                    </option>
                  ))}
                </select>
              </div>

              <Input
                label="Reason for Transfer"
                value={transferReason}
                onChange={(e) => setTransferReason(e.target.value)}
                placeholder="e.g. Elective track alignment"
                required
              />

              <p className="text-[11px] text-slate-400">
                Historical test attempts, coding submissions, and leaderboard points will remain preserved in the student's audit trail.
              </p>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-800">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsTransferModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm">
                  Confirm Transfer
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
      {/* Faculty Cohort Assignment Modal */}
      {isFacultyCohortModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-lg bg-slate-900 border-slate-800 shadow-2xl">
            <CardHeader>
              <CardTitle>Assign Course, Semester & Section to Faculty</CardTitle>
              <CardDescription>
                Faculty will only see students and manage tests for their assigned cohorts.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSaveFacultyCohorts} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Select Faculty</label>
                <select
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-3"
                  value={selectedFacultyId}
                  onChange={(e) => handleSelectFacultyForCohorts(e.target.value)}
                  required
                >
                  <option value="">Choose Faculty Member</option>
                  {facultyList.map((f) => (
                    <option key={f._id} value={f._id}>
                      {f.firstName} {f.lastName} ({f.email})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-semibold text-slate-400 uppercase">Assigned Cohorts</label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setCohortRows([...cohortRows, { course: '', semester: 1, section: '' }])}
                  >
                    + Add Cohort
                  </Button>
                </div>
                {cohortRows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center">
                    <input
                      type="text"
                      placeholder="Course (e.g. B.Tech CSE)"
                      className="col-span-5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2 px-2.5"
                      value={row.course}
                      onChange={(e) => {
                        const next = [...cohortRows];
                        next[idx] = { ...next[idx], course: e.target.value };
                        setCohortRows(next);
                      }}
                      required
                    />
                    <input
                      type="number"
                      min={1}
                      max={12}
                      placeholder="Sem"
                      className="col-span-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2 px-2.5"
                      value={row.semester}
                      onChange={(e) => {
                        const next = [...cohortRows];
                        next[idx] = { ...next[idx], semester: Number(e.target.value) };
                        setCohortRows(next);
                      }}
                      required
                    />
                    <input
                      type="text"
                      placeholder="Sec (A)"
                      className="col-span-3 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2 px-2.5"
                      value={row.section}
                      onChange={(e) => {
                        const next = [...cohortRows];
                        next[idx] = { ...next[idx], section: e.target.value };
                        setCohortRows(next);
                      }}
                      required
                    />
                    <button
                      type="button"
                      className="col-span-1 text-rose-400 hover:text-rose-300 text-sm font-bold"
                      onClick={() => setCohortRows(cohortRows.filter((_, i) => i !== idx))}
                      title="Remove cohort"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-slate-800">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsFacultyCohortModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" size="sm" disabled={!selectedFacultyId}>
                  Save Assignments
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
};
