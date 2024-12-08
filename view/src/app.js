import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/app_routes';
import { AuthProvider } from './context/auth_context';
import { ContactsProvider } from './context/contact_context';
import ForceLogoutPopup from './components/force_logout';

const App = () => {
  return (
    <AuthProvider>
      <ContactsProvider>
        <Router>
          <ForceLogoutPopup />
          <AppRoutes />
        </Router>
      </ContactsProvider>
    </AuthProvider>
  );
};

export default App;
