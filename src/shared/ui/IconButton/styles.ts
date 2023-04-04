import styled from '@emotion/styled'

import { TIconButton } from './types'

export const StyledIconButton = styled.button<TIconButton>`
  padding: 8px;
  cursor: pointer;
  border-radius: 100%;
  border: none;
  width: 32px;
  height: 32px;
  background-color: ${({ variant }) =>
    variant === 'primary' ? 'default' : 'black'};
`
