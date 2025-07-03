import React from 'react';
import { useAuthStore } from '../../store/authStore';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, title, subtitle }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return children;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header title={title} subtitle={subtitle} />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;