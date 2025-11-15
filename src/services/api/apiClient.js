// API Client - رابط اصلی برای ارتباط با بک‌اند
// در حال حاضر از Mock API استفاده می‌کند
// بعداً می‌تواند به API واقعی تغییر کند

import mockAPI from '../mock/mockAPI.js';

// تنظیمات API
const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  useMock: true // فعلاً از Mock استفاده می‌کنیم
};

// تابع اصلی برای فراخوانی API
const apiCall = async (apiFunction, ...args) => {
  try {
    if (API_CONFIG.useMock) {
      // استفاده از Mock API
      return await apiFunction(...args);
    } else {
      // استفاده از API واقعی (بعداً پیاده‌سازی می‌شود)
      // const response = await fetch(...)
      // return await response.json()
      throw new Error('API واقعی هنوز پیاده‌سازی نشده است');
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Export API ها
export const authAPI = {
  login: (email, password) => apiCall(mockAPI.auth.login, email, password),
  logout: () => apiCall(mockAPI.auth.logout),
  getCurrentUser: () => apiCall(mockAPI.auth.getCurrentUser)
};

export const studentsAPI = {
  getAll: () => apiCall(mockAPI.students.getAll),
  getById: (id) => apiCall(mockAPI.students.getById, id),
  getPractices: (studentId) => apiCall(mockAPI.students.getPractices, studentId)
};

export const practicesAPI = {
  getAll: (filters) => apiCall(mockAPI.practices.getAll, filters),
  getById: (id) => apiCall(mockAPI.practices.getById, id),
  create: (data) => apiCall(mockAPI.practices.create, data),
  update: (id, updates) => apiCall(mockAPI.practices.update, id, updates),
  delete: (id) => apiCall(mockAPI.practices.delete, id),
  updateStatus: (id, status, message) => apiCall(mockAPI.practices.updateStatus, id, status, message)
};

export const dashboardAPI = {
  getStats: (userId) => apiCall(mockAPI.dashboard.getStats, userId),
  getRecentPractices: (userId, limit) => apiCall(mockAPI.dashboard.getRecentPractices, userId, limit)
};

export const messagesAPI = {
  getAll: (userId) => apiCall(mockAPI.messages.getAll, userId),
  getUnreadCount: (userId) => apiCall(mockAPI.messages.getUnreadCount, userId),
  markAsRead: (messageId) => apiCall(mockAPI.messages.markAsRead, messageId)
};

export default {
  auth: authAPI,
  students: studentsAPI,
  practices: practicesAPI,
  dashboard: dashboardAPI,
  messages: messagesAPI
};

