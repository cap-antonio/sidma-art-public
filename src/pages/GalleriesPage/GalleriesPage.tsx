import { FC } from 'react'
import { PageHeader } from '@entities'
import { Galleries } from '@widgets'

export const GalleriesPage: FC = () => {
  return (
    <section>
      <PageHeader>Gallery</PageHeader>
      <Galleries />
    </section>
  )
}
