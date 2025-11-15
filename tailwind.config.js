/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dana': ['Dana', 'system-ui', 'sans-serif'],
        'morabba': ['Morabba', 'Dana', 'sans-serif'],
      },
      colors: {
        // رنگ‌های سفارشی پروژه - بعداً اضافه می‌شوند
      },
    },
  },
  plugins: [],
}

