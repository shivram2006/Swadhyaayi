import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  ClipboardCheck,
  ShieldAlert,
  Code2,
  BrainCircuit,
  Plus,
  Trash2,
  CheckCircle2,
  AlertCircle,
  Search,
  ArrowRight,
  ArrowLeft,
  X,
} from 'lucide-react';

interface SelectedQuestion {
  questionId: string;
  title: string;
  type: 'APTITUDE' | 'CODING';
  points: number;
  difficulty?: string;
  tags?: string[];
}

interface TestSection {
  sectionId: string;
  title: string;
  type: 'APTITUDE' | 'CODING';
  order: number;
  durationMinutes?: number;
  negativeMarkingRatio: number;
  passingCutoffPercentage: number;
  questions: SelectedQuestion[];
}

export const CreateAssessmentPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preSelectedClassId = searchParams.get('classId');
  const preSelectedQuestionId = searchParams.get('questionId');
  const preSelectedType = searchParams.get('type') as 'APTITUDE' | 'CODING' | null;

  // Wizard Step
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Institution Cohorts
  const [classes, setClasses] = useState<any[]>([]);

  // Step 1: Basic Config
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState<'PLACEMENT_MOCK' | 'CONTEST' | 'SEMESTER_EXAM' | 'PRACTICE'>('PLACEMENT_MOCK');
  const [durationMinutes, setDurationMinutes] = useState<number>(90);

  // Defaults: Start in 1 hour, end in 7 days
  const now = new Date();
  const startDefault = new Date(now.getTime() + 60 * 60 * 1000).toISOString().slice(0, 16);
  const endDefault = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 16);
  const [startTime, setStartTime] = useState(startDefault);
  const [endTime, setEndTime] = useState(endDefault);

  // Step 2: Target Audience
  const [allStudents, setAllStudents] = useState<boolean>(!preSelectedClassId);
  const [selectedClassIds, setSelectedClassIds] = useState<string[]>(preSelectedClassId ? [preSelectedClassId] : []);
  const selectedDeptIds: string[] = [];
  const selectedBatchIds: string[] = [];
  const [accessCode, setAccessCode] = useState('');

  // Step 3: Sections & Questions
  const [sections, setSections] = useState<TestSection[]>([
    {
      sectionId: 'sec-1',
      title: 'Section 1: Data Structures & Algorithms',
      type: 'CODING',
      order: 1,
      durationMinutes: 60,
      negativeMarkingRatio: 0,
      passingCutoffPercentage: 40,
      questions: [],
    },
  ]);

  // Step 4: Proctoring Settings
  const [enableProctoring, setEnableProctoring] = useState<boolean>(true);
  const [maxTabSwitches, setMaxTabSwitches] = useState<number>(3);
  const [enforceFullscreen, setEnforceFullscreen] = useState<boolean>(true);
  const [blockCopyPaste, setBlockCopyPaste] = useState<boolean>(true);
  const [autoSubmitOnViolationLimit, setAutoSubmitOnViolationLimit] = useState<boolean>(false);

  // Question Picker Modal State
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [pickerTargetSectionIndex, setPickerTargetSectionIndex] = useState<number>(0);
  const [pickerTab, setPickerTab] = useState<'CODING' | 'APTITUDE'>('CODING');
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerCompany, setPickerCompany] = useState('');
  const [pickerDifficulty, setPickerDifficulty] = useState('');
  const [availableQuestions, setAvailableQuestions] = useState<any[]>([]);
  const [pickerLoading, setPickerLoading] = useState(false);

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [createdAssessment, setCreatedAssessment] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    fetchCohorts();
    if (preSelectedQuestionId) {
      loadPreselectedQuestion(preSelectedQuestionId, preSelectedType);
    }
  }, []);

  const loadPreselectedQuestion = async (qId: string, qType: 'APTITUDE' | 'CODING' | null) => {
    try {
      if (qType === 'APTITUDE') {
        const res = await axios.get('/aptitude/questions');
        const q = (res.data?.data?.questions || []).find((item: any) => item._id === qId);
        if (q) {
          setSections([
            {
              sectionId: 'sec-1',
              title: 'Section 1: General Aptitude',
              type: 'APTITUDE',
              order: 1,
              durationMinutes: 45,
              negativeMarkingRatio: 0.25,
              passingCutoffPercentage: 40,
              questions: [
                {
                  questionId: q._id,
                  title: q.questionText,
                  type: 'APTITUDE',
                  points: 2,
                  difficulty: q.difficulty,
                },
              ],
            },
          ]);
        }
      } else {
        const res = await axios.get('/coding', { params: { limit: 100 } });
        const q = (res.data?.data?.questions || []).find((item: any) => item._id === qId);
        if (q) {
          setSections([
            {
              sectionId: 'sec-1',
              title: 'Section 1: Coding Challenge',
              type: 'CODING',
              order: 1,
              durationMinutes: 60,
              negativeMarkingRatio: 0,
              passingCutoffPercentage: 40,
              questions: [
                {
                  questionId: q._id,
                  title: q.title,
                  type: 'CODING',
                  points: 20,
                  difficulty: q.difficulty,
                  tags: q.companyTags || [],
                },
              ],
            },
          ]);
        }
      }
    } catch (err) {
      console.error('Failed to pre-populate question:', err);
    }
  };

  const fetchCohorts = async () => {
    try {
      const classRes = await axios.get('/tenant/classes');
      setClasses(classRes.data?.data || []);
    } catch (err) {
      console.error('Failed to load cohorts:', err);
    }
  };

  // Open question selector
  const handleOpenPicker = async (sectionIndex: number) => {
    setPickerTargetSectionIndex(sectionIndex);
    const targetSec = sections[sectionIndex];
    const secType = targetSec?.type || 'CODING';
    setPickerTab(secType);
    setIsPickerOpen(true);
    await loadQuestions(secType, pickerCompany, pickerDifficulty, pickerSearch);
  };

  const loadQuestions = async (secType: 'CODING' | 'APTITUDE', company?: string, diff?: string, q?: string) => {
    setPickerLoading(true);
    try {
      if (secType === 'CODING') {
        const params: any = { limit: 60 };
        if (company) params.company = company;
        if (diff) params.difficulty = diff.toUpperCase();
        if (q) params.search = q;
        const res = await axios.get('/coding', { params });
        setAvailableQuestions(res.data?.data?.questions || []);
      } else {
        const params: any = { limit: 50 };
        if (diff) params.difficulty = diff.toUpperCase();
        if (q) params.category = q;
        const res = await axios.get('/aptitude/questions', { params });
        setAvailableQuestions(res.data?.data?.questions || []);
      }
    } catch (err) {
      console.error('Error loading questions:', err);
      setAvailableQuestions([]);
    } finally {
      setPickerLoading(false);
    }
  };

  const toggleQuestionSelection = (q: any) => {
    const targetSec = sections[pickerTargetSectionIndex];
    if (!targetSec) return;

    const qId = q._id || q.id;
    const isAlreadySelected = targetSec.questions.some((item) => item.questionId === qId);

    let updatedQuestions: SelectedQuestion[];
    if (isAlreadySelected) {
      updatedQuestions = targetSec.questions.filter((item) => item.questionId !== qId);
    } else {
      updatedQuestions = [
        ...targetSec.questions,
        {
          questionId: qId,
          title: q.title || q.questionText || 'Question',
          type: targetSec.type,
          points: targetSec.type === 'CODING' ? 20 : 2,
          difficulty: q.difficulty,
          tags: q.companyTags || q.tags || [],
        },
      ];
    }

    const updatedSections = [...sections];
    updatedSections[pickerTargetSectionIndex] = {
      ...targetSec,
      questions: updatedQuestions,
    };
    setSections(updatedSections);
  };

  const handleAddSection = (sectionType: 'CODING' | 'APTITUDE') => {
    const nextOrder = sections.length + 1;
    const newSec: TestSection = {
      sectionId: `sec-${Date.now()}`,
      title: `Section ${nextOrder}: ${sectionType === 'CODING' ? 'Programming & Algorithms' : 'General Aptitude'}`,
      type: sectionType,
      order: nextOrder,
      durationMinutes: 45,
      negativeMarkingRatio: sectionType === 'APTITUDE' ? 0.25 : 0,
      passingCutoffPercentage: 40,
      questions: [],
    };
    setSections([...sections, newSec]);
  };

  const handleRemoveSection = (index: number) => {
    if (sections.length <= 1) {
      alert('Assessment must contain at least one section.');
      return;
    }
    const updated = sections.filter((_, i) => i !== index).map((sec, i) => ({ ...sec, order: i + 1 }));
    setSections(updated);
  };

  const handleRemoveQuestionFromSection = (sectionIndex: number, questionId: string) => {
    const targetSec = sections[sectionIndex];
    const updatedQuestions = targetSec.questions.filter((q) => q.questionId !== questionId);
    const updatedSections = [...sections];
    updatedSections[sectionIndex] = {
      ...targetSec,
      questions: updatedQuestions,
    };
    setSections(updatedSections);
  };

  const handleQuestionPointsChange = (sectionIndex: number, questionId: string, newPoints: number) => {
    const targetSec = sections[sectionIndex];
    const updatedQuestions = targetSec.questions.map((q) =>
      q.questionId === questionId ? { ...q, points: Math.max(1, newPoints) } : q
    );
    const updatedSections = [...sections];
    updatedSections[sectionIndex] = {
      ...targetSec,
      questions: updatedQuestions,
    };
    setSections(updatedSections);
  };

  // Submit Assessment
  const handleSubmit = async () => {
    setErrorMessage(null);

    // Basic validation
    if (!title.trim() || title.length < 3) {
      setErrorMessage('Please provide an assessment title (minimum 3 characters).');
      setCurrentStep(1);
      return;
    }

    if (!description.trim() || description.length < 5) {
      setErrorMessage('Please provide student instructions / description (minimum 5 characters).');
      setCurrentStep(1);
      return;
    }

    // Check if sections have questions
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].questions.length === 0) {
        setErrorMessage(`Section "${sections[i].title}" has no questions. Please add at least 1 question.`);
        setCurrentStep(3);
        return;
      }
    }

    try {
      setSubmitting(true);

      const payload = {
        title: title.trim(),
        description: description.trim(),
        type,
        startTime: new Date(startTime).toISOString(),
        endTime: new Date(endTime).toISOString(),
        durationMinutes: Number(durationMinutes),
        targeting: {
          allStudents,
          departmentIds: selectedDeptIds,
          batchIds: selectedBatchIds,
          classIds: selectedClassIds,
          accessCode: accessCode.trim() || undefined,
        },
        sections: sections.map((sec) => ({
          sectionId: sec.sectionId,
          title: sec.title,
          type: sec.type,
          order: sec.order,
          durationMinutes: sec.durationMinutes ? Number(sec.durationMinutes) : undefined,
          negativeMarkingRatio: Number(sec.negativeMarkingRatio || 0),
          passingCutoffPercentage: Number(sec.passingCutoffPercentage || 40),
          questions: sec.questions.map((q) => ({
            questionId: q.questionId,
            type: q.type,
            points: Number(q.points),
          })),
        })),
        proctoring: {
          enableProctoring,
          maxTabSwitches: Number(maxTabSwitches),
          enforceFullscreen,
          blockCopyPaste,
          autoSubmitOnViolationLimit,
        },
      };

      const res = await axios.post('/assessments', payload);
      if (res.data?.success) {
        setCreatedAssessment(res.data.data);
      }
    } catch (err: any) {
      console.error('Failed to create assessment:', err);
      const msg = err.response?.data?.error?.message || err.response?.data?.message || err.message || 'Failed to create assessment';
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const totalPoints = sections.reduce(
    (acc, sec) => acc + sec.questions.reduce((sum, q) => sum + (q.points || 0), 0),
    0
  );
  const totalQuestions = sections.reduce((acc, sec) => acc + sec.questions.length, 0);

  // Success Screen
  if (createdAssessment) {
    return (
      <div className="max-w-3xl mx-auto py-12 px-4 animate-in fade-in zoom-in-95 duration-200">
        <Card className="p-8 text-center bg-slate-900 border-emerald-500/30 shadow-2xl">
          <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Assessment Published Successfully!
          </h2>
          <p className="text-slate-300 text-sm mt-2 max-w-lg mx-auto">
            "{createdAssessment.title}" is now active in your institution's catalog. Students matching your targeting criteria can take this assessment during the scheduled window.
          </p>

          <div className="my-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div>
              <span className="text-slate-500">Duration</span>
              <p className="text-slate-200 font-semibold">{createdAssessment.durationMinutes} Minutes</p>
            </div>
            <div>
              <span className="text-slate-500">Total Marks</span>
              <p className="text-emerald-400 font-semibold">{totalPoints} Points</p>
            </div>
            <div>
              <span className="text-slate-500">Questions</span>
              <p className="text-slate-200 font-semibold">{totalQuestions} Questions</p>
            </div>
            <div>
              <span className="text-slate-500">Proctoring</span>
              <p className="text-cyan-400 font-semibold">
                {enableProctoring ? 'Enabled (Tab Guard)' : 'Off'}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button
              variant="outline"
              size="md"
              onClick={() => navigate('/faculty/tests')}
              leftIcon={<ClipboardCheck className="w-4 h-4" />}
            >
              All Assessments
            </Button>
            <Button
              variant="primary"
              size="md"
              className="bg-cyan-600 hover:bg-cyan-500"
              onClick={() => navigate(`/assessments/${createdAssessment._id}/monitor`)}
              leftIcon={<ShieldAlert className="w-4 h-4" />}
            >
              Live Proctoring Monitor
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-6xl mx-auto pb-16">
      {/* Page Header */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-950/60 via-slate-900 to-indigo-950/60 border border-blue-500/20 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold">
            <ClipboardCheck className="w-3.5 h-3.5" />
            Institutional Assessment Studio
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Create New Assessment
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Design industry-grade proctored exams, diagnostic tests, or coding contests. Pick problems from the 443+ FAANG question catalog or core aptitude banks.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => navigate('/dashboard/faculty')}>
            Cancel
          </Button>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex items-center justify-between gap-2 px-2 overflow-x-auto pb-2">
        {[
          { step: 1, label: '1. Exam Details' },
          { step: 2, label: '2. Target Cohorts' },
          { step: 3, label: '3. Sections & Questions' },
          { step: 4, label: '4. AI Proctoring' },
        ].map((item) => (
          <button
            key={item.step}
            onClick={() => setCurrentStep(item.step)}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border ${
              currentStep === item.step
                ? 'bg-brand-600 text-white border-brand-500 shadow-lg shadow-brand-600/20'
                : currentStep > item.step
                ? 'bg-slate-900 text-slate-200 border-slate-700/80 hover:bg-slate-800'
                : 'bg-slate-950/60 text-slate-500 border-slate-800 hover:bg-slate-900'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {errorMessage && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* STEP 1: Basic Info & Schedule */}
      {currentStep === 1 && (
        <Card className="p-6 bg-slate-900 border-slate-800 space-y-6">
          <CardHeader>
            <div>
              <CardTitle>Assessment Details & Schedule</CardTitle>
              <CardDescription>Configure core exam metadata, duration, and test window</CardDescription>
            </div>
          </CardHeader>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Assessment Title *
              </label>
              <input
                type="text"
                placeholder="e.g. FAANG Campus Placement Diagnostic - Batch 2026"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Instructions & Guidelines *
              </label>
              <textarea
                rows={3}
                placeholder="Write exam guidelines, grading criteria, permitted languages, and rules for students..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Assessment Category
                </label>
                <select
                  value={type}
                  onChange={(e: any) => setType(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                >
                  <option value="PLACEMENT_MOCK">Campus Placement Mock</option>
                  <option value="CONTEST">Competitive Programming Contest</option>
                  <option value="SEMESTER_EXAM">Semester / Departmental Exam</option>
                  <option value="PRACTICE">Diagnostic Practice Set</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Duration (Minutes)
                </label>
                <input
                  type="number"
                  min={5}
                  max={360}
                  value={durationMinutes}
                  onChange={(e) => setDurationMinutes(Number(e.target.value))}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Window Opens (Start Date & Time)
                </label>
                <input
                  type="datetime-local"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Window Closes (End Date & Time)
                </label>
                <input
                  type="datetime-local"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-end">
            <Button
              variant="primary"
              size="md"
              onClick={() => setCurrentStep(2)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Target Cohorts
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 2: Target Cohorts */}
      {currentStep === 2 && (
        <Card className="p-6 bg-slate-900 border-slate-800 space-y-6">
          <CardHeader>
            <div>
              <CardTitle>Target Cohorts & Eligibility</CardTitle>
              <CardDescription>Decide which students can access and submit this test</CardDescription>
            </div>
          </CardHeader>

          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <input
                type="checkbox"
                id="allStudentsCheck"
                checked={allStudents}
                onChange={(e) => setAllStudents(e.target.checked)}
                className="w-5 h-5 accent-brand-500 rounded cursor-pointer"
              />
              <label htmlFor="allStudentsCheck" className="text-xs text-slate-200 cursor-pointer">
                <span className="font-semibold block text-sm">All Students in Institution</span>
                Make this test universally available to all registered students in the college.
              </label>
            </div>

            {!allStudents && (
              <div className="space-y-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                    Select Target Classes / Sections
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {classes.map((cls) => {
                      const isSelected = selectedClassIds.includes(cls._id);
                      return (
                        <div
                          key={cls._id}
                          onClick={() => {
                            if (isSelected) {
                              setSelectedClassIds(selectedClassIds.filter((id) => id !== cls._id));
                            } else {
                              setSelectedClassIds([...selectedClassIds, cls._id]);
                            }
                          }}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-brand-500/10 border-brand-500 text-brand-200 shadow-md'
                              : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs">Section {cls.section}</span>
                            <Badge variant={isSelected ? 'brand' : 'neutral'} size="sm">
                              Sem {cls.semester}
                            </Badge>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-1">
                            {cls.departmentId?.code || 'CSE'} • {cls.batchId?.name || 'Batch'}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Optional Exam Passcode / Access Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. EXAM-CSE-2026 (leave blank for open access)"
                    value={accessCode}
                    onChange={(e) => setAccessCode(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
                  />
                  <p className="text-[11px] text-slate-500 mt-1">
                    If set, students must enter this exact code before starting their session.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStep(1)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => setCurrentStep(3)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Sections & Questions
            </Button>
          </div>
        </Card>
      )}

      {/* STEP 3: Sections & Questions */}
      {currentStep === 3 && (
        <div className="space-y-6">
          <Card className="p-6 bg-slate-900 border-slate-800">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-slate-800">
              <div>
                <CardTitle>Assessment Sections & Questions</CardTitle>
                <CardDescription>
                  Configure test sections and add problems from the Question Bank ({totalQuestions} questions, {totalPoints} total marks)
                </CardDescription>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddSection('CODING')}
                  leftIcon={<Code2 className="w-4 h-4 text-cyan-400" />}
                >
                  + Add Coding Section
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleAddSection('APTITUDE')}
                  leftIcon={<BrainCircuit className="w-4 h-4 text-purple-400" />}
                >
                  + Add Aptitude Section
                </Button>
              </div>
            </div>

            {/* Sections Accordion */}
            <div className="space-y-6 pt-6">
              {sections.map((sec, secIdx) => (
                <div
                  key={sec.sectionId}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden shadow-lg"
                >
                  {/* Section Header */}
                  <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-xl border ${
                          sec.type === 'CODING'
                            ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                            : 'bg-purple-500/10 border-purple-500/20 text-purple-400'
                        }`}
                      >
                        {sec.type === 'CODING' ? <Code2 className="w-4 h-4" /> : <BrainCircuit className="w-4 h-4" />}
                      </div>
                      <input
                        type="text"
                        value={sec.title}
                        onChange={(e) => {
                          const updated = [...sections];
                          updated[secIdx].title = e.target.value;
                          setSections(updated);
                        }}
                        className="bg-transparent border-b border-dashed border-slate-700 text-sm font-bold text-white focus:outline-none focus:border-brand-500 px-1 py-0.5"
                      />
                      <Badge variant={sec.type === 'CODING' ? 'brand' : 'neutral'} size="sm">
                        {sec.type}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">Duration (min):</span>
                        <input
                          type="number"
                          value={sec.durationMinutes || ''}
                          onChange={(e) => {
                            const updated = [...sections];
                            updated[secIdx].durationMinutes = Number(e.target.value);
                            setSections(updated);
                          }}
                          placeholder="Shared"
                          className="w-16 bg-slate-900 border border-slate-700 rounded-lg px-2 py-1 text-xs text-white"
                        />
                      </div>

                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleOpenPicker(secIdx)}
                        leftIcon={<Plus className="w-3.5 h-3.5" />}
                        className="text-xs bg-brand-600 hover:bg-brand-500"
                      >
                        Pick Questions
                      </Button>

                      {sections.length > 1 && (
                        <button
                          onClick={() => handleRemoveSection(secIdx)}
                          className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors"
                          title="Delete Section"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Questions in Section */}
                  <div className="p-4 space-y-3">
                    {sec.questions.length === 0 ? (
                      <div className="py-8 text-center">
                        <p className="text-xs text-slate-400 mb-2">No questions added to this section yet.</p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleOpenPicker(secIdx)}
                          leftIcon={<Plus className="w-3.5 h-3.5" />}
                        >
                          Browse Question Catalog
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {sec.questions.map((q, qIdx) => (
                          <div
                            key={q.questionId}
                            className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-slate-500 w-5">#{qIdx + 1}</span>
                              <div>
                                <p className="font-semibold text-slate-200">{q.title}</p>
                                <div className="flex items-center gap-2 mt-1">
                                  {q.difficulty && (
                                    <Badge
                                      variant={
                                        q.difficulty.toUpperCase() === 'EASY'
                                          ? 'success'
                                          : q.difficulty.toUpperCase() === 'HARD'
                                          ? 'danger'
                                          : 'warning'
                                      }
                                      size="sm"
                                    >
                                      {q.difficulty}
                                    </Badge>
                                  )}
                                  {q.tags?.slice(0, 2).map((t: string) => (
                                    <span key={t} className="text-[10px] text-slate-400 font-mono">
                                      #{t}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-3">
                              <div className="flex items-center gap-1.5">
                                <span className="text-slate-400 text-[11px]">Marks:</span>
                                <input
                                  type="number"
                                  min={1}
                                  value={q.points}
                                  onChange={(e) =>
                                    handleQuestionPointsChange(secIdx, q.questionId, Number(e.target.value))
                                  }
                                  className="w-14 bg-slate-950 border border-slate-700 rounded-lg px-2 py-1 text-center font-mono text-white text-xs"
                                />
                              </div>

                              <button
                                onClick={() => handleRemoveQuestionFromSection(secIdx, q.questionId)}
                                className="p-1.5 text-slate-500 hover:text-rose-400 rounded-lg hover:bg-slate-800 transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-between mt-6">
              <Button
                variant="outline"
                size="md"
                onClick={() => setCurrentStep(2)}
                leftIcon={<ArrowLeft className="w-4 h-4" />}
              >
                Back
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => setCurrentStep(4)}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continue to AI Proctoring
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* STEP 4: Proctoring & Review */}
      {currentStep === 4 && (
        <Card className="p-6 bg-slate-900 border-slate-800 space-y-6">
          <CardHeader>
            <div>
              <CardTitle>AI Proctoring & Integrity Rules</CardTitle>
              <CardDescription>Configure telemetry tracking, tab-switch thresholds, and violation actions</CardDescription>
            </div>
          </CardHeader>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/80 border border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Enable Live Proctoring</h4>
                  <p className="text-xs text-slate-400">
                    Track browser blur, tab switches, and fullscreen deviations with live faculty proctoring telemetry.
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                checked={enableProctoring}
                onChange={(e) => setEnableProctoring(e.target.checked)}
                className="w-5 h-5 accent-brand-500 rounded cursor-pointer"
              />
            </div>

            {enableProctoring && (
              <div className="space-y-3 pl-4 border-l-2 border-brand-500/40 mt-4 text-xs">
                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <div>
                    <span className="font-semibold text-slate-200">Max Allowed Tab Switches</span>
                    <p className="text-[11px] text-slate-500">
                      Telemetry alerts will flag candidate after exceeding this threshold.
                    </p>
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={20}
                    value={maxTabSwitches}
                    onChange={(e) => setMaxTabSwitches(Number(e.target.value))}
                    className="w-20 bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-center text-white font-mono"
                  />
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <div>
                    <span className="font-semibold text-slate-200">Enforce Fullscreen Mode</span>
                    <p className="text-[11px] text-slate-500">Requires candidate to stay in browser fullscreen arena.</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={enforceFullscreen}
                    onChange={(e) => setEnforceFullscreen(e.target.checked)}
                    className="w-4 h-4 accent-brand-500"
                  />
                </div>

                <div className="flex items-center justify-between py-2 border-b border-slate-800/60">
                  <div>
                    <span className="font-semibold text-slate-200">Block Copy & Paste</span>
                    <p className="text-[11px] text-slate-500">
                      Disables external clipboard copy and pasting into code or answer blocks.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={blockCopyPaste}
                    onChange={(e) => setBlockCopyPaste(e.target.checked)}
                    className="w-4 h-4 accent-brand-500"
                  />
                </div>

                <div className="flex items-center justify-between py-2">
                  <div>
                    <span className="font-semibold text-slate-200">Auto-Submit on Violation Limit</span>
                    <p className="text-[11px] text-slate-500">
                      Immediately terminates and submits test if student exceeds allowed tab switches.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={autoSubmitOnViolationLimit}
                    onChange={(e) => setAutoSubmitOnViolationLimit(e.target.checked)}
                    className="w-4 h-4 accent-brand-500"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Assessment Summary Box */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Assessment Summary</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-500">Title:</span>
                <p className="text-white font-semibold truncate">{title || 'Untitled Assessment'}</p>
              </div>
              <div>
                <span className="text-slate-500">Duration:</span>
                <p className="text-white font-semibold">{durationMinutes} Minutes</p>
              </div>
              <div>
                <span className="text-slate-500">Sections / Questions:</span>
                <p className="text-cyan-400 font-semibold">
                  {sections.length} Sections • {totalQuestions} Questions
                </p>
              </div>
              <div>
                <span className="text-slate-500">Total Marks:</span>
                <p className="text-emerald-400 font-semibold">{totalPoints} Points</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 flex justify-between">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStep(3)}
              leftIcon={<ArrowLeft className="w-4 h-4" />}
            >
              Back to Sections
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={handleSubmit}
              isLoading={submitting}
              className="bg-brand-600 hover:bg-brand-500 shadow-lg shadow-brand-600/30"
              leftIcon={<ClipboardCheck className="w-4 h-4" />}
            >
              Publish Assessment
            </Button>
          </div>
        </Card>
      )}

      {/* QUESTION PICKER MODAL */}
      {isPickerOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-4xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Select Questions for {sections[pickerTargetSectionIndex]?.title}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Add problems from the 443+ company coding catalog or standard aptitude tests
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPickerOpen(false)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Toolbar */}
            <div className="p-4 border-b border-slate-800/80 bg-slate-900 flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search question title or topic..."
                  value={pickerSearch}
                  onChange={(e) => {
                    setPickerSearch(e.target.value);
                    loadQuestions(pickerTab, pickerCompany, pickerDifficulty, e.target.value);
                  }}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                {pickerTab === 'CODING' && (
                  <select
                    value={pickerCompany}
                    onChange={(e) => {
                      setPickerCompany(e.target.value);
                      loadQuestions(pickerTab, e.target.value, pickerDifficulty, pickerSearch);
                    }}
                    className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500"
                  >
                    <option value="">All Companies</option>
                    {[
                      'Apple',
                      'Google',
                      'Meta',
                      'Microsoft',
                      'Amazon',
                      'TCS',
                      'Infosys',
                      'Wipro',
                      'Capgemini',
                      'Flipkart',
                      'Oracle',
                      'Adobe',
                      'Accenture',
                    ].map((comp) => (
                      <option key={comp} value={comp}>
                        {comp}
                      </option>
                    ))}
                  </select>
                )}

                <select
                  value={pickerDifficulty}
                  onChange={(e) => {
                    setPickerDifficulty(e.target.value);
                    loadQuestions(pickerTab, pickerCompany, e.target.value, pickerSearch);
                  }}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500"
                >
                  <option value="">All Difficulties</option>
                  <option value="EASY">Easy</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HARD">Hard</option>
                </select>
              </div>
            </div>

            {/* Questions List */}
            <div className="overflow-y-auto flex-1 p-4 space-y-2">
              {pickerLoading ? (
                <div className="py-16 flex flex-col items-center justify-center gap-2">
                  <div className="w-7 h-7 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-xs text-slate-400">Loading questions from catalog...</p>
                </div>
              ) : availableQuestions.length === 0 ? (
                <div className="py-16 text-center text-slate-400 text-xs">
                  No matching questions found in this category.
                </div>
              ) : (
                availableQuestions.map((q) => {
                  const qId = q._id || q.id;
                  const isSelected = sections[pickerTargetSectionIndex]?.questions.some(
                    (item) => item.questionId === qId
                  );

                  return (
                    <div
                      key={qId}
                      onClick={() => toggleQuestionSelection(q)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                        isSelected
                          ? 'bg-brand-500/10 border-brand-500/80 shadow-md'
                          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}} // handled by parent onClick
                          className="w-4 h-4 accent-brand-500 cursor-pointer"
                        />
                        <div>
                          <p className={`font-semibold ${isSelected ? 'text-brand-200' : 'text-slate-200'}`}>
                            {q.title || q.questionText}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            {q.difficulty && (
                              <Badge
                                variant={
                                  q.difficulty.toUpperCase() === 'EASY'
                                    ? 'success'
                                    : q.difficulty.toUpperCase() === 'HARD'
                                    ? 'danger'
                                    : 'warning'
                                }
                                size="sm"
                              >
                                {q.difficulty}
                              </Badge>
                            )}
                            {q.companyTags?.slice(0, 3).map((comp: string) => (
                              <span key={comp} className="text-[10px] text-amber-400/90 font-mono">
                                {comp}
                              </span>
                            ))}
                            {q.pattern && (
                              <span className="text-[10px] text-slate-400 font-mono">
                                Pattern: {q.pattern}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-mono text-slate-400 text-[11px]">
                          {pickerTab === 'CODING' ? '20 pts' : '2 pts'}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-between items-center">
              <span className="text-xs text-slate-400">
                {sections[pickerTargetSectionIndex]?.questions.length || 0} questions selected for this section
              </span>
              <Button variant="primary" size="sm" onClick={() => setIsPickerOpen(false)}>
                Done Selecting
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
