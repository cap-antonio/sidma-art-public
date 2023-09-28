import { FC } from 'react'
import { FiltersColumn, Gallery } from '@widgets'
import { useRouter } from 'next/router'

import './styles.scss'
import { PageHeader } from '@entities'

export const GalleryPage: FC = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <section>
      <PageHeader>{name}</PageHeader>
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
