import { FC } from 'react'

import './styles.scss'
import '../styles.scss'
import { FlexRow, FlexColumn, Image } from '@shared/ui'

import { TAnotherPost } from './types'
import { formatDate } from '@shared/utils'
import { useTranslation } from 'react-i18next'

export const AnotherPost: FC<TAnotherPost> = ({
  tags,
  text,
  title,
  image,
  author,
  published,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  return (
    <div className="another-post">
      <Image src={image.src} alt={image.alt} className="another-post-img" />

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
            <div key={tag + i} className="tag">
              {tag}
            </div>
          ))}
        </FlexRow>
      </FlexColumn>
    </div>
  )
}
