import { FC, useState } from 'react'
import { Button } from 'src/shared/ui'

import { StyledHeader } from './styles'

export const Header: FC = () => {
  const [value, setValue] = useState<number>(0)
  const onIncrease = () => {
    setValue((prev) => prev + 1)
  }

  return (
    <StyledHeader>
      <p>{value}</p>
      <Button title="Fuck" onClick={onIncrease}></Button>
    </StyledHeader>
  )
}
