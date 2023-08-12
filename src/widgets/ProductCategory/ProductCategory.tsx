import { FC } from 'react'
import { Container, CategoryWrapper } from './styles'
import { useFetchFeedQuery } from 'src/shared/api'
import { CategoryCard } from 'src/features'

const mockedData = [
  {
    id: '1',
    name: 'Product Category 1',
    description: 'This is the description of Product Category 1',
    image: { src: 'http://placehold.it/500x500', alt: 'Product 1 Image' },
  },
  {
    id: '2',
    name: 'Product Category 2',
    description: 'This is the description of Product Category 2',
    image: { src: 'http://placehold.it/500x500', alt: 'Product 2 Image' },
  },
  {
    id: '3',
    name: 'Product Category 3',
    description: 'This is the description of Product Category 3',
    image: { src: 'http://placehold.it/500x500', alt: 'Product 3 Image' },
  },
]

export const ProductCategory: FC = () => {
  const { isLoading } = useFetchFeedQuery()

  return (
    <Container>
      <CategoryWrapper>
        {isLoading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {mockedData.map((category, i) => (
              <CategoryCard key={i} {...category} />
            ))}
          </>
        )}
      </CategoryWrapper>
    </Container>
  )
}
