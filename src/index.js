import './index.css'
import ListOfUsers from './components/ListOfUsers/index'

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
      <ListOfUsers UserData={getUserData()} />
    </ThemeProvider>
  </React.StrictMode>
)

reportWebVitals()
