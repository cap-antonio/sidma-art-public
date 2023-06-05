import { FC, PropsWithChildren } from 'react'

import { Header } from '../../widgets/Header'
import { MainWrapper } from './styles'
import { Drawer } from '../Drawer'

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id={'BASE_LAYOUT_ID'} className="body">
      <Drawer />
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </div>
  )
}
