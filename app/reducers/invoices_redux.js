import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

const { Types, Creators } = createActions({
  invoicesFetch: null,
  invoicesSuccess: ['invoices'],
  fetching: null
})

export const InvoicesTypes = Types
export default Creators

export const INITIAL_STATE = Map({
  invoices: [],
  fetching: false
})

const invoicesFetching = () => INITIAL_STATE

const invoicesSuccess = (state, { invoices }) => state.mergeDeep(
    Map({
      ...state,
      invoices,
      fetching: false
    })
  )

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INVOICES_FETCH]: invoicesFetching,
  [Types.INVOICES_SUCCESS]: invoicesSuccess
})
