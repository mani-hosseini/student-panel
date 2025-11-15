// Mock Data - شبیه‌ساز داده‌های بک‌اند

// داده‌های هنرجویان
export const mockStudents = [
  {
    id: '1',
    name: 'علی احمدی',
    email: 'ali@example.com',
    avatar: 'https://ui-avatars.com/api/?name=علی+احمدی&background=random',
    level: 'متوسط',
    status: 'active',
    joinedDate: '2024-01-15',
    lastPracticeDate: '2024-11-15',
    totalPractices: 45,
    totalMinutes: 1250
  },
  {
    id: '2',
    name: 'مریم رضایی',
    email: 'maryam@example.com',
    avatar: 'https://ui-avatars.com/api/?name=مریم+رضایی&background=random',
    level: 'پیشرفته',
    status: 'active',
    joinedDate: '2024-02-20',
    lastPracticeDate: '2024-11-14',
    totalPractices: 78,
    totalMinutes: 2100
  },
  {
    id: '3',
    name: 'حسین کریمی',
    email: 'hossein@example.com',
    avatar: 'https://ui-avatars.com/api/?name=حسین+کریمی&background=random',
    level: 'مبتدی',
    status: 'active',
    joinedDate: '2024-03-10',
    lastPracticeDate: '2024-11-13',
    totalPractices: 32,
    totalMinutes: 890
  }
];

// داده‌های تمرین‌ها
export const mockPractices = [
  {
    id: '1',
    studentId: '1',
    title: 'تمرین گام‌های اصلی',
    description: 'امروز روی گام‌های اصلی و تکنیک انگشت‌گذاری کار کردم',
    practicedSections: ['گام‌های اصلی', 'انگشت‌گذاری', 'آرپژ'],
    duration: 45,
    problems: 'در بخش آرپژ کمی مشکل داشتم',
    tomorrowGoal: 'فردا می‌خوام روی آرپژ بیشتر تمرین کنم',
    date: '2024-11-15',
    time: '14:30',
    status: 'pending', // pending, reviewed, needs_explanation, good
    teacherMessage: null
  },
  {
    id: '2',
    studentId: '1',
    title: 'تمرین قطعه جدید',
    description: 'شروع یادگیری قطعه جدید از کتاب',
    practicedSections: ['قطعه جدید', 'خواندن نت'],
    duration: 30,
    problems: 'نت‌خوانی سخت بود',
    tomorrowGoal: 'تمرین بیشتر روی نت‌خوانی',
    date: '2024-11-14',
    time: '16:00',
    status: 'reviewed',
    teacherMessage: 'عالیه! ادامه بده'
  },
  {
    id: '3',
    studentId: '2',
    title: 'تمرین تکنیک پیشرفته',
    description: 'کار روی تکنیک‌های پیشرفته و سرعت',
    practicedSections: ['تکنیک پیشرفته', 'سرعت', 'دقت'],
    duration: 60,
    problems: 'در سرعت بالا دقت کم می‌شه',
    tomorrowGoal: 'تمرین با مترونوم برای دقت بیشتر',
    date: '2024-11-14',
    time: '18:30',
    status: 'good',
    teacherMessage: 'خیلی خوب پیش می‌ری!'
  },
  {
    id: '4',
    studentId: '2',
    title: 'تمرین قطعه کنسرت',
    description: 'تمرین قطعه برای کنسرت آینده',
    practicedSections: ['قطعه کنسرت', 'حافظه', 'بیان'],
    duration: 90,
    problems: null,
    tomorrowGoal: 'ادامه تمرین قطعه',
    date: '2024-11-13',
    time: '15:00',
    status: 'reviewed',
    teacherMessage: 'عالی! این بخش را بیشتر تمرین کن'
  },
  {
    id: '5',
    studentId: '3',
    title: 'تمرین پایه',
    description: 'تمرین گام‌های ساده و نت‌خوانی',
    practicedSections: ['گام‌های ساده', 'نت‌خوانی'],
    duration: 25,
    problems: 'هنوز نت‌ها رو کامل یاد نگرفتم',
    tomorrowGoal: 'مرور نت‌ها',
    date: '2024-11-13',
    time: '17:00',
    status: 'needs_explanation',
    teacherMessage: 'لطفاً در مورد نت‌ها سوال بپرس'
  }
];

// داده‌های پیام‌های استاد
export const mockMessages = [
  {
    id: '1',
    studentId: '1',
    practiceId: '2',
    message: 'عالیه! ادامه بده',
    date: '2024-11-14',
    time: '18:00',
    read: true
  },
  {
    id: '2',
    studentId: '2',
    practiceId: '3',
    message: 'خیلی خوب پیش می‌ری!',
    date: '2024-11-14',
    time: '19:30',
    read: true
  },
  {
    id: '3',
    studentId: '2',
    practiceId: '4',
    message: 'عالی! این بخش را بیشتر تمرین کن',
    date: '2024-11-13',
    time: '16:00',
    read: false
  },
  {
    id: '4',
    studentId: '3',
    practiceId: '5',
    message: 'لطفاً در مورد نت‌ها سوال بپرس',
    date: '2024-11-13',
    time: '18:00',
    read: false
  }
];

// داده‌های کاربر فعلی (برای لاگین)
export const mockCurrentUser = {
  id: '1',
  name: 'علی احمدی',
  email: 'ali@example.com',
  role: 'student', // student or teacher
  avatar: 'https://ui-avatars.com/api/?name=علی+احمدی&background=random'
};

// داده‌های آماری برای داشبورد
export const mockDashboardStats = {
  weeklyPractices: 5,
  weeklyMinutes: 225,
  totalProgress: 65,
  lastPracticeDate: '2024-11-15',
  practicesThisMonth: 18,
  totalMinutesThisMonth: 810
};

