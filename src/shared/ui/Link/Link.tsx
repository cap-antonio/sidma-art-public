import { FC } from 'react'

import { Pages } from 'src/app/routes/types'

import { NavbarContainer, StyledLink } from './styles'

export const NavbarLink: FC = () => {
  return (
    <div>
      <NavbarContainer>
        <StyledLink to={Pages.main}>Main Page</StyledLink>
        <StyledLink to={Pages.shop}>Shop Page</StyledLink>
      </NavbarContainer>
    </div>
  )
}
