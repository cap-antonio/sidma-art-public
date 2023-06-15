import { FC } from 'react'
import { TImageHandler } from './types'

export const ImageHandler: FC<TImageHandler> = ({ url, alt }) => {
  return <img src={url} alt={alt} />
}
