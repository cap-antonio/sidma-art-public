import { FC } from 'react'

import { StyledAnotherPost, StyledTags } from './styles'

import { TAnotherPost } from './types'
import { StyledWrapper } from '../LatestPost/styles'
import { Button, ImageHandler } from 'src/shared/ui'

export const AnotherPost: FC<TAnotherPost> = ({
  tags,
  text,
  title,
  img,
  author,
}) => {
  return (
    <StyledAnotherPost>
      <ImageHandler
        url={img.url}
        alt={img.alt}
        width={'100%'}
        height="400px"
        objectFit={'cover'}
      />

      <div> {author.name}</div>
      <StyledWrapper>{title}</StyledWrapper>
      {`${text.substring(0, 50)}` + '...'}

      <StyledTags>
        <Button margin="8px 0px">#{tags[0]}</Button>
        <Button margin="8px 0px">#{tags[1]}</Button>
        <Button margin="8px 0px">#{tags[2]}</Button>
        //button
      </StyledTags>
    </StyledAnotherPost>
  )
}
