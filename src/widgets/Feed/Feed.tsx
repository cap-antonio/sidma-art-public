import { FC } from 'react'

import './styles.scss'
import { FlexRow } from '@shared/ui'
import { useFeed } from '@shared/api'

import { TDividedPosts } from './types'
import { PostPreview } from '@features'

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
          <PostPreview type="first" key={post.id} {...post} />
        ))}
        <div className="secondary-column">
          {seconds.map((post) => (
            <PostPreview type="second" key={post.id} {...post} />
          ))}
        </div>
        {other.map((post) => (
          <PostPreview type="other" key={post.id} {...post} />
        ))}
      </div>
    </FlexRow>
  )
}
