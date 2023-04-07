import { FC } from 'react'

import { StyledIconButton } from './styles'
import { Icon } from '../Icon'

import { TIconButton } from './types'

export const IconButton: FC<TIconButton> = ({
  onClick,
  variant = 'primary',
  iconName = 'Telegram',
  iconName2 = 'Instagram',
  iconName3 = 'ShopBag',
}) => {
  return (
    <div>
      <StyledIconButton onClick={onClick} variant={variant}>
        <Icon name={iconName} />
      </StyledIconButton>
      <StyledIconButton onClick={onClick} variant={variant}>
        <Icon name={iconName2} />
      </StyledIconButton>
      <StyledIconButton onClick={onClick} variant={variant}>
        <Icon name={iconName3} />
      </StyledIconButton>
    </div>
  )
}
