import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { Card, CardHeader, CardTitle, CardDescription } from '../../components/common/Card';
import { Building2, Mail, Lock, User, Hash, ArrowRight, ArrowLeft } from 'lucide-react';

export const RegisterInstitutionPage: React.FC = () => {
  const navigate = useNavigate();
  const { registerInstitution } = useAuth();
  const [formData, setFormData] = useState({
    institutionName: '',
    institutionCode: '',
    contactEmail: '',
    adminFirstName: '',
    adminLastName: '',
    adminEmail: '',
    adminPassword: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      await registerInstitution(formData);
      navigate('/dashboard/admin');
    } catch (err: any) {
      setError(err.response?.data?.error?.message || 'Registration failed. Please check your data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative">
      <div className="sm:mx-auto sm:w-full sm:max-w-xl">
        <Link to="/login" className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200 mb-4 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to Login
        </Link>
        <Card className="border-slate-800 bg-slate-900/95 shadow-2xl">
          <CardHeader>
            <div>
              <CardTitle className="text-xl">Onboard Your University / College</CardTitle>
              <CardDescription>
                Create your isolated institutional environment for placement training and diagnostic testing.
              </CardDescription>
            </div>
          </CardHeader>

          {error && (
            <div className="p-3 mb-5 text-xs rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 font-medium">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Institution Name"
                name="institutionName"
                placeholder="e.g. National Institute of Tech"
                value={formData.institutionName}
                onChange={handleChange}
                leftIcon={<Building2 className="w-4 h-4" />}
                required
              />

              <Input
                label="Institution Code (Slug)"
                name="institutionCode"
                placeholder="e.g. nit-surat"
                value={formData.institutionCode}
                onChange={handleChange}
                leftIcon={<Hash className="w-4 h-4" />}
                required
              />
            </div>

            <Input
              label="Official Contact Email"
              name="contactEmail"
              type="email"
              placeholder="e.g. dean.placements@nitsurat.ac.in"
              value={formData.contactEmail}
              onChange={handleChange}
              leftIcon={<Mail className="w-4 h-4" />}
              required
            />

            <div className="pt-3 border-t border-slate-800/80">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-brand-400 mb-3">
                Primary Administrator Account
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="First Name"
                  name="adminFirstName"
                  placeholder="e.g. Vikram"
                  value={formData.adminFirstName}
                  onChange={handleChange}
                  leftIcon={<User className="w-4 h-4" />}
                  required
                />

                <Input
                  label="Last Name"
                  name="adminLastName"
                  placeholder="e.g. Iyer"
                  value={formData.adminLastName}
                  onChange={handleChange}
                  leftIcon={<User className="w-4 h-4" />}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <Input
                  label="Admin Login Email"
                  name="adminEmail"
                  type="email"
                  placeholder="e.g. admin@nitsurat.ac.in"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  leftIcon={<Mail className="w-4 h-4" />}
                  required
                />

                <Input
                  label="Secure Password"
                  name="adminPassword"
                  type="password"
                  placeholder="Min. 8 characters"
                  value={formData.adminPassword}
                  onChange={handleChange}
                  leftIcon={<Lock className="w-4 h-4" />}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="primary"
              className="w-full mt-4"
              isLoading={isLoading}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Complete Institutional Onboarding
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
