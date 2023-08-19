import { FC } from 'react'
import { PageHeader } from '@entities'
import dynamic from 'next/dynamic'

const FeedComponent = dynamic(() => import('../../widgets/Feed'), {
  ssr: false,
})

export const BlogPage: FC = () => {
  return (
    <div>
      <PageHeader>Блог</PageHeader>
      <FeedComponent />
    </div>
  )
}
