import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { NextUIProvider } from '@nextui-org/react'
import { MantineProvider } from '@mantine/core'
import { Provider } from 'react-redux'
import { store } from './feature/store.js'
import '@mantine/core/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <MantineProvider>
  <NextUIProvider>
    <Provider store={store}>
    <App />
    </Provider>
  </NextUIProvider>
  </MantineProvider>
  </BrowserRouter>,
)
