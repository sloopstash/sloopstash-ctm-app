import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './private_route';
import PublicRoute from './public_route';
import Signup from '../pages/auth/signup';
import Login from '../pages/auth/login';
import ContactForm from '../pages/contacts/contact_form';
import ListContacts from '../pages/contacts/list_contacts';
import Home from '../pages/home/home';
import Dashboard from '../pages/dashboard';

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
