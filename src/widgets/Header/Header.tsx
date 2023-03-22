import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainPage } from 'src/pages'
import { Shop } from 'src/pages/Shop'

export const Header: FC = () => {
  return (
    <>
      <a href="/">
        <MainPage />
      </a>
      <a href="/shop">
        <Shop />
      </a>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={'Купи, заебал'} />
      </Routes>
    </>
  )
}
