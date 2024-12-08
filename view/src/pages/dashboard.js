import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/layout/sidebar';
import Header from '../components/layout/header';
import MainContent from '../components/layout/main_content';
import '../styles/dashboard.scss';

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Header onLogout={handleLogout} />
        <MainContent />
      </div>
    </div>
  );
};

export default Dashboard;

