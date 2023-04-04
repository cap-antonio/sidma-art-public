import { FC } from 'react'

import { StyledIconButton } from './styles'
import { TIconButton } from './types'

export const IconButton: FC<TIconButton> = ({
  onClick,
  variant = 'primary',
}) => {
  return <StyledIconButton onClick={onClick} variant={variant} />
}
