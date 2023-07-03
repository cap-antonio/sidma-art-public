import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.heights.header};
  box-shadow: 0px 0px 10px black;

  ${media.md} {
    justify-content: space-between;
  }
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

  margin-inline: 8px;

  ${media.md} {
    display: flex;

    margin-left: auto;
  }
`
