import { FC } from 'react'
import { StyledGalleryPage } from './styles'
import { PageHeader } from 'src/entities'
import { ProductCategory } from 'src/widgets'

export const GalleryPage: FC = () => {
  return (
    <StyledGalleryPage>
      <PageHeader>Gallery</PageHeader>
      <ProductCategory />
    </StyledGalleryPage>
  )
}
