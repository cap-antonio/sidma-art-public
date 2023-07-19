export type TImage = {
  alt: string
  url: string
  height?: string
  width?: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

export type TStyledImage = Omit<TImage, 'url' | 'alt'>
