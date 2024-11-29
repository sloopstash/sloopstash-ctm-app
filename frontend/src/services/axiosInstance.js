import axios from 'axios';
import { API_ERRORS } from '../utils/messages'; 
// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:8081/api',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// Request interceptor to attach token (if available) for authenticated requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');  
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;  
    }
    return config;
  },
  (error) => {
    return Promise.reject(error); 
  }
);

// Response interceptor to handle errors globally
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Handle specific status codes
      switch (error.response.status) {
        case 404:
          console.error(API_ERRORS.RESOURCE_NOT_FOUND);
          break;
        case 500:
          console.error(API_ERRORS.INTERNAL_SERVER_ERROR);
          break;
        case 401:
          console.error(API_ERRORS.UNAUTHORIZED);
          break;
        default:
          console.error(API_ERRORS.GENERIC_ERROR);
      }
      console.error('Error details:', JSON.stringify(error.response.data));
    } else if (error.request) {
      console.error(API_ERRORS.NETWORK_ERROR);
    } else {
      console.error(API_ERRORS.REQUEST_ERROR, error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
