import { FC, PropsWithChildren } from 'react'

import { StyledFlex } from './styles'
import { TFlex } from './types'

export const Flex: FC<PropsWithChildren<TFlex>> = ({ children, ...styles }) => {
  return <StyledFlex {...styles}>{children}</StyledFlex>
}
