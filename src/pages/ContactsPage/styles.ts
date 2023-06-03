import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const StyledContactsPage = styled.div``

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  width: 100%;
  margin: 8px auto;
  max-width: 600px;
  padding: 16px;
  ${media.md} {
    margin: 16px;
  }
`
