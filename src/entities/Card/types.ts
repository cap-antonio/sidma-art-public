export type TCard = {
  id: string
  title: string
  description?: string
  image: { src: string; alt: string }
  as?: 'link' | 'expandable'
  url?: string
  onClick?: () => void
}
