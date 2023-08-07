import { ThemeProvider } from '@emotion/react'
// import Axios from "axios"
import type { AppProps } from 'next/app'

// import "../i18n"
import { BaseLayout } from 'src/processes'
import { Provider } from 'react-redux'
import { store } from 'src/shared/store'
import { globalStyles } from 'src/app/globalStyles'
import { theme } from 'src/shared/theme'

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
