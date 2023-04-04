import styled from '@emotion/styled'

import { TInput } from './types'

export const StyledInput = styled.input<TInput>`
  display: flex;
  height: 40px;
  outline: none;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white};
  background: transparent;
  border: ${({ variant, theme }) =>
    `1px solid ${
      variant === 'primary' ? theme.colors.black : theme.colors.white
    }`};
`
