import { FC } from 'react'

import {
  CloseButtonWrapper,
  DrawerBody,
  DrawerHeader,
  StyledDrawer,
} from './styles'

import { useSelector } from 'src/shared/store'
import { TDrawerContent } from 'src/shared/store/modules/modal/types'
import { HeaderLinks } from './contents'

const contents: Record<TDrawerContent, JSX.Element> = {
  headerLinks: <HeaderLinks />,
}

export const Drawer: FC = () => {
  const isOpen = useSelector((state) => state.modal.drawer.isOpen)
  const content = useSelector((state) => state.modal.drawer.content)

  return (
    <StyledDrawer isOpen={isOpen}>
      <DrawerHeader>
        {/* TODO: replace X with IconButton that will use close icon */}
        <CloseButtonWrapper>X</CloseButtonWrapper>
      </DrawerHeader>
      <DrawerBody>{contents[content]}</DrawerBody>
    </StyledDrawer>
  )
}
