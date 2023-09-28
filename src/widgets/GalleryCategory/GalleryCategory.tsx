import { FC } from 'react'

import './styles.scss'
import { FlexRow } from '@shared/ui'
import { TGalleryCategory } from './types'

export const GalleryCategory: FC<TGalleryCategory> = () => {
  return (
    <FlexRow justify="center">
      <div className="category-wrapper">
        {true ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {/* {items.map((item, i) => (
              <ItemCard key={i} {...item} />
            ))} */}
          </>
        )}
      </div>
    </FlexRow>
  )
}
