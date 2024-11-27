import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';  // Import the AuthProvider
import { ContactsProvider } from './context/ContactsContext'; // Import the ContactsProvider
import ForceLogoutPopup from './components/ForceLogoutPopup'; // Import the ForceLogoutPopup component

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


