import { FC } from 'react'

import { SecondaryPost, FirstPost, AnotherPost } from '@features'
import './styles.scss'
import { FlexRow } from '@shared/ui'
import { useFeed } from '@shared/api'

import { TDividedPosts } from './types'

export const Feed: FC = () => {
  const { data } = useFeed()

  const { latest, other, seconds } = (data || []).reduce<TDividedPosts>(
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
      </div>
    </FlexRow>
  )
}
