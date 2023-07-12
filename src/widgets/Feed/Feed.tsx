import { FC } from 'react'
import { Container, PostsWrapper, SecondaryColumn } from './styles'
import { SecondaryPost, FirstPost, AnotherPost } from 'src/features'
import { useFetchFeedQuery, TPost } from 'src/shared/api'

import { TDevidedPosts } from './types'

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
  const { data, isLoading } = useFetchFeedQuery({})

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
    <Container>
      <PostsWrapper>
        {isLoading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            <FirstPost {...latest} />
            <SecondaryColumn>
              {seconds.map((post) => (
                <SecondaryPost {...post} />
              ))}
            </SecondaryColumn>
            {other.map((post) => (
              <AnotherPost {...post} />
            ))}
          </>
        )}
      </PostsWrapper>
    </Container>
  )
}
