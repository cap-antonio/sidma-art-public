import styled from '@emotion/styled'

import { TInput } from './types'

export const StyledInput = styled.input<TInput>`
  display: flex;
  height: 40px;
  outline: none;
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  color: ${({ variant }) => (variant === 'primary' ? 'black' : 'white')};
  background: transparent;
  border: ${({ variant }) =>
    variant === 'primary' ? '1px solid black' : '1px solid white'};
`
