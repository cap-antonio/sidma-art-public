import { media } from './breakpoints'

const colors = {
  black: 'black',
  white: 'white',
  brown: '#DEB887',
  mainGray: '#E8E6E6',
  green: '#c8cfc6',
  greenAccent: '#b7bdb5',
}

const fontSizes = {
  m: '16px',
  l: '32px',
}

const fontFamily = `'Cormorant Garamond', serif`

const heights = {
  header: '40px',
}

export const theme = {
  colors,
  media,
  fontSizes,
  heights,
  fontFamily,
}

export type Theme = typeof theme

export * from './breakpoints'
