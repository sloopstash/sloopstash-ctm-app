import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import { ContactsProvider } from './context/ContactsContext';
import ForceLogoutPopup from './components/ForceLogoutPopup';

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
