import { FC } from 'react'

import { StyledIconButton } from './styles'
import { Icon } from '../Icon'

import { TIconButton } from './types'

export const IconButton: FC<TIconButton> = ({
  onClick,
  iconName = 'Avatar',
}) => {
  return (
    <StyledIconButton onClick={onClick}>
      <Icon name={iconName} />
    </StyledIconButton>
  )
}
