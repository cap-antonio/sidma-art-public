import styled from '@emotion/styled'
import { media } from 'src/shared/theme'
import { TDrawer } from './types'

export const StyledDrawer = styled.div<TDrawer>`
  position: fixed;
  right: 0;

  width: 100%;
  max-width: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  height: 100vh;
  background: ${({ theme }) => theme.colors.violet};
  transition: max-width 0.5s ease-out;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndexes.drawer};

  ${media.sm} {
    max-width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  }
`

export const DrawerHeader = styled.div`
  display: flex;
  align-items: center;

  position: realtive;

  width: 100%;
  height: 50px;
`

export const DrawerBody = styled.div`
  padding: 32px;

  white-space: nowrap;

  ${media.sm} {
    padding: 16px;
  }
`

export const CloseButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;

  margin: 0 16px;
  height: inherit;
  width: 32px;
  height: 32px;
`
