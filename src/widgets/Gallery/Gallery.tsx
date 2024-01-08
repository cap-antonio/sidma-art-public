import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import AnimateHeight from 'react-animate-height'

import './styles.scss'
import { FlexRow } from '@shared/ui'
import { useGalleryItem } from '@shared/api'
import { Card } from '@entities'

export const Gallery: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const [categoryId, setCategoryId] = useState<string | undefined>()

  const { data, loading } = useGalleryItem(id || '0', { skip: !id })

  const handleCategoryClick = (catId: string) => {
    setCategoryId((prev) => (prev === catId ? undefined : catId))
  }

  return (
    <div className="gallery-wrapper">
      <FlexRow justify="center" wrap>
        {loading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          data?.map((item, i) => (
            <Card
              key={i}
              {...item}
              as="expandable"
              onClick={() => handleCategoryClick(item.id)}
            />
          ))
        )}
      </FlexRow>
      <AnimateHeight height={categoryId ? 500 : 0} className="sub-wrapper">
        <div className="padding">{categoryId}</div>
      </AnimateHeight>
    </div>
  )
}
