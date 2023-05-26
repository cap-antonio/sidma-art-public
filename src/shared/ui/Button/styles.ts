import styled from '@emotion/styled'

import { TButton } from './types'

export const StyledButton = styled.button<TButton>`
  background: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.white : 'transparent'};
  color: ${({ theme }) => theme.colors.black};
  color: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white};
  display: block;
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
      variant === 'primary' ? theme.colors.black : 'transparent'};
    color: ${({ theme }) => theme.colors.white};
  }

  &:active {
    transform: scale(1.1);
  }
`
