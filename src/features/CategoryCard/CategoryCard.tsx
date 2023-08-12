import { FC } from 'react'
import { StyledCategoryCard, Description, Name, ImageContainer } from './styles'
import { Flex, Image, Link } from 'src/shared/ui'
import { TCategoryCard } from './types'

export const CategoryCard: FC<TCategoryCard> = ({
  id,
  name,
  description,
  image,
}) => {
  return (
    <Link to={`/category/${id}`}>
      <StyledCategoryCard>
        <ImageContainer>
          <Image
            url={image.src}
            alt={image.alt}
            width={'100%'}
            height={'350px'}
            objectFit={'cover'}
          />
        </ImageContainer>

        <Flex direction="column" padding="8px">
          <Name>{name}</Name>
          {description && (
            <Description>
              {`${description.substring(0, 150)}` + '...'}
            </Description>
          )}
        </Flex>
      </StyledCategoryCard>
    </Link>
  )
}
