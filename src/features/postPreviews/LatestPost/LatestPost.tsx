import { FC } from 'react'

import { StyledLatestPost } from './styles'

import { TLatestPost } from './types'

export const LatestPost: FC<TLatestPost> = (props) => {
  console.log(props)

  return <StyledLatestPost></StyledLatestPost>
}
