/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B5A8F',
        secondary: '#A97CA0',
        accent: '#D8A7CA',
        mauve: {
          50: '#F9F5F9',
          100: '#F3EAF2',
          200: '#E7D5E5',
          300: '#D8A7CA',
          400: '#C682B5',
          500: '#A97CA0',
          600: '#8B5A8F',
          700: '#6D4571',
          800: '#4F3353',
          900: '#312135',
        },
      },
    },
  },
  plugins: [],
}
