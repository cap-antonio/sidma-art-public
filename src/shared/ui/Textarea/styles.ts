import { TStyledTextarea, TTextareaWrapper } from './types'
import styled from '@emotion/styled'

export const StyledTextarea = styled.textarea<TStyledTextarea>`
  outline: none;
  resize: vertical;
  padding: 16px;
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.black : theme.colors.white};
  border: ${({ variant, theme }) =>
    `1px solid ${
      variant === 'primary' ? theme.colors.black : theme.colors.white
    }`};
  background: transparent;

  &::placeholder {
    color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.black : theme.colors.white};

    text-transform: capitalize;
  }
`

export const TextareaWrapper = styled.div<TTextareaWrapper>`
  display: flex;
  flex-direction: column;

  margin: ${({ margin }) => margin};
`
