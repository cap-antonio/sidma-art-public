import styled from '@emotion/styled'

import { TButton } from './types'

export const StyledButton = styled.button<TButton>`
  display: block;

  background: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.white : 'transparent'};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white};
  outline: none;
  border: ${({ theme, variant }) =>
    `1px solid ${
      variant === 'primary' ? theme.colors.black : theme.colors.white
    }`};
  padding: 16px 32px;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  transition: 0.25s;
  text-transform: uppercase;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.black : theme.colors.white};
    color: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.white : theme.colors.black};
  }

  &:active {
    transform: scale(0.98);
  }
`
