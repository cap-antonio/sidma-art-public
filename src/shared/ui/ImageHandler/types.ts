export type TImageHandler = {
  alt: string
  url: string
  height?: string
  width?: string
  objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
}

export type TStyledImage = Omit<TImageHandler, 'url' | 'alt'>
