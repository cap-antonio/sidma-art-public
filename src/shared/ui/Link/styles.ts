import styled from '@emotion/styled'
import { ExtendedLinkProps } from './types'
import Link from 'next/link'

export const StyledLink = styled(Link)<ExtendedLinkProps>`
  color: black;
  text-decoration: none;
  padding: 8px;
  margin: 8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme, hover }) =>
      hover === 'true' ? theme.colors.green : ''};
  }
`
