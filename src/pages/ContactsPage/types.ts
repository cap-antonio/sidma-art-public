import { ChangeEventHandler } from 'react'

export type TContactsPage = {
  value?: string
  onChange?: ChangeEventHandler
  placeholder?: string
  textarea?: string
  variant?: 'primary' | 'secondary'
}
