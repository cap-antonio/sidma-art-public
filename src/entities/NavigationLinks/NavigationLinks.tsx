import { FC } from 'react'

import './styles.scss'
import { Link } from '@shared/ui'

import { Pages } from '@shared/types'
import { TNavigationLinks } from './types'
import { setDrawerIsOpen, useDispatch } from '@app/store'

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
  const styledNavigationLinks =
    kind === 'header' ? 'header-wrapper' : 'drawer-wrapper'

  const dispatch = useDispatch()

  return (
    <nav className={styledNavigationLinks}>
      {links.map(({ path, title }) => (
        <Link
          key={path}
          href={path}
          onClick={() => dispatch(setDrawerIsOpen(false))}
        >
          {title}
        </Link>
      ))}
    </nav>
  )
}
