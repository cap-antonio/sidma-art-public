import { FC } from 'react'

import {
  CloseButtonWrapper,
  DrawerBody,
  DrawerHeader,
  StyledDrawer,
} from './styles'

import { onToggleDrawer, useDispatch, useSelector } from 'src/shared/store'
import { TDrawerContent } from 'src/shared/store/modules/modal/types'
import { HeaderLinks } from './contents'
import { IconButton } from 'src/shared/ui'

const contents: Record<TDrawerContent, JSX.Element> = {
  headerLinks: <HeaderLinks />,
}

export const Drawer: FC = () => {
  const isOpen = useSelector((state) => state.modal.drawer.isOpen)
  const content = useSelector((state) => state.modal.drawer.content)
  const dispatch = useDispatch()
  const closeDrawer = () => dispatch(onToggleDrawer())

  return (
    <StyledDrawer isOpen={isOpen}>
      <DrawerHeader>
        {/* TODO: replace X with IconButton that will use close icon */}
        <CloseButtonWrapper>
          <IconButton iconName="Close" onClick={closeDrawer} />
        </CloseButtonWrapper>
      </DrawerHeader>
      <DrawerBody>{contents[content]}</DrawerBody>
    </StyledDrawer>
  )
}
