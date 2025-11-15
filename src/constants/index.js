// Constants - ثابت‌های پروژه

// وضعیت‌های تمرین
export const PRACTICE_STATUS = {
  PENDING: 'pending',
  REVIEWED: 'reviewed',
  NEEDS_EXPLANATION: 'needs_explanation',
  GOOD: 'good'
};

// نقش‌های کاربر
export const USER_ROLES = {
  STUDENT: 'student',
  TEACHER: 'teacher'
};

// بخش‌های تمرین (گزینه‌های قابل انتخاب)
export const PRACTICE_SECTIONS = [
  'گام‌های اصلی',
  'گام‌های ساده',
  'انگشت‌گذاری',
  'آرپژ',
  'قطعه جدید',
  'قطعه کنسرت',
  'تکنیک پیشرفته',
  'سرعت',
  'دقت',
  'نت‌خوانی',
  'خواندن نت',
  'حافظه',
  'بیان'
];

// مسیرهای صفحات
export const ROUTES = {
  // Auth
  LOGIN: '/login',
  SIGNUP: '/signup',
  
  // Student
  STUDENT_DASHBOARD: '/student/dashboard',
  STUDENT_PRACTICE: '/student/practice',
  STUDENT_PROFILE: '/student/profile',
  
  // Teacher
  TEACHER_DASHBOARD: '/teacher/dashboard',
  TEACHER_STUDENTS: '/teacher/students',
  TEACHER_STUDENT_DETAIL: '/teacher/students/:id'
};

// تنظیمات پیش‌فرض
export const DEFAULT_SETTINGS = {
  ITEMS_PER_PAGE: 10,
  DATE_FORMAT: 'fa-IR',
  TIME_FORMAT: 'HH:mm'
};

