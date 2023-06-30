import { FC } from 'react'

import {
  SecondaryColumnForContent,
  StyledSecondaryPost,
  StyledTags,
} from './styles'

import { TSecondaryPost } from './types'
import { StyledWrapper } from '../LatestPost/styles'
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
        height="230px"
        width="230px"
        objectFit={'cover'}
      />

      <SecondaryColumnForContent>
        <div> {author.name}</div>
        <StyledWrapper>{title}</StyledWrapper>
        {text.substring(0, 150)}
        <StyledTags>
          <Button>{tags[0]}</Button>
          <Button>{tags[1]}</Button>
          <Button>{tags[2]}</Button>
        </StyledTags>
      </SecondaryColumnForContent>
    </StyledSecondaryPost>
  )
}
