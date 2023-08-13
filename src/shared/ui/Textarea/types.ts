import { ChangeEventHandler } from 'react'

export type TTextarea = {
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
  label?: string
  className?: string
}
