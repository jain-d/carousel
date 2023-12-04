/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      'sm': '320px',
      'md': '540px',
      'lg': '845px',
      'xl': '1248px',
      'xxl': '1400px',
    },
    extend: {},
  },
  plugins: [],
}
