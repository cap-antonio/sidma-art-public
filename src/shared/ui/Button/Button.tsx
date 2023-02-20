import { FC } from 'react'

import { StyledButtonS } from './styles'
import { TButton } from './types'

export const Button: FC<TButton> = ({
  onClick,
  title,
  variant = 'secondary',
}) => {
  return (
    <StyledButtonS onClick={onClick} variant={variant}>
      {title}
    </StyledButtonS>
  )
}
