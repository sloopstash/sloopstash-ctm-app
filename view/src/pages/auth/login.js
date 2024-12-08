import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../../services/api';
import AuthContext from '../../context/auth_context';
import { validateEmail, validatePassword } from '../../utils/validation'; // Import validation functions
import '../../styles/auth.scss'; // Import your custom SCSS

// Import the Logo Component
import LogoComponent from '../../components/layout/logo';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState({ email: '', password: '' }); // Store validation errors
  const navigate = useNavigate();

  const { login } = useContext(AuthContext); // Use context to access login function

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError || passwordError) {
      setError({ email: emailError, password: passwordError });
      return;
    }
    try {
      const response = await apiPost('/auth/login', { email, password });
      if (response) {
        const { token, user } = response;
        login(user, token); // Call the login function from context
        navigate('/dashboard/home');
      } else {
        setErrorMessage('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <div className="card p-4">
      {/* Logo Section */}
      <div className="text-center mb-4">
        <LogoComponent width="120px" height="120px" />
      </div>

      {/* Stylish Title */}
      <p className="signup-card-title">CTM App Login</p>
      
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      
      <form onSubmit={handleSubmit}>
        {/* Email and Password fields */}
        <div className="form-group row">
          <label htmlFor="email" className="col-form-label">Email Address</label>
          <div className="col-12 inputGroup">
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div className="error-message">{error.email}</div>}
          </div>
        </div>

        <div className="form-group row">
          <label htmlFor="password" className="col-form-label">Password</label>
          <div className="col-12 inputGroup">
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div className="error-message">{error.password}</div>}
          </div>
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn-custom w-100">
            Sign In
          </button>
        </div>
      </form>
      
      <div className="mt-3 text-center">
        <a href="/signup" className="text-decoration-none">Don't have an account? Sign up</a>
      </div>
    </div>
    </div>
  );
};

export default Login;
