import { gql, useQuery } from '@apollo/client'

import { prepareImage } from '../helpers'

import { TDirectusResponse } from '../types'
import { TDirectusGallery } from './types'
import { capitalizeFirstCharacter } from '@shared/utils/helpers'

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
      title: gallery.title.trim(),
      image: prepareImage(gallery.image.id, gallery.title),
    }
  })

  return { data: preparedGallery, ...rest }
}

export const galleryTitleQuery = gql`
  query GalleryTitle($id: ID!) {
    gallery_by_id(id: $id) {
      title
    }
  }
`

export const useGalleryTitle = (id?: string | Array<string>) => {
  const { data, ...rest } = useQuery<
    TDirectusResponse<'gallery_by_id', TDirectusGallery>
  >(galleryTitleQuery, {
    variables: {
      id,
    },
  })

  return {
    ...rest,
    title: capitalizeFirstCharacter(data?.gallery_by_id.title.trim() || ''),
  }
}
