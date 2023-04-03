import { FC } from 'react'

import { StyledInput } from './styles'
import { TInput } from './types'

export const Input: FC<TInput> = ({ value, onChange, placeholder }) => {
  return (
    <StyledInput
      variant={'primary'}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}
