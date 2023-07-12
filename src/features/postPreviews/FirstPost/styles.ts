import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledFirstPost = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 500px;
  max-height: 600px;
  width: calc(50% - 4px);

  ${media.lg} {
    width: 100%;
    height: auto;
  }

  ${media.md} {
    width: 100%;
    height: auto;
  }

  ${media.sm} {
    width: 100%;
    height: auto;

    object {
      width: 100%;
      height: 70%;
    }
  }
`
