import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const CategoryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  padding: 16px;
  gap: 8px;

  ${media.sm} {
    flex-direction: column;
  }
`
