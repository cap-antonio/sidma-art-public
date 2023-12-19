import { FC } from 'react'

import './styles.scss'
import { FlexRow } from '@shared/ui'
import { useGallery } from '@shared/api'
import { Card } from '@entities'

export const Galleries: FC = () => {
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
              <Card key={i} {...category} url="gallery" />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
