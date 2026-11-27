import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { GraduationCap, ArrowRight, ArrowLeft, Mail, Lock, User, Hash, BookOpen } from 'lucide-react';

export const RegisterStudentPage: React.FC = () => {
  const navigate = useNavigate();
  const { registerStudent } = useAuth();

  const [institutions, setInstitutions] = useState<{ _id: string; name: string; code: string }[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rollNumber: '',
    institutionId: '',
    course: 'B.Tech CSE',
    semester: '1',
    section: 'A',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get('/auth/institutions')
      .then((res) => {
        const list = res.data?.data || [];
        setInstitutions(list);
        if (list.length > 0) {
          setFormData((prev) => ({ ...prev, institutionId: prev.institutionId || list[0]._id }));
        }
      })
      .catch(() => {
        // ignore
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    try {
      const registeredUser = await registerStudent({
        ...formData,
        semester: Number(formData.semester),
      });
      if (registeredUser?.isSubscribed) {
        navigate('/dashboard/student', { replace: true });
      } else {
        navigate('/subscription', { replace: true });
      }
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Registration failed. Please check your details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141415] flex flex-col justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="mb-4">
          <Link to="/login" className="inline-flex items-center gap-1.5 text-xs text-[#a1a1a6] hover:text-[#ededed] transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" strokeWidth={1.5} />
            Back to login
          </Link>
        </div>

        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#19191b] border border-white/[0.08] text-[#ededed] mb-3">
            <GraduationCap className="w-5 h-5" strokeWidth={1.5} />
          </div>
          <h2 className="text-2xl font-medium text-[#ededed] tracking-tight">Student registration</h2>
          <p className="mt-1 text-sm text-[#a1a1a6]">
            Create your account to select a plan and open your workspace
          </p>
        </div>

        <Card className="border-white/[0.08] bg-[#19191b] p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-xs rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 font-medium">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="First Name"
                placeholder="e.g. Aarav"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                leftIcon={<User className="w-4 h-4" />}
                required
              />
              <Input
                label="Last Name"
                placeholder="e.g. Patel"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                leftIcon={<User className="w-4 h-4" />}
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                label="Student Email"
                type="email"
                placeholder="e.g. aarav@nit.ac.in"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                leftIcon={<Mail className="w-4 h-4" />}
                required
              />
              <Input
                label="Roll Number"
                placeholder="e.g. U23CS105"
                value={formData.rollNumber}
                onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                leftIcon={<Hash className="w-4 h-4" />}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">College / University</label>
              <select
                className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-3"
                value={formData.institutionId}
                onChange={(e) => setFormData({ ...formData, institutionId: e.target.value })}
                required
              >
                {institutions.length === 0 && <option value="">Default Institution</option>}
                {institutions.map((inst) => (
                  <option key={inst._id} value={inst._id}>
                    {inst.name} ({inst.code})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Input
                label="Course"
                placeholder="B.Tech CSE"
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                leftIcon={<BookOpen className="w-3.5 h-3.5" />}
                required
              />
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1.5 uppercase">Semester</label>
                <input
                  type="number"
                  min={1}
                  max={12}
                  className="w-full bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 py-2.5 px-2.5"
                  value={formData.semester}
                  onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                  required
                />
              </div>
              <Input
                label="Section"
                placeholder="A"
                value={formData.section}
                onChange={(e) => setFormData({ ...formData, section: e.target.value })}
                required
              />
            </div>

            <Input
              label="Password"
              type="password"
              placeholder="Min. 6 characters"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              leftIcon={<Lock className="w-4 h-4" />}
              required
            />

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-2"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Register &amp; Choose Subscription
            </Button>
          </form>

          <div className="mt-5 pt-4 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Already have an account?{' '}
              <Link to="/login" className="text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-2">
                Sign In
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
