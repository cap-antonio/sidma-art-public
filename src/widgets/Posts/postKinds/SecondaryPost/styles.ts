import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledSecondaryPost = styled.div`
  height: 33%;
  background: green;

  ${media.md} {
    height: 300px;
    width: 33%;
  }

  ${media.sm} {
    height: 200px;
    width: 100%;
  }
`
