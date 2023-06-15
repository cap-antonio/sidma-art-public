import styled from '@emotion/styled'
import { media } from 'src/shared/theme'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const PostsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  width: 100%;
  max-width: 1000px;
  padding: 16px;
  gap: 8px;

  ${media.md} {
    justify-content: flex-start;
  }

  ${media.sm} {
    flex-direction: column;
  }
`

export const SecondaryColumn = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(50% - 4px);
  gap: 8px;

  ${media.md} {
    flex-direction: row;

    width: 100%;
    height: 300px;
  }

  ${media.sm} {
    flex-direction: column;

    height: auto;
    width: 100%;
  }
`
