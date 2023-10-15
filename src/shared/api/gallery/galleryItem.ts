import { gql, useQuery } from '@apollo/client'

import { TDirectusResponse } from '../types'
import { TDirectusGalleryItem } from './types'

export const galleryItemListQuery = gql`
  query GalleryItem($id: ID!) {
    gallery_item_by_id(id: $id) {
      id
      variants
      description
      title
    }
  }
`

export const useGalleryItem = (id: string) => {
  const { data, ...rest } = useQuery<
    TDirectusResponse<'gallery_item_by_id', Array<TDirectusGalleryItem>>
  >(galleryItemListQuery, {
    variables: {
      id,
    },
  })

  return { data: data?.gallery_item_by_id, ...rest }
}
