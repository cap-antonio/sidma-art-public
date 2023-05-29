import { TTextareaWrapper } from './types'
import styled from '@emotion/styled'

export const StyledTextarea = styled.textarea`
  outline: none;
  resize: vertical;
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

export const TextareaWrapper = styled.div<TTextareaWrapper>`
  display: flex;
  flex-direction: column;

  margin: ${({ margin }) => margin};
`
