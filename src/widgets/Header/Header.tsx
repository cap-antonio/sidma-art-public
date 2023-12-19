import { FC } from 'react'
import './styles.scss'

import { IconButton } from '@shared/ui'
import { toggleDrawer, useDispatch } from '@app/store'
import { NavigationLinks } from '@entities'

export const Header: FC = () => {
  const dispatch = useDispatch()
  const openDrawer = () => dispatch(toggleDrawer())

  return (
    <header className="header">
      <NavigationLinks />
      <div className="burger-wrapper">
        <IconButton iconName="Burger" onClick={openDrawer} />
      </div>
    </header>
  )
}
