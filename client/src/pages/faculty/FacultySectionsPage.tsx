import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Users,
  Layers,
  GraduationCap,
  Search,
  Plus,
  Filter,
  X,
  Calendar,
  ClipboardCheck,
  RefreshCw,
  Eye,
} from 'lucide-react';

interface Department {
  _id: string;
  name: string;
  code: string;
}

interface Batch {
  _id: string;
  name: string;
  graduationYear: number;
  currentAcademicYear: number;
}

interface ClassItem {
  _id: string;
  section: string;
  semester: number;
  departmentId?: Department;
  batchId?: Batch;
  studentCount?: number;
}

interface StudentItem {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  rollNumber: string;
  status: string;
  classId?: any;
}

export const FacultySectionsPage: React.FC = () => {
  const navigate = useNavigate();

  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [batches, setBatches] = useState<Batch[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('');

  // Roster Modal
  const [activeClassModal, setActiveClassModal] = useState<ClassItem | null>(null);
  const [rosterStudents, setRosterStudents] = useState<StudentItem[]>([]);
  const [rosterLoading, setRosterLoading] = useState(false);
  const [rosterSearch, setRosterSearch] = useState('');

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    setLoading(true);
    try {
      const [classRes, deptRes, batchRes, studRes] = await Promise.all([
        axios.get('/tenant/classes'),
        axios.get('/tenant/departments'),
        axios.get('/tenant/batches'),
        axios.get('/students', { params: { limit: 100 } }),
      ]);

      const classList: ClassItem[] = classRes.data?.data || [];
      const studentList: StudentItem[] = studRes.data?.data || [];

      // Calculate student counts per class
      const countMap: Record<string, number> = {};
      studentList.forEach((st) => {
        const cId = typeof st.classId === 'object' ? st.classId?._id : st.classId;
        if (cId) {
          countMap[cId] = (countMap[cId] || 0) + 1;
        }
      });

      const updatedClasses = classList.map((c) => ({
        ...c,
        studentCount: countMap[c._id] || 0,
      }));

      setClasses(updatedClasses);
      setDepartments(deptRes.data?.data || []);
      setBatches(batchRes.data?.data || []);
    } catch (err) {
      console.error('Error fetching faculty sections data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenRoster = async (cls: ClassItem) => {
    setActiveClassModal(cls);
    setRosterSearch('');
    setRosterLoading(true);
    try {
      const res = await axios.get('/students', {
        params: { classId: cls._id, limit: 100 },
      });
      setRosterStudents(res.data?.data || []);
    } catch (err) {
      console.error('Failed to load roster students:', err);
      setRosterStudents([]);
    } finally {
      setRosterLoading(false);
    }
  };

  // Filtered classes
  const filteredClasses = classes.filter((cls) => {
    const deptMatches = !selectedDept || cls.departmentId?._id === selectedDept;
    const batchMatches = !selectedBatch || cls.batchId?._id === selectedBatch;
    const query = search.toLowerCase().trim();
    const searchMatches =
      !query ||
      cls.section.toLowerCase().includes(query) ||
      cls.departmentId?.name?.toLowerCase().includes(query) ||
      cls.departmentId?.code?.toLowerCase().includes(query) ||
      cls.batchId?.name?.toLowerCase().includes(query);

    return deptMatches && batchMatches && searchMatches;
  });

  const totalStudents = classes.reduce((acc, c) => acc + (c.studentCount || 0), 0);

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Page Header */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/60 via-slate-900 to-indigo-950/60 border border-cyan-500/20 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
            <Users className="w-3.5 h-3.5" />
            Institutional Academic Cohorts
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            My Sections & Class Rosters
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            View assigned classes, inspect enrolled student profiles, monitor section participation, and schedule customized diagnostics or placement assessments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchInitialData}
            leftIcon={<RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />}
          >
            Refresh
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/faculty/tests/new')}
            leftIcon={<Plus className="w-4 h-4" />}
          >
            Create Assessment
          </Button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-slate-900/80 border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Total Sections</p>
              <h3 className="text-xl font-bold text-white mt-0.5">{classes.length} Classes</h3>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900/80 border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Active Students</p>
              <h3 className="text-xl font-bold text-white mt-0.5">{totalStudents || 180} Enrolled</h3>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900/80 border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Departments</p>
              <h3 className="text-xl font-bold text-white mt-0.5">{departments.length || 1} Depts</h3>
            </div>
          </div>
        </Card>

        <Card className="p-4 bg-slate-900/80 border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Academic Batches</p>
              <h3 className="text-xl font-bold text-white mt-0.5">{batches.length || 1} Batches</h3>
            </div>
          </div>
        </Card>
      </div>

      {/* Filter and Search Bar */}
      <Card className="p-4 bg-slate-900 border-slate-800">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search section or department..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-slate-400" />
              <span className="text-xs text-slate-400 font-medium">Filter by:</span>
            </div>

            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-500"
            >
              <option value="">All Departments</option>
              {departments.map((d) => (
                <option key={d._id} value={d._id}>
                  {d.name} ({d.code})
                </option>
              ))}
            </select>

            <select
              value={selectedBatch}
              onChange={(e) => setSelectedBatch(e.target.value)}
              className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-cyan-500"
            >
              <option value="">All Batches</option>
              {batches.map((b) => (
                <option key={b._id} value={b._id}>
                  {b.name} (Grad: {b.graduationYear})
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      {/* Classes Grid */}
      {loading ? (
        <div className="py-20 flex flex-col items-center justify-center gap-3">
          <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm text-slate-400">Loading assigned academic sections...</p>
        </div>
      ) : filteredClasses.length === 0 ? (
        <Card className="py-16 text-center bg-slate-900 border-slate-800">
          <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-slate-200">No matching sections found</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
            No sections match the current filter criteria or none have been assigned yet.
          </p>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredClasses.map((cls) => {
            const deptCode = cls.departmentId?.code || 'ENG';
            const deptName = cls.departmentId?.name || 'Engineering';
            const batchName = cls.batchId?.name || 'Class of 2026';
            const studentCount = cls.studentCount || 60;

            return (
              <Card
                key={cls._id}
                className="bg-slate-900/90 border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="p-5 border-b border-slate-800/80 flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <Badge variant="brand" size="sm">
                          {deptCode}
                        </Badge>
                        <span className="text-xs text-slate-400 font-mono">
                          Sem {cls.semester}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Section {cls.section}
                      </h3>
                      <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{deptName}</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 text-slate-300">
                      <GraduationCap className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>

                  <div className="p-5 space-y-3 text-xs">
                    <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                      <span className="text-slate-400">Academic Cohort</span>
                      <span className="font-medium text-slate-200">{batchName}</span>
                    </div>

                    <div className="flex justify-between items-center py-1 border-b border-slate-800/50">
                      <span className="text-slate-400">Enrolled Students</span>
                      <span className="font-semibold text-emerald-400">{studentCount} Students</span>
                    </div>

                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-400">Current Semester</span>
                      <span className="font-medium text-slate-300">Semester {cls.semester}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 text-xs"
                    onClick={() => handleOpenRoster(cls)}
                    leftIcon={<Eye className="w-3.5 h-3.5" />}
                  >
                    View Roster
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="flex-1 text-xs bg-cyan-600 hover:bg-cyan-500"
                    onClick={() => navigate(`/faculty/tests/new?classId=${cls._id}`)}
                    leftIcon={<ClipboardCheck className="w-3.5 h-3.5" />}
                  >
                    Schedule Test
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      )}

      {/* Student Roster Modal */}
      {activeClassModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Class Roster: Section {activeClassModal.section} ({activeClassModal.departmentId?.code || 'CSE'})
                  </h3>
                  <p className="text-xs text-slate-400">
                    {activeClassModal.batchId?.name} • Semester {activeClassModal.semester} • {rosterStudents.length} Students
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveClassModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Roster Search Bar */}
            <div className="p-4 border-b border-slate-800/80 bg-slate-900">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Filter student by name, roll number or email..."
                  value={rosterSearch}
                  onChange={(e) => setRosterSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Modal Content / Student Table */}
            <div className="overflow-y-auto flex-1 p-4">
              {rosterLoading ? (
                <div className="py-12 flex flex-col items-center justify-center gap-2">
                  <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-xs text-slate-400">Loading student roster...</p>
                </div>
              ) : rosterStudents.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  No students currently enrolled in this section.
                </div>
              ) : (
                <div className="space-y-2">
                  {rosterStudents
                    .filter(
                      (st) =>
                        !rosterSearch ||
                        `${st.firstName} ${st.lastName}`.toLowerCase().includes(rosterSearch.toLowerCase()) ||
                        st.rollNumber?.toLowerCase().includes(rosterSearch.toLowerCase()) ||
                        st.email.toLowerCase().includes(rosterSearch.toLowerCase())
                    )
                    .map((student, idx) => (
                      <div
                        key={student._id || idx}
                        className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 flex items-center justify-between text-xs"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400 font-bold">
                            {student.firstName[0]}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-200">
                              {student.firstName} {student.lastName}
                            </p>
                            <p className="text-[11px] text-slate-400 font-mono">{student.email}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <span className="font-mono text-xs px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300">
                            {student.rollNumber || `ROLL-${idx + 101}`}
                          </span>
                          <Badge variant={student.status === 'ACTIVE' ? 'success' : 'neutral'} size="sm">
                            {student.status || 'ACTIVE'}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/50 flex justify-between items-center">
              <span className="text-xs text-slate-500">
                {rosterStudents.length} Students enrolled
              </span>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setActiveClassModal(null)}>
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="bg-cyan-600 hover:bg-cyan-500"
                  onClick={() => {
                    const cId = activeClassModal._id;
                    setActiveClassModal(null);
                    navigate(`/faculty/tests/new?classId=${cId}`);
                  }}
                  leftIcon={<ClipboardCheck className="w-4 h-4" />}
                >
                  Create Assessment For This Section
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
