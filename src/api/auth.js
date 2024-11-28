// auth.js
import axiosInstance from './axiosInstance';

export const register = async (userData) => {
  const response = await axiosInstance.post('/register', userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axiosInstance.post('/login', userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await axiosInstance.get('/user');
  return response.data;
};

export const updateProfile = async (profileData) => {
  const formData = new FormData();
  if (profileData.nickname) {
    formData.append('nickname', profileData.nickname);
  }
  if (profileData.avatar) {
    formData.append('avatar', profileData.avatar);
  }

  const response = await axiosInstance.patch('/profile', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};