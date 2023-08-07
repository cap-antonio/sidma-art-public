import styled from '@emotion/styled'

export const StyledLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 8px;
  margin: 8px;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`
