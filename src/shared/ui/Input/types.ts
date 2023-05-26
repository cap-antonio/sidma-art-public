import { ChangeEventHandler } from 'react'
import { TCSSIndent } from 'src/shared/types'

export type TInput = {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  variant?: 'primary' | 'secondary'
  margin?: TCSSIndent
}
