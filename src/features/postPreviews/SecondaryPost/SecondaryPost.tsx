import { FC } from 'react'

import {
  SecondaryColumnForContent,
  StyledSecondaryPost,
  StyledTags,
} from './styles'

import { TSecondaryPost } from './types'
import { Button, ImageHandler } from 'src/shared/ui'

export const SecondaryPost: FC<TSecondaryPost> = ({
  text,
  title,
  img,
  author,
  tags,
}) => {
  return (
    <StyledSecondaryPost>
      <ImageHandler
        url={img.url}
        alt={img.alt}
        height="100%"
        width="40%"
        objectFit={'cover'}
      />

      <SecondaryColumnForContent>
        <div>{author.name}</div>
        <div>{title}</div>
        <div>{text.substring(0, 150)}</div>
        <StyledTags>
          <Button>{tags[0]}</Button>
          <Button>{tags[1]}</Button>
          <Button>{tags[2]}</Button>
        </StyledTags>
      </SecondaryColumnForContent>
    </StyledSecondaryPost>
  )
}
