import { Provider } from 'react-redux'
import { ThemeProvider } from '@emotion/react'

import { theme } from '../shared/theme'
import { AppRoutes } from './routes'
import './i18n'
import { globalStyles } from './globalStyles'
import { store } from 'src/shared/store'

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
