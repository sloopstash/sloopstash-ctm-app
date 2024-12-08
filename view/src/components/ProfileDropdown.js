import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import '../styles/dashboard.css';

const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');  
    localStorage.removeItem('userName'); 
    localStorage.removeItem('userId'); 
    navigate('/login');
  };

  return (
    <Dropdown show={showDropdown} onToggle={() => setShowDropdown(!showDropdown)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        {userName || userEmail || 'Profile'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">My Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDropdown;
