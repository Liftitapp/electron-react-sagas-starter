import { createStore, applyMiddleware, compose } from 'redux'
import { createHashHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware, routerActions } from 'react-router-redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import * as counterActions from '../reducers/counter_redux'

const history = createHashHistory()

const configureStore = (initialState) => {
  // Redux Configuration
  const middleware = []
  const enhancers = []

  // sagaMiddleware Middleware
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  // Logging Middleware
  const logger = createLogger({
    level: 'info',
    collapsed: true
  })
  middleware.push(logger)

  // Router Middleware
  const router = routerMiddleware(history)
  middleware.push(router)

  // Redux DevTools Configuration
  const actionCreators = {
    ...counterActions,
    ...routerActions,
  }
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators,
    })
    : compose
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware))
  const enhancer = composeEnhancers(...enhancers)

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    )
  }
  sagaMiddleware.run(rootSaga)
  return store
}

export default { configureStore, history }
