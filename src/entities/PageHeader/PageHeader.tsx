import { FC, PropsWithChildren } from 'react'

import './styles.scss'

export const PageHeader: FC<PropsWithChildren> = ({ children }) => (
  <div className="page-header">{children}</div>
)
