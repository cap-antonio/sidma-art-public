import { FC } from 'react'
import { Container, PostsWrapper, SecondaryColumn } from './styles'
import { SecondaryPost, FirstPost, AnotherPost } from 'src/features'
import { useFetchFeedQuery, TPost } from 'src/shared/api'

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
    <Container>
      <PostsWrapper>
        {isLoading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            <FirstPost {...first} />
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
