import { FC, PropsWithChildren } from 'react'

import { StyledLabel } from './styles'

import { TLabel } from './types'

export const Label: FC<PropsWithChildren<TLabel>> = ({ children, ...rest }) => {
  return <StyledLabel {...rest}>{children}</StyledLabel>
}
