import React, { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/auth_context';

const ForceLogoutPopup = () => {
  const { isTokenExpired, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if token is expired enforce this modal to logout
    if (isTokenExpired && location.pathname !== '/login') {
      setShowModal(true);
    } else if (location.pathname === '/login') {
      setShowModal(false);
    }
  }, [isTokenExpired, location.pathname]);

  const handleLogout = () => {
    logout(); 
    navigate('/login'); 
  };

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Session Expired</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your session has expired. Please log in again to continue.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ForceLogoutPopup;
