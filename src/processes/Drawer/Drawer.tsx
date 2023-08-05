import { FC } from 'react'

import {
  CloseButtonWrapper,
  DrawerBody,
  DrawerHeader,
  StyledDrawer,
} from './styles'

import { toggleDrawer, useDispatch, useSelector } from 'src/shared/store'
import { TDrawerContent } from 'src/shared/store/modules/modal/types'
import { IconButton } from 'src/shared/ui'
import { NavigationLinks } from 'src/entities'

const contents: Record<TDrawerContent, JSX.Element> = {
  headerLinks: <NavigationLinks kind="drawer" />,
}

export const Drawer: FC = () => {
  const isOpen = useSelector((state) => state.modal.drawer.isOpen)
  const content = useSelector((state) => state.modal.drawer.content)
  const dispatch = useDispatch()
  const closeDrawer = () => dispatch(toggleDrawer())

  return (
    <StyledDrawer isOpen={isOpen}>
      <DrawerHeader>
        <CloseButtonWrapper>
          <IconButton iconName="Close" onClick={closeDrawer} />
        </CloseButtonWrapper>
      </DrawerHeader>
      <DrawerBody>{contents[content]}</DrawerBody>
    </StyledDrawer>
  )
}
