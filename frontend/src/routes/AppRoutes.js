import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';
import ContactForm from '../pages/contacts/ContactForm ';
import ListContacts from '../pages/contacts/ListContacts';
import Home from '../pages/home/Home';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        }
      />

      {/* Private Routes - Dashboard Layout */}
      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="contacts" element={<ListContacts />} />
        <Route path="create-contact/:id?" element={<ContactForm />} />
        <Route path="edit-contact/:id" element={<ContactForm />} />
      </Route>

      {/* Catch-all Route */}
      <Route
        path="*"
        element={<Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
