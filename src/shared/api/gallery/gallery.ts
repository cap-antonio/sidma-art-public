import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectusResponse } from '../types'
import { TDirectusGallery } from './types'

export const galleryListQuery = gql`
  query Gallery {
    gallery {
      id
      title
      description
      image {
        id
      }
    }
  }
`

export const useGallery = () => {
  const { data, ...rest } = useQuery<
    TDirectusResponse<'gallery', Array<TDirectusGallery>>
  >(
    galleryListQuery,
    // {
    //   variables: opts,
    // },
  )

  const preparedGallery = data?.gallery.map((gallery) => {
    return {
      ...gallery,
      image: prepareImage(gallery.image.id, gallery.title),
    }
  })

  return { data: preparedGallery, ...rest }
}
