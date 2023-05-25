import { ChangeEventHandler } from 'react'
import { CSSIndent } from 'src/shared/types'

export type TTextarea = {
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
  variant?: 'primary' | 'secondary'
  margin?: CSSIndent
}
