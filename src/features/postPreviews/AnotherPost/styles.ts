import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledAnotherPost = styled.div`
  height: 400px;
  width: calc(25.15% - 8px);
  background-color: transparent;

  overflow: hidden;

  ${media.lg} {
    flex-direction: column;

    height: auto;
    width: 33%;

    object {
      width: 100%;
      min-height: 150px;
      height: 150px;
    }
  }

  ${media.md} {
    width: calc(33% - 4px);
  }

  ${media.sm} {
    display: flex;
    height: auto;
    width: 100%;

    object {
      width: 100%;
      height: 70%;
    }
  }
`
