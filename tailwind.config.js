/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './Ecommerce/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './Ecommerce/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4263eb',
        secondary: '#63e6be',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
          // lg: '4rem',
          // xl: '5rem',
          // '2xl': '6rem',
        },
      },
    },
  },
  plugins: [],
};
