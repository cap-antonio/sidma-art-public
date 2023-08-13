import { FC } from 'react'
import './styles.scss'
import { FlexColumn, Image, Link } from '@shared/ui'
import { TCategoryCard } from './types'
import {} from '@shared/ui'

export const CategoryCard: FC<TCategoryCard> = ({
  id,
  name,
  description,
  image,
}) => {
  return (
    <Link href={`/category/${id}`}>
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
          {description && (
            <p className="description">
              {`${description.substring(0, 150)}` + '...'}
            </p>
          )}
        </FlexColumn>
      </div>
    </Link>
  )
}
