import React from 'react'
import { ThemeProvider } from '@emotion/react'
import { testTheme } from '../../../styles/index'
import UsersList from '../index'
import { screen, render } from '@testing-library/react'

export const newComponent = props => {
  return React.createElement(UsersList, {
    ...props
  })
}

export const renderComponent = props => {
  const x = newComponent(JSON.parse(props))
  render(<ThemeProvider theme={testTheme}>{x}</ThemeProvider>)
}

export const isTheUserInComponent = name => {
  const element = screen.getByText(new RegExp(name, ''))
  return element !== null
}
