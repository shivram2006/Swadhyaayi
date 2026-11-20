import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Badge } from '../common/Badge';
import { LogOut, Bell, GraduationCap, Building2 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { user, institution, logout } = useAuth();

  const getRoleBadgeVariant = (role?: string) => {
    switch (role) {
      case 'SUPER_ADMIN':
        return 'danger';
      case 'INSTITUTION_ADMIN':
        return 'brand';
      case 'PLACEMENT_OFFICER':
        return 'warning';
      case 'FACULTY':
        return 'success';
      default:
        return 'neutral';
    }
  };

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between h-16 px-6 bg-slate-900/90 backdrop-blur-md border-b border-slate-800/80">
      {/* Left: Institution Branding */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-brand-600/20 border border-brand-500/30 text-brand-400">
          <GraduationCap className="w-5 h-5" />
        </div>
        <div>
          <span className="text-base font-bold text-white tracking-tight flex items-center gap-2">
            Swadhyayi
            <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-500/20 text-brand-300 font-mono font-semibold">
              Enterprise
            </span>
          </span>
          {institution && (
            <p className="text-xs text-slate-400 flex items-center gap-1 font-medium truncate max-w-xs">
              <Building2 className="w-3 h-3 text-slate-500" />
              {institution.name}
            </p>
          )}
        </div>
      </div>

      {/* Right: User Profile & Actions */}
      <div className="flex items-center gap-4">
        {user && (
          <Badge variant={getRoleBadgeVariant(user.role)}>
            {user.role.replace('_', ' ')}
          </Badge>
        )}

        <button className="relative p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 transition-colors">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500"></span>
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-slate-800">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-200 leading-none">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-slate-400 mt-1 leading-none">{user?.email}</p>
          </div>

          <button
            onClick={() => logout()}
            title="Log Out"
            className="p-2 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
