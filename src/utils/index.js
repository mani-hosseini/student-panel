// Utility Functions - توابع کمکی

// فرمت تاریخ
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// فرمت زمان
export const formatTime = (timeString) => {
  return timeString || '--:--';
};

// فرمت مدت زمان (دقیقه به ساعت و دقیقه)
export const formatDuration = (minutes) => {
  if (minutes < 60) {
    return `${minutes} دقیقه`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours} ساعت و ${mins} دقیقه` : `${hours} ساعت`;
};

// دریافت رنگ بر اساس وضعیت
export const getStatusColor = (status) => {
  const colors = {
    pending: 'yellow',
    reviewed: 'blue',
    needs_explanation: 'orange',
    good: 'green'
  };
  return colors[status] || 'gray';
};

// دریافت متن فارسی وضعیت
export const getStatusText = (status) => {
  const texts = {
    pending: 'در انتظار بررسی',
    reviewed: 'بررسی شده',
    needs_explanation: 'نیاز به توضیح',
    good: 'عالی'
  };
  return texts[status] || status;
};

// اعتبارسنجی ایمیل
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// اعتبارسنجی فرم تمرین
export const validatePracticeForm = (data) => {
  const errors = {};
  
  if (!data.title || data.title.trim() === '') {
    errors.title = 'عنوان تمرین الزامی است';
  }
  
  if (!data.description || data.description.trim() === '') {
    errors.description = 'توضیحات تمرین الزامی است';
  }
  
  if (!data.duration || data.duration <= 0) {
    errors.duration = 'مدت زمان تمرین باید بیشتر از صفر باشد';
  }
  
  if (!data.practicedSections || data.practicedSections.length === 0) {
    errors.practicedSections = 'حداقل یک بخش باید انتخاب شود';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

