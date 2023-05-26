import { TCSSIndent, TVariants } from 'src/shared/types'

export type TButton = {
  onClick?: () => void
  variant?: TVariants
  margin?: TCSSIndent
}
export type TStyledButton = Pick<TButton, 'variant'>
