/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          clay: '#a97c50',
          burgundy: '#99141e',
          burgundyHover: '#7f1119',
          charcoal: '#3f3d3d',
          cream: '#faf6f0',
          ink: '#1f1a16'
        }
      },
      fontFamily: {
        saudi: ['Saudi', 'Tajawal', 'Cairo', 'sans-serif']
      }
    }
  },
  plugins: []
};
