import { FC } from 'react'
import { PageHeader } from '@entities'
import { Feed } from '@widgets'
import Head from 'next/head'

export const BlogPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <PageHeader>Блог</PageHeader>
      <Feed />
    </div>
  )
}
