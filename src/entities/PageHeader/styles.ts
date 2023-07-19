import styled from '@emotion/styled'

export const StyledPageHeader = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  padding: 32px 0;
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.l};
  user-select: none;
`
