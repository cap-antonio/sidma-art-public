import { FC } from 'react'
import './styles.scss'
import { FlexColumn, Image, Link } from '@shared/ui'
import { TGalleryCard } from './types'
import {} from '@shared/ui'
import { capitalizeFirstCharacter, truncateString } from '@shared/utils/helpers'

export const GalleryCard: FC<TGalleryCard> = ({
  id,
  title,
  description,
  image,
}) => {
  return (
    <Link href={`/category/${id}`} className="no-hover">
      <div className="category-card">
        <div className="image-container">
          <Image
            src={image.src}
            alt={image.alt}
            className="category-card-img"
          />
        </div>

        <FlexColumn>
          <p className="name">{capitalizeFirstCharacter(title)}</p>
          {description && (
            <p className="description">
              {truncateString(capitalizeFirstCharacter(description), 150)}
            </p>
          )}
        </FlexColumn>
      </div>
    </Link>
  )
}
