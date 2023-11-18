import { FC } from 'react'
import cn from 'classnames'

import './styles.scss'

import { toggleDrawer, useDispatch, useSelector } from '@shared/store'
import { TDrawerContent } from '@shared/store/modules/modal/types'
import { IconButton } from '@shared/ui'
import { NavigationLinks } from '@entities'

const contents: Record<TDrawerContent, JSX.Element> = {
  headerLinks: <NavigationLinks kind="drawer" />,
}

export const Drawer: FC = () => {
  const isOpen = useSelector((state) => state.modal.drawer.isOpen)
  const content = useSelector((state) => state.modal.drawer.content)
  const dispatch = useDispatch()
  const closeDrawer = () => dispatch(toggleDrawer())

  const drawerClassNames = cn('drawer', {
    opened: isOpen,
  })

  return (
    <aside className={drawerClassNames}>
      <div className="drawer-header">
        <div className="close-button-wrapper">
          <IconButton iconName="Close" onClick={closeDrawer} />
        </div>
      </div>
      <div className="drawer-body">{contents[content]}</div>
    </aside>
  )
}
