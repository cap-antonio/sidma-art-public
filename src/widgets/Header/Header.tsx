import { FC } from 'react'
import { BurgerWrapper, StyledHeader } from './styles'

import { IconButton } from 'src/shared/ui'
import { toggleDrawer, useDispatch } from 'src/shared/store'
import { NavigationLinks } from 'src/entities'

export const Header: FC = () => {
  const dispatch = useDispatch()
  const openDrawer = () => dispatch(toggleDrawer())

  return (
    <StyledHeader>
      <NavigationLinks />
      <BurgerWrapper>
        <IconButton iconName="Burger" onClick={openDrawer} />
      </BurgerWrapper>
    </StyledHeader>
  )
}
