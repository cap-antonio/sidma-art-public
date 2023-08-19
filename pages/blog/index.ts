import { feedListQuery } from '@shared/api'
import { getApolloClient } from '../../apollo-client'

export { default } from '../../src/pages/BlogPage'

export async function getServerSideProps() {
  const apolloClient = getApolloClient()
  await apolloClient.query({
    query: feedListQuery,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  }
}
