import { FC } from 'react'
import { FiltersColumn, GalleryCategory } from '@widgets'
import { useRouter } from 'next/router'

import './styles.scss'

export const GalleryCategoryPage: FC = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <div className="wrapper" style={{ display: 'flex', flexDirection: 'row' }}>
      <FiltersColumn />
      <GalleryCategory name={name ? name : '0'} />
    </div>
  )
}
