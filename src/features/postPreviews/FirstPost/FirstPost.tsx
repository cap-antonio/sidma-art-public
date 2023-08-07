import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { StyledFirstPost } from './styles'
import { Title, Tag, Meta, TextPreview } from '../styles'
import { Flex, Image } from 'src/shared/ui'
import { formatDate } from 'src/shared/utils'

import { TFirstPost } from './types'

export const FirstPost: FC<TFirstPost> = ({
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
    <StyledFirstPost onClick={handleClick}>
      <Image
        url={img.url}
        alt={img.alt}
        height={'70%'}
        width={'100%'}
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
    </StyledFirstPost>
  )
}
