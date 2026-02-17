/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#a97c50',
          primaryHover: '#976d44',
          secondary: '#dcc5ab',
          ink: '#1f1a16',
          danger: '#99141e'
        }
      },
      fontFamily: {
        saudi: ['Saudi', 'Tajawal', 'Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
};
