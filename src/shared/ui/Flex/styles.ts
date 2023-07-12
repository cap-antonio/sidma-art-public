import styled from '@emotion/styled'
import { TFlex } from './types'

export const StyledFlex = styled.div<TFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-content: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : 'nowrap')};

  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
`
