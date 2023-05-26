import { ChangeEventHandler } from 'react'
import { TCSSIndent } from 'src/shared/types'

export type TTextarea = {
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
  variant?: 'primary' | 'secondary'
  margin?: TCSSIndent
}
