import { TCSSIndent } from 'src/shared/types'

export type TButton = {
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  margin?: TCSSIndent
}
export type TStyledButton = Pick<TButton, 'variant'>
