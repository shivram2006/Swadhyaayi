import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export const DashboardLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#141415] flex flex-col text-[#ededed]">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 px-6 py-6 sm:px-8 overflow-y-auto max-w-[1440px] mx-auto w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
