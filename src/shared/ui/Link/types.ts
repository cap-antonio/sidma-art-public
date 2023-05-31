export type TLink = {
  onClick: () => void
  title: string
  variant?: 'primary' | 'secondary'
}
export type TStyledLink = Pick<TLink, 'variant'>
