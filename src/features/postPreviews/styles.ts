import styled from '@emotion/styled'

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.black};
  margin-block: 4px;
  font-size: 24px;
  font-weight: 700;
`

export const Meta = styled.p`
  margin-inline: 4px;
  font-style: italic;
`

export const TextPreview = styled.p`
  margin-bottom: 8px;
`

export const Tag = styled.div`
  border-radius: 12px;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  padding: 2px 4px;
  margin: 4px 4px 0 0;
  font-weight: 600;
`
