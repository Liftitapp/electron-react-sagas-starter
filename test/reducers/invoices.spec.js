import { spy } from 'sinon'
import invoicesActions from '../../app/reducers/invoices_redux'

describe('actions', () => {
  it('should fetch', () => {
    expect(invoicesActions.invoicesFetch()).toMatchSnapshot()
  })

  it('should be succes', () => {
    expect(invoicesActions.invoicesSuccess()).toMatchSnapshot()
  })
})
