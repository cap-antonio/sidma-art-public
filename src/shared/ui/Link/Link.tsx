import { FC, PropsWithChildren } from 'react'
import NextLink from 'next/link'

import { StyledLink } from './styles'

import { TLink } from './types'

export const Link: FC<PropsWithChildren<TLink>> = ({ to, children }) => {
  return (
    <NextLink href={to}>
      <StyledLink>{children}</StyledLink>
    </NextLink>
  )
}
