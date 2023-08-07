import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { StyledSecondaryPost } from './styles'
import { Flex, Image } from 'src/shared/ui'
import { Meta, Tag, TextPreview, Title } from '../styles'
import { formatDate } from 'src/shared/utils'
import { useNavigate } from 'react-router-dom'

import { TSecondaryPost } from './types'

export const SecondaryPost: FC<TSecondaryPost> = ({
  text,
  title,
  img,
  author,
  tags,
  published,
  id,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(id)
  }
  return (
    <StyledSecondaryPost onClick={handleClick}>
      <Image
        url={img.url}
        alt={img.alt}
        height="100%"
        width="40%"
        objectFit={'cover'}
      />

      <Flex direction="column" padding="8px">
        <Flex>
          <Meta>{author.name}</Meta>
          <span>&#8226;</span>
          <Meta>{formatDate(published, language)}</Meta>
        </Flex>
        <Title>{title}</Title>
        <TextPreview>{`${text.substring(0, 150)}...`}</TextPreview>
        <Flex wrap>
          {tags.map((tag, i) => (
            <Tag key={tag + i}>{tag}</Tag>
          ))}
        </Flex>
      </Flex>
    </StyledSecondaryPost>
  )
}
