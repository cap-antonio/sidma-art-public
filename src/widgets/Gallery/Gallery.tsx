import { FC } from 'react'

import './styles.scss'
import { useFetchFeedQuery } from '@shared/api'
import { GalleryCard } from '@features'
import { FlexRow } from '@shared/ui'

export const mockedData = [
  {
    id: '1',
    name: 'Product Category 1',
    description: 'This is the description of Product Category 1',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 1 Image',
    },
    items: [
      {
        id: '1',
        name: 'Item 1',
        description: 'This is the first item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '2',
        name: 'Item 2',
        description:
          'This is the first item asdasd ad wad wa afd adfaf asdfjknakdm kdjnafkasmdf alsdnfa nldafnsladf  asdflnsdf lsdfksmf  lsdfknsldf  saldfkmldf asf asnflksf as;dfm salkfm',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '3',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '4',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '5',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
    ],
  },
  {
    id: '2',
    name: 'Product Category 2',
    description: 'This is the description of Product Category 2',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 2 Image',
    },
    items: [
      {
        id: '1',
        name: 'Item 1',
        description: 'This is the first item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '2',
        name: 'Item 2',
        description: 'A second item for your needs',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '3',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
    ],
  },
  {
    id: '3',
    name: 'Product Category 3',
    description: 'This is the description of Product Category 3',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 3 Image',
    },
    items: [
      {
        id: '1',
        name: 'Item 1',
        description: 'This is the first item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '2',
        name: 'Item 2',
        description: 'A second item for your needs',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '3',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
    ],
  },
  {
    id: '4',
    name: 'Product Category 4',
    description: 'This is the description of Product Category 4',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 4 Image',
    },
    items: [
      {
        id: '1',
        name: 'Item 1',
        description: 'This is the first item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '2',
        name: 'Item 2',
        description: 'A second item for your needs',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '3',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
    ],
  },
  {
    id: '5',
    name: 'Product Category 5',
    description: 'This is the description of Product Category 5',
    image: {
      src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
      alt: 'Product 5 Image',
    },
    items: [
      {
        id: '1',
        name: 'Item 1',
        description: 'This is the first item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '2',
        name: 'Item 2',
        description: 'A second item for your needs',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
      {
        id: '3',
        name: 'Item 3',
        description: 'A unique and special item',
        image: {
          src: 'https://www.vectornator.io/blog/content/images/2022/07/what-is-vector-art.widget.png',
          alt: 'Product 1 Image',
        },
      },
    ],
  },
]

export const Gallery: FC = () => {
  const { isLoading } = useFetchFeedQuery()

  return (
    <FlexRow justify="center">
      <div className="gallery-wrapper">
        {isLoading ? (
          // TODO replace text with true Loader
          <>Loading...</>
        ) : (
          <>
            {mockedData.map((category, i) => (
              <GalleryCard key={i} {...category} />
            ))}
          </>
        )}
      </div>
    </FlexRow>
  )
}
