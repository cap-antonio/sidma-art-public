import { FC } from 'react'

import './styles.scss'
import { CategoryCard } from '@features'
import { FlexRow } from '@shared/ui'

const mockedData = [
  {
    id: '1',
    name: 'Product Category 1',
    description: 'This is the description of Product Category 1',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 1 Image',
    },
  },
  {
    id: '2',
    name: 'Product Category 2',
    description: 'This is the description of Product Category 2',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 2 Image',
    },
  },
  {
    id: '3',
    name: 'Product Category 3',
    description: 'This is the description of Product Category 3',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 3 Image',
    },
  },
]

export const Gallery: FC = () => {
  return (
    <FlexRow justify="center">
      <div className="category-wrapper">
        {true ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {mockedData.map((category, i) => (
              <CategoryCard key={i} {...category} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
