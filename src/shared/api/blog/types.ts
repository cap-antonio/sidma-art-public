import { TDirecturAuthor, TDirectusImage } from '../types'

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
  image: {
    src: string
    alt: string
  }
}
export type TDirectusPost = {
  id: string
  title: string
  text: string
  published: string
  source: 'instagram' | 'blogger'
  tags: Array<string>
  author: Array<TDirecturAuthor>
  image: TDirectusImage
}
