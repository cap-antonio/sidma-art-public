import { FC } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { Contacts, MainPage, Shop } from 'src/pages'
import { Container, Text } from 'src/shared/ui/Link/styles'

export const Header: FC = () => {
  return (
    <>
      <Container>
        <Link to="/">
          <Text>
            <MainPage />
          </Text>
        </Link>
        <Link to="/shop">
          <Text>
            <Shop />
          </Text>
        </Link>
        <Link to="/contacts">
          <Text>
            <Contacts />
          </Text>
        </Link>
      </Container>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={'Купи'} />
        <Route path="/contacts" element={'Номер телефона'} />
      </Routes>
    </>
  )
}
