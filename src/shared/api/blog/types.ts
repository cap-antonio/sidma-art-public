import { TDirectusAuthor, TDirectusImage } from '../types'

export type TPost = {
  id: string
  title: string
  text: string
  published: string
  source: 'instagram' | 'blogger'
  tags: Array<string>
  author: Array<{
    id: string
    name: string
    role?: string
    avatar?: string
  }>
  preview?: string
  image: {
    src: string
    alt: string
  }
  previewText: string
}
export type TDirectusPost = {
  id: string
  title: string
  text: string
  published: string
  source: 'instagram' | 'blogger'
  tags: Array<string>
  author: Array<TDirectusAuthor>
  image: TDirectusImage
  preview_text: string
}
