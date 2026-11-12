/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1F2328',
        steel: '#2E3640',
        accent: { DEFAULT: '#F26A1B', hover: '#FF8A47' },
        page: '#F2F3F4',
        line: '#D9DDE1',
        muted: '#59626B',
        stock: '#1B6B3A',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'Arial', 'sans-serif'],
        sans: ['Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};