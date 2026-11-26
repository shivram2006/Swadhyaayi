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
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-600/20 border border-brand-500/30 text-brand-400 mb-4 shadow-lg shadow-brand-500/10">
          <GraduationCap className="w-7 h-7" />
        </div>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">Swadhyayi</h2>
        <p className="mt-1.5 text-sm text-slate-400">
          University & College Placement Preparation Ecosystem
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Card className="border-slate-800 bg-slate-900/90 shadow-2xl">
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

          {/* Institutional Registration CTA */}
          <div className="mt-6 pt-5 border-t border-slate-800 text-center">
            <p className="text-xs text-slate-400">
              Is your University/College not onboarded yet?{' '}
              <Link to="/register-institution" className="text-brand-400 hover:text-brand-300 font-semibold underline underline-offset-2">
                Register Institution
              </Link>
            </p>
          </div>
        </Card>

        {/* Demo Fast-Switcher Card */}
        <div className="mt-6 p-4 rounded-xl border border-slate-800/80 bg-slate-900/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-2.5 text-xs font-semibold text-slate-300">
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            <span>Interactive Demo Quick-Login (Auto-Fill & Sign In)</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              type="button"
              onClick={() => handleDemoLogin('student1@nit.ac.in', '/dashboard/student')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-left"
            >
              👨‍🎓 <span className="font-medium">Student 1 (Aarav)</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('student2@nit.ac.in', '/dashboard/student')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-left"
            >
              👩‍🎓 <span className="font-medium">Student 2 (Priya)</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('faculty@nit.ac.in', '/dashboard/faculty')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-left"
            >
              👩‍🏫 <span className="font-medium">Faculty (Prof. Sharma)</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('admin@nit.ac.in', '/dashboard/admin')}
              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-left"
            >
              🏛️ <span className="font-medium">College Admin (Dr. Iyer)</span>
            </button>
            <button
              type="button"
              onClick={() => handleDemoLogin('super@swadhyayi.com', '/dashboard/super')}
              className="col-span-2 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors text-center"
            >
              ⚡ <span className="font-medium">Super Admin</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
