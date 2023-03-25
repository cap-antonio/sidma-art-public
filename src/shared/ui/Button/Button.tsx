import { FC } from 'react'

import { StyledButton } from './styles'

import { TButton } from './types'

export const Button: FC<TButton> = ({
  onClick,
  title,
  variant = 'primary',
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {title}
    </StyledButton>
  )
}
