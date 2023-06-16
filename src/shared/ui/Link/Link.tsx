import { FC, PropsWithChildren } from 'react'

import { StyledLink } from './styles'

import { TLink } from './types'

export const Link: FC<PropsWithChildren<TLink>> = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>
}
