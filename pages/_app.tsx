import { BaseLayout } from '@processes'
import { store } from '@shared/store'
// import Axios from "axios"
import type { AppProps } from 'next/app'
import '@shared/styles/global.scss'

// import "../i18n"
import { Provider } from 'react-redux'

// const baseURL = process.env.NEXT_PUBLIC_ENV_VARIABLE

// Axios.defaults.baseURL = baseURL

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </Provider>
  )
}

export default App
