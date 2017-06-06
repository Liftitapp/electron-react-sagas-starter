import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from './containers/Root'
import { configureStore, history } from './store/configureStore'
import './app.global.css'

const store = configureStore()

const appRender = rootType => (
  render(
    <AppContainer>
      {rootType}
    </AppContainer>,
    document.getElementById('root')
  )
)
appRender(
  <Root store={store} history={history} />
)

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./containers/Root') // eslint-disable-line global-require
    appRender(
      <NextRoot store={store} history={history} />
    )
  })
}
