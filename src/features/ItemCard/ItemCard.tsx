import { FC } from 'react'
import './styles.scss'
import { FlexColumn, Image } from '@shared/ui'
import { TItemCard } from './types'

export const ItemCard: FC<TItemCard> = ({ name, description, image }) => {
  const truncatedDescription =
    description && description.length > 150
      ? description.substring(0, 150) + '...'
      : description

  return (
    <div className="item-card">
      <div className="image-container">
        <Image src={image.src} alt={image.alt} className="category-card-img" />
      </div>

      <FlexColumn>
        <p className="name">{name}</p>
        {truncatedDescription && (
          <p className="description">{truncatedDescription}</p>
        )}
      </FlexColumn>
    </div>
  )
}
