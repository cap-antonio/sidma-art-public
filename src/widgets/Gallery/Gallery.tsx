import { FC } from 'react'

import './styles.scss'
import { CategoryCard } from '@features'
import { FlexRow } from '@shared/ui'
import { useGallery } from '@shared/api'

const mockedData = [
  {
    id: '1',
    title: 'Product Category 1',
    description: 'This is the description of Product Category 1',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 1 Image',
    },
  },
  {
    id: '2',
    title: 'Product Category 2',
    description: 'This is the description of Product Category 2',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 2 Image',
    },
  },
  {
    id: '3',
    title: 'Product Category 3',
    description: 'This is the description of Product Category 3',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 3 Image',
    },
  },
]

export const Gallery: FC = () => {
  const { data, loading } = useGallery()

  return (
    <FlexRow justify="center">
      <div className="category-wrapper">
        {!data && (
          <div style={{ color: 'red', fontWeight: 'bold' }}>mockedData</div>
        )}
        {loading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {(data || mockedData).map((category, i) => (
              <CategoryCard key={i} {...category} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
