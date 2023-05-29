import { ChangeEventHandler } from 'react'
import { TCSSIndent } from 'src/shared/types'

export type TTextarea = {
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
  margin?: TCSSIndent
  label?: string
}

export type TTextareaWrapper = Pick<TTextarea, 'margin'>
