import { FC } from 'react'
import { StyledHeader } from './styles'

// export const Header: FC = () => {
//   return <StyledHeader>Header</StyledHeader>
// }

import { Link } from 'src/shared/ui'
import { Pages } from 'src/app/routes/types'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Link to={Pages.main}>Main Page</Link>
      <Link to={Pages.shop}>Shop Page</Link>
      <Link to={Pages.contacts}>Contacts</Link>
    </StyledHeader>
  )
}
