import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledAnotherPost = styled.div`
  height: 300px;
  width: calc(25.2% - 8px);
  background-color: lightcoral;

  ${media.md} {
    width: calc(33% - 4px);
  }

  ${media.sm} {
    height: 200px;
    width: 100%;
  }
`
// export const SecondaryColumnForContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   margin: 8px;
//   width: 100%;
//   gap: 8px;
// `
export const StyledWrapper = styled.h1`
  display: flex;
  flex-direction: row;
  color: ${({ theme }) => theme.colors.black};
  font-size: 8px;
`

export const StyledTags = styled.div`
  display: flex;
  flex-direction: row;

  Button {
    justify-content: center;
    background-color: transparent;
    transform: scale(0.8);
    border-radius: 30px;
    border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  }
`
