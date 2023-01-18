import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'

import { theme } from './theme'
import { AppRoutes } from './components/routes'
import './i18n'
import { globalStyles } from './components/globalStyles'
import { store } from './store'

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {globalStyles}
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  )
}
