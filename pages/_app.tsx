import { BaseLayout } from '@processes'
import { store } from '@shared/store'
import type { AppProps } from 'next/app'
import '@shared/styles/global.scss'

// import "../i18n"
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../apollo-client'

const App = ({ Component, pageProps }: AppProps) => {
  const apolloClient = useApollo(pageProps)
  return (
    <ApolloProvider client={apolloClient}>
      <Provider store={store}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    </ApolloProvider>
  )
}

export default App
