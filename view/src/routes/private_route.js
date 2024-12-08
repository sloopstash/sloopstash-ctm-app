import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  
  // If no token is found, redirect to the login page
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Otherwise, render the children (protected route content)
  return children;
};

export default PrivateRoute;