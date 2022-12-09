/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px'
    // },

    extend: {
      colors: {
        greenPrime: '#014C1B',
        greenSecond: '#269341',
        black1: '#121212',
        black2: '#323232',
        black3: '#717171',
        white: '#FFFFFF',
        grey: '#D9D9D9',
        bgPage: '#EFFFEE',
        greenTertiary: '#D7F8CE',
        darkGreen: '#002C1C',
      }
    },
  },
  plugins: [],
}
