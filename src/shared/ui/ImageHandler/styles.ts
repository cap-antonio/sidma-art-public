import styled from '@emotion/styled'

import { TStyledImage } from './types'

export const StyledImageHandler = styled.img<TStyledImage>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  object-fit: ${({ objectFit }) => objectFit};
`
