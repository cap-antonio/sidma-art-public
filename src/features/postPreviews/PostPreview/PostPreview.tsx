import { FC } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { formatDate } from '@shared/utils'
import './styles.scss'
import { FlexColumn, FlexRow, Image } from '@shared/ui'

import { TPostPreview } from './types'
import { Pages } from '@shared/types'

export const PostPreview: FC<TPostPreview> = ({
  previewText,
  title,
  image,
  author,
  tags,
  published,
  id: postId,
  type,
}) => {
  const {
    i18n: { language },
  } = useTranslation()
  const { push } = useRouter()

  const handleClick = () => {
    push(`${Pages.blog}/${postId}`)
  }

  function getClassName(isImage: boolean) {
    if (type === 'first') {
      return isImage ? 'first-post-img' : 'first-post'
    } else if (type === 'second') {
      return isImage ? 'secondary-post-img' : 'secondary-post'
    } else if (type === 'other') {
      return isImage ? 'another-post-img' : 'another-post'
    }
  }

  return (
    <div className={getClassName(false)} onClick={handleClick}>
      <Image src={image.src} alt={image.alt} className={getClassName(true)} />
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
        <p className="text-preview">{previewText}</p>
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
