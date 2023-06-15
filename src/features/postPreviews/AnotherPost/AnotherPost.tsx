import { FC } from 'react'

import { StyledAnotherPost } from './styles'

import { TAnotherPost } from './types'

export const AnotherPost: FC<TAnotherPost> = (props) => {
  console.log(props)

  return <StyledAnotherPost></StyledAnotherPost>
}
