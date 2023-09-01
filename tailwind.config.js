/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'netflix-pink': '#F65261',
        'netflix-gray-32': '#323232',
        'netflix-gray-42': '#424242',
        'netflix-gray-55': '#555555',
        'netflix-gray-23': '#232323',
        'netflix-gray-97': '#979797'
      }
    }
  },
  plugins: []
}
