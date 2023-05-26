import styled from '@emotion/styled'

import { TStyledInput, TInputWrapper } from './types'

export const StyledInput = styled.input<TStyledInput>`
  display: flex;

  outline: none;
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSizes.m};
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

export const InputWrapper = styled.div<TInputWrapper>`
  display: flex;
  flex-direction: column;

  margin: ${({ margin }) => margin};
`
