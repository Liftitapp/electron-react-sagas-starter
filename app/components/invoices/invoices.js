import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import numeral from 'numeral'
import moment from 'moment'

const textHeaders = [
  'UUID', 'Factura', 'Fecha', 'Cliente', 'Operador', 'Tipo', 'Valor', 'PDF Cliente', 'PDF Operador']

const Invoices = ({ data, getInvoices }) => (
  <div>
    <Link to="/">
      <i className="fa fa-arrow-left fa-3x" />
    </Link>
    <button onClick={getInvoices}>bring data</button>
    {data.length > 0 &&
    <table>
      <thead>
        <tr>
          { textHeaders.map(textHeader => (
            <th key={textHeader}>{textHeader}</th>
          ))
          }
        </tr>
      </thead>
      <tbody>
        {data.map(invoice => (
          <tr
            key={invoice.id}
          >
            <td>{invoice.service.uuid}</td>
            <td>{invoice.id}</td>
            <td>{moment.parseZone(invoice.inserted_at).utcOffset(-5).format('MM/D/YY')}</td>
            <td>{invoice.customer.name}</td>
            <td>{invoice.worker.name}</td>
            <td>{invoice.service.type}</td>
            <td>{numeral(invoice.service.price).format('$0,0')}</td>
            <td>
              <Link to={invoice.customer.pdf_link}>
                <i className="fa fa-arrow-down fa-1x" />
              </Link></td>
            <td><Link to={invoice.worker.pdf_link}>
              <i className="fa fa-arrow-down fa-1x" />
            </Link></td>
          </tr>
        ))}
      </tbody>
    </table>}
  </div>
)

Invoices.propTypes = {
  data: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  getInvoices: PropTypes.func
}
Invoices.defaultProps = {
  data: [],
  getInvoices: () => {}
}

export default Invoices
