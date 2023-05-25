import { CSSIndent } from 'src/shared/types'

export type TButton = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  margin: CSSIndent
}
export type TStyledButton = Pick<TButton, 'variant'>
