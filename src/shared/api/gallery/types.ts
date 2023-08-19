import { TDirectusImage } from '../types'

export type TDirectusGallery = {
  id: string
  title: string
  description?: string
  image: TDirectusImage
}

export type TGallery = {
  id: string
  title: string
  description?: string
  image: {
    src: string
    alt: string
  }
}
