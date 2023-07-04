import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const HeaderWrapper = styled.div`
  ${media.md} {
    display: none;
  }
`

export const DrawerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
