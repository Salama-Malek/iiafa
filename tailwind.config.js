/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#99141e',
          secondary: '#a97c50'
        }
      },
      fontFamily: {
        saudi: ['Saudi', 'Tajawal', 'Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
};
