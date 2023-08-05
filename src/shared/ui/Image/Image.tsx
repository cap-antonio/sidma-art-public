import { FC } from 'react'
import { Wrapper, StyledImage } from './styles'

import { TImage } from './types'

export const Image: FC<TImage> = ({
  alt,
  height,
  width,
  url,
  objectFit = 'none',
}) => {
  return (
    <Wrapper
      height={height}
      width={width}
      objectFit={objectFit}
      data={url}
      type="image/png"
    >
      <StyledImage alt={alt} src="/img/image-fallback.png" />
    </Wrapper>
  )
}
