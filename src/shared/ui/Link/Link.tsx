import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'

import { StyledLink } from './styles'

import { TLink } from './types'

export const Link: FC<PropsWithChildren<TLink>> = ({ to, children, hover }) => {
  return (
    <StyledLink href={to} hover={hover ? 'true' : ''}>
      {children}
    </StyledLink>
  )
}
