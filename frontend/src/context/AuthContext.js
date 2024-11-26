import React, { createContext, useState, useEffect, useContext } from 'react';

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [isTokenExpired, setIsTokenExpired] = useState(false);

  const getExpirationTime = (token) => {
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode JWT token
      return decodedToken.exp * 1000; // Token's expiration is in seconds
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  };

  // This function will check if the token is expired
  const checkTokenExpiration = () => {
    if (!token) return;  
    const expirationTime = getExpirationTime(token); 
    if (!expirationTime) return;  
    
    const currentTime = Date.now(); 
    
    if (currentTime >= expirationTime) {
      setIsTokenExpired(true);
      logout(); 
    } else {
      setIsTokenExpired(false); 
    }
  };

  // Only run the expiration check on token change
  useEffect(() => {
    if (token) {
      checkTokenExpiration(); 
    }
  }, [token]);  

  const login = (userData, token) => {
    const expirationTime = getExpirationTime(token);
    setUser(userData);
    setToken(token);
    setIsTokenExpired(false); 
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpirationTime', expirationTime); 
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsTokenExpired(true); 
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationTime');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, isTokenExpired }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthContext;
