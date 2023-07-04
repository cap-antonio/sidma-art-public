import { FC } from 'react'

import { Link } from 'src/shared/ui'

import { StyledHeaderLink } from './styles'

import { links } from 'src/widgets'

export const HeaderLinks: FC = () => {
  return (
    <StyledHeaderLink>
      {links.map(({ path, title }) => (
        <Link key={path} to={path}>
          {title}Н
        </Link>
      ))}
    </StyledHeaderLink>
  )
}
