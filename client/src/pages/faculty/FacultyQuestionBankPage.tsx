import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Badge } from '../../components/common/Badge';
import {
  Code2,
  BrainCircuit,
  Search,
  Plus,
  Eye,
  ClipboardCheck,
  Building,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

export const FacultyQuestionBankPage: React.FC = () => {
  const navigate = useNavigate();

  // Active Main Tab
  const [activeTab, setActiveTab] = useState<'CODING' | 'APTITUDE' | 'CREATE'>('CODING');

  // Coding Questions State
  const [codingQuestions, setCodingQuestions] = useState<any[]>([]);
  const [codingLoading, setCodingLoading] = useState(true);
  const [codingSearch, setCodingSearch] = useState('');
  const [codingCompany, setCodingCompany] = useState('');
  const [codingDifficulty, setCodingDifficulty] = useState('');
  const [codingPage, setCodingPage] = useState(1);
  const [codingTotalPages, setCodingTotalPages] = useState(1);
  const [codingTotalCount, setCodingTotalCount] = useState(0);

  // Aptitude Questions State
  const [aptitudeQuestions, setAptitudeQuestions] = useState<any[]>([]);
  const [aptitudeLoading, setAptitudeLoading] = useState(false);
  const [aptitudeCategory, setAptitudeCategory] = useState('');
  const [aptitudeDifficulty, setAptitudeDifficulty] = useState('');

  // Preview Modal
  const [previewItem, setPreviewItem] = useState<any>(null);

  // Create Question Form
  const [newTitle, setNewTitle] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [newDifficulty, setNewDifficulty] = useState<'EASY' | 'MEDIUM' | 'HARD'>('MEDIUM');
  const [newPatterns, setNewPatterns] = useState('Dynamic Programming, Arrays');
  const [newCompany, setNewCompany] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newSampleInput, setNewSampleInput] = useState('');
  const [newSampleOutput, setNewSampleOutput] = useState('');
  const [creating, setCreating] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  useEffect(() => {
    if (activeTab === 'CODING') {
      fetchCodingQuestions();
    } else if (activeTab === 'APTITUDE') {
      fetchAptitudeQuestions();
    }
  }, [activeTab, codingCompany, codingDifficulty, codingPage]);

  const fetchCodingQuestions = async () => {
    setCodingLoading(true);
    try {
      const params: any = {
        page: codingPage,
        limit: 25,
      };
      if (codingCompany) params.company = codingCompany;
      if (codingDifficulty) params.difficulty = codingDifficulty.toUpperCase();
      if (codingSearch) params.search = codingSearch;

      const res = await axios.get('/coding', { params });
      if (res.data?.success) {
        const qList = Array.isArray(res.data.data) ? res.data.data : (res.data.data?.questions || []);
        setCodingQuestions(qList);
        setCodingTotalPages(res.data.meta?.totalPages || 1);
        setCodingTotalCount(res.data.meta?.totalCount || qList.length);
      }
    } catch (err) {
      console.error('Failed to load coding questions:', err);
    } finally {
      setCodingLoading(false);
    }
  };

  const fetchAptitudeQuestions = async () => {
    setAptitudeLoading(true);
    try {
      const params: any = { limit: 50 };
      if (aptitudeCategory) params.category = aptitudeCategory;
      if (aptitudeDifficulty) params.difficulty = aptitudeDifficulty.toUpperCase();

      const res = await axios.get('/aptitude/questions', { params });
      if (res.data?.success) {
        const qList = Array.isArray(res.data.data) ? res.data.data : (res.data.data?.questions || []);
        setAptitudeQuestions(qList);
      }
    } catch (err) {
      console.error('Failed to load aptitude questions:', err);
    } finally {
      setAptitudeLoading(false);
    }
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCodingPage(1);
    fetchCodingQuestions();
  };

  const handleCreateCodingQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    setCreateError(null);
    setCreateSuccess(false);

    if (!newTitle.trim() || !newDescription.trim()) {
      setCreateError('Title and description are required.');
      return;
    }

    const genSlug =
      newSlug.trim() ||
      newTitle
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

    try {
      setCreating(true);
      const parsedPatterns = newPatterns.split(',').map((p) => p.trim()).filter(Boolean);
      const patterns = parsedPatterns.length > 0 ? parsedPatterns : ['Problem Solving', 'Data Structures'];
      const desc = newDescription.trim().length >= 10
        ? newDescription.trim()
        : `${newDescription.trim()} (Detailed specifications)`;

      const sInput = newSampleInput.trim() || '1 2 3';
      const sOutput = newSampleOutput.trim() || '6';

      const payload = {
        title: newTitle.trim(),
        slug: genSlug.length >= 3 ? genSlug : `custom-${Date.now()}`,
        description: desc,
        difficulty: newDifficulty,
        category: 'DSA',
        patterns,
        topics: patterns,
        companyTags: newCompany
          ? [
              {
                company: newCompany.trim(),
                yearReported: 2026,
                verified: true,
                frequencyCount: 1,
              },
            ]
          : [],
        supportedLanguages: ['cpp', 'java', 'python', 'javascript'],
        starterCode: [
          {
            language: 'cpp',
            boilerplate: '// C++ Solution Boilerplate\n#include <iostream>\nusing namespace std;\n\nint main() {\n    // Write your code here\n    return 0;\n}',
          },
          {
            language: 'java',
            boilerplate: '// Java Solution Boilerplate\nimport java.util.*;\n\npublic class Solution {\n    public static void main(String[] args) {\n        // Write code\n    }\n}',
          },
          {
            language: 'python',
            boilerplate: '# Python Solution\nimport sys\n\ndef main():\n    pass\n\nif __name__ == "__main__":\n    main()',
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
      };

      const res = await axios.post('/coding', payload);
      if (res.data?.success) {
        setCreateSuccess(true);
        // Reset form
        setNewTitle('');
        setNewSlug('');
        setNewDescription('');
        setNewSampleInput('');
        setNewSampleOutput('');
      }
    } catch (err: any) {
      console.error('Failed to create question:', err);
      let msg = err.message || 'Failed to create question.';
      if (err.response?.data?.error?.details && Array.isArray(err.response.data.error.details)) {
        msg = err.response.data.error.details.map((d: any) => `${d.field}: ${d.message}`).join(', ');
      } else if (err.response?.data?.error?.message) {
        msg = err.response.data.error.message;
      } else if (err.response?.data?.message) {
        msg = err.response.data.message;
      }
      setCreateError(msg);
    } finally {
      setCreating(false);
    }
  };

  const companiesList = [
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
  ];

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-16">
      {/* Page Header */}
      <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-950/60 to-brand-950/60 border border-indigo-500/20 p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold">
            <Code2 className="w-3.5 h-3.5" />
            Institutional Question Repository
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Institutional Question Bank
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
            Browse 443+ company-specific interview problems across top tech firms, aptitude question sets, and author custom institutional test challenges.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate('/faculty/tests/new')}
            leftIcon={<ClipboardCheck className="w-4 h-4" />}
          >
            Create Assessment
          </Button>
        </div>
      </div>

      {/* Main Tabs */}
      <div className="flex border-b border-slate-800 gap-2">
        <button
          onClick={() => setActiveTab('CODING')}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold transition-all border-b-2 -mb-px ${
            activeTab === 'CODING'
              ? 'border-cyan-500 text-cyan-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Code2 className="w-4 h-4" />
          Coding Problems (443+)
        </button>

        <button
          onClick={() => setActiveTab('APTITUDE')}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold transition-all border-b-2 -mb-px ${
            activeTab === 'APTITUDE'
              ? 'border-purple-500 text-purple-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BrainCircuit className="w-4 h-4" />
          Aptitude MCQs
        </button>

        <button
          onClick={() => setActiveTab('CREATE')}
          className={`flex items-center gap-2 px-5 py-3 text-xs font-bold transition-all border-b-2 -mb-px ${
            activeTab === 'CREATE'
              ? 'border-brand-500 text-brand-400'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Plus className="w-4 h-4" />
          Author Custom Question
        </button>
      </div>

      {/* TAB 1: CODING PROBLEMS */}
      {activeTab === 'CODING' && (
        <div className="space-y-6">
          {/* Company Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => {
                setCodingCompany('');
                setCodingPage(1);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                codingCompany === ''
                  ? 'bg-brand-600 text-white border-brand-500'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
              }`}
            >
              All Companies
            </button>
            {companiesList.map((comp) => (
              <button
                key={comp}
                onClick={() => {
                  setCodingCompany(comp);
                  setCodingPage(1);
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border flex items-center gap-1.5 ${
                  codingCompany === comp
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-md'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                }`}
              >
                <Building className="w-3 h-3 text-amber-400" />
                {comp}
              </button>
            ))}
          </div>

          {/* Search & Filter Bar */}
          <Card className="p-4 bg-slate-900 border-slate-800">
            <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-3 items-center justify-between">
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  placeholder="Search coding problem title..."
                  value={codingSearch}
                  onChange={(e) => setCodingSearch(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <select
                  value={codingDifficulty}
                  onChange={(e) => {
                    setCodingDifficulty(e.target.value);
                    setCodingPage(1);
                  }}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-brand-500"
                >
                  <option value="">All Difficulties</option>
                  <option value="EASY">Easy</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HARD">Hard</option>
                </select>

                <Button variant="outline" size="sm" type="submit" className="text-xs">
                  Filter
                </Button>
              </div>
            </form>
          </Card>

          {/* Questions Grid / Table */}
          {codingLoading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-slate-400">Loading company coding catalog...</p>
            </div>
          ) : codingQuestions.length === 0 ? (
            <Card className="py-16 text-center bg-slate-900 border-slate-800">
              <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-200">No questions found</h3>
              <p className="text-xs text-slate-400 mt-1">Try adjusting company or search filters.</p>
            </Card>
          ) : (
            <div className="space-y-3">
              {codingQuestions.map((q) => {
                const diff = (q.difficulty || 'MEDIUM').toUpperCase();
                return (
                  <Card
                    key={q._id}
                    className="p-4 bg-slate-900/90 border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <Badge
                          variant={diff === 'EASY' ? 'success' : diff === 'HARD' ? 'danger' : 'warning'}
                          size="sm"
                        >
                          {diff}
                        </Badge>
                        <h3 className="text-sm font-bold text-white hover:text-brand-300 transition-colors">
                          {q.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap text-xs text-slate-400">
                        {q.companyTags?.slice(0, 3).map((comp: any) => {
                          const cName = typeof comp === 'object' ? comp.company : comp;
                          return (
                            <span
                              key={cName}
                              className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-[11px] font-mono"
                            >
                              <Building className="w-3 h-3" />
                              {cName}
                            </span>
                          );
                        })}
                        {q.patterns?.slice(0, 2).map((p: string) => (
                          <span
                            key={p}
                            className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-[11px] font-mono"
                          >
                            {p}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end md:self-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => {
                          setPreviewItem(q);
                        }}
                        leftIcon={<Eye className="w-3.5 h-3.5" />}
                      >
                        Preview
                      </Button>

                      <Link to={`/coding/${q.slug}`} target="_blank">
                        <Button variant="outline" size="sm" className="text-xs" leftIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                          Solve
                        </Button>
                      </Link>

                      <Button
                        variant="primary"
                        size="sm"
                        className="text-xs bg-brand-600 hover:bg-brand-500"
                        onClick={() => navigate(`/faculty/tests/new?questionId=${q._id}&type=CODING`)}
                        leftIcon={<Plus className="w-3.5 h-3.5" />}
                      >
                        Add to Test
                      </Button>
                    </div>
                  </Card>
                );
              })}

              {/* Pagination Toolbar */}
              <div className="flex items-center justify-between p-4 bg-slate-900 border border-slate-800 rounded-2xl text-xs text-slate-400">
                <span>
                  Showing Page {codingPage} of {codingTotalPages} ({codingTotalCount} total problems)
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={codingPage <= 1}
                    onClick={() => setCodingPage((p) => Math.max(1, p - 1))}
                    leftIcon={<ChevronLeft className="w-3.5 h-3.5" />}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    disabled={codingPage >= codingTotalPages}
                    onClick={() => setCodingPage((p) => p + 1)}
                    rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 2: APTITUDE MCQS */}
      {activeTab === 'APTITUDE' && (
        <div className="space-y-6">
          <Card className="p-4 bg-slate-900 border-slate-800">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Category:</span>
                <select
                  value={aptitudeCategory}
                  onChange={(e) => setAptitudeCategory(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="">All Categories</option>
                  <option value="QUANTITATIVE">Quantitative Aptitude</option>
                  <option value="LOGICAL_REASONING">Logical Reasoning</option>
                  <option value="VERBAL_ABILITY">Verbal Ability</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Difficulty:</span>
                <select
                  value={aptitudeDifficulty}
                  onChange={(e) => setAptitudeDifficulty(e.target.value)}
                  className="bg-slate-950 border border-slate-800 text-slate-200 text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-purple-500"
                >
                  <option value="">All Difficulties</option>
                  <option value="EASY">Easy</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HARD">Hard</option>
                </select>
              </div>
            </div>
          </Card>

          {aptitudeLoading ? (
            <div className="py-20 flex flex-col items-center justify-center gap-2">
              <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs text-slate-400">Loading aptitude questions...</p>
            </div>
          ) : aptitudeQuestions.length === 0 ? (
            <Card className="py-16 text-center bg-slate-900 border-slate-800">
              <BrainCircuit className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-slate-200">No aptitude questions found</h3>
            </Card>
          ) : (
            <div className="space-y-4">
              {aptitudeQuestions.map((q, idx) => (
                <Card key={q._id || idx} className="p-5 bg-slate-900/90 border-slate-800 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="brand" size="sm">
                          {q.category}
                        </Badge>
                        <Badge variant="neutral" size="sm">
                          {q.difficulty}
                        </Badge>
                      </div>
                      <p className="text-sm font-semibold text-slate-200 pt-1 leading-relaxed">
                        {q.questionText}
                      </p>
                    </div>

                    <Button
                      variant="primary"
                      size="sm"
                      className="text-xs bg-purple-600 hover:bg-purple-500 flex-shrink-0"
                      onClick={() => navigate(`/faculty/tests/new?questionId=${q._id}&type=APTITUDE`)}
                      leftIcon={<Plus className="w-3.5 h-3.5" />}
                    >
                      Add to Test
                    </Button>
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs">
                    {q.options?.map((opt: any) => (
                      <div
                        key={opt.optionId}
                        className={`p-2.5 rounded-lg border flex items-center justify-between ${
                          opt.isCorrect
                            ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 font-medium'
                            : 'bg-slate-950 border-slate-800 text-slate-300'
                        }`}
                      >
                        <span>{opt.text}</span>
                        {opt.isCorrect && (
                          <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded">
                            Correct
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {q.explanation && (
                    <div className="pt-2 text-xs text-slate-400 border-t border-slate-800/60">
                      <span className="font-semibold text-slate-300">Explanation: </span>
                      {q.explanation}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          )}
        </div>
      )}

      {/* TAB 3: AUTHOR CUSTOM QUESTION */}
      {activeTab === 'CREATE' && (
        <Card className="p-6 bg-slate-900 border-slate-800 max-w-4xl mx-auto space-y-6">
          <CardHeader>
            <div>
              <CardTitle>Author Custom Coding Challenge</CardTitle>
              <CardDescription>
                Add a new programming problem to your institutional question repository for tests & practice
              </CardDescription>
            </div>
          </CardHeader>

          {createSuccess && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
              <span>Question authored and saved to database successfully! You can now select it in tests.</span>
            </div>
          )}

          {createError && (
            <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400" />
              <span>{createError}</span>
            </div>
          )}

          <form onSubmit={handleCreateCodingQuestion} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Problem Title *
              </label>
              <input
                type="text"
                placeholder="e.g. Subarray Sum Equals Target"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Difficulty
                </label>
                <select
                  value={newDifficulty}
                  onChange={(e: any) => setNewDifficulty(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                >
                  <option value="EASY">Easy</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="HARD">Hard</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Associated Company
                </label>
                <input
                  type="text"
                  placeholder="e.g. Google, Microsoft"
                  value={newCompany}
                  onChange={(e) => setNewCompany(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Algorithmic Patterns
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dynamic Programming, Two Pointers"
                  value={newPatterns}
                  onChange={(e) => setNewPatterns(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Problem Description & Statement *
              </label>
              <textarea
                rows={6}
                placeholder="Detailed statement, input/output formats, constraints (e.g. 1 <= N <= 10^5)..."
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500 font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Sample Test Input
                </label>
                <textarea
                  rows={3}
                  placeholder="Sample stdin input"
                  value={newSampleInput}
                  onChange={(e) => setNewSampleInput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Sample Expected Output
                </label>
                <textarea
                  rows={3}
                  placeholder="Sample stdout expected output"
                  value={newSampleOutput}
                  onChange={(e) => setNewSampleOutput(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2 text-xs text-slate-200 font-mono focus:outline-none focus:border-brand-500"
                />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <Button
                variant="primary"
                size="md"
                type="submit"
                isLoading={creating}
                leftIcon={<Plus className="w-4 h-4" />}
              >
                Save Question to Repository
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* PREVIEW MODAL */}
      {previewItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl flex flex-col max-h-[85vh] animate-in fade-in zoom-in-95 duration-150">
            <div className="p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
              <div className="flex items-center gap-3">
                <Badge
                  variant={
                    previewItem.difficulty === 'EASY'
                      ? 'success'
                      : previewItem.difficulty === 'HARD'
                      ? 'danger'
                      : 'warning'
                  }
                  size="sm"
                >
                  {previewItem.difficulty}
                </Badge>
                <h3 className="text-lg font-bold text-white">{previewItem.title}</h3>
              </div>
              <button
                onClick={() => setPreviewItem(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto flex-1 p-6 space-y-4 text-xs text-slate-300">
              <div className="flex gap-2 flex-wrap">
                {previewItem.companyTags?.map((comp: any) => {
                  const cName = typeof comp === 'object' ? comp.company : comp;
                  return (
                    <span
                      key={cName}
                      className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px]"
                    >
                      {cName}
                    </span>
                  );
                })}
                {previewItem.patterns?.map((p: string) => (
                  <span
                    key={p}
                    className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 font-mono text-[11px]"
                  >
                    Pattern: {p}
                  </span>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 whitespace-pre-line leading-relaxed text-slate-200 font-sans">
                {previewItem.description}
              </div>

              {previewItem.testCases && previewItem.testCases.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-400 uppercase tracking-wider text-[11px]">
                    Sample Testcases
                  </h4>
                  {previewItem.testCases.slice(0, 2).map((tc: any, i: number) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px]">
                      <p className="text-slate-400">Input: {tc.input}</p>
                      <p className="text-emerald-400">Expected: {tc.expectedOutput}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950/80 flex justify-between items-center">
              <Button variant="outline" size="sm" onClick={() => setPreviewItem(null)}>
                Close Preview
              </Button>
              <Button
                variant="primary"
                size="sm"
                className="bg-brand-600 hover:bg-brand-500"
                onClick={() => {
                  const qId = previewItem._id;
                  setPreviewItem(null);
                  navigate(`/faculty/tests/new?questionId=${qId}&type=CODING`);
                }}
                leftIcon={<Plus className="w-3.5 h-3.5" />}
              >
                Add to Assessment
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
