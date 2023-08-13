import { FC } from 'react'
import { PageHeader } from '@entities'
import { Gallery } from '@widgets'

export const GalleryPage: FC = () => {
  return (
    <div>
      <PageHeader>Gallery</PageHeader>
      <Gallery />
    </div>
  )
}
