import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  Code2,
  BrainCircuit,
  Map,
  Trophy,
  ClipboardCheck,
  FileText,
  Briefcase,
  Layers,
  Settings,
  Users,
  LayoutDashboard,
  User,
} from 'lucide-react';

export const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const role = user?.role;

  const studentLinks = [
    { to: '/dashboard/student', label: 'My Workspace', icon: LayoutDashboard },
    { to: '/profile', label: 'My Profile & Skills', icon: User },
    { to: '/coding', label: 'Coding Practice', icon: Code2 },
    { to: '/aptitude', label: 'Aptitude Prep', icon: BrainCircuit },
    { to: '/roadmaps', label: 'Career Roadmaps', icon: Map },
    { to: '/leaderboard', label: 'Leaderboard', icon: Trophy },
    { to: '/tests', label: 'My Assessments', icon: ClipboardCheck },
    { to: '/resume', label: 'ATS Resume Builder', icon: FileText },
    { to: '/jobs', label: 'Job Discovery', icon: Briefcase },
  ];

  const adminLinks = [
    { to: '/dashboard/admin', label: 'College Overview', icon: LayoutDashboard },
    { to: '/admin/departments', label: 'Departments & Classes', icon: Layers },
    { to: '/admin/students', label: 'Student Management', icon: Users },
    { to: '/admin/tests', label: 'Institutional Tests', icon: ClipboardCheck },
    { to: '/admin/placement-analytics', label: 'Placement Insights', icon: Trophy },
    { to: '/admin/subscription', label: 'Subscription & Seats', icon: Settings },
  ];

  const facultyLinks = [
    { to: '/dashboard/faculty', label: 'Faculty Overview', icon: LayoutDashboard },
    { to: '/faculty/classes', label: 'My Sections', icon: Users },
    { to: '/faculty/tests/new', label: 'Create Test', icon: ClipboardCheck },
    { to: '/faculty/question-bank', label: 'Question Bank', icon: Code2 },
  ];

  const superAdminLinks = [
    { to: '/dashboard/super', label: 'Platform Telemetry', icon: LayoutDashboard },
    { to: '/super/subscriptions', label: 'Colleges & Licenses', icon: Layers },
    { to: '/super/global-content', label: 'Global Questions', icon: Code2 },
    { to: '/super/audit-logs', label: 'Audit Logs', icon: Settings },
  ];

  let links = studentLinks;
  if (role === 'INSTITUTION_ADMIN' || role === 'PLACEMENT_OFFICER') {
    links = adminLinks;
  } else if (role === 'FACULTY') {
    links = facultyLinks;
  } else if (role === 'SUPER_ADMIN') {
    links = superAdminLinks;
  }

  return (
    <aside className="w-64 flex-shrink-0 bg-slate-900 border-r border-slate-800/80 flex flex-col justify-between p-4 min-h-[calc(100vh-4rem)]">
      <div className="space-y-1">
        <div className="px-3 py-2 text-[11px] font-bold tracking-wider uppercase text-slate-500">
          Navigation
        </div>
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-600/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`
              }
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              <span>{link.label}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="pt-4 border-t border-slate-800/80 px-2 text-xs text-slate-500 flex justify-between items-center">
        <span>Swadhyayi v1.0.0</span>
        <span className="flex items-center gap-1.5 text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Live
        </span>
      </div>
    </aside>
  );
};
