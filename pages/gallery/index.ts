import { galleryListQuery } from '@shared/api'
import { getApolloClient } from '../../apollo-client'

export { default } from '../../src/pages/GalleryPage'

export async function getServerSideProps() {
  const apolloClient = getApolloClient()
  await apolloClient.query({
    query: galleryListQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
