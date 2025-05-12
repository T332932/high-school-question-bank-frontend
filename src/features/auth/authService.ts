import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || '/api';

// 注册用户
const register = async (userData: any) => {
  const response = await axios.post(`${API_URL}/users/register`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// 登录用户
const login = async (userData: any) => {
  const response = await axios.post(`${API_URL}/users/login`, userData);

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
};

// 获取用户资料
const getUserProfile = async () => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  const response = await axios.get(`${API_URL}/users/me`, config);

  return response.data;
};

// 更新用户资料
const updateUserProfile = async (userData: any) => {
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  const config = {
    headers: {
      Authorization: `Bearer ${user?.token}`,
    },
  };

  const response = await axios.put(`${API_URL}/users/me`, userData, config);

  if (response.data) {
    const updatedUser = { ...user, ...response.data };
    localStorage.setItem('user', JSON.stringify(updatedUser));
  }

  return response.data;
};

// 退出登录
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  login,
  logout,
  getUserProfile,
  updateUserProfile,
};

export default authService;