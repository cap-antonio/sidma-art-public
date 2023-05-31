import styled from '@emotion/styled'

import { TStyledLink } from './types'

export const Container = styled.div`
  align-items: center;
  display: flex;
  text-decoration: none;
  justify-content: center;
`
export const Text = styled.div<TStyledLink>`
  color: black;
  text-decoration: none;
  padding: 8px;
  margin: 8px;

  &:hover {
    color: brown;
    text-decoration: none;
  }
`
