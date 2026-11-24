import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DashboardLayout } from './components/layout/DashboardLayout';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { LoginPage } from './pages/auth/LoginPage';
import { RegisterInstitutionPage } from './pages/auth/RegisterInstitutionPage';
import { StudentDashboard } from './pages/dashboard/StudentDashboard';
import { InstitutionAdminDashboard } from './pages/dashboard/InstitutionAdminDashboard';
import { FacultyDashboard } from './pages/dashboard/FacultyDashboard';
import { SuperAdminDashboard } from './pages/dashboard/SuperAdminDashboard';
import { StudentManagementPage } from './pages/admin/StudentManagementPage';
import { StudentProfilePage } from './pages/student/StudentProfilePage';
import { CodingProblemListPage } from './pages/coding/CodingProblemListPage';
import { CodingWorkspacePage } from './pages/coding/CodingWorkspacePage';
import { AptitudeHubPage } from './pages/aptitude/AptitudeHubPage';
import { AptitudePracticePage } from './pages/aptitude/AptitudePracticePage';
import { RoadmapCatalogPage } from './pages/roadmap/RoadmapCatalogPage';
import { RoadmapViewerPage } from './pages/roadmap/RoadmapViewerPage';
import { LeaderboardPage } from './pages/leaderboard/LeaderboardPage';
import { AssessmentListPage } from './pages/assessment/AssessmentListPage';
import { AssessmentArenaPage } from './pages/assessment/AssessmentArenaPage';
import { FacultyAssessmentMonitorPage } from './pages/assessment/FacultyAssessmentMonitorPage';
import { ResumeListPage } from './pages/resume/ResumeListPage';
import { ResumeEditorPage } from './pages/resume/ResumeEditorPage';
import { JobDiscoveryPage } from './pages/opportunity/JobDiscoveryPage';
import { ApplicationTrackerPage } from './pages/opportunity/ApplicationTrackerPage';
import { PlacementAnalyticsPage } from './pages/admin/PlacementAnalyticsPage';
import { CollegeSubscriptionPage } from './pages/admin/CollegeSubscriptionPage';
import { SuperAdminSubscriptionsPage } from './pages/super/SuperAdminSubscriptionsPage';
import { FacultySectionsPage } from './pages/faculty/FacultySectionsPage';
import { CreateAssessmentPage } from './pages/faculty/CreateAssessmentPage';
import { FacultyQuestionBankPage } from './pages/faculty/FacultyQuestionBankPage';

const HomeRedirect: React.FC = () => {
  const { isAuthenticated, user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-400">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm">Loading Swadhyayi Ecosystem...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated || !user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role === 'STUDENT') return <Navigate to="/dashboard/student" replace />;
  if (user.role === 'INSTITUTION_ADMIN' || user.role === 'PLACEMENT_OFFICER') return <Navigate to="/dashboard/admin" replace />;
  if (user.role === 'FACULTY') return <Navigate to="/dashboard/faculty" replace />;
  if (user.role === 'SUPER_ADMIN') return <Navigate to="/dashboard/super" replace />;

  return <Navigate to="/login" replace />;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register-institution" element={<RegisterInstitutionPage />} />
          <Route path="/" element={<HomeRedirect />} />

          {/* Protected Dashboard Routes */}
          <Route element={<DashboardLayout />}>
            {/* Student Portal */}
            <Route element={<ProtectedRoute allowedRoles={['STUDENT']} />}>
              <Route path="/dashboard/student" element={<StudentDashboard />} />
              <Route path="/profile" element={<StudentProfilePage />} />
              <Route path="/coding" element={<CodingProblemListPage />} />
              <Route path="/coding/:slug" element={<CodingWorkspacePage />} />
              <Route path="/aptitude" element={<AptitudeHubPage />} />
              <Route path="/aptitude/practice" element={<AptitudePracticePage />} />
              <Route path="/roadmaps" element={<RoadmapCatalogPage />} />
              <Route path="/roadmaps/:slug" element={<RoadmapViewerPage />} />
              <Route path="/leaderboard" element={<LeaderboardPage />} />
              <Route path="/tests" element={<AssessmentListPage />} />
              <Route path="/assessments" element={<AssessmentListPage />} />
              <Route path="/assessments/:id/arena" element={<AssessmentArenaPage />} />
              <Route path="/resume" element={<ResumeListPage />} />
              <Route path="/resumes" element={<ResumeListPage />} />
              <Route path="/resumes/:id" element={<ResumeEditorPage />} />
              <Route path="/jobs" element={<JobDiscoveryPage />} />
              <Route path="/opportunities" element={<JobDiscoveryPage />} />
              <Route path="/applications" element={<ApplicationTrackerPage />} />
              <Route path="/pipeline" element={<ApplicationTrackerPage />} />
            </Route>

            {/* Institution Admin Portal */}
            <Route element={<ProtectedRoute allowedRoles={['INSTITUTION_ADMIN', 'PLACEMENT_OFFICER']} />}>
              <Route path="/dashboard/admin" element={<InstitutionAdminDashboard />} />
              <Route path="/admin/students" element={<StudentManagementPage />} />
              <Route path="/admin/tests" element={<AssessmentListPage />} />
              <Route path="/assessments/:id/monitor" element={<FacultyAssessmentMonitorPage />} />
              <Route path="/admin/placement-analytics" element={<PlacementAnalyticsPage />} />
              <Route path="/admin/subscription" element={<CollegeSubscriptionPage />} />
            </Route>

            {/* Faculty Portal */}
            <Route element={<ProtectedRoute allowedRoles={['FACULTY', 'INSTITUTION_ADMIN', 'PLACEMENT_OFFICER']} />}>
              <Route path="/dashboard/faculty" element={<FacultyDashboard />} />
              <Route path="/faculty/classes" element={<FacultySectionsPage />} />
              <Route path="/faculty/tests/new" element={<CreateAssessmentPage />} />
              <Route path="/faculty/create-test" element={<CreateAssessmentPage />} />
              <Route path="/faculty/question-bank" element={<FacultyQuestionBankPage />} />
              <Route path="/faculty/tests" element={<AssessmentListPage />} />
              <Route path="/assessments/:id/monitor" element={<FacultyAssessmentMonitorPage />} />
            </Route>

            {/* Super Admin Portal */}
            <Route element={<ProtectedRoute allowedRoles={['SUPER_ADMIN']} />}>
              <Route path="/dashboard/super" element={<SuperAdminDashboard />} />
              <Route path="/super/subscriptions" element={<SuperAdminSubscriptionsPage />} />
            </Route>
          </Route>

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
