import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Badge } from '../../components/common/Badge';
import {
  GraduationCap,
  Briefcase,
  Code2,
  Github,
  Linkedin,
  Globe,
  CheckCircle2,
  History,
  Phone,
} from 'lucide-react';

export const StudentProfilePage: React.FC = () => {
  const { user } = useAuth();
  const [profileData, setProfileData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Form fields
  const [phoneNumber, setPhoneNumber] = useState('');
  const [targetDomain, setTargetDomain] = useState('Full Stack MERN Developer');
  const [cgpa, setCgpa] = useState<number>(8.5);
  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [skillInput, setSkillInput] = useState('');
  const [skills, setSkills] = useState<string[]>(['React', 'TypeScript', 'Node.js', 'MongoDB', 'Data Structures']);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('/auth/me');
        if (res.data.success) {
          const u = res.data.data.user;
          setProfileData(u);
          if (u.profile) {
            setPhoneNumber(u.profile.phoneNumber || '');
            setTargetDomain(u.profile.targetDomain || 'Full Stack MERN Developer');
            setCgpa(u.profile.cgpa || 8.5);
            setGithubUrl(u.profile.githubUrl || '');
            setLinkedinUrl(u.profile.linkedinUrl || '');
            setPortfolioUrl(u.profile.portfolioUrl || '');
            if (u.profile.skills && u.profile.skills.length > 0) {
              setSkills(u.profile.skills);
            }
          }
        }
      } catch (err) {
        console.error('Failed to load profile:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleAddSkill = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!skills.includes(skillInput.trim())) {
        setSkills([...skills, skillInput.trim()]);
      }
      setSkillInput('');
    }
  };

  const handleRemoveSkill = (skillToRemove: string) => {
    setSkills(skills.filter((s) => s !== skillToRemove));
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      await axios.patch('/students/profile', {
        phoneNumber,
        targetDomain,
        cgpa: Number(cgpa),
        githubUrl: githubUrl || undefined,
        linkedinUrl: linkedinUrl || undefined,
        portfolioUrl: portfolioUrl || undefined,
        skills,
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err: any) {
      alert(err.response?.data?.error?.message || 'Failed to update profile');
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center text-slate-400">Loading student profile...</div>;
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-brand-950/40 border border-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-brand-600/20 border border-brand-500/30 flex items-center justify-center text-2xl font-bold text-brand-400">
            {user?.firstName?.[0]}{user?.lastName?.[0]}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">
              {profileData?.firstName} {profileData?.lastName}
            </h1>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-2">
              <span className="font-mono text-brand-400 font-semibold">{profileData?.rollNumber}</span>
              <span>•</span>
              <span>{profileData?.departmentId?.name || 'Computer Science'}</span>
              <span>•</span>
              <Badge variant="brand" size="sm">Semester {profileData?.classId?.semester || 4}</Badge>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Placement Target</p>
            <p className="text-sm font-bold text-brand-300">{targetDomain}</p>
          </div>
        </div>
      </div>

      {saveSuccess && (
        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>Profile and technical competencies updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSaveProfile} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Col 1 & 2: Editable Professional Profile */}
          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-brand-400" />
                    Career & Placement Profile
                  </CardTitle>
                  <CardDescription>
                    These details guide ATS matching and company-specific test recommendations.
                  </CardDescription>
                </div>
              </CardHeader>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                      Target Career Domain
                    </label>
                    <select
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg text-sm text-slate-100 p-2.5"
                      value={targetDomain}
                      onChange={(e) => setTargetDomain(e.target.value)}
                    >
                      <option value="Full Stack MERN Developer">Full Stack MERN Developer</option>
                      <option value="Software Development Engineer (SDE)">Software Development Engineer (SDE)</option>
                      <option value="Java Full Stack Developer">Java Full Stack Developer</option>
                      <option value="Python & AI/ML Engineer">Python & AI/ML Engineer</option>
                      <option value="Cloud & DevOps Engineer">Cloud & DevOps Engineer</option>
                      <option value="Data Analyst & BI Specialist">Data Analyst & BI Specialist</option>
                    </select>
                  </div>

                  <Input
                    label="Current Academic CGPA"
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={cgpa}
                    onChange={(e) => setCgpa(parseFloat(e.target.value))}
                    placeholder="e.g. 8.75"
                  />
                </div>

                <Input
                  label="Contact Phone Number"
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+91 98765 43210"
                  leftIcon={<Phone className="w-4 h-4" />}
                />

                {/* Skills Tag Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">
                    Technical Skills & Frameworks (Press Enter to add)
                  </label>
                  <Input
                    placeholder="e.g. Docker, Redis, TailwindCSS..."
                    value={skillInput}
                    onChange={(e) => setSkillInput(e.target.value)}
                    onKeyDown={handleAddSkill}
                    leftIcon={<Code2 className="w-4 h-4" />}
                  />
                  <div className="flex flex-wrap gap-2 mt-3">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200"
                      >
                        {skill}
                        <button
                          type="button"
                          onClick={() => handleRemoveSkill(skill)}
                          className="text-slate-400 hover:text-rose-400"
                        >
                          &times;
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-slate-800 space-y-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Online Presence & Portfolios
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <Input
                      label="GitHub Profile URL"
                      placeholder="https://github.com/username"
                      value={githubUrl}
                      onChange={(e) => setGithubUrl(e.target.value)}
                      leftIcon={<Github className="w-4 h-4" />}
                    />
                    <Input
                      label="LinkedIn Profile URL"
                      placeholder="https://linkedin.com/in/username"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      leftIcon={<Linkedin className="w-4 h-4" />}
                    />
                  </div>
                  <Input
                    label="Personal Portfolio Website"
                    placeholder="https://myportfolio.dev"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    leftIcon={<Globe className="w-4 h-4" />}
                  />
                </div>

                <div className="pt-4 border-t border-slate-800 flex justify-end">
                  <Button type="submit" variant="primary" size="md" isLoading={isSaving}>
                    Save Profile Changes
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Col 3: Immutable Academic Records & Progression History */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-emerald-400" />
                    Academic Standing
                  </CardTitle>
                </div>
              </CardHeader>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 text-[11px] uppercase">Enrolled Batch</span>
                  <p className="font-semibold text-slate-200 mt-0.5">{profileData?.batchId?.name || 'Batch 2023-2027'}</p>
                  <p className="text-[11px] text-slate-400">Graduation Year: {profileData?.batchId?.graduationYear || 2027}</p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                  <span className="text-slate-500 text-[11px] uppercase">Department & Section</span>
                  <p className="font-semibold text-slate-200 mt-0.5">
                    {profileData?.departmentId?.name || 'Computer Science'} ({profileData?.departmentId?.code || 'CSE'})
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Section {profileData?.classId?.section || 'A'} • Semester {profileData?.classId?.semester || 4}
                  </p>
                </div>
              </div>
            </Card>

            {/* Academic Progression Audit Trail */}
            <Card>
              <CardHeader>
                <div>
                  <CardTitle className="text-base flex items-center gap-2">
                    <History className="w-4 h-4 text-cyan-400" />
                    Progression Audit Trail
                  </CardTitle>
                  <CardDescription>Verified academic history</CardDescription>
                </div>
              </CardHeader>

              <div className="relative pl-5 border-l border-slate-800 space-y-4 text-xs">
                {(profileData?.academicHistory || [
                  { reason: 'Initial enrollment into Batch 2023-2027 Section A', transitionedAt: new Date() },
                ]).map((hist: any, idx: number) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[25px] top-1 w-2.5 h-2.5 rounded-full bg-brand-500 ring-4 ring-slate-900" />
                    <p className="font-semibold text-slate-200">{hist.reason || 'Academic Milestone'}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {new Date(hist.transitionedAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
};
