import styled from '@emotion/styled'

import { TInputWrapper } from './types'

export const StyledInput = styled.input`
  display: flex;

  outline: none;
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.black};
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  background: transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.black};
    text-transform: capitalize;
  }
`

export const InputWrapper = styled.div<TInputWrapper>`
  display: flex;
  flex-direction: column;

  margin: ${({ margin }) => margin};
`
