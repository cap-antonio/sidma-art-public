import styled from '@emotion/styled'
// import { media } from 'src/shared/theme'

import { TIconButton } from './types'

// export const StyledIconButton = styled.button<TIconButton>`
//   cursor: pointer;
//   display: block;
//   border-radius: 100%;
//   border: none;
//   width: 32px;
//   height: 32px;
//   transition: 0.25s;
//   svg {
//     fill: ${({ theme }) => theme.colors.green};
//   }
//   background: transparent;

//   &:hover {
//     svg {
//       fill: ${({ theme }) => theme.colors.greenAccent};
//     }
//   }

//   &:active {
//     transform: scale(0.98);

//     svg {
//       fill: ${({ theme }) => theme.colors.green};
//     }
//   }
// `
export const StyledIconButton = styled.button<TIconButton>`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;

  margin: 0 16px;
  height: inherit;
  width: 32px;
  height: 32px;
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
  @media (min-width: 768px) {
    display: none;
  }
`

// ${media.md} {
//   display: flex;
// }
