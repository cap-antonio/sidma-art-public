import { FC } from 'react'

import { StyledIconButton } from './styles'
import { TIconButton } from './types'
import { Icon } from '../Icon/Icon'

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
