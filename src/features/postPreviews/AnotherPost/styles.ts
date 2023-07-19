import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledAnotherPost = styled.div`
  cursor: pointer;
  height: 400px;
  width: calc(33% - 4px);

  overflow: hidden;

  ${media.lg} {
    display: flex;
    flex-direction: column;

    height: auto;
    width: calc(33% - 4px);

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
