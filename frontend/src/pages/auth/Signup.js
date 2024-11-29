import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../../services/api';
import AuthContext from '../../context/AuthContext';
import { validateName, validateEmail, validatePassword } from '../../utils/validation';  // Import validation functions
import '../../styles/auth.scss';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState({ name: '', email: '', password: '' }); // Store validation errors
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate form fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);
    if (nameError || emailError || passwordError) {
      setError({ name: nameError, email: emailError, password: passwordError });
      return;
    }
    try {
      const response = await apiPost('/auth/register', { name, email, password });
      if (response) {
        const { token, user } = response;
        login(user, token); // Call the login function from context
        navigate('/home');
      }
    } catch (error) {
      setErrorMessage('Error during signup. Please try again.');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className="card-title text-center mb-4">Sign Up</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error.name && <div className="error-message">{error.name}</div>}
          </div>
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
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-3 text-center">
          <a href="/login" className="text-decoration-none">Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
