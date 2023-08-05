import { FC } from 'react'

import { StyledAnotherPost } from './styles'
import { Tag, Meta, Title, TextPreview } from '../styles'
import { Flex, Image } from 'src/shared/ui'

import { TAnotherPost } from './types'
import { formatDate } from 'src/shared/utils'
import { useTranslation } from 'react-i18next'

export const AnotherPost: FC<TAnotherPost> = ({
  tags,
  text,
  title,
  img,
  author,
  published,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  return (
    <StyledAnotherPost>
      <Image
        url={img.url}
        alt={img.alt}
        width={'100%'}
        height="150px"
        objectFit={'cover'}
      />

      <Flex direction="column" padding="8px">
        <Flex>
          <Meta>{author.name}</Meta>

          <span>&#8226;</span>
          <Meta>{formatDate(published, language)}</Meta>
        </Flex>

        <Title>{title}</Title>
        <TextPreview>{`${text.substring(0, 150)}` + '...'}</TextPreview>

        <Flex shouldWrap>
          {tags.map((tag, i) => (
            <Tag key={tag + i}>{tag}</Tag>
          ))}
        </Flex>
      </Flex>
    </StyledAnotherPost>
  )
}
