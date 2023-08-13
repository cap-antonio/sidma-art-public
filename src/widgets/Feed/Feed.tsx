import { FC } from 'react'

import { SecondaryPost, FirstPost, AnotherPost } from '@features'
import { useFetchFeedQuery, TPost } from '@shared/api'
import './styles.scss'

import { TDevidedPosts } from './types'
import { FlexRow } from '@shared/ui'

const mockPost: TPost = {
  id: '',
  title: '',
  text: '',
  published: '',
  source: 'blogger',
  tags: [],
  author: {
    name: '',
    role: '',
  },
  img: {
    url: '',
    alt: '',
  },
}

export const Feed: FC = () => {
  const { data, isLoading } = useFetchFeedQuery()

  const { latest, other, seconds } = (data || []).reduce<TDevidedPosts>(
    (res, curr, i) => {
      if (i === 0) {
        res['latest'] = curr
      } else if (i > 0 && i < 4) {
        res['seconds'] = [...(res['seconds'] || []), curr]
      } else {
        res['other'] = [...(res['other'] || []), curr]
      }

      return res
    },
    {
      latest: mockPost,
      seconds: [],
      other: [],
    },
  )

  return (
    <FlexRow justify="center">
      <div className="feed-wrapper">
        {isLoading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            <FirstPost {...latest} />
            <div className="secondary-column">
              {seconds.map((post) => (
                <SecondaryPost {...post} />
              ))}
            </div>
            {other.map((post) => (
              <AnotherPost {...post} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
