export type TButton = {
  onClick: () => void
  title: string
  variant?: 'primary' | 'secondary'
}
export type TStyledButtonP = Pick<TButton, 'variant'>
export type TStyledButtonS = Pick<TButton, 'variant'>
