import React from 'react';
import { useAuth } from '../context/AuthContext';

const DisabledStateWrapper = ({ children }) => {
  const { isTokenExpired } = useAuth(); // Get token expired state

  return (
    <div style={{ pointerEvents: isTokenExpired ? 'none' : 'auto', opacity: isTokenExpired ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default DisabledStateWrapper;
