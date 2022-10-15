module.exports = {
  content: [],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        slide: 'slide 0.8s cubic-bezier(0.4, 0, 0.2, 1) normal'
      },
      screens: {
        xs: { raw: '(max-height: 500px)' }
      },
      spacing: {
        100: '32rem'
      },
      colors: {
        white: '#ffffff',
        transparent: 'transparent',
        currentColor: 'currentColor',
        midnight: {
          50: '#25202D',
          100: '#221E27',
          150: '#2C2634',
          200: '#3A3244',
          300: '#433B50',
          400: '#635676',
          500: '#8A7B9E',
          600: '#B9A0DF',
          700: '#C2AFDF',
          800: '#CCBEE1',
          900: '#E5D3FF',
          1000: '#EBDEFF'
        }
      },
      fontFamily: {
        sans: ['Inter', '"Public Sans"', 'sans-serif']
      }
    }
  },
  plugins: []
}
