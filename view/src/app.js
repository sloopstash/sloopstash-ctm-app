import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/app_routes';
import AppProviders from './context';
import ForceLogoutPopup from './model/force_logout';

const App = () => (
  <AppProviders>
    <Router>
      <ForceLogoutPopup />
      <AppRoutes />
    </Router>
  </AppProviders>
);

export default App;
