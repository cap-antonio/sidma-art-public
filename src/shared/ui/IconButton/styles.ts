import styled from '@emotion/styled'

import { TIconButton } from './types'

export const StyledIconButton = styled.button<TIconButton>`
  cursor: pointer;
  display: block;
  border-radius: 100%;
  border: none;
  width: 32px;
  height: 32px;
  transition: 0.25s;
  svg {
    fill: ${({ theme, variant }) =>
      variant === 'primary' ? theme.colors.brown : theme.colors.black};
  }
  background: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.white : theme.colors.black};

  &:hover {
    svg {
      fill: ${({ theme, variant }) =>
        variant === 'primary' ? theme.colors.white : theme.colors.brown};
    }
    background: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.black : theme.colors.white};
  }

  &:active {
    transform: scale(1.1);
  }
`
