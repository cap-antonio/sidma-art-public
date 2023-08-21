// import { ApolloClient, InMemoryCache } from '@apollo/client'

const directusBaseURL =
  typeof window === 'undefined'
    ? process.env.NEXT_PUBLIC_DIRECTUS_BASE_SSR
    : process.env.NEXT_PUBLIC_DIRECTUS_BASE

// export const apolloClient = new ApolloClient({
//   uri: `${directusBaseURL}/graphql`,
//   ssrMode: typeof window === 'undefined',
//   cache: new InMemoryCache(),
//   connectToDevTools: true,
// })

import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client'
import { AppProps } from 'next/app'

export const initialApolloStateName = 'initialApolloState'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: `${directusBaseURL}/graphql`, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      // headers: {
      //   cookie: req.header('Cookie'),
      // },
    }),
    cache: new InMemoryCache({
      // typePolicies is not required to use Apollo with Next.js - only for doing pagination.
      // typePolicies: {
      //   Query: {
      //     fields: {
      //       posts: relayStylePagination(),
      //     },
      //   },
      // },
    }),
    connectToDevTools: true,
  })
}

export const initializeApollo = (
  initialState: NormalizedCacheObject | null = null,
) => {
  const _apolloClient = apolloClient ?? createApolloClient()

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = {
      ...existingCache,
      ...initialState,
    }

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

// export const addApolloState = (
//   client: ApolloClient<NormalizedCacheObject>,
//   pageProps: AppProps['pageProps'],
// ) => {
//   if (pageProps?.props) {
//     pageProps.props[initialApolloStateName] = client.cache.extract()
//   }

//   return pageProps
// }

export const useApollo = (pageProps: AppProps['pageProps']) => {
  const state = pageProps[initialApolloStateName]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export const getApolloClient = () => {
  return apolloClient ?? createApolloClient()
}
