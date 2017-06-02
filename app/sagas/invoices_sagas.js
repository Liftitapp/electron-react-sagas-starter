import { call, put } from 'redux-saga/effects'
import InvoicesActions from 'reducers/invoices_redux'

function* getInvoices(api: object) {
  const response = yield call(api.invoices)
  switch (response.status) {
    case 200:
      yield put(InvoicesActions.invoicesSuccess(response.data))
      break
    default:
      yield put(InvoicesActions.invoicesFail({ errors: '500 server error' }))
  }
}
export default getInvoices
