import { ChangeEventHandler } from 'react'
import { TCSSIndent, TVariants } from 'src/shared/types'

export type TInput = {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  variant?: TVariants
  margin?: TCSSIndent
  label?: string
}

export type TStyledInput = Pick<TInput, 'variant'>

export type TInputWrapper = Pick<TInput, 'margin'>
