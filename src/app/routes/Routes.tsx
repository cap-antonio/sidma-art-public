import { FC, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { BaseLayout } from 'src/processes'
import { Pages } from 'src/shared/types'

const GalleryPage = lazy(() => import('../../pages/GalleryPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage'))
const BlogPage = lazy(() => import('../../pages/BlogPage'))
const ShopPage = lazy(() => import('../../pages/ShopPage'))

const routeItems = [
  {
    path: Pages.gallery,
    element: <GalleryPage />,
  },
  {
    path: Pages.contacts,
    element: <ContactsPage />,
  },
  {
    path: Pages.blog,
    element: <BlogPage />,
  },
  {
    path: Pages.shop,
    element: <ShopPage />,
  },
]

export const AppRoutes: FC = () => {
  return (
    <BaseLayout>
      <Suspense>
        <Routes>
          <Route path="/" element={<GalleryPage />} />
          {routeItems.map((route, i) => (
            <Route key={route.path + i} {...route} />
          ))}
        </Routes>
      </Suspense>
    </BaseLayout>
  )
}
