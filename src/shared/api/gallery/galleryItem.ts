import { QueryFunctionOptions, gql, useQuery } from '@apollo/client'

import { TDirectusResponse } from '../types'
import { TDirectusGalleryItem } from './types'
import { prepareImage } from '../helpers'

export const galleryItemListQuery = gql`
  query GetGallryItem($galleryId: GraphQLStringOrFloat) {
    gallery_item(filter: { gallery_id: { id: { _eq: $galleryId } } }) {
      id
      title
      image {
        id
      }
    }
  }
`

export const useGalleryItem = (
  galleryId: string | Array<string>,
  options: QueryFunctionOptions,
) => {
  const { data, ...rest } = useQuery<
    TDirectusResponse<'gallery_item', Array<TDirectusGalleryItem>>
  >(galleryItemListQuery, {
    ...options,
    variables: {
      galleryId,
    },
  })

  const preparedGalleryItems = data?.gallery_item.map((gallery) => {
    return {
      ...gallery,
      title: gallery.title.trim(),
      image: prepareImage(gallery.image.id, gallery.title),
    }
  })

  return { data: preparedGalleryItems, ...rest }
}
