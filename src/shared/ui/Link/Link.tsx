import { FC } from 'react'

import { Text } from './styles'

import { TLink } from './types'

export const Link: FC<TLink> = ({ onClick, title, variant = 'primary' }) => {
  return (
    <Text onClick={onClick} variant={variant}>
      {title}
    </Text>
  )
}
