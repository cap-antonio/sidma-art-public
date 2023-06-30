import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledSecondaryPost = styled.div`
  height: 33%;

  background: lightgreen;

  ${media.md} {
    height: 300px;
    width: 33%;
  }

  ${media.sm} {
    height: 200px;
    width: 100%;
  }
`

export const SecondaryColumnForContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;
  width: calc(50% - 4px);
  gap: 8px;
`
export const StyledWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  font-size: 8px;
`

export const StyledTags = styled.div`
  display: flex;
  flex-direction: row;

  Button {
    justify-content: center;
    margin: 4px;
    background-color: transparent;
    transform: scale(0.6);
    border-radius: 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`
