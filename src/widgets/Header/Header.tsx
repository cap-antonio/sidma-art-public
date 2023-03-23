import { ChangeEvent, FC, useState } from 'react'
import { Input, Button } from '../../shared/ui'
import { StyledHeader } from './styles'

export const Header: FC = () => {
  const [name, SetName] = useState<string>('')
  const onNameChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    SetName(target.value)
  }

  //{e}:ChangeEvent<HTMLInputElement>

  return (
    <StyledHeader>
      <Input
        variant="primary"
        placeholder="Name*"
        value={name}
        onChange={onNameChange}
      />
      <Input variant="secondary" placeholder="Email*" />

      <Button title="Push" />
    </StyledHeader>
  )
}
