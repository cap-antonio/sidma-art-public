import { FC } from 'react'
import { PageHeader } from '@entities'
import { Feed } from '@widgets'

export const BlogPage: FC = () => {
  return (
    <div>
      <PageHeader>Блог</PageHeader>
      <Feed />
    </div>
  )
}
