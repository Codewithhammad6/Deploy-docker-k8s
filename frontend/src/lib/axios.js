

import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000/api';

export const axiosInstance = axios.create({
   baseURL: API_URL,
	withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Add interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('API Response Error:', {
      status: error.response?.status,
      url: error.config?.url,
      message: error.message,
      cors: error.response?.headers['access-control-allow-origin']
    });
    
    // Handle 401 (Unauthorized) errors - clear auth state
    if (error.response?.status === 401) {
      console.log('401 Unauthorized - clearing auth state');
      localStorage.removeItem('tokenSchool');
      delete axiosInstance.defaults.headers.common['Authorization'];
      
      // Optionally redirect to login or dispatch a logout action
      // This will be handled by the store's checkAuth on next page load
    }
    
    return Promise.reject(error);
  }
);
