import colors from 'windicss/colors'

export default {
  theme: {
    fontFamily: {
      sans: 'Inter,"Public Sans",Helvetica,Ubuntu,Arial,sans-serif'
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      background: '#1D1B20',
      button: '#2D2934',
      btn_hover: '#37333E',
      main: '#A39DD3',
      bluegray: {
        1: '#1F1C22',
        2: '#272635',
        3: '#6F73A0'
      },
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      ...colors
    }
  }
}
