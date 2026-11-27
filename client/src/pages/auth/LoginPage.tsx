import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card } from '../../components/common/Card';
import { GraduationCap, Lock, Mail, ArrowRight, ShieldCheck } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const loggedInUser = await login(email, password);
      if (loggedInUser?.role === 'SUPER_ADMIN') {
        navigate('/dashboard/super');
      } else if (loggedInUser?.role === 'INSTITUTION_ADMIN' || loggedInUser?.role === 'PLACEMENT_OFFICER') {
        navigate('/dashboard/admin');
      } else if (loggedInUser?.role === 'FACULTY') {
        navigate('/dashboard/faculty');
      } else {
        navigate(loggedInUser?.isSubscribed ? '/dashboard/student' : '/subscription');
      }
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Login failed. Please verify credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDemoLogin = async (demoEmail: string, roleRedirect: string) => {
    setEmail(demoEmail);
    setPassword('Password@123');
    setError(null);
    setIsLoading(true);
    try {
      const loggedInUser = await login(demoEmail, 'Password@123');
      if (loggedInUser?.role === 'STUDENT') {
        navigate(loggedInUser.isSubscribed ? '/dashboard/student' : '/subscription');
      } else {
        navigate(roleRedirect);
      }
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Demo user not seeded or server offline.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#141415] flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#19191b] border border-white/[0.08] text-[#ededed] mb-4">
          <GraduationCap className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <h2 className="text-2xl font-medium text-[#ededed] tracking-tight">Swadhyayi</h2>
        <p className="mt-1.5 text-sm text-[#a1a1a6]">
          University &amp; college placement preparation workspace
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <Card className="border-white/[0.08] bg-[#19191b]">
          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-xs rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 font-medium">
                {error}
              </div>
            )}

            <Input
              label="Institutional Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. rahul.sharma@nitsurat.ac.in"
              leftIcon={<Mail className="w-4 h-4" />}
              required
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              leftIcon={<Lock className="w-4 h-4" />}
              required
            />

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 text-slate-400 cursor-pointer">
                <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-brand-600 focus:ring-brand-500" />
                Remember me
              </label>
              <a href="#forgot" className="text-brand-400 hover:text-brand-300 font-medium">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-2"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Sign In to Swadhyayi
            </Button>
          </form>

          {/* Student Registration CTA */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              New Student?{' '}
              <Link to="/register-student" className="text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-2">
                Register Here
              </Link>
            </p>
          </div>
        </Card>

        {/* Demo Fast-Switcher Card */}
        <div className="mt-6 p-4 rounded-xl border border-white/[0.08] bg-[#19191b]">
          <div className="flex items-center gap-2 mb-3 text-xs font-medium text-[#a1a1a6]">
            <ShieldCheck className="w-4 h-4 text-[#85858b]" strokeWidth={1.5} />
            <span>Demo quick-login</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleDemoLogin('student1@nit.ac.in', '/dashboard/student')}
              className="px-3 py-2 rounded-lg bg-[#232325] hover:bg-[#2e2e32] text-[#ededed] border border-white/[0.08] transition-colors text-left"
            >
              <span className="font-medium block">Student 1</span>
              <span className="text-[#85858b]">Aarav Patel</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('student2@nit.ac.in', '/dashboard/student')}
              className="px-3 py-2 rounded-lg bg-[#232325] hover:bg-[#2e2e32] text-[#ededed] border border-white/[0.08] transition-colors text-left"
            >
              <span className="font-medium block">Student 2</span>
              <span className="text-[#85858b]">Priya Sharma</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('faculty@nit.ac.in', '/dashboard/faculty')}
              className="px-3 py-2 rounded-lg bg-[#232325] hover:bg-[#2e2e32] text-[#ededed] border border-white/[0.08] transition-colors text-left"
            >
              <span className="font-medium block">Faculty</span>
              <span className="text-[#85858b]">Prof. Sharma</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('admin@nit.ac.in', '/dashboard/admin')}
              className="px-3 py-2 rounded-lg bg-[#232325] hover:bg-[#2e2e32] text-[#ededed] border border-white/[0.08] transition-colors text-left"
            >
              <span className="font-medium block">College Admin</span>
              <span className="text-[#85858b]">Dr. Iyer</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('super@swadhyayi.com', '/dashboard/super')}
              className="col-span-2 px-3 py-2 rounded-lg bg-[#232325] hover:bg-[#2e2e32] text-[#ededed] border border-white/[0.08] transition-colors text-center font-medium"
            >
              Super Admin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
