import { FC } from 'react'
import { StyledHeader } from './styles'
import { IconButton } from '../../shared/ui/IconButton/IconButton'

export const Header: FC = () => {
  return (
    <StyledHeader>
      <IconButton variant={'primary'} />
      <IconButton variant={'secondary'} />
    </StyledHeader>
  )
}
