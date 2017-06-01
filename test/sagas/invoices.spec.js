import { call } from 'redux-saga/effects'
import API from '../../app/services/api'
import { getInvoices } from '../../app/sagas/invoices_sagas'
// import InvoicesActions from '../../app/reducers/invoices_redux'

const stepper = (fn) => (mock) => fn.next(mock).value
const api = API.create()
// const response = yield call(api.invoices)
describe('nivoices saga', () => {
  it('Api request', () => {
    const step = stepper(getInvoices(api))
    expect(step(), call(api.invoices))
  })
})
