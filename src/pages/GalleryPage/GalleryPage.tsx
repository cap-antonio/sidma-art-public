import { FC } from 'react'
import { PageHeader } from '@entities'
import { Gallery } from '@widgets'
import Head from 'next/head'

export const GalleryPage: FC = () => {
  return (
    <div>
      <Head>
        <title>Gallery</title>
      </Head>
      <PageHeader>Gallery</PageHeader>
      <Gallery />
    </div>
  )
}
