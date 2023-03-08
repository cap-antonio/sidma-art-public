import { ChangeEventHandler, FC } from 'react'
import { StyledInput } from './styles'

type TInput = {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  placeholder?: string
}

export const Input: FC<TInput> = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput value={value} onChange={onChange} placeholder={placeholder} />
  )
}
