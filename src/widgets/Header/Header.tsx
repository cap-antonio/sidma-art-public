import { FC } from 'react'
import { Link } from 'src/shared/ui'
import { StyledHeader } from './styles'
import { Pages } from 'src/app/routes/types'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <Link to={Pages.main}>Main Page</Link>
      <Link to={Pages.shop}>Shop Page</Link>
    </StyledHeader>
  )
}
