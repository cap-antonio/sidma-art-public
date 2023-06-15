import { FC } from 'react'

import { StyledSecondaryPost } from './styles'

import { TSecondaryPost } from './types'

export const SecondaryPost: FC<TSecondaryPost> = (props) => {
  console.log(props)
  return <StyledSecondaryPost></StyledSecondaryPost>
}
