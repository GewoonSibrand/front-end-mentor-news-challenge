/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        'yellow': "hsl(35, 77%, 62%)",
        'light-vermillion': "hsl(5, 85%, 63%)",
        'off-white': "hsl(36, 100%, 99%)",
        'silver': "hsl(233, 8%, 79%)",
        'gun-metal': "hsl(236, 13%, 42%)",
        'dark-space-blue': "hsl(240, 100%, 5%)",
      },
      fontFamily: {
        'sans': ['inter', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
