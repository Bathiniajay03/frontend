import axios from 'axios';

// Check if we're in the browser environment
const isBrowser = typeof window !== 'undefined';

let API_BASE_URL;

if (isBrowser) {
  // Use VITE environment variable if available, otherwise use the deployed backend
  API_BASE_URL = import.meta.env.VITE_API_URL || 'https://backend-kbqh.onrender.com/api';
  
  // For production builds served by Vercel, use relative paths
  // This allows the frontend to work with whatever domain it's hosted on
  if (import.meta.env.PROD) {
    API_BASE_URL = '/api';
  }
} else {
  // For SSR or build time, use the deployed backend
  API_BASE_URL = 'https://backend-kbqh.onrender.com/api';
}

const api = axios.create({
  baseURL: API_BASE_URL,
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