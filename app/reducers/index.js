import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as sematable } from 'sematable'
import { reducer as counterReducer } from 'reducers/counter_redux'
import { reducer as invoicesReducer } from 'reducers/invoices_redux'

const rootReducer = combineReducers({
  sematable,
  counterReducer,
  invoicesReducer,
  router,
})

export default rootReducer
