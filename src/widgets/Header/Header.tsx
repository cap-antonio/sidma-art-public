import { FC } from 'react'
import { BurgerWrapper, LinkWrapper, StyledHeader } from './styles'

import { IconButton, Link } from 'src/shared/ui'
import { Pages } from 'src/app/routes/types'
import { toggleDrawer, useDispatch } from 'src/shared/store'

const links = [
  {
    path: Pages.main,
    title: 'Main',
  },
  {
    path: Pages.shop,
    title: 'Shop',
  },
  {
    path: Pages.contacts,
    title: 'Contacts',
  },
  {
    path: Pages.blog,
    title: 'Blog',
  },
]

export const Header: FC = () => {
  const dispatch = useDispatch()
  const openDrawer = () => dispatch(toggleDrawer())

  return (
    <StyledHeader>
      <LinkWrapper>
        {links.map(({ path, title }) => (
          <Link key={path} to={path}>
            {title}
          </Link>
        ))}
      </LinkWrapper>
      <BurgerWrapper>
        <IconButton iconName="Burger" onClick={openDrawer} />
      </BurgerWrapper>
    </StyledHeader>
  )
}
