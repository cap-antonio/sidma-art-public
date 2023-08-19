import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'

import './styles.scss'
import '../styles.scss'
import { FlexColumn, FlexRow, Image } from '@shared/ui'
import { formatDate } from '@shared/utils'

import { TFirstPost } from './types'
import { Pages } from '@shared/types'

export const FirstPost: FC<TFirstPost> = ({
  text,
  title,
  image,
  author,
  tags,
  published,
  id: postId,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  const { push } = useRouter()

  const handleClick = () => {
    push(`${Pages.blog}/${postId}`)
  }

  return (
    <div className="first-post" onClick={handleClick}>
      <Image src={image.src} alt={image.alt} className="first-post-img" />

      <FlexColumn>
        <FlexRow>
          {author.map(({ name, id }) => (
            <p key={id} className="meta">
              {name}
            </p>
          ))}
          <span>&#8226;</span>
          <p className="meta">{formatDate(published, language)}</p>
        </FlexRow>

        <p className="title">{title}</p>
        <div
          className="text-preview"
          dangerouslySetInnerHTML={{ __html: `${text.substring(0, 150)}...` }}
        />
        <FlexRow wrap>
          {tags.map((tag, i) => (
            <div className="tag" key={tag + i}>
              {tag}
            </div>
          ))}
        </FlexRow>
      </FlexColumn>
    </div>
  )
}
