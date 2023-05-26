import { FC } from 'react'

import { InputWrapper, StyledInput } from './styles'
import { TInput } from './types'
import { Label } from '../Label'

export const Input: FC<TInput> = ({
  variant = 'primary',
  margin,
  label,
  ...rest
}) => {
  return (
    <InputWrapper margin={margin}>
      {label && <Label variant={variant}>{label}</Label>}
      <StyledInput variant={variant} {...rest} />
    </InputWrapper>
  )
}
