import { FC } from 'react'
import NextImage from 'next/image'

import './styles.scss'

import { TImage } from './types'
import classNames from 'classnames'

export const Image: FC<TImage> = ({ className, ...rest }) => {
  const imageClassNames = classNames('image-wrapper', className)
  return (
    <div className={imageClassNames}>
      <NextImage {...rest} fill className="image" unoptimized />
    </div>
  )
}
