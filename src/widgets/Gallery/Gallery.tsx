import { FC } from 'react'

import './styles.scss'
import { CategoryCard } from '@features'
import { FlexRow } from '@shared/ui'
import { useGallery } from '@shared/api'

export const Gallery: FC = () => {
  const { data, loading } = useGallery()

  return (
    <FlexRow justify="center">
      <div className="category-wrapper">
        {loading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {data?.map((category, i) => (
              <CategoryCard key={i} {...category} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
