import styled from '@emotion/styled'

export const StyledHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  height: ${({ theme }) => theme.heights.header};
  box-shadow: 0px 0px 10px black;
`
