import { FC, PropsWithChildren } from 'react'

import './styles.scss'

export const PageHeader: FC<PropsWithChildren> = ({ children }) => (
  <h1 className="page-header">{children}</h1>
)
