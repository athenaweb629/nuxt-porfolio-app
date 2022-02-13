const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    colors: {
      black: colors.black,
      violet: colors.violet,
      gray: colors.gray,
      indigo: colors.indigo
    },
    extend: {
      colors: {
        white: '#ffffff',
        midnight: {
          100: '#272130',
          200: '#2d2638',
          300: '#433B50',
          400: '#635676'
        }
      },
      fontFamily: {
        sans: ['Inter', '"Public Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
