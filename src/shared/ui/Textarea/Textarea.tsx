import { FC } from 'react'

import { TTextarea } from './types'
import { StyledTextarea, TextareaWrapper } from './styles'
import { Label } from '../Label'

export const Textarea: FC<TTextarea> = ({ margin, label, ...rest }) => {
  return (
    <TextareaWrapper margin={margin}>
      {label && <Label>{label}</Label>}
      <StyledTextarea {...rest} />
    </TextareaWrapper>
  )
}
