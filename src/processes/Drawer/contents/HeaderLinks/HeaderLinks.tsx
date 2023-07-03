import { FC } from 'react'

import { Link } from 'src/shared/ui'
import { Pages } from 'src/app/routes/types'
import { HeaderLinkWrapper } from './styles'

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
export const HeaderLinks: FC = () => {
  return (
    <HeaderLinkWrapper>
      {links.map(({ path, title }) => (
        <Link key={path} to={path}>
          {title}
        </Link>
      ))}
    </HeaderLinkWrapper>
  )
}
