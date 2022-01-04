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
          100: '#211b2a',
          200: '#2d2638'
        }
      },
      fontFamily: {
        sans: ['IBM Plex Mono', 'monospace']
      }
    }
  },
  plugins: []
}
