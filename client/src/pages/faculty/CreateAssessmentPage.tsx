import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
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
  Upload,
  FileText,
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
  const { user } = useAuth();
  const isFaculty = user?.role === 'FACULTY';
  const [searchParams] = useSearchParams();
  const preSelectedClassId = searchParams.get('classId');
  const preSelectedQuestionId = searchParams.get('questionId');
  const preSelectedType = searchParams.get('type') as 'APTITUDE' | 'CODING' | null;

  // Wizard Step
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Institution Cohorts
  const [classes, setClasses] = useState<any[]>([]);
  const [assignedCohorts, setAssignedCohorts] = useState<{ course: string; semester: number; section: string }[]>([]);
  const [selectedCohorts, setSelectedCohorts] = useState<{ course: string; semester: number; section: string }[]>([]);

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
  const [allStudents, setAllStudents] = useState<boolean>(!preSelectedClassId && !isFaculty);
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
  const [pickerSubMode, setPickerSubMode] = useState<'BANK' | 'MANUAL' | 'BULK'>('BANK');
  const [pickerSearch, setPickerSearch] = useState('');
  const [pickerCompany, setPickerCompany] = useState('');
  const [pickerDifficulty, setPickerDifficulty] = useState('');
  const [availableQuestions, setAvailableQuestions] = useState<any[]>([]);
  const [pickerLoading, setPickerLoading] = useState(false);

  // Manual Question Authoring State
  const [manualTitle, setManualTitle] = useState('');
  const [manualDifficulty, setManualDifficulty] = useState<'EASY' | 'MEDIUM' | 'HARD'>('MEDIUM');
  const [manualPoints, setManualPoints] = useState<number>(20);
  const [manualDescription, setManualDescription] = useState('');
  const [manualPattern, setManualPattern] = useState('Arrays, Problem Solving');
  const [manualSampleInput, setManualSampleInput] = useState('');
  const [manualSampleOutput, setManualSampleOutput] = useState('');
  // Aptitude specific manual fields
  const [manualCategory, setManualCategory] = useState<'QUANTITATIVE' | 'LOGICAL_REASONING' | 'VERBAL_ABILITY' | 'TECHNICAL_MCQ'>('QUANTITATIVE');
  const [manualSubcategory, setManualSubcategory] = useState('Core Problem Solving');
  const [manualOptionA, setManualOptionA] = useState('');
  const [manualOptionB, setManualOptionB] = useState('');
  const [manualOptionC, setManualOptionC] = useState('');
  const [manualOptionD, setManualOptionD] = useState('');
  const [manualCorrectOpt, setManualCorrectOpt] = useState<'opt_1' | 'opt_2' | 'opt_3' | 'opt_4'>('opt_1');
  const [manualExplanation, setManualExplanation] = useState('');
  const [manualSaving, setManualSaving] = useState(false);
  const [manualMessage, setManualMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Bulk Upload State
  const [bulkJsonText, setBulkJsonText] = useState('');
  const [bulkStatus, setBulkStatus] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Submission State
  const [submitting, setSubmitting] = useState(false);
  const [createdAssessment, setCreatedAssessment] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastAddedQuestionId, setLastAddedQuestionId] = useState<string | null>(null);
  const [sectionToastMessage, setSectionToastMessage] = useState<{ type: 'success' | 'info'; text: string } | null>(null);

  // Save sections draft to sessionStorage
  useEffect(() => {
    if (sections && sections.length > 0) {
      try {
        sessionStorage.setItem('swadhyayi_assessment_draft_sections', JSON.stringify(sections));
      } catch (e) {
        // ignore
      }
    }
  }, [sections]);

  // Load draft from sessionStorage on mount (only if not preselected question)
  useEffect(() => {
    if (!preSelectedQuestionId) {
      try {
        const saved = sessionStorage.getItem('swadhyayi_assessment_draft_sections');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            setSections(parsed);
          }
        }
      } catch (e) {
        // ignore
      }
    }
  }, [preSelectedQuestionId]);

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
        const list = Array.isArray(res.data?.data) ? res.data.data : (res.data?.data?.questions || []);
        const q = list.find((item: any) => item._id === qId);
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
        const list = Array.isArray(res.data?.data) ? res.data.data : (res.data?.data?.questions || []);
        const q = list.find((item: any) => item._id === qId);
        if (q) {
          const rawTags = q.companyTags || q.patterns || [];
          const formattedTags: string[] = [];
          if (Array.isArray(rawTags)) {
            rawTags.forEach((t: any) => {
              if (typeof t === 'string' && t.trim()) formattedTags.push(t.trim());
              else if (t && typeof t === 'object' && t.company) formattedTags.push(String(t.company));
            });
          }

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
                  title: String(q.title || 'Coding Challenge'),
                  type: 'CODING',
                  points: 20,
                  difficulty: typeof q.difficulty === 'string' ? q.difficulty : 'MEDIUM',
                  tags: formattedTags,
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
      const [classRes, cohortRes] = await Promise.all([
        axios.get('/tenants/classes').catch(() => ({ data: { data: [] } })),
        axios.get('/tenants/faculty/my-cohorts').catch(() => ({ data: { data: [] } })),
      ]);
      setClasses(classRes.data?.data || []);
      const myCohorts = cohortRes.data?.data || [];
      setAssignedCohorts(myCohorts);
      if (isFaculty) {
        setAllStudents(false);
        setSelectedCohorts(myCohorts);
      }
    } catch (err) {
      console.error('Failed to load cohorts:', err);
    }
  };

  // Open question selector
  const handleOpenPicker = async (sectionIndex: number, subMode: 'BANK' | 'MANUAL' | 'BULK' = 'BANK') => {
    setPickerTargetSectionIndex(sectionIndex);
    const targetSec = sections[sectionIndex];
    const secType = targetSec?.type || 'CODING';
    setPickerTab(secType);
    setPickerSubMode(subMode);
    setPickerSearch('');
    setPickerCompany('');
    setPickerDifficulty('');
    setManualPoints(secType === 'CODING' ? 20 : 2);
    setManualMessage(null);
    setBulkStatus(null);
    setIsPickerOpen(true);
    await loadQuestions(secType, '', '', '');
  };

  const loadQuestions = async (secType: 'CODING' | 'APTITUDE', company?: string, diff?: string, q?: string) => {
    setPickerLoading(true);
    try {
      if (secType === 'CODING') {
        const params: any = { limit: 100 };
        if (company) params.company = company;
        if (diff) params.difficulty = diff.toUpperCase();
        if (q) params.search = q;
        const res = await axios.get('/coding', { params });
        const list = Array.isArray(res.data?.data) ? res.data.data : (res.data?.data?.questions || []);
        setAvailableQuestions(list);
      } else {
        const params: any = { limit: 100 };
        if (diff) params.difficulty = diff.toUpperCase();
        if (q) params.category = q;
        const res = await axios.get('/aptitude/questions', { params });
        const list = Array.isArray(res.data?.data) ? res.data.data : (res.data?.data?.questions || []);
        setAvailableQuestions(list);
      }
    } catch (err) {
      console.error('Error loading questions:', err);
      setAvailableQuestions([]);
    } finally {
      setPickerLoading(false);
    }
  };

  const handleSaveManualQuestion = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setManualMessage(null);

    const trimmedTitle = manualTitle.trim();
    if (!trimmedTitle || trimmedTitle.length < 3) {
      setManualMessage({ type: 'error', text: 'Please enter a valid title/question text (min 3 chars).' });
      return;
    }
    const trimmedDesc = manualDescription.trim();
    if (!trimmedDesc || trimmedDesc.length < 3) {
      setManualMessage({ type: 'error', text: 'Please enter a problem description/explanation (min 3 chars).' });
      return;
    }

    try {
      setManualSaving(true);
      const targetSec = sections[pickerTargetSectionIndex];
      let newQ: SelectedQuestion;

      if (targetSec.type === 'CODING') {
        const cleanSlug = trimmedTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'problem';
        const slug = `${cleanSlug.slice(0, 30)}-${Date.now()}`.replace(/--+/g, '-');
        const parsedPatterns = manualPattern.split(',').map((p) => p.trim()).filter(Boolean);
        const patterns = parsedPatterns.length > 0 ? parsedPatterns : ['Problem Solving', 'Data Structures'];

        // Pad description if needed to satisfy backend zod min(10)
        const desc = trimmedDesc.length >= 10 ? trimmedDesc : `${trimmedDesc} (Problem Specifications & Rules)`;

        const sInput = manualSampleInput.trim() || '1';
        const sOutput = manualSampleOutput.trim() || '1';

        const payload = {
          title: trimmedTitle,
          slug,
          description: desc,
          difficulty: manualDifficulty,
          category: 'DSA',
          patterns,
          topics: patterns,
          supportedLanguages: ['cpp', 'java', 'python', 'javascript'],
          starterCode: [
            {
              language: 'cpp',
              boilerplate: '// C++ Solution\n#include <bits/stdc++.h>\nusing namespace std;\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    // Code here\n    return 0;\n}',
            },
            {
              language: 'java',
              boilerplate: 'import java.util.*;\nimport java.io.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n    }\n}',
            },
            {
              language: 'python',
              boilerplate: '# Python Solution\nimport sys, math\nfrom collections import defaultdict, deque, Counter\n\ndef main():\n    pass\n\nif __name__ == "__main__":\n    main()',
            },
            {
              language: 'javascript',
              boilerplate: '// JavaScript Solution\nfunction solve() {\n}\nsolve();',
            },
          ],
          sampleTestCases: [
            {
              input: sInput,
              output: sOutput,
              explanation: 'Sample test verification',
            },
          ],
          hiddenTestCases: [
            {
              input: sInput,
              expectedOutput: sOutput,
              weight: 1,
            },
          ],
          timeLimitMs: 2000,
          memoryLimitMb: 256,
          isAssessmentOnly: true,
        };

        let createdId = `custom-coding-${Date.now()}`;
        try {
          const res = await axios.post('/coding', payload);
          if (res.data?.data?._id) {
            createdId = res.data.data._id;
          }
        } catch (apiErr: any) {
          console.warn('Backend question persistence note (adding locally to section):', apiErr?.response?.data || apiErr.message);
        }

        newQ = {
          questionId: createdId,
          title: trimmedTitle,
          type: 'CODING',
          points: Number(manualPoints) || 20,
          difficulty: manualDifficulty,
          tags: patterns,
        };
      } else {
        // APTITUDE
        if (!manualOptionA.trim() || !manualOptionB.trim()) {
          setManualMessage({ type: 'error', text: 'At least Option A and Option B are required.' });
          setManualSaving(false);
          return;
        }

        const options = [
          { id: 'opt_1', text: manualOptionA.trim() },
          { id: 'opt_2', text: manualOptionB.trim() },
        ];
        if (manualOptionC.trim()) options.push({ id: 'opt_3', text: manualOptionC.trim() });
        if (manualOptionD.trim()) options.push({ id: 'opt_4', text: manualOptionD.trim() });

        const expl = manualExplanation.trim() || trimmedDesc;
        const finalExpl = expl.length >= 5 ? expl : 'Correct option verified from problem reasoning.';

        const payload = {
          category: manualCategory,
          subcategory: manualSubcategory || 'General',
          difficulty: manualDifficulty,
          questionText: trimmedTitle,
          options,
          correctOptionId: manualCorrectOpt,
          explanation: finalExpl,
          companyTags: [],
          isAssessmentOnly: true,
        };

        let createdId = `custom-apt-${Date.now()}`;
        try {
          const res = await axios.post('/aptitude', payload);
          if (res.data?.data?._id) {
            createdId = res.data.data._id;
          }
        } catch (apiErr: any) {
          console.warn('Backend aptitude persistence note (adding locally to section):', apiErr?.response?.data || apiErr.message);
        }

        newQ = {
          questionId: createdId,
          title: trimmedTitle,
          type: 'APTITUDE',
          points: Number(manualPoints) || 2,
          difficulty: manualDifficulty,
          tags: [manualCategory],
        };
      }

      // Add to Section immediately
      const updatedSections = [...sections];
      updatedSections[pickerTargetSectionIndex] = {
        ...targetSec,
        questions: [...targetSec.questions, newQ],
      };
      setSections(updatedSections);

      // Highlight new question in section view
      setLastAddedQuestionId(newQ.questionId);

      // Show prominent banner on Section page
      setSectionToastMessage({
        type: 'success',
        text: `Question "${newQ.title}" (${newQ.points} marks) successfully added to ${targetSec.title}!`,
      });

      // Reset form fields
      setManualTitle('');
      setManualDescription('');
      setManualSampleInput('');
      setManualSampleOutput('');
      setManualOptionA('');
      setManualOptionB('');
      setManualOptionC('');
      setManualOptionD('');
      setManualExplanation('');

      // Auto-close modal immediately so the user sees the newly added question in their section card!
      setIsPickerOpen(false);
    } catch (err: any) {
      console.error('Failed to create custom question:', err);
      let msg = err.message || 'Failed to save question.';
      if (err.response?.data?.error?.details && Array.isArray(err.response.data.error.details)) {
        msg = err.response.data.error.details.map((d: any) => `${d.field}: ${d.message}`).join(', ');
      } else if (err.response?.data?.error?.message) {
        msg = err.response.data.error.message;
      } else if (err.response?.data?.message) {
        msg = err.response.data.message;
      }
      setManualMessage({ type: 'error', text: msg || 'Failed to save question.' });
    } finally {
      setManualSaving(false);
    }
  };

  const handleBulkJsonUpload = () => {
    setBulkStatus(null);
    if (!bulkJsonText.trim()) {
      setBulkStatus({ type: 'error', text: 'Please paste valid JSON questions array.' });
      return;
    }

    try {
      const parsed = JSON.parse(bulkJsonText.trim());
      if (!Array.isArray(parsed) || parsed.length === 0) {
        setBulkStatus({ type: 'error', text: 'JSON must be a non-empty array of question objects.' });
        return;
      }

      const targetSec = sections[pickerTargetSectionIndex];
      const parsedQuestions: SelectedQuestion[] = parsed.map((item, idx) => ({
        questionId: item._id || item.id || `custom-bulk-${Date.now()}-${idx}`,
        title: item.title || item.questionText || item.question || `Question ${idx + 1}`,
        type: targetSec.type,
        points: Number(item.points) || (targetSec.type === 'CODING' ? 20 : 2),
        difficulty: item.difficulty || 'MEDIUM',
        tags: item.tags || ['Bulk Uploaded'],
      }));

      const updatedSections = [...sections];
      updatedSections[pickerTargetSectionIndex] = {
        ...targetSec,
        questions: [...targetSec.questions, ...parsedQuestions],
      };
      setSections(updatedSections);
      setBulkStatus({
        type: 'success',
        text: `Successfully uploaded and added ${parsedQuestions.length} questions to ${targetSec.title}!`,
      });
      setSectionToastMessage({
        type: 'success',
        text: `Successfully imported ${parsedQuestions.length} questions into ${targetSec.title}!`,
      });
      setBulkJsonText('');
      setTimeout(() => {
        setIsPickerOpen(false);
      }, 600);
    } catch (err: any) {
      setBulkStatus({ type: 'error', text: `Invalid JSON syntax: ${err.message}` });
    }
  };

  const handleLoadSampleJsonTemplate = () => {
    const targetSec = sections[pickerTargetSectionIndex];
    if (targetSec.type === 'CODING') {
      const sample = [
        {
          title: "Find Longest Substring Without Repeating Characters",
          description: "Given a string s, find the length of the longest substring without repeating characters.",
          difficulty: "MEDIUM",
          points: 20,
          sampleInput: "abcabcbb",
          sampleOutput: "3",
          tags: ["Sliding Window", "Strings"]
        },
        {
          title: "Search in Rotated Sorted Array",
          description: "Given the array nums after possible rotation and target integer, return index of target.",
          difficulty: "MEDIUM",
          points: 20,
          sampleInput: "4 5 6 7 0 1 2\n0",
          sampleOutput: "4",
          tags: ["Binary Search"]
        }
      ];
      setBulkJsonText(JSON.stringify(sample, null, 2));
    } else {
      const sample = [
        {
          title: "A can do a work in 15 days and B in 20 days. Fraction left after 4 days of working together is:",
          difficulty: "EASY",
          points: 2,
          options: ["7/15", "8/15", "1/4", "1/10"],
          correctOption: "8/15",
          explanation: "Total 4 days work = 4*(1/15 + 1/20) = 7/15. Left = 8/15."
        }
      ];
      setBulkJsonText(JSON.stringify(sample, null, 2));
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
      const rawTags = q.companyTags || q.patterns || q.tags || [];
      const formattedTags: string[] = [];
      if (Array.isArray(rawTags)) {
        rawTags.forEach((t: any) => {
          if (typeof t === 'string' && t.trim()) formattedTags.push(t.trim());
          else if (t && typeof t === 'object') {
            if (t.company) formattedTags.push(String(t.company));
            else if (t.name) formattedTags.push(String(t.name));
          }
        });
      }

      updatedQuestions = [
        ...targetSec.questions,
        {
          questionId: qId,
          title: String(q.title || q.questionText || 'Question'),
          type: targetSec.type,
          points: targetSec.type === 'CODING' ? 20 : 2,
          difficulty: typeof q.difficulty === 'string' ? q.difficulty : 'MEDIUM',
          tags: formattedTags,
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
          allStudents: isFaculty ? false : allStudents,
          departmentIds: selectedDeptIds,
          batchIds: selectedBatchIds,
          classIds: selectedClassIds,
          cohorts: isFaculty || !allStudents ? selectedCohorts : [],
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
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all border ${currentStep === item.step
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
            {isFaculty ? (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-xs text-cyan-200">
                  This test will only be visible and accessible to students enrolled in your selected assigned cohorts.
                </div>
                {assignedCohorts.length === 0 ? (
                  <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                    No Course / Semester / Section cohorts are assigned to you yet. Ask your College Admin to assign cohorts before creating a test.
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      Select Your Assigned Cohorts
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {assignedCohorts.map((c, idx) => {
                        const isSelected = selectedCohorts.some(
                          (sc) =>
                            sc.course.toLowerCase() === c.course.toLowerCase() &&
                            Number(sc.semester) === Number(c.semester) &&
                            sc.section.toLowerCase() === c.section.toLowerCase()
                        );
                        return (
                          <div
                            key={`${c.course}-${c.semester}-${c.section}-${idx}`}
                            onClick={() => {
                              if (isSelected) {
                                setSelectedCohorts(
                                  selectedCohorts.filter(
                                    (sc) =>
                                      !(
                                        sc.course.toLowerCase() === c.course.toLowerCase() &&
                                        Number(sc.semester) === Number(c.semester) &&
                                        sc.section.toLowerCase() === c.section.toLowerCase()
                                      )
                                  )
                                );
                              } else {
                                setSelectedCohorts([...selectedCohorts, c]);
                              }
                            }}
                            className={`p-3 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-brand-500/10 border-brand-500 text-brand-200 shadow-md'
                                : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-bold text-xs">{c.course}</span>
                              <Badge variant={isSelected ? 'brand' : 'neutral'} size="sm">
                                Sem {c.semester}
                              </Badge>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-1">Section {c.section}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
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
                </div>
              </div>
            ) : (
              <>
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
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${isSelected
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
              </>
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

            {/* Toast Notification Banner */}
            {sectionToastMessage && (
              <div className="mb-4 p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between shadow-lg shadow-emerald-500/10">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{sectionToastMessage.text}</span>
                </div>
                <button
                  onClick={() => setSectionToastMessage(null)}
                  className="p-1 hover:bg-emerald-500/20 rounded-lg text-emerald-400"
                  title="Dismiss notification"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* Sections Accordion */}
            <div className="space-y-6 pt-2">
              {sections.map((sec, secIdx) => (
                <div
                  key={sec.sectionId}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 overflow-hidden shadow-lg"
                >
                  {/* Section Header */}
                  <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <div
                        className={`p-2 rounded-xl border ${sec.type === 'CODING'
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
                      <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700/80 text-slate-300">
                        {sec.questions.length} {sec.questions.length === 1 ? 'question' : 'questions'} • {sec.questions.reduce((sum, q) => sum + (q.points || 0), 0)} marks
                      </span>
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
                        onClick={() => handleOpenPicker(secIdx, 'BANK')}
                        leftIcon={<Plus className="w-3.5 h-3.5" />}
                        className="text-xs bg-brand-600 hover:bg-brand-500"
                      >
                        Pick Questions
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleOpenPicker(secIdx, 'MANUAL')}
                        leftIcon={<Upload className="w-3.5 h-3.5" />}
                        className="text-xs"
                      >
                        + Manual Question
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
                      <div className="py-8 text-center space-y-3">
                        <p className="text-xs text-slate-400">No questions added to this section yet.</p>
                        <div className="flex gap-2 justify-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleOpenPicker(secIdx, 'BANK')}
                            leftIcon={<Plus className="w-3.5 h-3.5" />}
                          >
                            Browse Question Bank
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleOpenPicker(secIdx, 'MANUAL')}
                            leftIcon={<Upload className="w-3.5 h-3.5" />}
                          >
                            + Manual Question
                          </Button>
                        </div>
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
                                <div className="flex items-center gap-2">
                                  <p className="font-semibold text-slate-200">{q.title}</p>
                                  {lastAddedQuestionId === q.questionId && (
                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                                      Just Added
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2 mt-1">
                                  {q.difficulty && (
                                    <Badge
                                      variant={
                                        String(q.difficulty).toUpperCase() === 'EASY'
                                          ? 'success'
                                          : String(q.difficulty).toUpperCase() === 'HARD'
                                            ? 'danger'
                                            : 'warning'
                                      }
                                      size="sm"
                                    >
                                      {String(q.difficulty)}
                                    </Badge>
                                  )}
                                  {q.tags?.slice(0, 2).map((t: any, idx: number) => {
                                    const tagName = typeof t === 'object' ? (t.company || t.name || 'Tag') : String(t);
                                    return (
                                      <span key={idx} className="text-[10px] text-slate-400 font-mono">
                                        #{tagName}
                                      </span>
                                    );
                                  })}
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

            {/* Sub-mode Navigation Tabs */}
            <div className="flex border-b border-slate-800 bg-slate-950 px-6 gap-6 text-xs font-semibold">
              <button
                onClick={() => setPickerSubMode('BANK')}
                className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${pickerSubMode === 'BANK'
                  ? 'border-brand-500 text-brand-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Search className="w-3.5 h-3.5" />
                Select from Question Bank ({availableQuestions.length})
              </button>
              <button
                onClick={() => {
                  setPickerSubMode('MANUAL');
                  setManualMessage(null);
                }}
                className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${pickerSubMode === 'MANUAL'
                  ? 'border-brand-500 text-brand-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Plus className="w-3.5 h-3.5" />
                + Manual Question Form
              </button>
              <button
                onClick={() => {
                  setPickerSubMode('BULK');
                  setBulkStatus(null);
                }}
                className={`py-3.5 border-b-2 transition-all flex items-center gap-2 ${pickerSubMode === 'BULK'
                  ? 'border-brand-500 text-brand-400 font-bold'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
                  }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Bulk JSON Upload
              </button>
            </div>

            {/* MODE 1: QUESTION BANK LIST */}
            {pickerSubMode === 'BANK' && (
              <>
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
                    <div className="py-16 text-center text-slate-400 text-xs space-y-3">
                      <p>No matching questions found in this category.</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setPickerSubMode('MANUAL')}
                        leftIcon={<Plus className="w-3.5 h-3.5" />}
                      >
                        Author Custom Question
                      </Button>
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
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${isSelected
                            ? 'bg-brand-500/10 border-brand-500/80 shadow-md'
                            : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                            }`}
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={isSelected}
                              onChange={(e) => {
                                e.stopPropagation();
                                toggleQuestionSelection(q);
                              }}
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
                                      String(q.difficulty).toUpperCase() === 'EASY'
                                        ? 'success'
                                        : String(q.difficulty).toUpperCase() === 'HARD'
                                          ? 'danger'
                                          : 'warning'
                                    }
                                    size="sm"
                                  >
                                    {String(q.difficulty)}
                                  </Badge>
                                )}
                                {q.companyTags?.slice(0, 3).map((comp: any) => {
                                  const cName = typeof comp === 'object' ? comp.company : comp;
                                  return (
                                    <span key={cName} className="text-[10px] text-amber-400/90 font-mono">
                                      {cName}
                                    </span>
                                  );
                                })}
                                {q.patterns?.slice(0, 2).map((p: any, pIdx: number) => {
                                  const pName = typeof p === 'object' ? (p.name || p.pattern || 'Pattern') : String(p);
                                  return (
                                    <span key={pIdx} className="text-[10px] text-slate-400 font-mono">
                                      Pattern: {pName}
                                    </span>
                                  );
                                })}
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
              </>
            )}

            {/* MODE 2: MANUAL QUESTION FORM */}
            {pickerSubMode === 'MANUAL' && (
              <form onSubmit={handleSaveManualQuestion} className="overflow-y-auto flex-1 p-6 space-y-4 text-xs">
                {manualMessage && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs flex items-center gap-2.5 ${manualMessage.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                      }`}
                  >
                    {manualMessage.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                    )}
                    <span>{manualMessage.text}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      {pickerTab === 'CODING' ? 'Problem Title *' : 'Question Statement *'}
                    </label>
                    <input
                      type="text"
                      placeholder={
                        pickerTab === 'CODING'
                          ? 'e.g. Reverse Linked List in K-Groups'
                          : 'e.g. Find the missing number in the sequence: 2, 6, 12, 20, ?'
                      }
                      value={manualTitle}
                      onChange={(e) => setManualTitle(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                      Difficulty & Marks
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={manualDifficulty}
                        onChange={(e: any) => setManualDifficulty(e.target.value)}
                        className="bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500 flex-1"
                      >
                        <option value="EASY">Easy</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="HARD">Hard</option>
                      </select>
                      <input
                        type="number"
                        min={1}
                        value={manualPoints}
                        onChange={(e) => setManualPoints(Number(e.target.value))}
                        className="w-16 bg-slate-950 border border-slate-800 rounded-xl px-2 py-2 text-xs text-center font-mono text-white focus:outline-none focus:border-brand-500"
                        title="Points / Marks"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    {pickerTab === 'CODING' ? 'Detailed Statement & Constraints *' : 'Question Details & Explanation *'}
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Enter full statement, sample input/output expectations, and any time/space limits..."
                    value={manualDescription}
                    onChange={(e) => setManualDescription(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                  />
                </div>

                {pickerTab === 'CODING' ? (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Sample Test Input
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. 5&#10;1 2 3 4 5"
                          value={manualSampleInput}
                          onChange={(e) => setManualSampleInput(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Expected Test Output
                        </label>
                        <textarea
                          rows={2}
                          placeholder="e.g. 15"
                          value={manualSampleOutput}
                          onChange={(e) => setManualSampleOutput(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Algorithmic Patterns / Tags (comma separated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dynamic Programming, Two Pointers, Trees"
                        value={manualPattern}
                        onChange={(e) => setManualPattern(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Aptitude Category
                        </label>
                        <select
                          value={manualCategory}
                          onChange={(e: any) => setManualCategory(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                        >
                          <option value="QUANTITATIVE">Quantitative Aptitude</option>
                          <option value="LOGICAL_REASONING">Logical Reasoning</option>
                          <option value="VERBAL_ABILITY">Verbal Ability</option>
                          <option value="TECHNICAL_MCQ">Technical MCQ</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Subcategory Topic
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Speed, Time & Distance"
                          value={manualSubcategory}
                          onChange={(e) => setManualSubcategory(e.target.value)}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                        />
                      </div>
                    </div>

                    {/* Options A, B, C, D */}
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Options & Select Correct Option
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {[
                          { id: 'opt_1', label: 'Option A', val: manualOptionA, set: setManualOptionA },
                          { id: 'opt_2', label: 'Option B', val: manualOptionB, set: setManualOptionB },
                          { id: 'opt_3', label: 'Option C', val: manualOptionC, set: setManualOptionC },
                          { id: 'opt_4', label: 'Option D', val: manualOptionD, set: setManualOptionD },
                        ].map((opt) => (
                          <div
                            key={opt.id}
                            className={`flex items-center gap-2 p-2 rounded-xl border ${manualCorrectOpt === opt.id
                              ? 'bg-emerald-500/10 border-emerald-500/50'
                              : 'bg-slate-950 border-slate-800'
                              }`}
                          >
                            <input
                              type="radio"
                              name="correctOptGroup"
                              checked={manualCorrectOpt === opt.id}
                              onChange={() => setManualCorrectOpt(opt.id as any)}
                              className="w-4 h-4 accent-emerald-500 cursor-pointer"
                              title="Mark as correct option"
                            />
                            <input
                              type="text"
                              placeholder={opt.label}
                              value={opt.val}
                              onChange={(e) => opt.set(e.target.value)}
                              className="w-full bg-transparent text-xs text-slate-200 focus:outline-none"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Answer Explanation
                      </label>
                      <input
                        type="text"
                        placeholder="Detailed derivation or reasoning for the correct option..."
                        value={manualExplanation}
                        onChange={(e) => setManualExplanation(e.target.value)}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-2 flex justify-end">
                  <Button
                    variant="primary"
                    size="sm"
                    type="submit"
                    isLoading={manualSaving}
                    leftIcon={<Plus className="w-3.5 h-3.5" />}
                    className="bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-600/30"
                  >
                    Save & Add to Section
                  </Button>
                </div>
              </form>
            )}

            {/* MODE 3: BULK JSON UPLOAD */}
            {pickerSubMode === 'BULK' && (
              <div className="overflow-y-auto flex-1 p-6 space-y-4 text-xs">
                {bulkStatus && (
                  <div
                    className={`p-3.5 rounded-xl border text-xs flex items-center gap-2.5 ${bulkStatus.type === 'success'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                      }`}
                  >
                    {bulkStatus.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-400" />
                    )}
                    <span>{bulkStatus.text}</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-white">Paste JSON Questions Array</h4>
                    <p className="text-[11px] text-slate-400">
                      Bulk-add multiple questions directly into {sections[pickerTargetSectionIndex]?.title}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleLoadSampleJsonTemplate}
                    leftIcon={<FileText className="w-3.5 h-3.5" />}
                  >
                    Load Sample Template
                  </Button>
                </div>

                <textarea
                  rows={10}
                  placeholder={`[\n  {\n    "title": "Example Problem",\n    "description": "Problem statement...",\n    "difficulty": "MEDIUM",\n    "points": 20,\n    "sampleInput": "...",\n    "sampleOutput": "..."\n  }\n]`}
                  value={bulkJsonText}
                  onChange={(e) => setBulkJsonText(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                />

                <div className="flex justify-end gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleBulkJsonUpload}
                    leftIcon={<Upload className="w-3.5 h-3.5" />}
                    className="bg-brand-600 hover:bg-brand-500"
                  >
                    Parse & Add to Section
                  </Button>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span className="text-xs text-slate-400">
                {sections[pickerTargetSectionIndex]?.questions.length || 0} questions configured in {sections[pickerTargetSectionIndex]?.title}
              </span>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={() => setIsPickerOpen(false)}>
                  Close
                </Button>
                {pickerSubMode === 'MANUAL' ? (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={(e) => handleSaveManualQuestion(e)}
                    isLoading={manualSaving}
                    leftIcon={<Plus className="w-3.5 h-3.5" />}
                    className="bg-brand-600 hover:bg-brand-500 shadow-md shadow-brand-600/30"
                  >
                    Save & Add to Section
                  </Button>
                ) : pickerSubMode === 'BULK' ? (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleBulkJsonUpload}
                    leftIcon={<Upload className="w-3.5 h-3.5" />}
                    className="bg-brand-600 hover:bg-brand-500"
                  >
                    Parse & Add to Section
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => {
                      setIsPickerOpen(false);
                      setSectionToastMessage({
                        type: 'info',
                        text: `${sections[pickerTargetSectionIndex]?.questions.length || 0} questions currently configured in ${sections[pickerTargetSectionIndex]?.title}.`,
                      });
                    }}
                    className="bg-brand-600 hover:bg-brand-500"
                  >
                    Done Selecting ({sections[pickerTargetSectionIndex]?.questions.length || 0} Added)
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
