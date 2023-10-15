import { gql, useQuery } from '@apollo/client'

import { TDirectusResponse } from '../types'
import { TDirectusDictionary, TDirectusGalleryItem } from './types'

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

export const dictionaryQuery = gql`
  query Dictionary {
    gallery {
      id
      title
    }
  }
`

export const useGalleryItem = (name: string) => {
  const { data: dictionary } = useQuery<
    TDirectusResponse<'gallery', Array<TDirectusDictionary>>
  >(
    dictionaryQuery,
    // {
    //   variables: opts,
    // },
  )

  const preparedDictionary = dictionary?.gallery.reduce<Record<string, string>>(
    (acc, gallery) => {
      const title = gallery.title.trim()
      acc[gallery.id] = title
      acc[title] = gallery.id
      return acc
    },
    {},
  )

  // TODO
  const galleryId = preparedDictionary ? preparedDictionary[name] : '1'

  const { data, ...rest } = useQuery<
    TDirectusResponse<'gallery_item_by_id', Array<TDirectusGalleryItem>>
  >(galleryItemListQuery, {
    variables: {
      id: galleryId,
    },
  })

  return { data: data?.gallery_item_by_id, ...rest }
}
