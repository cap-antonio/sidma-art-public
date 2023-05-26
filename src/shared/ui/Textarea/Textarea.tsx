import { FC } from 'react'

import { TTextarea } from './types'
import { StyledTextarea, TextareaWrapper } from './styles'
import { Label } from '../Label'

export const Textarea: FC<TTextarea> = ({
  margin,
  variant = 'primary',
  label,
  ...rest
}) => {
  return (
    <TextareaWrapper margin={margin}>
      {label && <Label variant={variant}>{label}</Label>}
      <StyledTextarea variant={variant} {...rest} />
    </TextareaWrapper>
  )
}
