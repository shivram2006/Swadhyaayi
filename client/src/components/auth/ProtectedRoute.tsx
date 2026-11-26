import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types/auth';

interface ProtectedRouteProps {
  allowedRoles?: UserRole[];
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ allowedRoles }) => {
  const { isAuthenticated, isLoading, user } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <div className="flex flex-col items-center gap-3">
          <svg className="animate-spin h-8 w-8 text-brand-500" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <p className="text-sm">Verifying institutional credentials...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role) && user.role !== 'SUPER_ADMIN') {
    // Redirect to respective role home
    if (user.role === 'STUDENT') {
      return <Navigate to={user.isSubscribed ? '/dashboard/student' : '/subscription'} replace />;
    }
    if (user.role === 'FACULTY') return <Navigate to="/dashboard/faculty" replace />;
    if (user.role === 'INSTITUTION_ADMIN' || user.role === 'PLACEMENT_OFFICER') return <Navigate to="/dashboard/admin" replace />;
    if (user.role === 'SUPER_ADMIN') return <Navigate to="/dashboard/super" replace />;
  }

  if (user.role === 'STUDENT' && !user.isSubscribed && location.pathname !== '/subscription') {
    return <Navigate to="/subscription" replace />;
  }

  return <Outlet />;
};
