import { FC } from 'react'
import * as React from 'react'

import { StyledIconButton } from './styles'
import { TIconButton } from './types'

export const IconButton: FC<TIconButton> = ({ onClick }) => {
  return (
    <div>
      <StyledIconButton onClick={onClick} variant={'primary'} />
    </div>
  )
}
