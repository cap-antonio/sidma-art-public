import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { formatDate } from '@shared/utils'
import './styles.scss'
import '../styles.scss'
import { FlexRow, FlexColumn, Image } from '@shared/ui'

import { TAnotherPost } from './types'
import { Pages } from '@shared/types'

export const AnotherPost: FC<TAnotherPost> = ({
  tags,
  text,
  title,
  img,
  author,
  published,
  id,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  const { push } = useRouter()

  const handleClick = () => {
    push(`${Pages.blog}/${id}`)
  }
  return (
    <div className="another-post" onClick={handleClick}>
      <Image src={img.url} alt={img.alt} className="another-post-img" />

      <FlexColumn>
        <FlexRow>
          <p className="meta">{author.name}</p>

          <span>&#8226;</span>
          <p className="meta">{formatDate(published, language)}</p>
        </FlexRow>

        <p className="title">{title}</p>
        <p className="text-preview">{`${text.substring(0, 150)}` + '...'}</p>

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
