import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledAnotherPost = styled.div`
  height: 400px;
  width: calc(25.15% - 8px);
  background-color: lightcoral;

  overflow: hidden;

  ${media.lg} {
    width: calc(33.6% - 8px);
  }

  ${media.md} {
    width: calc(33% - 4px);
  }

  ${media.sm} {
    height: 400px;
    width: 100%;
  }
`

export const Tags = styled.div`
  display: flex;
  flex-direction: row;

  /* TODO: remove Button selector */
  Button {
    justify-content: center;
    background-color: transparent;
    transform: scale(0.8);
    border-radius: 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`

export const Tag = styled.div``
