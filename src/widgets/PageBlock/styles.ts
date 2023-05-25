import styled from '@emotion/styled'

export const StyledPageBlock = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  width: 100%;
  background: ${({ theme }) => theme.colors.brown};
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  margin: 8px auto;
  max-width: 400px;
`
