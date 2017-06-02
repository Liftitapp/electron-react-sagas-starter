import { takeEvery } from 'redux-saga/effects'
import API from 'services/api'
import { InvoicesTypes } from 'reducers/invoices_redux'
import getInvoices from 'sagas/invoices_sagas'

const api = API.create()

function* rootSaga() {
  yield takeEvery(InvoicesTypes.INVOICES_FETCH, getInvoices, api)
}
export default rootSaga
