
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary': '#1E40AF',
        'secondary': '#FBBF24',
        'background': '#F3F4F6',
        'red': '#EF4444',
        'green': '#10B981',
        'blue': '#3B82F6',
        'orange': '#F97316',
        'accent-red': '#F87171',
        'accent-green': '#97e6ac',
        'accent-blue': '#60A5FA',
        'accent-orange': '#ffdb75',
      },
    },
  },
  plugins: [],
};