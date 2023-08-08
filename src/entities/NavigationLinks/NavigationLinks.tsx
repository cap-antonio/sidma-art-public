import { FC } from 'react'

import { DrawerWrapper, HeaderWrapper } from './styles'

import { TNavigationLinks } from './types'
import { Pages } from 'src/shared/types'
import { Link } from 'src/shared/ui'

const links = [
  {
    path: Pages.gallery,
    title: 'Gallery',
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

export const NavigationLinks: FC<TNavigationLinks> = ({ kind = 'header' }) => {
  const StyledNavigationLinks =
    kind === 'header' ? HeaderWrapper : DrawerWrapper

  return (
    <StyledNavigationLinks>
      {links.map(({ path, title }) => (
        <Link key={path} to={path}>
          {title}
        </Link>
      ))}
    </StyledNavigationLinks>
  )
}
