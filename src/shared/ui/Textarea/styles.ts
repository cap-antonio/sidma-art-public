import { TTextarea } from './types'
import styled from '@emotion/styled'

export const StyledTextarea = styled.textarea<TTextarea>`
  outline: none;
  resize: auto;
  padding: 8px;
  margin: ${(props) => props.margin};
  font-size: 16px;
  border-radius: 4px;
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white};
  border: ${({ variant, theme }) =>
    `1px solid ${
      variant === 'primary' ? theme.colors.black : theme.colors.white
    }`};
`
