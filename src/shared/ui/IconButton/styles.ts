import styled from '@emotion/styled'

import { TIconButton } from './types'

export const StyledIconButton = styled.button<TIconButton>`
  cursor: pointer;
  border-radius: 100%;
  border: none;
  width: 32px;
  height: 32px;
  background: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.black};
  transition: 0.25s;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.white : theme.colors.brown};
    svg {
      fill: ${({ theme, variant }) =>
        variant === 'primary' ? theme.colors.brown : theme.colors.black};
    }
  }

  &:active {
    transform: scale(1.1);
  }
`
