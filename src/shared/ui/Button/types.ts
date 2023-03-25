export type TButton = {
  onClick: () => void
  title: string
  variant?: 'primary' | 'secondary'
}
export type TStyledButton = Pick<TButton, 'variant'>
