import { FC } from 'react'

import './styles.scss'
import { Icon } from '../Icon'

import { TIconButton } from './types'

export const IconButton: FC<TIconButton> = ({
  onClick,
  iconName = 'Avatar',
}) => {
  return (
    <div className="icon-button" onClick={onClick}>
      <Icon name={iconName} />
    </div>
  )
}
