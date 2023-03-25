import { FC } from 'react'
import { StyledInput } from './styles'
import { TInput } from './types'

export const Input: FC<TInput> = ({
  value,
  onChange,
  placeholder,
  variant,
}) => {
  return (
    <StyledInput
      variant={variant}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
