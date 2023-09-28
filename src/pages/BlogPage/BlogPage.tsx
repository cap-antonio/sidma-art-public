import { FC } from 'react'
import { PageHeader } from '@entities'
import { Feed } from '@widgets'

export const BlogPage: FC = () => {
  return (
    <section>
      <PageHeader>Blog</PageHeader>
      <Feed />
    </section>
  )
}
