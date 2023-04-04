import { FC } from 'react'

import { StyledIconButton } from './styles'
import { Icon } from '../Icon'

import { TIconButton } from './types'

export const IconButton: FC<TIconButton> = ({
  onClick,
  variant = 'primary',
  iconName = 'Avatar',
}) => {
  return (
    <StyledIconButton onClick={onClick} variant={variant}>
      <Icon name={iconName} />
    </StyledIconButton>
  )
}
