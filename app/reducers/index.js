// @flow
import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as sematable } from 'sematable'
import { reducer as counterReducer } from './counter_redux'
import { reducer as invoicesReducer } from './invoices_redux'

const rootReducer = combineReducers({
  sematable,
  counterReducer,
  invoicesReducer,
  router,
})

export default rootReducer
