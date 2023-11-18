import { FC, PropsWithChildren } from 'react'

import './styles.scss'

export const PageBlock: FC<PropsWithChildren> = ({ children }) => (
  <div className="page-block">{children}</div>
)
