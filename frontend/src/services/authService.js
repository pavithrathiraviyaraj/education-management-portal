import { backendAPI } from './api';

export const loginAdmin = async (email, password) => {
  const response = await backendAPI.post('/api/auth/login', { email, password });
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return response.data;
};

export const registerAdmin = async (name, email, password) => {
  const response = await backendAPI.post('/api/auth/register', { name, email, password });
  return response.data;
};

export const logoutUser = () => {
  localStorage.removeItem('token');
};
