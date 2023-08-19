import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectusPost } from './types'
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

export const usePost = (id: string) => {
  const { data, ...rest } = useQuery<
    TDirectuResponse<'feed_by_id', TDirectusPost>
  >(postQuery, {
    variables: {
      id,
    },
  })

  const preparedPost = data
    ? {
        ...data?.feed_by_id,
        image: prepareImage(data?.feed_by_id.image.id, data?.feed_by_id.title),
      }
    : {}

  return { data: preparedPost, ...rest }
}
