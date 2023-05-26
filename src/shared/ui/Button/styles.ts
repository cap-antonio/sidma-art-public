import styled from '@emotion/styled'

import { TButton } from './types'

export const StyledButton = styled.button<TButton>`
  background: ${({ theme, variant }) =>
    variant === 'primary' ? 'transparent' : theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  display: block;
  outline: none;
  border: ${({ theme, variant }) =>
    `1px solid ${
      variant === 'primary' ? theme.colors.black : theme.colors.white
    }`};
  padding: 8px 32px;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.black : theme.colors.white};
    color: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.white : theme.colors.black};
  }

  &:active {
    transform: scale(1.1);
  }
`
