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
    <header className="sticky top-0 z-40 flex items-center justify-between h-14 px-6 bg-[#0f0f10] border-b border-white/[0.08]">
      {/* Left: Institution Branding */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#232325] border border-white/[0.08] text-[#ededed]">
          <GraduationCap className="w-4 h-4" strokeWidth={1.5} />
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[15px] font-medium text-[#ededed] tracking-tight">
            Swadhyayi
          </span>
          {institution && (
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-[#85858b] pl-3 border-l border-white/[0.08] truncate max-w-xs">
              <Building2 className="w-3.5 h-3.5 text-[#85858b]" strokeWidth={1.5} />
              {institution.name}
            </span>
          )}
        </div>
      </div>

      {/* Right: User Profile & Actions */}
      <div className="flex items-center gap-3">
        {user && (
          <Badge variant={getRoleBadgeVariant(user.role)} size="sm">
            {user.role.replace('_', ' ')}
          </Badge>
        )}

        <button className="relative p-2 rounded-lg text-[#85858b] hover:text-[#ededed] hover:bg-[#232325] transition-colors">
          <Bell className="w-4 h-4" strokeWidth={1.5} />
        </button>

        <div className="flex items-center gap-3 pl-3 border-l border-white/[0.08]">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-[#ededed] leading-none">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-[#85858b] mt-1 leading-none">{user?.email}</p>
          </div>

          <button
            onClick={() => logout()}
            title="Log Out"
            className="p-2 rounded-lg text-[#85858b] hover:text-[#e5484d] hover:bg-[#e5484d]/10 transition-colors"
          >
            <LogOut className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};
