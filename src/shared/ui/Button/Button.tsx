import { FC, PropsWithChildren } from 'react'

import { StyledButton } from './styles'

import { TButton } from './types'

export const Button: FC<PropsWithChildren<TButton>> = ({
  onClick,
  variant = 'primary',
  children,
}) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {children}
    </StyledButton>
  )
}
