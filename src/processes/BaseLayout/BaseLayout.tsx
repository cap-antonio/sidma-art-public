import { FC, PropsWithChildren } from 'react'

import { Header } from '../../widgets/Header'
import { MainWrapper } from './styles'

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div id={'BASE_LAYOUT_ID'} className="body">
      <Header />
      <MainWrapper>{children}</MainWrapper>
    </div>
  )
}
