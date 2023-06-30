import styled from '@emotion/styled'

import { TIconBurger } from './types'

export const StyledIconBurger = styled.button<TIconBurger>`
  position: fixed;
  right: 0;
  display: none;
  border: none;
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

  @media (max-width: 768px) {
    display: flex;
  }
`
