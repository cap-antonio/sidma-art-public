import { ChangeEventHandler } from 'react'

export type TInput = {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
  label?: string
  className?: string
}
