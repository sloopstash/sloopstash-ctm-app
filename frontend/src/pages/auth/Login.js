import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../../services/api';
import AuthContext from '../../context/AuthContext';
import { validateEmail, validatePassword } from '../../utils/validation';  // Import validation functions
import '../../styles/auth.scss';

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
      return; // Stop form submission if validation fails
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
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="card-title text-center mb-4">Login</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <div className="error-message">{error.email}</div>}
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <div className="error-message">{error.password}</div>}
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary w-100">
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
