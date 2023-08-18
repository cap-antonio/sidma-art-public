import { BaseLayout } from '@processes'
import { store } from '@shared/store'
import type { AppProps } from 'next/app'
import '@shared/styles/global.scss'

// import "../i18n"
import { Provider } from 'react-redux'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo-client'

// const baseURL = process.env.NEXT_PUBLIC_ENV_VARIABLE

// Axios.defaults.baseURL = baseURL

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BaseLayout>
          <Component {...pageProps} />
        </BaseLayout>
      </Provider>
    </ApolloProvider>
  )
}

export default App
