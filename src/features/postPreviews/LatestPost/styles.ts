import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledLatestPost = styled.div`
  height: 500px;
  background: red;

  width: calc(50% - 4px);

  ${media.md} {
    width: 100%;
    height: 400px;
  }

  ${media.sm} {
    width: 100%;
    height: 300px;
  }
`
