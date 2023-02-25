const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.tsx', './pages/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        brand: {
          accent: colors.blue[500],
        },
      },
    },
  },
  plugins: [],
};
