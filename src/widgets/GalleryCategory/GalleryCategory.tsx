import { FC } from 'react'

import './styles.scss'
import { useFetchFeedQuery } from '@shared/api'
import { FlexRow } from '@shared/ui'
import { TGalleryCategory } from './types'
import { mockedData } from '@widgets'
import { ItemCard } from '@features'

export const GalleryCategory: FC<TGalleryCategory> = ({ name }) => {
  const { isLoading } = useFetchFeedQuery()

  const selectedCard = mockedData.find((card) => card.name === name)
  if (!selectedCard) {
    return <div>No data found for the specified Name</div>
  }
  const { items } = selectedCard

  return (
    <FlexRow justify="center">
      <div className="category-wrapper">
        {isLoading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {items.map((item, i) => (
              <ItemCard key={i} {...item} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
