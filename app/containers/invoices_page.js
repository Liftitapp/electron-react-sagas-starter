// @flow
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import Invoices from '../components/invoices/invoices'
import InvoicesActions from '../reducers/invoices_redux'

const mapStateToProps = state => ({
  data: state.invoicesReducer.get('invoices')
})

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  getInvoices: () => {
    dispatch(InvoicesActions.invoicesFetch())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Invoices)
