import { FC, PropsWithChildren } from 'react'

import { Header } from '../../widgets/Header'
import './styles.scss'
import { Drawer } from '../Drawer'

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id={'BASE_LAYOUT_ID'} className="body">
      <Drawer />
      <Header />
      <div className="main-wrapper">{children}</div>
    </div>
  )
}
