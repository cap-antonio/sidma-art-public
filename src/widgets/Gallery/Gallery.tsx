import { FC } from 'react'
import { useRouter } from 'next/router'

import './styles.scss'
import { FlexRow } from '@shared/ui'
import { useGalleryItem } from '@shared/api'

// TODO: add dictionary
const mock: Record<string, string> = {
  heads: '1',
  Mountains: '2',
  hands: '3',
}

export const Gallery: FC = () => {
  const router = useRouter()
  const { name } = router.query

  const {} = useGalleryItem(typeof name === 'string' ? mock[name] : '1')

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
