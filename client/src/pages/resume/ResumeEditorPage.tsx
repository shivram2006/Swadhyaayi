import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Save,
  Printer,
  Sparkles,
  Target,
  Plus,
  Trash2,
  AlertTriangle,
  Zap,
  Layers,
  FileCode,
  Download,
} from 'lucide-react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { ResumeApi } from '../../modules/resume/resumeApi';
import { IResume, IATSAnalysisResult, TargetRole } from '../../modules/resume/types';

const DEFAULT_RESUME: Partial<IResume> = {
  title: 'Software Engineer Resume',
  targetRole: 'sde',
  isDefault: true,
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    linkedinUrl: '',
    githubUrl: '',
    portfolioUrl: '',
    codingProfiles: {
      leetcode: '',
      swadhyayi: '',
    },
  },
  summary: '',
  education: [
    {
      institution: '',
      degree: 'B.Tech',
      fieldOfStudy: 'Computer Science and Engineering',
      startDate: '2022',
      endDate: '2026',
      current: true,
      cgpaOrPercentage: '',
      location: '',
    },
  ],
  skills: {
    languages: [],
    frameworks: [],
    databases: [],
    toolsAndCloud: [],
    coreFundamentals: [],
  },
  experience: [],
  projects: [],
  certifications: [],
  achievements: [],
};

