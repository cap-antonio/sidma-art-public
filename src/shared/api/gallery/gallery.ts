import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectuResponse } from '../types'
import { TDirectusGallery } from './types'

const galleryListQuery = gql`
  query Gallery {
    gallery {
      id
      name
      description
      image {
        id
      }
    }
  }
`

export const useGallery = () => {
  const { data, ...rest } = useQuery<
    TDirectuResponse<'gallery', Array<TDirectusGallery>>
  >(
    galleryListQuery,
    // {
    //   variables: opts,
    // },
  )

  const preparedGallery = data?.gallery.map((gallery) => {
    return {
      ...gallery,
      image: prepareImage(gallery.image.id, gallery.name),
    }
  })

  return { data: preparedGallery, ...rest }
}
