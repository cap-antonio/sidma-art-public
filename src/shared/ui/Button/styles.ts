import styled from '@emotion/styled'

import { TStyledButton } from './types'

export const StyledButton = styled.button<TStyledButton>`
  background: white;
  color: black;
  padding: 8px;
  margin: 48px;
  cursor: pointer;
  transition: 0.35s;

  &:hover {
    background: black;
    color: white;
  }
`
