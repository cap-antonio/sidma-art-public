import { FC, PropsWithChildren } from 'react'

import './styles.scss'

export const FlexColumn: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex-column">{children}</div>
}
