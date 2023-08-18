import { ApolloClient, InMemoryCache } from '@apollo/client'

const directusBaseURL = process.env.NEXT_PUBLIC_DIRECTUS_BASE

const client = new ApolloClient({
  uri: `${directusBaseURL}/graphql`,
  cache: new InMemoryCache(),
})

export default client
