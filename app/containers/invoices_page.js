import { connect } from 'react-redux'
import Invoices from 'components/invoices/invoices'
import InvoicesActions from 'reducers/invoices_redux'

const mapStateToProps = state => ({
  data: state.invoicesReducer.get('invoices')
})

const mapDispatchToProps = dispatch => ({
  getInvoices: () => {
    dispatch(InvoicesActions.invoicesFetch())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Invoices)
