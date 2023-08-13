import { FC } from 'react'
import { useTranslation } from 'react-i18next'

import './styles.scss'
import '../styles.scss'
import { FlexColumn, FlexRow, Image } from '@shared/ui'
import { formatDate } from '@shared/utils'

import { TFirstPost } from './types'

export const FirstPost: FC<TFirstPost> = ({
  text,
  title,
  img,
  author,
  tags,
  published,
}) => {
  const {
    i18n: { language },
  } = useTranslation()

  return (
    <div className="first-post">
      <Image src={img.url} alt={img.alt} className="first-post-img" />

      <FlexColumn>
        <FlexRow>
          <p className="meta">{author.name}</p>
          <span>&#8226;</span>
          <p className="meta">{formatDate(published, language)}</p>
        </FlexRow>

        <p className="title">{title}</p>
        <p className="text-preview">{`${text.substring(0, 150)}...`}</p>
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
