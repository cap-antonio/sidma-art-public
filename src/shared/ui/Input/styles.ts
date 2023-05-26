import styled from '@emotion/styled'

import { TInput } from './types'

export const StyledInput = styled.input<TInput>`
  display: flex;
  height: 40px;
  outline: none;
  padding: 8px;
  margin: ${({ margin }) => margin};
  font-size: 16px;
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white};
  border: ${({ variant, theme }) =>
    `1px solid ${
      variant === 'primary' ? theme.colors.black : theme.colors.white
    }`};
  background: transparent;

  &::placeholder {
    color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.black : theme.colors.white};
    text-transform: capitalize;
  }
`
