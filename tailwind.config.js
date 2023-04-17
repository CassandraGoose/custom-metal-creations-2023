/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      red: '#5c0003',
      black: '#131313',
      white: '#FDF8F8',
      'off-white': '#BO9B9B',
      grey: '#d1c2c2',
      'light-red': '#D46A6A',
      'mid-red': '#ad373a',
      'light-black': '#636060',
    }, 
    extend: {
      backgroundImage: {
        'background-pattern': "url('src/assets/background-mock.webp')",
      }
    },
  },
  plugins: [],
}

