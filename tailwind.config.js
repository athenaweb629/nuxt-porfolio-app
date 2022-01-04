const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    colors: {
      black: colors.black,
      violet: colors.violet,
      gray: colors.gray
    },
    extend: {
      colors: {
        white: '#ffffff',
        midnight: '#211b2a'
      },
      fontFamily: {
        sans: ['IBM Plex Mono', 'monospace']
      }
    }
  },
  plugins: []
}
