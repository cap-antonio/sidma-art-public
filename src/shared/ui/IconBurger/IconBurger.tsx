import { FC } from 'react'

import { StyledIconBurger } from './styles'
import { Icon } from '../Icon'

import { TIconBurger } from './types'

export const IconBurger: FC<TIconBurger> = ({
  onClick,
  iconName = 'Burger',
}) => {
  return (
    <StyledIconBurger onClick={onClick}>
      <Icon name={iconName} />
    </StyledIconBurger>
  )
}
