import './styles.scss'

import '../../features/postPreviews/styles.scss'
import { usePost } from '@shared/api'
import { FlexRow } from '@shared/ui'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { formatDate } from '@shared/utils'
import { useTranslation } from 'react-i18next'

export const Post: FC = ({}) => {
  const { id } = useRouter().query as { id: string }
  const { data } = usePost(id)
  const {
    i18n: { language },
  } = useTranslation()
  console.log(data?.text)
  return (
    <div className="post">
      {!data ? (
        <>Loading...</>
      ) : (
        <>
          <FlexRow
            justify="center"
            align-items="center"
            className="wrapper-post-title"
          >
            <div className="post-title">
              <div className="date">
                <p className="meta">{formatDate(data.published, language)}</p>
                <span>&#8226;</span>
              </div>
              <h1 className="data-title">{data.title}</h1>
              <div className="text-preview"> {data.preview} </div>
              <div className="author">
                {data.author.map(({ name }) => (
                  <p key={id} className="meta">
                    {name}
                  </p>
                ))}
              </div>
            </div>
            <div className="post-image">
              <img src={data.image.src} alt={data.image.alt} />
            </div>
          </FlexRow>
          <FlexRow justify="center" align-items="center">
            <div
              className="post-text"
              dangerouslySetInnerHTML={{
                __html: `${data.text}`,
              }}
            />
          </FlexRow>
        </>
      )}
    </div>
  )
}
