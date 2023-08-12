import { globalStyles } from '@app/globalStyles'
import { ThemeProvider } from '@emotion/react'
import { BaseLayout } from '@processes'
import { store } from '@shared/store'
import { theme } from '@shared/theme'
// import Axios from "axios"
import type { AppProps } from 'next/app'

// import "../i18n"
import { Provider } from 'react-redux'

// const baseURL = process.env.NEXT_PUBLIC_ENV_VARIABLE

// Axios.defaults.baseURL = baseURL

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App
