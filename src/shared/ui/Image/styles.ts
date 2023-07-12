import styled from '@emotion/styled'

import { TStyledImage } from './types'

export const Wrapper = styled.object<TStyledImage>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  min-width: ${({ width }) => width};
  object-fit: ${({ objectFit }) => objectFit};
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`
