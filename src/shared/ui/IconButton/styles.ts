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
    fill: ${({ theme }) => theme.colors.green};
  }
  background: transparent;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.colors.greenAccent};
    }
  }

  &:active {
    transform: scale(0.98);

    svg {
      fill: ${({ theme }) => theme.colors.green};
    }
  }
`
