import { FC } from 'react'

import { StyledAnotherPost, Tags } from './styles'
import { Button, Image } from 'src/shared/ui'

import { TAnotherPost } from './types'

export const AnotherPost: FC<TAnotherPost> = ({
  tags,
  text,
  title,
  img,
  author,
}) => {
  return (
    <StyledAnotherPost>
      <Image
        url={img.url}
        alt={img.alt}
        width={'100%'}
        height="150px"
        objectFit={'cover'}
      />

      {/* TODO: add styles to aurhor */}
      <div>{author.name}</div>
      {/* TODO: add styles to title */}
      <div>{title}</div>
      {/* TODO: add styles to text */}
      {`${text.substring(0, 150)}` + '...'}

      <Tags>
        <Button margin="8px 0px">#{tags[0]}</Button>
        <Button margin="8px 0px">#{tags[1]}</Button>
        <Button margin="8px 0px">#{tags[2]}</Button>
      </Tags>
    </StyledAnotherPost>
  )
}
