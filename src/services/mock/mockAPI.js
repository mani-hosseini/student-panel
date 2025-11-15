// Mock API Service - شبیه‌ساز بک‌اند
// این فایل تمام درخواست‌های API را شبیه‌سازی می‌کند

import { mockStudents, mockPractices, mockMessages, mockCurrentUser, mockDashboardStats } from './mockData.js';

// تابع برای شبیه‌سازی تاخیر شبکه
const delay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));

// ==================== Authentication ====================
export const authAPI = {
  login: async (email, password) => {
    await delay(800);
    // شبیه‌سازی لاگین
    if (email && password) {
      return {
        success: true,
        user: mockCurrentUser,
        token: 'mock-jwt-token-12345'
      };
    }
    throw new Error('ایمیل یا رمز عبور اشتباه است');
  },

  logout: async () => {
    await delay(300);
    return { success: true };
  },

  getCurrentUser: async () => {
    await delay(400);
    return mockCurrentUser;
  }
};

// ==================== Students ====================
export const studentsAPI = {
  getAll: async () => {
    await delay(600);
    return {
      success: true,
      data: mockStudents
    };
  },

  getById: async (id) => {
    await delay(500);
    const student = mockStudents.find(s => s.id === id);
    if (!student) {
      throw new Error('هنرجو پیدا نشد');
    }
    return {
      success: true,
      data: student
    };
  },

  getPractices: async (studentId) => {
    await delay(500);
    const practices = mockPractices.filter(p => p.studentId === studentId);
    return {
      success: true,
      data: practices.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
    };
  }
};

// ==================== Practices ====================
export const practicesAPI = {
  getAll: async (filters = {}) => {
    await delay(600);
    let practices = [...mockPractices];
    
    // فیلتر بر اساس studentId
    if (filters.studentId) {
      practices = practices.filter(p => p.studentId === filters.studentId);
    }
    
    // فیلتر بر اساس status
    if (filters.status) {
      practices = practices.filter(p => p.status === filters.status);
    }
    
    // مرتب‌سازی بر اساس تاریخ
    practices.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time));
    
    return {
      success: true,
      data: practices
    };
  },

  getById: async (id) => {
    await delay(400);
    const practice = mockPractices.find(p => p.id === id);
    if (!practice) {
      throw new Error('تمرین پیدا نشد');
    }
    return {
      success: true,
      data: practice
    };
  },

  create: async (practiceData) => {
    await delay(800);
    const newPractice = {
      id: String(mockPractices.length + 1),
      ...practiceData,
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      status: 'pending',
      teacherMessage: null
    };
    mockPractices.unshift(newPractice);
    return {
      success: true,
      data: newPractice
    };
  },

  update: async (id, updates) => {
    await delay(600);
    const index = mockPractices.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('تمرین پیدا نشد');
    }
    mockPractices[index] = { ...mockPractices[index], ...updates };
    return {
      success: true,
      data: mockPractices[index]
    };
  },

  delete: async (id) => {
    await delay(500);
    const index = mockPractices.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('تمرین پیدا نشد');
    }
    mockPractices.splice(index, 1);
    return {
      success: true,
      message: 'تمرین با موفقیت حذف شد'
    };
  },

  updateStatus: async (id, status, teacherMessage = null) => {
    await delay(500);
    const index = mockPractices.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('تمرین پیدا نشد');
    }
    mockPractices[index].status = status;
    if (teacherMessage) {
      mockPractices[index].teacherMessage = teacherMessage;
    }
    return {
      success: true,
      data: mockPractices[index]
    };
  }
};

// ==================== Dashboard ====================
export const dashboardAPI = {
  getStats: async (userId) => {
    await delay(600);
    // محاسبه آمار بر اساس تمرین‌های هنرجو
    const userPractices = mockPractices.filter(p => p.studentId === userId);
    const thisWeek = getWeekDates();
    const weekPractices = userPractices.filter(p => {
      const practiceDate = new Date(p.date);
      return practiceDate >= thisWeek.start && practiceDate <= thisWeek.end;
    });
    
    const stats = {
      ...mockDashboardStats,
      weeklyPractices: weekPractices.length,
      weeklyMinutes: weekPractices.reduce((sum, p) => sum + p.duration, 0),
      lastPracticeDate: userPractices[0]?.date || null
    };
    
    return {
      success: true,
      data: stats
    };
  },

  getRecentPractices: async (userId, limit = 5) => {
    await delay(500);
    const practices = mockPractices
      .filter(p => p.studentId === userId)
      .sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
      .slice(0, limit);
    
    return {
      success: true,
      data: practices
    };
  }
};

// ==================== Messages ====================
export const messagesAPI = {
  getAll: async (userId) => {
    await delay(500);
    const messages = mockMessages.filter(m => m.studentId === userId);
    return {
      success: true,
      data: messages.sort((a, b) => new Date(b.date + ' ' + b.time) - new Date(a.date + ' ' + a.time))
    };
  },

  getUnreadCount: async (userId) => {
    await delay(300);
    const unread = mockMessages.filter(m => m.studentId === userId && !m.read).length;
    return {
      success: true,
      data: { count: unread }
    };
  },

  markAsRead: async (messageId) => {
    await delay(300);
    const message = mockMessages.find(m => m.id === messageId);
    if (message) {
      message.read = true;
    }
    return {
      success: true
    };
  }
};

// ==================== Helper Functions ====================
function getWeekDates() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day; // روز یکشنبه
  const start = new Date(now.setDate(diff));
  const end = new Date(now.setDate(diff + 6));
  return { start, end };
}

// Export همه API ها
export default {
  auth: authAPI,
  students: studentsAPI,
  practices: practicesAPI,
  dashboard: dashboardAPI,
  messages: messagesAPI
};

