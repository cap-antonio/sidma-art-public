import { FC, Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import { BaseLayout } from 'src/processes'

import { Pages } from './types'

const MainPage = lazy(() => import('../../pages/MainPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage'))
const BlogPage = lazy(() => import('../../pages/BlogPage'))

const routeItems = [
  {
    path: Pages.main,
    element: <MainPage />,
  },
  {
    path: Pages.contacts,
    element: <ContactsPage />,
  },
  {
    path: Pages.blog,
    element: <BlogPage />,
  },
]

export const AppRoutes: FC = () => {
  return (
    <BaseLayout>
      <Suspense>
        <Routes>
          {routeItems.map((route, i) => (
            <Route key={route.path + i} {...route} />
          ))}
        </Routes>
      </Suspense>
    </BaseLayout>
  )
}
