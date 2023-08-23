import { useMemo } from 'react'
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client'
import { AppProps } from 'next/app'

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

const initialApolloStateName = 'initialApolloState'

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: createHttpLink({
      uri: `${directusBaseURL}/graphql`,
      credentials: 'same-origin',
      // headers: {
      //   cookie: req.header('Cookie'),
      // },
    }),
    cache: new InMemoryCache({
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

  if (initialState) {
    const existingCache = _apolloClient.extract()

    const data = {
      ...existingCache,
      ...initialState,
    }

    _apolloClient.cache.restore(data)
  }

  if (typeof window === 'undefined') return _apolloClient

  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export const useApollo = (pageProps: AppProps['pageProps']) => {
  const state = pageProps[initialApolloStateName]
  const store = useMemo(() => initializeApollo(state), [state])
  return store
}

export const getApolloClient = () => {
  return apolloClient ?? createApolloClient()
}
