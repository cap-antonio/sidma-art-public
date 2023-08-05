import { FC, PropsWithChildren } from 'react'

import { StyledPageHeader } from './styles'

export const PageHeader: FC<PropsWithChildren> = ({ children }) => (
  <StyledPageHeader>{children}</StyledPageHeader>
)
