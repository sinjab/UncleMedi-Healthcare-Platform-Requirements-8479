import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import Layout from './components/layout/Layout';
import LoginForm from './components/auth/LoginForm';
import PatientDashboard from './components/patient/Dashboard';
import CaregiverDashboard from './components/caregiver/Dashboard';
import PartnerDashboard from './components/partner/Dashboard';
import AdminDashboard from './components/admin/Dashboard';
import './App.css';

function App() {
  const { isAuthenticated, userType } = useAuthStore();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  const getDashboardComponent = () => {
    switch (userType) {
      case 'patient':
        return <PatientDashboard />;
      case 'caregiver':
        return <CaregiverDashboard />;
      case 'partner':
        return <PartnerDashboard />;
      case 'admin':
        return <AdminDashboard />;
      default:
        return <PatientDashboard />;
    }
  };

  const getDefaultRoute = () => {
    return `/${userType}`;
  };

  return (
    <Router>
      <Layout title="Dashboard" subtitle="Welcome to your health management platform">
        <Routes>
          <Route path="/" element={<Navigate to={getDefaultRoute()} replace />} />
          <Route path={`/${userType}`} element={getDashboardComponent()} />
          <Route path={`/${userType}/*`} element={getDashboardComponent()} />
          <Route path="*" element={<Navigate to={getDefaultRoute()} replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;