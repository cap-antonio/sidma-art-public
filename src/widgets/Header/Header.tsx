import { FC, useCallback, useState } from 'react'

import { StyledHeader } from './styles'

export const Header: FC = () => {
  const [value, setValue] = useState(0)
  const increase = useCallback(() => setValue((oldValue) => oldValue + 1), [])

  return (
    <StyledHeader>
      <p>{value}</p>
      <button className="btn" onClick={increase}>
        <div>Button</div>
      </button>
    </StyledHeader>
  )
}
