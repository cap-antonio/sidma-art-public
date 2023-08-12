import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledCategoryCard = styled.div`
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: box-shadow 0.3s;

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
    box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
  }
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
`

export const Name = styled.p`
  margin-block: 4px;
  font-size: 24px;
  font-weight: 700;
`

export const Description = styled.p`
  margin-bottom: 8px;
`
