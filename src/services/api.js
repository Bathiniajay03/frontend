import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://backend-kbqh.onrender.com/api';

// In production environments, we'll use relative paths which will be handled by the hosting platform
// This allows the frontend to work correctly both in development and production
const isProduction = import.meta.env.PROD;
const baseURL = isProduction ? '/api' : API_BASE_URL;

const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
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

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized access
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;