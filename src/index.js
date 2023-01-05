import './index.css'
import UsersList from './components/UsersList/index'

import { getUserData } from './resources/mockData/usersList'
import reportWebVitals from './reportWebVitals'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@emotion/react'
import { testTheme } from './styles/index'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={testTheme}>
      <UsersList UserData={getUserData()} />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