export const ResumeEditorPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [resume, setResume] = useState<Partial<IResume>>(DEFAULT_RESUME);
  const [activeTab, setActiveTab] = useState<'personal' | 'summary' | 'education' | 'skills' | 'experience' | 'projects' | 'achievements'>('personal');
  const [rightView, setRightView] = useState<'ats' | 'preview'>('ats');
  const [analysis, setAnalysis] = useState<IATSAnalysisResult | null>(null);
  const [customJD, setCustomJD] = useState<string>('');
  const [saving, setSaving] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // New skill input temporary state
  const [newSkill, setNewSkill] = useState<{ category: keyof IResume['skills']; value: string }>({
    category: 'languages',
    value: '',
  });

  useEffect(() => {
    if (id && id !== 'new') {
      fetchResume(id);
    } else {
      // Analyze default template
      runAnalysis(DEFAULT_RESUME);
    }
  }, [id]);

  const fetchResume = async (resumeId: string) => {
    try {
      setLoading(true);
      const data = await ResumeApi.getResumeById(resumeId);
      setResume(data);
      runAnalysis(data);
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to load resume');
      navigate('/resumes');
    } finally {
      setLoading(false);
    }
  };

  const runAnalysis = async (resumeData: Partial<IResume>, jd?: string) => {
    try {
      const res = await ResumeApi.analyzeRawResume(resumeData, jd || customJD);
      setAnalysis(res);
    } catch {
      // Fallback silent fail
    }
  };

  // Re-run real-time analysis whenever key sections update
  const updateResumeField = (updater: (prev: Partial<IResume>) => Partial<IResume>) => {
    setResume((prev) => {
      const next = updater(prev);
      runAnalysis(next);
      return next;
    });
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      if (id && id !== 'new') {
        const updated = await ResumeApi.updateResume(id, resume);
        setResume(updated);
        alert('Resume saved successfully!');
      } else {
        const created = await ResumeApi.createResume(resume);
        alert('Resume created successfully!');
        navigate(`/resumes/${created._id}`, { replace: true });
      }
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to save resume');
    } finally {
      setSaving(false);
    }
  };

  const handleSyncFromProfile = async () => {
    if (!window.confirm('Sync with Swadhyayi profile? This will update your contact info, college, and achievements.')) return;
    try {
      const draft = await ResumeApi.syncFromProfile();
      updateResumeField((prev) => ({
        ...prev,
        personalInfo: {
          fullName: draft.personalInfo?.fullName || prev.personalInfo?.fullName || '',
          email: draft.personalInfo?.email || prev.personalInfo?.email || '',
          phone: draft.personalInfo?.phone || prev.personalInfo?.phone || '',
          location: draft.personalInfo?.location || prev.personalInfo?.location || '',
          linkedinUrl: draft.personalInfo?.linkedinUrl || prev.personalInfo?.linkedinUrl || '',
          githubUrl: draft.personalInfo?.githubUrl || prev.personalInfo?.githubUrl || '',
          portfolioUrl: draft.personalInfo?.portfolioUrl || prev.personalInfo?.portfolioUrl || '',
          codingProfiles: {
            leetcode: draft.personalInfo?.codingProfiles?.leetcode || prev.personalInfo?.codingProfiles?.leetcode || '',
            swadhyayi: draft.personalInfo?.codingProfiles?.swadhyayi || prev.personalInfo?.codingProfiles?.swadhyayi || '',
          },
        },
        education: draft.education && draft.education.length > 0 ? draft.education : prev.education,
        achievements: Array.from(new Set([...(prev.achievements || []), ...(draft.achievements || [])])),
      }));
    } catch (err: any) {
      alert(err?.response?.data?.message || 'Failed to sync profile');
    }
  };

  const handleAddMissingKeyword = (kw: string) => {
    updateResumeField((prev) => {
      const skills = { ...(prev.skills || { languages: [], frameworks: [], databases: [], toolsAndCloud: [], coreFundamentals: [] }) };
      skills.toolsAndCloud = [...(skills.toolsAndCloud || []), kw];
      return { ...prev, skills };
    });
  };

  const handleAddSkill = () => {
    if (!newSkill.value.trim()) return;
    updateResumeField((prev) => {
      const skills = { ...(prev.skills || { languages: [], frameworks: [], databases: [], toolsAndCloud: [], coreFundamentals: [] }) };
      const cat = newSkill.category;
      skills[cat] = [...(skills[cat] || []), newSkill.value.trim()];
      return { ...prev, skills };
    });
    setNewSkill((prev) => ({ ...prev, value: '' }));
  };

  const handleRemoveSkill = (category: keyof IResume['skills'], skillToRemove: string) => {
    updateResumeField((prev) => {
      const skills = { ...(prev.skills || { languages: [], frameworks: [], databases: [], toolsAndCloud: [], coreFundamentals: [] }) };
      skills[category] = (skills[category] || []).filter((s) => s !== skillToRemove);
      return { ...prev, skills };
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(resume, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${resume.title || 'resume'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] text-slate-400">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm">Loading ATS Workspace...</p>
        </div>
      </div>
    );
  }

  const score = analysis?.totalScore || 0;
  const targetRoles: TargetRole[] = ['mern', 'java', 'aiml', 'frontend', 'backend', 'devops', 'sde', 'general'];

  return (
    <div className="space-y-5 pb-12">
      {/* Top Header Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/resumes')}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <input
              type="text"
              value={resume.title || ''}
              onChange={(e) => updateResumeField((prev) => ({ ...prev, title: e.target.value }))}
              className="bg-transparent text-xl font-bold text-white border-b border-transparent hover:border-slate-700 focus:border-brand-500 focus:outline-none transition-colors px-1"
            />
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-slate-400">Target Role:</span>
              <select
                value={resume.targetRole || 'sde'}
                onChange={(e) => {
                  const role = e.target.value as TargetRole;
                  updateResumeField((prev) => ({ ...prev, targetRole: role }));
                }}
                className="bg-slate-900 border border-slate-800 text-brand-300 text-xs rounded px-2 py-0.5 focus:outline-none focus:border-brand-500 font-mono uppercase"
              >
                {targetRoles.map((r) => (
                  <option key={r} value={r}>
                    {r.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={handleSyncFromProfile}
            className="flex items-center gap-1.5 text-xs border-brand-500/30 text-brand-300 hover:bg-brand-500/10"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Sync Profile
          </Button>

          <Button
            variant="outline"
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 text-xs text-slate-300 border-slate-800"
          >
            <Download className="w-3.5 h-3.5" />
            JSON
          </Button>

          <Button
            variant="outline"
            onClick={handlePrint}
            className="flex items-center gap-1.5 text-xs text-slate-300 border-slate-800"
          >
            <Printer className="w-3.5 h-3.5" />
            Print / PDF
          </Button>

          <Button
            variant="primary"
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-1.5 text-xs"
          >
            <Save className="w-3.5 h-3.5" />
            {saving ? 'Saving...' : 'Save Resume'}
          </Button>
        </div>
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Form Editor (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Section Navigation Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 border-b border-slate-800 text-xs font-medium text-slate-400 scrollbar-none">
            {[
              { id: 'personal', label: 'Contact Info' },
              { id: 'summary', label: 'Summary' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'experience', label: 'Experience' },
              { id: 'projects', label: 'Projects' },
              { id: 'achievements', label: 'Achievements' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-brand-500/20 text-brand-300 font-semibold border border-brand-500/30'
                    : 'hover:bg-slate-800/60 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: PERSONAL / CONTACT */}
          {activeTab === 'personal' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                Contact & Online Footprint
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  value={resume.personalInfo?.fullName || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, fullName: e.target.value },
                    }))
                  }
                  placeholder="e.g. Aarav Sharma"
                />
                <Input
                  label="Email Address *"
                  type="email"
                  value={resume.personalInfo?.email || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, email: e.target.value },
                    }))
                  }
                  placeholder="e.g. student@college.edu"
                />
                <Input
                  label="Phone Number *"
                  value={resume.personalInfo?.phone || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, phone: e.target.value },
                    }))
                  }
                  placeholder="+91 9876543210"
                />
                <Input
                  label="Location"
                  value={resume.personalInfo?.location || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, location: e.target.value },
                    }))
                  }
                  placeholder="City, State"
                />
                <Input
                  label="LinkedIn Profile URL"
                  value={resume.personalInfo?.linkedinUrl || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, linkedinUrl: e.target.value },
                    }))
                  }
                  placeholder="https://linkedin.com/in/username"
                />
                <Input
                  label="GitHub Profile URL"
                  value={resume.personalInfo?.githubUrl || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, githubUrl: e.target.value },
                    }))
                  }
                  placeholder="https://github.com/username"
                />
                <Input
                  label="Portfolio / Website URL"
                  value={resume.personalInfo?.portfolioUrl || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: { ...prev.personalInfo!, portfolioUrl: e.target.value },
                    }))
                  }
                  placeholder="https://myportfolio.dev"
                />
                <Input
                  label="LeetCode Profile URL"
                  value={resume.personalInfo?.codingProfiles?.leetcode || ''}
                  onChange={(e) =>
                    updateResumeField((prev) => ({
                      ...prev,
                      personalInfo: {
                        ...prev.personalInfo!,
                        codingProfiles: {
                          ...prev.personalInfo?.codingProfiles,
                          leetcode: e.target.value,
                        },
                      },
                    }))
                  }
                  placeholder="https://leetcode.com/username"
                />
              </div>
            </Card>
          )}

          {/* TAB 2: PROFESSIONAL SUMMARY */}
          {activeTab === 'summary' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                  Professional Summary
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  {(resume.summary || '').length} / 400 chars
                </span>
              </div>
              <textarea
                rows={5}
                value={resume.summary || ''}
                onChange={(e) => updateResumeField((prev) => ({ ...prev, summary: e.target.value }))}
                placeholder="High-impact 2-3 sentence overview highlighting your engineering specialization, core technologies, and placement readiness."
                className="w-full bg-slate-950 border border-slate-800 rounded-lg p-3 text-sm text-slate-200 focus:outline-none focus:border-brand-500 leading-relaxed"
              />
              <p className="text-xs text-slate-400">
                Tip: Optimal ATS summary length is between 50 and 300 characters. Mention your key tech stack and career aspiration.
              </p>
            </Card>
          )}

          {/* TAB 3: EDUCATION */}
          {activeTab === 'education' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                  Education Details
                </h3>
                <Button
                  variant="outline"
                  onClick={() =>
                    updateResumeField((prev) => ({
                      ...prev,
                      education: [
                        ...(prev.education || []),
                        {
                          institution: '',
                          degree: '',
                          fieldOfStudy: '',
                          startDate: '',
                          endDate: '',
                          current: false,
                          cgpaOrPercentage: '',
                          location: '',
                        },
                      ],
                    }))
                  }
                  className="flex items-center gap-1 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Education
                </Button>
              </div>

              {(resume.education || []).map((edu, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-950 border border-slate-850 space-y-3 relative">
                  <button
                    onClick={() =>
                      updateResumeField((prev) => ({
                        ...prev,
                        education: prev.education?.filter((_, i) => i !== idx),
                      }))
                    }
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-8">
                    <Input
                      label="Institution / College *"
                      value={edu.institution}
                      onChange={(e) => {
                        const copy = [...(resume.education || [])];
                        copy[idx].institution = e.target.value;
                        updateResumeField((prev) => ({ ...prev, education: copy }));
                      }}
                      placeholder="e.g. NIT Surat"
                    />
                    <Input
                      label="Degree *"
                      value={edu.degree}
                      onChange={(e) => {
                        const copy = [...(resume.education || [])];
                        copy[idx].degree = e.target.value;
                        updateResumeField((prev) => ({ ...prev, education: copy }));
                      }}
                      placeholder="e.g. B.Tech"
                    />
                    <Input
                      label="Field of Study / Branch *"
                      value={edu.fieldOfStudy}
                      onChange={(e) => {
                        const copy = [...(resume.education || [])];
                        copy[idx].fieldOfStudy = e.target.value;
                        updateResumeField((prev) => ({ ...prev, education: copy }));
                      }}
                      placeholder="Computer Science and Engineering"
                    />
                    <Input
                      label="CGPA or Percentage"
                      value={edu.cgpaOrPercentage}
                      onChange={(e) => {
                        const copy = [...(resume.education || [])];
                        copy[idx].cgpaOrPercentage = e.target.value;
                        updateResumeField((prev) => ({ ...prev, education: copy }));
                      }}
                      placeholder="e.g. 8.9 CGPA or 85%"
                    />
                    <Input
                      label="Start Year"
                      value={edu.startDate}
                      onChange={(e) => {
                        const copy = [...(resume.education || [])];
                        copy[idx].startDate = e.target.value;
                        updateResumeField((prev) => ({ ...prev, education: copy }));
                      }}
                      placeholder="2022"
                    />
                    <Input
                      label="End Year (or Expected)"
                      value={edu.endDate}
                      onChange={(e) => {
                        const copy = [...(resume.education || [])];
                        copy[idx].endDate = e.target.value;
                        updateResumeField((prev) => ({ ...prev, education: copy }));
                      }}
                      placeholder="2026"
                    />
                  </div>
                </div>
              ))}
            </Card>
          )}

          {/* TAB 4: SKILLS */}
          {activeTab === 'skills' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-5">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                Technical Skills Architecture
              </h3>

              {/* Add Skill Bar */}
              <div className="flex flex-col sm:flex-row items-center gap-2 p-3 bg-slate-950 rounded-lg border border-slate-800">
                <select
                  value={newSkill.category}
                  onChange={(e) => setNewSkill({ ...newSkill, category: e.target.value as any })}
                  className="bg-slate-900 border border-slate-800 rounded px-2.5 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-brand-500"
                >
                  <option value="languages">Languages</option>
                  <option value="frameworks">Frameworks & Libraries</option>
                  <option value="databases">Databases</option>
                  <option value="toolsAndCloud">Tools & Cloud</option>
                  <option value="coreFundamentals">Core CS Fundamentals</option>
                </select>

                <input
                  type="text"
                  value={newSkill.value}
                  onChange={(e) => setNewSkill({ ...newSkill, value: e.target.value })}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddSkill()}
                  placeholder="Enter skill (e.g. TypeScript, Redis, Docker)..."
                  className="flex-1 bg-slate-900 border border-slate-800 rounded px-3 py-1.5 text-xs text-white focus:outline-none focus:border-brand-500"
                />

                <Button variant="primary" onClick={handleAddSkill} className="text-xs px-3 py-1.5">
                  <Plus className="w-3.5 h-3.5 mr-1" />
                  Add
                </Button>
              </div>

              {/* Category Badges Display */}
              {(
                [
                  { key: 'languages', label: 'Programming Languages' },
                  { key: 'frameworks', label: 'Frameworks & Libraries' },
                  { key: 'databases', label: 'Databases & Caching' },
                  { key: 'toolsAndCloud', label: 'Developer Tools & Cloud' },
                  { key: 'coreFundamentals', label: 'Core CS Fundamentals' },
                ] as const
              ).map((cat) => {
                const list = resume.skills?.[cat.key] || [];
                return (
                  <div key={cat.key} className="space-y-1.5">
                    <span className="text-xs font-semibold text-slate-400">{cat.label}</span>
                    <div className="flex flex-wrap gap-1.5 min-h-7 p-2 rounded-lg bg-slate-950 border border-slate-850">
                      {list.length === 0 ? (
                        <span className="text-xs text-slate-600 italic">No skills added yet</span>
                      ) : (
                        list.map((s, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-750 text-xs text-slate-300"
                          >
                            {s}
                            <button
                              onClick={() => handleRemoveSkill(cat.key, s)}
                              className="text-slate-500 hover:text-rose-400 ml-1 text-sm leading-none"
                            >
                              &times;
                            </button>
                          </span>
                        ))
                      )}
                    </div>
                  </div>
                );
              })}
            </Card>
          )}

          {/* TAB 5: EXPERIENCE */}
          {activeTab === 'experience' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                    Internships & Experience
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Quantify impact with numbers (e.g. "reduced latency by 35% across 10k users").
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    updateResumeField((prev) => ({
                      ...prev,
                      experience: [
                        ...(prev.experience || []),
                        {
                          company: '',
                          role: '',
                          location: '',
                          startDate: '',
                          endDate: '',
                          current: false,
                          bullets: ['Architected ...'],
                        },
                      ],
                    }))
                  }
                  className="flex items-center gap-1 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Position
                </Button>
              </div>

              {(resume.experience || []).map((exp, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-950 border border-slate-850 space-y-3 relative">
                  <button
                    onClick={() =>
                      updateResumeField((prev) => ({
                        ...prev,
                        experience: prev.experience?.filter((_, i) => i !== idx),
                      }))
                    }
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-8">
                    <Input
                      label="Company Name *"
                      value={exp.company}
                      onChange={(e) => {
                        const copy = [...(resume.experience || [])];
                        copy[idx].company = e.target.value;
                        updateResumeField((prev) => ({ ...prev, experience: copy }));
                      }}
                      placeholder="e.g. Acme Tech Labs"
                    />
                    <Input
                      label="Job Role *"
                      value={exp.role}
                      onChange={(e) => {
                        const copy = [...(resume.experience || [])];
                        copy[idx].role = e.target.value;
                        updateResumeField((prev) => ({ ...prev, experience: copy }));
                      }}
                      placeholder="Software Development Intern"
                    />
                    <Input
                      label="Duration / Dates"
                      value={`${exp.startDate} - ${exp.endDate}`}
                      onChange={(e) => {
                        const copy = [...(resume.experience || [])];
                        copy[idx].startDate = e.target.value;
                        updateResumeField((prev) => ({ ...prev, experience: copy }));
                      }}
                      placeholder="May 2025 - July 2025"
                    />
                    <Input
                      label="Location"
                      value={exp.location}
                      onChange={(e) => {
                        const copy = [...(resume.experience || [])];
                        copy[idx].location = e.target.value;
                        updateResumeField((prev) => ({ ...prev, experience: copy }));
                      }}
                      placeholder="Bengaluru, India"
                    />
                  </div>

                  {/* Bullets */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Key Contributions (Google XYZ Formula)</span>
                      <button
                        onClick={() => {
                          const copy = [...(resume.experience || [])];
                          copy[idx].bullets.push('');
                          updateResumeField((prev) => ({ ...prev, experience: copy }));
                        }}
                        className="text-brand-400 hover:text-brand-300 text-xs font-medium"
                      >
                        + Add Bullet
                      </button>
                    </div>

                    {exp.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <textarea
                          rows={2}
                          value={b}
                          onChange={(e) => {
                            const copy = [...(resume.experience || [])];
                            copy[idx].bullets[bIdx] = e.target.value;
                            updateResumeField((prev) => ({ ...prev, experience: copy }));
                          }}
                          placeholder="Accomplished [X] as measured by [Y] by doing [Z] (e.g. Optimized caching layer handling 5k+ req/sec)..."
                          className="flex-1 bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                        />
                        <button
                          onClick={() => {
                            const copy = [...(resume.experience || [])];
                            copy[idx].bullets = copy[idx].bullets.filter((_, i) => i !== bIdx);
                            updateResumeField((prev) => ({ ...prev, experience: copy }));
                          }}
                          className="p-1 text-slate-600 hover:text-rose-400 mt-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          )}

          {/* TAB 6: PROJECTS */}
          {activeTab === 'projects' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-5">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                    Technical Projects (Min. 2 Recommended)
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Highlight architecture, live URLs, and quantitative scale.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    updateResumeField((prev) => ({
                      ...prev,
                      projects: [
                        ...(prev.projects || []),
                        {
                          title: '',
                          techStack: [],
                          liveUrl: '',
                          githubUrl: '',
                          bullets: ['Engineered ...'],
                        },
                      ],
                    }))
                  }
                  className="flex items-center gap-1 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Project
                </Button>
              </div>

              {(resume.projects || []).map((proj, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-950 border border-slate-850 space-y-3 relative">
                  <button
                    onClick={() =>
                      updateResumeField((prev) => ({
                        ...prev,
                        projects: prev.projects?.filter((_, i) => i !== idx),
                      }))
                    }
                    className="absolute top-3 right-3 text-slate-500 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pr-8">
                    <Input
                      label="Project Title *"
                      value={proj.title}
                      onChange={(e) => {
                        const copy = [...(resume.projects || [])];
                        copy[idx].title = e.target.value;
                        updateResumeField((prev) => ({ ...prev, projects: copy }));
                      }}
                      placeholder="e.g. Distributed Assessment Engine"
                    />
                    <Input
                      label="Tech Stack (comma-separated)"
                      value={proj.techStack?.join(', ') || ''}
                      onChange={(e) => {
                        const copy = [...(resume.projects || [])];
                        copy[idx].techStack = e.target.value.split(',').map((s) => s.trim()).filter(Boolean);
                        updateResumeField((prev) => ({ ...prev, projects: copy }));
                      }}
                      placeholder="React, Node.js, Redis, Docker"
                    />
                    <Input
                      label="Live Demo Link"
                      value={proj.liveUrl || ''}
                      onChange={(e) => {
                        const copy = [...(resume.projects || [])];
                        copy[idx].liveUrl = e.target.value;
                        updateResumeField((prev) => ({ ...prev, projects: copy }));
                      }}
                      placeholder="https://myproject.app"
                    />
                    <Input
                      label="GitHub Repository Link"
                      value={proj.githubUrl || ''}
                      onChange={(e) => {
                        const copy = [...(resume.projects || [])];
                        copy[idx].githubUrl = e.target.value;
                        updateResumeField((prev) => ({ ...prev, projects: copy }));
                      }}
                      placeholder="https://github.com/myrepo"
                    />
                  </div>

                  {/* Project Bullets */}
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300">Project Highlights</span>
                      <button
                        onClick={() => {
                          const copy = [...(resume.projects || [])];
                          copy[idx].bullets.push('');
                          updateResumeField((prev) => ({ ...prev, projects: copy }));
                        }}
                        className="text-brand-400 hover:text-brand-300 text-xs font-medium"
                      >
                        + Add Bullet
                      </button>
                    </div>

                    {proj.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <textarea
                          rows={2}
                          value={b}
                          onChange={(e) => {
                            const copy = [...(resume.projects || [])];
                            copy[idx].bullets[bIdx] = e.target.value;
                            updateResumeField((prev) => ({ ...prev, projects: copy }));
                          }}
                          placeholder="Spearheaded implementation of..."
                          className="flex-1 bg-slate-900 border border-slate-800 rounded p-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                        />
                        <button
                          onClick={() => {
                            const copy = [...(resume.projects || [])];
                            copy[idx].bullets = copy[idx].bullets.filter((_, i) => i !== bIdx);
                            updateResumeField((prev) => ({ ...prev, projects: copy }));
                          }}
                          className="p-1 text-slate-600 hover:text-rose-400 mt-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Card>
          )}

          {/* TAB 7: ACHIEVEMENTS */}
          {activeTab === 'achievements' && (
            <Card className="p-5 bg-slate-900/60 border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                    Honors & Platform Achievements
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Coding rankings, hackathon wins, and verified platform streaks.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() =>
                    updateResumeField((prev) => ({
                      ...prev,
                      achievements: [...(prev.achievements || []), ''],
                    }))
                  }
                  className="flex items-center gap-1 text-xs"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add Item
                </Button>
              </div>

              {(resume.achievements || []).map((ach, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={ach}
                    onChange={(e) => {
                      const copy = [...(resume.achievements || [])];
                      copy[idx] = e.target.value;
                      updateResumeField((prev) => ({ ...prev, achievements: copy }));
                    }}
                    placeholder="e.g. Ranked Top 1% on Swadhyayi Global Leaderboard with 150+ problems solved"
                    className="flex-1 bg-slate-950 border border-slate-800 rounded p-2.5 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                  />
                  <button
                    onClick={() =>
                      updateResumeField((prev) => ({
                        ...prev,
                        achievements: prev.achievements?.filter((_, i) => i !== idx),
                      }))
                    }
                    className="p-2 text-slate-500 hover:text-rose-400"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </Card>
          )}
        </div>

        {/* Right Side: ATS Diagnostics & Live Harvard Print Preview (5 Columns) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Mode Selector */}
          <div className="flex items-center justify-between p-1 bg-slate-900 border border-slate-800 rounded-xl">
            <button
              onClick={() => setRightView('ats')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                rightView === 'ats' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              ATS Diagnostics Radar
            </button>
            <button
              onClick={() => setRightView('preview')}
              className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 ${
                rightView === 'preview' ? 'bg-brand-500 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode className="w-3.5 h-3.5" />
              Harvard ATS Preview
            </button>
          </div>

          {/* VIEW A: ATS RADAR & DIAGNOSTICS */}
          {rightView === 'ats' ? (
            <div className="space-y-4">
              {/* Dial Card */}
              <Card className="p-5 bg-slate-900/80 border-slate-800 text-center relative overflow-hidden">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-28 h-28 rounded-full border-4 flex flex-col items-center justify-center ${
                      score >= 80
                        ? 'border-emerald-500 bg-emerald-500/10 text-emerald-400'
                        : score >= 60
                        ? 'border-amber-500 bg-amber-500/10 text-amber-400'
                        : 'border-rose-500 bg-rose-500/10 text-rose-400'
                    }`}
                  >
                    <span className="text-3xl font-extrabold font-mono tracking-tight">{score}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider">ATS Score</span>
                  </div>

                  <p className="text-sm font-semibold text-white mt-3">
                    {score >= 85
                      ? '🚀 Excellent — Placement ATS Pass Ready'
                      : score >= 70
                      ? '⚡ Good — Minor Polish Required'
                      : '⚠️ Action Needed — High Rejection Risk'}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Evaluated against Taleo, Workday, and Lever enterprise parsing heuristics.
                  </p>
                </div>

                {/* 4 Core Dimensions */}
                <div className="mt-5 grid grid-cols-2 gap-3 text-left">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Completeness</span>
                    <p className="text-sm font-bold text-slate-200 mt-0.5">
                      {analysis?.sectionScores.completeness || 0} / 25
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Action Verbs</span>
                    <p className="text-sm font-bold text-brand-300 mt-0.5">
                      {analysis?.sectionScores.actionVerbs || 0} / 25
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Quantifiable Metrics</span>
                    <p className="text-sm font-bold text-emerald-300 mt-0.5">
                      {analysis?.sectionScores.quantifiableMetrics || 0} / 25
                    </p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-850">
                    <span className="text-[10px] text-slate-400 uppercase font-semibold">Role Keyword Match</span>
                    <p className="text-sm font-bold text-purple-300 mt-0.5">
                      {analysis?.sectionScores.keywordMatch || 0} / 25
                    </p>
                  </div>
                </div>
              </Card>

              {/* Missing Recommended Keywords Card */}
              {analysis?.missingKeywords && analysis.missingKeywords.length > 0 && (
                <Card className="p-4 bg-slate-900/80 border-slate-800 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                    <Target className="w-4 h-4" />
                    Missing Critical Role Keywords
                  </div>
                  <p className="text-xs text-slate-400">
                    Click to instantly add missing keywords to your technical skills:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {analysis.missingKeywords.map((kw, i) => (
                      <button
                        key={i}
                        onClick={() => handleAddMissingKeyword(kw)}
                        className="px-2 py-1 rounded bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs hover:bg-amber-500/20 transition-colors flex items-center gap-1 font-mono"
                      >
                        <Plus className="w-2.5 h-2.5" />
                        {kw}
                      </button>
                    ))}
                  </div>
                </Card>
              )}

              {/* Formatting & Warnings Checklist */}
              {analysis?.formattingIssues && analysis.formattingIssues.length > 0 && (
                <Card className="p-4 bg-slate-900/80 border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                    Formatting & Parsing Audits
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {analysis.formattingIssues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-slate-400">
                        <span className="text-amber-400">•</span>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </Card>
              )}

              {/* Custom Job Description Scanner */}
              <Card className="p-4 bg-slate-900/80 border-slate-800 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-brand-400" />
                  Target Specific Job Description
                </span>
                <textarea
                  rows={3}
                  value={customJD}
                  onChange={(e) => setCustomJD(e.target.value)}
                  placeholder="Paste LinkedIn, Naukri, or campus job posting text here to test match..."
                  className="w-full bg-slate-950 border border-slate-800 rounded p-2 text-xs text-slate-200 focus:outline-none focus:border-brand-500"
                />
                <Button
                  variant="outline"
                  onClick={() => runAnalysis(resume, customJD)}
                  className="w-full text-xs py-1.5 border-brand-500/30 text-brand-300"
                >
                  Rescan Resume Against This Job
                </Button>
              </Card>
            </div>
          ) : (
            /* VIEW B: HARVARD ATS PRINT PREVIEW */
            <Card className="p-6 bg-white text-slate-900 rounded-none shadow-xl border border-slate-300 print:shadow-none print:border-none print:p-0 min-h-[750px] font-serif text-[11px] leading-snug">
              {/* Header */}
              <div className="text-center border-b border-slate-400 pb-2 mb-3">
                <h1 className="text-lg font-bold uppercase tracking-wider font-sans text-slate-950">
                  {resume.personalInfo?.fullName || 'FIRST LAST'}
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-2 mt-1 text-[10px] text-slate-700 font-sans">
                  {resume.personalInfo?.location && <span>{resume.personalInfo.location}</span>}
                  {resume.personalInfo?.phone && <span>• {resume.personalInfo.phone}</span>}
                  {resume.personalInfo?.email && <span>• {resume.personalInfo.email}</span>}
                  {resume.personalInfo?.linkedinUrl && <span>• LinkedIn</span>}
                  {resume.personalInfo?.githubUrl && <span>• GitHub</span>}
                </div>
              </div>

              {/* Summary */}
              {resume.summary && (
                <div className="mb-3">
                  <h2 className="text-[11px] font-bold uppercase tracking-wider border-b border-slate-300 font-sans pb-0.5 mb-1 text-slate-900">
                    Professional Summary
                  </h2>
                  <p className="text-justify text-slate-800">{resume.summary}</p>
                </div>
              )}

              {/* Education */}
              {resume.education && resume.education.length > 0 && (
                <div className="mb-3">
                  <h2 className="text-[11px] font-bold uppercase tracking-wider border-b border-slate-300 font-sans pb-0.5 mb-1 text-slate-900">
                    Education
                  </h2>
                  {resume.education.map((edu, i) => (
                    <div key={i} className="mb-1.5">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{edu.institution}</span>
                        <span className="font-normal text-[10px]">
                          {edu.startDate} – {edu.endDate}
                        </span>
                      </div>
                      <div className="flex justify-between italic text-slate-700">
                        <span>
                          {edu.degree} in {edu.fieldOfStudy}
                        </span>
                        {edu.cgpaOrPercentage && (
                          <span className="not-italic font-medium">{edu.cgpaOrPercentage}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Skills */}
              {resume.skills && (
                <div className="mb-3">
                  <h2 className="text-[11px] font-bold uppercase tracking-wider border-b border-slate-300 font-sans pb-0.5 mb-1 text-slate-900">
                    Technical Skills
                  </h2>
                  <div className="space-y-0.5 text-slate-800">
                    {resume.skills.languages?.length > 0 && (
                      <p>
                        <strong className="font-sans">Languages:</strong>{' '}
                        {resume.skills.languages.join(', ')}
                      </p>
                    )}
                    {resume.skills.frameworks?.length > 0 && (
                      <p>
                        <strong className="font-sans">Frameworks:</strong>{' '}
                        {resume.skills.frameworks.join(', ')}
                      </p>
                    )}
                    {resume.skills.databases?.length > 0 && (
                      <p>
                        <strong className="font-sans">Databases & Cloud:</strong>{' '}
                        {resume.skills.databases.concat(resume.skills.toolsAndCloud || []).join(', ')}
                      </p>
                    )}
                    {resume.skills.coreFundamentals?.length > 0 && (
                      <p>
                        <strong className="font-sans">Core Fundamentals:</strong>{' '}
                        {resume.skills.coreFundamentals.join(', ')}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Experience */}
              {resume.experience && resume.experience.length > 0 && (
                <div className="mb-3">
                  <h2 className="text-[11px] font-bold uppercase tracking-wider border-b border-slate-300 font-sans pb-0.5 mb-1 text-slate-900">
                    Experience & Internships
                  </h2>
                  {resume.experience.map((exp, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>{exp.company}</span>
                        <span className="font-normal text-[10px]">
                          {exp.startDate} – {exp.endDate}
                        </span>
                      </div>
                      <div className="italic text-slate-700 mb-0.5">{exp.role}</div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-800">
                        {exp.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Projects */}
              {resume.projects && resume.projects.length > 0 && (
                <div className="mb-3">
                  <h2 className="text-[11px] font-bold uppercase tracking-wider border-b border-slate-300 font-sans pb-0.5 mb-1 text-slate-900">
                    Key Projects
                  </h2>
                  {resume.projects.map((proj, i) => (
                    <div key={i} className="mb-2">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>
                          {proj.title}{' '}
                          {proj.techStack?.length > 0 && (
                            <span className="font-normal text-[10px] text-slate-600 font-sans">
                              | {proj.techStack.join(', ')}
                            </span>
                          )}
                        </span>
                        {proj.liveUrl && (
                          <span className="font-normal text-[10px] text-brand-700 font-sans">
                            [Demo]
                          </span>
                        )}
                      </div>
                      <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-800">
                        {proj.bullets.map((b, bIdx) => (
                          <li key={bIdx}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {/* Achievements */}
              {resume.achievements && resume.achievements.length > 0 && (
                <div>
                  <h2 className="text-[11px] font-bold uppercase tracking-wider border-b border-slate-300 font-sans pb-0.5 mb-1 text-slate-900">
                    Achievements & Ratings
                  </h2>
                  <ul className="list-disc list-outside pl-4 space-y-0.5 text-slate-800">
                    {resume.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};
