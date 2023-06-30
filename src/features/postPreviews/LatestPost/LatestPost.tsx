import { FC } from 'react'

import { StyledLatestPost, StyledTags, StyledWrapper } from './styles'

import { TLatestPost } from './types'
import { Button, ImageHandler } from 'src/shared/ui'

export const LatestPost: FC<TLatestPost> = ({
  text,
  title,
  img,
  author,
  tags,
}) => {
  return (
    <StyledLatestPost>
      <ImageHandler
        url={img.url}
        alt={img.alt}
        height={'60%'}
        width={'100%'}
        objectFit={'cover'}
      />

      <div> {author.name}</div>
      <StyledWrapper>{title}</StyledWrapper>
      <div>{text.substring(0, 150)}</div>
      <StyledTags>
        <Button>#{tags[0]}</Button>
        <Button>#{tags[1]}</Button>
        <Button>#{tags[2]}</Button>
      </StyledTags>
    </StyledLatestPost>
  )
}
