/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#a97c50',
          secondary: '#99141e'
        }
      },
      fontFamily: {
        saudi: ['Saudi', 'Tajawal', 'Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
};
