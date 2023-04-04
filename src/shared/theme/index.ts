import { media } from './breakpoints'

const colors = {
  black: 'black',
  white: 'white',
  brown: '#DEB887',
}

export const theme = {
  colors,
  media,
}

export type Theme = typeof theme

export * from './breakpoints'
