import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
`
export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 8px;
  margin: 8px;

  &:hover {
    color: brown;
  }
`
