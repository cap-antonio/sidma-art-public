export type TButton = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}
export type TStyledButton = Pick<TButton, 'variant'>
