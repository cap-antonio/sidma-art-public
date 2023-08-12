import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import { ExtendedLinkProps } from './types'

export const StyledLink = styled(Link)<ExtendedLinkProps>`
  color: black;
  text-decoration: none;
  padding: 8px;
  margin: 8px;

  &:hover {
    color: ${({ theme, hover }) =>
      hover === 'true' ? theme.colors.green : ''};
  }
`
