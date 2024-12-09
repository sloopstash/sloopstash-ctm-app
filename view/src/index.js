import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './asset/css/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Temporarily remove React.StrictMode for testing - (While develop the from local it should should avoid unnecessary rerender)
// root.render(<App />);

// Adding React.StrictMode for prod (Unnecessary rerender should not happen in prod mode)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);