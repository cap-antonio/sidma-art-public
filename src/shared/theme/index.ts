import { media } from './breakpoints'

const colors = {
  black: 'black',
  white: 'white',
  brown: '#DEB887',
}

const fontSizes = {
  m: '16px',
  l: '32px',
}

export const theme = {
  colors,
  media,
  fontSizes,
}

export type Theme = typeof theme

export * from './breakpoints'
