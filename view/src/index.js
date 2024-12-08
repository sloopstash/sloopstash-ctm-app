import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Temporarily remove React.StrictMode for testing
// root.render(<App />);

// Adding React.StrictMode for prod
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);