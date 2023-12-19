import { FC } from 'react'
import { useRouter } from 'next/router'

import './styles.scss'
import { FlexRow } from '@shared/ui'
import { useGalleryItem } from '@shared/api'
import { Card } from '@entities'

export const Gallery: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { data, loading } = useGalleryItem(id)

  return (
    <FlexRow justify="center">
      <div className="category-wrapper">
        {loading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {data?.map((item, i) => (
              <Card key={i} {...item} as="expandable" />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
