import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectusPost, TPost } from './types'
import { TDirectuResponse } from '../types'

export const feedListQuery = gql`
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

const prepareFeed = (feed?: Array<TDirectusPost>): Array<TPost> => {
  return (
    feed?.map((post) => {
      const author = post.author.map(({ authors_id }) => ({ ...authors_id }))
      return {
        ...post,
        author,
        image: prepareImage(post.image.id, post.title),
      }
    }) ?? []
  )
}

export const useFeed = () => {
  const { data, ...rest } =
    useQuery<TDirectuResponse<'feed', Array<TDirectusPost>>>(feedListQuery)

  return { data: prepareFeed(data?.feed), ...rest }
}
