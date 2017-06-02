import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import Root from 'containers/root'
import { configureStore, history } from 'store/configure_store'
import 'app.global.css'

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
  module.hot.accept('containers/root', () => {
    const NextRoot = require('containers/root')
    appRender(
      <NextRoot store={store} history={history} />
    )
  })
}
