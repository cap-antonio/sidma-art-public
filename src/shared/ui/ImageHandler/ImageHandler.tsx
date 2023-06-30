import { FC } from 'react'
import { TImageHandler } from './types'
import { StyledImageHandler } from './styles'

export const ImageHandler: FC<TImageHandler> = ({
  alt,
  height,
  width,
  url,
  objectFit = 'none',
}) => {
  return (
    <StyledImageHandler
      src={url}
      alt={alt}
      height={height}
      width={width}
      objectFit={objectFit}
    />
  )
}
