import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectusPost } from './types'
import { TDirectuResponse } from '../types'

const feedListQuery = gql`
  query Feed {
    feed {
      id
      text
      title
      tags
      published
      image {
        id
      }
      author {
        authors_id {
          id
          name
          role
        }
      }
    }
  }
`

export const useFeed = () => {
  const { data, ...rest } = useQuery<
    TDirectuResponse<'feed', Array<TDirectusPost>>
  >(
    feedListQuery,
    // {
    //   variables: opts,
    // },
  )

  const preparedPost = data?.feed.map((post) => {
    const author = post.author.map(({ authors_id }) => ({ ...authors_id }))
    return {
      ...post,
      author,
      image: prepareImage(post.image.id, post.title),
    }
  })

  return { data: preparedPost, ...rest }
}
