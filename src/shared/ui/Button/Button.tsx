import { FC } from 'react'

import { StyledButton } from './styles'
import { TButton } from './types'

export const Button: FC<TButton> = ({ onClick, title }) => {
  return <StyledButton onClick={onClick}>{title}</StyledButton>
}
