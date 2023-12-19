import { FC } from 'react'
import { FiltersColumn, Gallery } from '@widgets'
import { useRouter } from 'next/router'

import './styles.scss'
import { PageHeader } from '@entities'
import { useGalleryTitle } from '@shared/api'

export const GalleryPage: FC = () => {
  const router = useRouter()
  const { id } = router.query

  const { title } = useGalleryTitle(id)

  return (
    <section>
      <PageHeader>{title}</PageHeader>
      <div
        className="wrapper"
        style={{ display: 'flex', flexDirection: 'row' }}
      >
        <FiltersColumn />
        <Gallery />
      </div>
    </section>
  )
}
