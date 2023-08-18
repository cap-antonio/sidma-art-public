import { FC } from 'react'

import { SecondaryPost, FirstPost, AnotherPost } from '@features'
import { useFeed } from '@shared/api'
import './styles.scss'

import { TDevidedPosts } from './types'
import { FlexRow } from '@shared/ui'

export const Feed: FC = () => {
  const { data, loading } = useFeed()

  const { latest, other, seconds } = (data || []).reduce<TDevidedPosts>(
    (res, curr, i) => {
      if (i === 0) {
        res['latest'] = [curr]
      } else if (i > 0 && i < 4) {
        res['seconds'] = [...(res['seconds'] || []), curr]
      } else {
        res['other'] = [...(res['other'] || []), curr]
      }

      return res
    },
    {
      latest: [],
      seconds: [],
      other: [],
    },
  )

  return (
    <FlexRow justify="center">
      <div className="feed-wrapper">
        {loading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {latest.map((post) => (
              <FirstPost key={post.id} {...post} />
            ))}
            <div className="secondary-column">
              {seconds.map((post) => (
                <SecondaryPost key={post.id} {...post} />
              ))}
            </div>
            {other.map((post) => (
              <AnotherPost key={post.id} {...post} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
