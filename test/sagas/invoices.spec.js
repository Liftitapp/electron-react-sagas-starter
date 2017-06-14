import sagaHelper from 'redux-saga-testing'
import { call, put } from 'redux-saga/effects'
import InvoicesActions from '../../app/reducers/invoices_redux'

const api = jest.fn()
const fetchAction = () => ({ type: 'INVOICES_SUCCESS' })

function* getInvoices() {
  yield call(api)
  yield put(fetchAction())
}

describe('Testing Invoice Saga', () => {
  const it = sagaHelper(getInvoices())

  it('should have called the mock API first', result => {
    expect(result).toEqual(call(api))
    expect(api).not.toHaveBeenCalled()
  })

  it('and then trigger an action', result => {
    expect(result).toEqual(put(InvoicesActions.invoicesSuccess()))
  })

  it('and then nothing', result => {
    expect(result).toBeUndefined()
  })
})
