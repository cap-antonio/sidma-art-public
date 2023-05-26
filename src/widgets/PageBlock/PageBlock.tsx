import { FC, PropsWithChildren } from 'react'
import { StyledPageBlock } from './styles'

export const PageBlock: FC<PropsWithChildren> = ({ children }) => {
  return <StyledPageBlock>{children}</StyledPageBlock>
}
