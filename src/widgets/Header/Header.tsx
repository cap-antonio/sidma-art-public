import { FC } from 'react'
import { StyledHeader } from './styles'

import { Link } from 'src/shared/ui'
import { Pages } from 'src/app/routes/types'

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
  return (
    <StyledHeader>
      {links.map(({ path, title }) => (
        <Link key={path} to={path}>
          {title}
        </Link>
      ))}
    </StyledHeader>
  )
}
