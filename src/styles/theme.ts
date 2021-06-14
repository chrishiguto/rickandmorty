export default {
  grid: {
    container: '90rem',
    gutter: '3.2rem'
  },
  border: {
    radius: '0.8rem'
  },
  font: {
    family:
      "Nunito, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem'
    }
  },
  colors: {
    white: '#ffffff',
    darkGray: '#8C8C8C',
    gray: '#606060',
    lightGray: '#D3D3D3',
    black: '#1B1B1B',
    lightBlack: '#1e1e1e',
    yellow: '#cbd736',
    red: '#ff5e57'
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem'
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50
  },
  transition: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: '0.1s cubic-bezier(0.4, 0, 0.2, 1)'
  }
} as const
