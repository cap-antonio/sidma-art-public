import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledLatestPost = styled.div`
  height: 700px;

  overflow: hidden;
  background: pink;
  width: calc(50% - 4px);

  ${media.lg} {
    width: 100%;
    height: 400px;
  }

  ${media.md} {
    width: 100%;
    height: 400px;
  }

  ${media.sm} {
    width: 100%;
    height: 300px;
  }
`

export const StyledWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin: 8px;
  padding: 8px;
`

export const StyledTags = styled.div`
  display: flex;
  flex-direction: row;

  Button {
    justify-content: center;
    margin: 8px;
    background-color: transparent;
    transform: scale(0.8);
    border-radius: 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`
