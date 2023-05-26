import { ChangeEventHandler } from 'react'
import { TCSSIndent, TVariants } from 'src/shared/types'

export type TTextarea = {
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
  variant?: TVariants
  margin?: TCSSIndent
  label?: string
}

export type TStyledTextarea = Pick<TTextarea, 'variant'>

export type TTextareaWrapper = Pick<TTextarea, 'margin'>
