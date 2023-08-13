import { FC } from 'react'

import { SecondaryPost, FirstPost, AnotherPost } from '@features'
import { useFetchFeedQuery, TPost } from '@shared/api'
import './styles.scss'
import { FlexRow } from '@shared/ui'

import { TDividedPosts } from './types'

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

  const { first, other, seconds } = (data || []).reduce<TDividedPosts>(
    (res, curr, i) => {
      if (i === 0) {
        res['first'] = curr
      } else if (i > 0 && i < 4) {
        res['seconds'] = [...(res['seconds'] || []), curr]
      } else {
        res['other'] = [...(res['other'] || []), curr]
      }

      return res
    },
    {
      first: mockPost,
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
            <FirstPost {...first} />
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
