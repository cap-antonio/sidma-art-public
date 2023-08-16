import { FC } from 'react'
import { GalleryCategory } from '@widgets'
import { useRouter } from 'next/router'

export const GalleryCategoryPage: FC = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <div>
      <GalleryCategory name={name ? name : '0'} />
    </div>
  )
}
