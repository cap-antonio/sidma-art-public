import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectusPost, TPost } from './types'
import { TDirectuResponse } from '../types'

const postQuery = gql`
  query GetPost($id: ID!) {
    feed_by_id(id: $id) {
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

const preparePost = (post?: TDirectusPost): TPost | undefined => {
  return post
    ? {
        ...post,
        author: post.author.map(({ authors_id }) => ({
          ...authors_id,
        })),
        image: prepareImage(post.image.id, post.title),
      }
    : undefined
}

export const usePost = (id: string) => {
  const { data, ...rest } = useQuery<
    TDirectuResponse<'feed_by_id', TDirectusPost>
  >(postQuery, {
    variables: {
      id,
    },
  })

  return { data: preparePost(data?.feed_by_id), ...rest }
}
