import { TVariants } from 'src/shared/types'

export type TLabel = {
  htmlFor?: string
  variant?: TVariants
}

export type TStyledLabel = Pick<TLabel, 'variant'>
