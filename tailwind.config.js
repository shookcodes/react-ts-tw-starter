/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html,css}'],
  theme: {
    extend: {
      colors: {
        errorRed: '#DC2626',
      },
      dropShadow: {
        card: [
          '2px 4px 8px rgba(0, 0, 0, 0.15)',
          '-2px -1px 6px rgba(0, 0, 0, 0.10)',
        ],
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
      fontFamily: {
        sans: ["'Lato'", 'sans-serif'],
      },
      screens: {
        xs: '320px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
};
