import { FC } from 'react'
import './styles.scss'
import { FlexColumn, Image, Link } from '@shared/ui'
import { TGalleryCard } from './types'
import {} from '@shared/ui'
import { capitalizeFirstCharacter, truncateString } from '@shared/utils/helpers'

export const GalleryCard: FC<TGalleryCard> = ({
  title,
  description,
  image,
}) => {
  return (
    <Link href={`/gallery/${title}`} className="no-hover">
      <div className="gallery-card">
        <div className="image-container">
          <Image src={image.src} alt={image.alt} className="gallery-card-img" />
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
