import { createStore, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'react-router-redux'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const history = createBrowserHistory()
const router = routerMiddleware(history)
const sagaMiddleware = createSagaMiddleware()
const enhancer = applyMiddleware(sagaMiddleware, router)

function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer)
  sagaMiddleware.run(rootSaga)
  return store
}

export default { configureStore, history }
