const colors = {
  black: 'black',
  white: 'white',
  mainGray: '#E8E6E6',
  green: '#c8cfc6',
  greenAccent: '#b7bdb5',
  violet: '#8C7284',
}

const fontSizes = {
  m: '16px',
  l: '32px',
}

const fontFamily = `'Cormorant Garamond', serif`

const heights = {
  header: '40px',
}

const breakpoints = {
  sm: 480,
  md: 768,
  lg: 960,
  xl: 1140,
  xxl: 1600,
}

const zIndexes = {
  drawer: 50,
  modal: 100,
}

export const media = {
  sm: `@media (max-width: ${breakpoints.sm}px)`,
  md: `@media (max-width: ${breakpoints.md}px)`,
  lg: `@media (max-width: ${breakpoints.lg}px)`,
  xl: `@media (max-width: ${breakpoints.xl}px)`,
  xxl: `@media (max-width: ${breakpoints.xxl}px)`,
}

export const theme = {
  colors,
  fontSizes,
  heights,
  fontFamily,
  breakpoints,
  zIndexes,
}

export type Theme = typeof theme
