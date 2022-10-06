/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'app-accent': '#26C2AE',
        'app-teal-100': '#F3F9FA',
        'app-teal-200': '#F3F9FA',
        'app-teal-300': '#C5E4E7',
        'app-teal-400': '#9EBBBD',
        'app-teal-500': '#5E7A7D',
        'app-teal-600': '#547878',
        'app-teal-700': '#0D686D',
        'app-teal-800': '#3D6666',
        'app-teal-900': '#00474B',
      },
    },
  },
  plugins: [],
};
