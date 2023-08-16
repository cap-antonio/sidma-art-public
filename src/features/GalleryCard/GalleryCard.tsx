import { FC } from 'react'
import './styles.scss'
import { FlexColumn, Image, Link } from '@shared/ui'
import { TGalleryCard } from './types'

export const GalleryCard: FC<TGalleryCard> = ({ name, description, image }) => {
  const truncatedDescription =
    description && description.length > 150
      ? description.substring(0, 150) + '...'
      : description

  return (
    <Link href={`/category/${name}`}>
      <div className="category-card">
        <div className="image-container">
          <Image
            src={image.src}
            alt={image.alt}
            className="category-card-img"
          />
        </div>

        <FlexColumn>
          <p className="name">{name}</p>
          {truncatedDescription && (
            <p className="description">{truncatedDescription}</p>
          )}
        </FlexColumn>
      </div>
    </Link>
  )
}
