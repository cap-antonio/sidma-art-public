import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.heights.header};
  box-shadow: 0px 0px 10px black;
`
export const LinkWrapper = styled.div`
  ${media.md} {
    display: none;
  }
`
export const BurgerWrapper = styled.div`
  display: none;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;

  svg {
    fill: ${({ theme }) => theme.colors.green};
  }
  background: transparent;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.greenAccent};
    }
  }

  &:active {
    transform: scale(0.98);

    svg {
      fill: ${({ theme }) => theme.colors.green};
    }
  }
  ${media.md} {
    display: flex;
  }
`
