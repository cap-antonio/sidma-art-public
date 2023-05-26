import styled from '@emotion/styled'

import { TStyledLabel } from './types'

export const StyledLabel = styled.label<TStyledLabel>`
  margin: 8px 0 8px 16px;
  font-weight: 700;
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white}; ;
`
