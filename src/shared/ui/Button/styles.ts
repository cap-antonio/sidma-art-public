import styled from '@emotion/styled'

import { TButton } from './types'

export const StyledButton = styled.button<TButton>`
  display: block;

  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.black};
  outline: none;
  border: none;
  padding: 16px 32px;
  margin: ${({ margin }) => margin};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.greenAccent};
  }
  &:active {
    transform: scale(0.98);
    background: ${({ theme }) => theme.colors.green};
  }
`
