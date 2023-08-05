import { FC } from 'react'

import { InputWrapper, StyledInput } from './styles'
import { TInput } from './types'
import { Label } from '../Label'

export const Input: FC<TInput> = ({ margin, label, ...rest }) => {
  return (
    <InputWrapper margin={margin}>
      {label && <Label>{label}</Label>}
      <StyledInput {...rest} />
    </InputWrapper>
  )
}
