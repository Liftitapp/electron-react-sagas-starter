// @flow
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'

const history = createBrowserHistory()
const router = routerMiddleware(history)
const enhancer = applyMiddleware(createSagaMiddleware, router)

function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer)
}

export default { configureStore, history }
