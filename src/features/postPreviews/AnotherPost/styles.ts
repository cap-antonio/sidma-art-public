import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledAnotherPost = styled.div`
  height: 300px;
  width: calc(25.2% - 8px);
  background: red;

  ${media.md} {
    width: calc(33% - 4px);
  }

  ${media.sm} {
    height: 200px;
    width: 100%;
  }
`
