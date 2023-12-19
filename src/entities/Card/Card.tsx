import { FC } from 'react'
import './styles.scss'
import { FlexColumn, Image, Link } from '@shared/ui'
import { TCard } from './types'
import { capitalizeFirstCharacter, truncateString } from '@shared/utils/helpers'

export const Card: FC<TCard> = ({
  id,
  title,
  description,
  image,
  as = 'link',
  url,
}) => {
  const content = (
    <div className={`${as}-card-wrapper`}>
      <div className={`${as}-image-container`}>
        <Image src={image.src} alt={image.alt} className={`${as}-card-img`} />
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
  )
  return as === 'link' ? (
    <Link href={`/${url}/${id}`} className="no-hover">
      {content}
    </Link>
  ) : (
    <div className="no-hover">{content}</div>
  )
}
