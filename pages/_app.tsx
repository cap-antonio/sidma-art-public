import { store } from '@app/store'
import type { AppProps } from 'next/app'
import '@shared/styles/global.scss'
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'

// import "../i18n"
import { useApollo } from '../apollo-client'
import { BaseLayout } from '@features'

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
