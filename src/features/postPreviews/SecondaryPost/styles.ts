import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledSecondaryPost = styled.div`
  display: flex;

  height: 33%;
  background: lightgreen;
  overflow: hidden;

  ${media.lg} {
    flex-direction: column;

    height: 400px;
    width: 33%;

    img {
      width: 100%;
      min-height: 150px;
      height: 150px;
    }
  }

  ${media.md} {
    height: 300px;
    width: calc(33% - 4px);
  }

  ${media.sm} {
    height: 300px;
    width: 100%;
  }
`

export const SecondaryColumnForContent = styled.div`
  display: block;
  margin: 8px;
`

export const StyledTags = styled.div`
  display: flex;

  Button {
    justify-content: center;
    margin: 4px;
    background-color: transparent;
    transform: scale(0.6);
    border-radius: 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`
