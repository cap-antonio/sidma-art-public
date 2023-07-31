import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledSecondaryPost = styled.div`
  display: flex;

  cursor: pointer;
  height: 33%;
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
    height: auto;
    width: calc(33% - 4px);
  }

  ${media.sm} {
    height: auto;
    width: 100%;

    object {
      width: 100%;
      height: 70%;
    }
  }
`
