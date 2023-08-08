import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledCategoryCard = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;

  ${media.sm} {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;

    object {
      width: 100%;
      height: 100%;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;

  &:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => `${theme.colors.green}70`};
    z-index: 1;
  }
`

export const Name = styled.p`
  margin-block: 4px;
  font-size: 24px;
  font-weight: 700;
`

export const Description = styled.p`
  margin-bottom: 8px;
`
