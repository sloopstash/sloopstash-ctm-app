import React from 'react';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  // If the user is already authenticated (token exists), redirect to dashboard
  if (token) {
    return <Navigate to="/dashboard" />;
  }

  // Otherwise, render the public route (login/signup pages)
  return children;
};

export default PublicRoute;
