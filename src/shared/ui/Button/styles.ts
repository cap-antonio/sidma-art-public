import { TStyledButtonP, TStyledButtonS } from './types'
import styled from '@emotion/styled'

export const StyledButtonP = styled.button<TStyledButtonP>`
  background-color: white;
  color: black;
  padding: 8px;
  margin: 48px;
  cursor: pointer;
  transition: 0.35s;
  &:hover {
    background-color: black;
    color: white;
  }
`

export const StyledButtonS = styled.button<TStyledButtonS>`
  background-color: white;
  color: black;
  padding: 8px;
  margin: 48px;
  cursor: pointer;
  transition: 0.35s;
  &:hover {
    background-color: brown;
    color: white;
  }
`
