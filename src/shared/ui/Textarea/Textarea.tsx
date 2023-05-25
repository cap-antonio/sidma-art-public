import { FC } from 'react'

import { TTextarea } from './types'
import { StyledTextarea } from './styles'

export const Textarea: FC<TTextarea> = ({
  value,
  onChange,
  margin,
  placeholder,
  variant = 'primary',
}) => {
  return (
    <StyledTextarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      variant={variant}
      margin={margin}
    />
  )
}
