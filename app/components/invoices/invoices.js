// @flow
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import numeral from 'numeral'
import moment from 'moment'
import sematable from 'sematable'

const columns = [
  { key: 'id', header: 'ID', searchable: true, sortable: true, primaryKey: true },
  { key: 'inserted_at', header: 'Name', searchable: true, sortable: true },
]

const textHeaders = [
  'UUID', 'Factura', 'Fecha', 'Cliente', 'Operador', 'Tipo', 'Valor', 'PDF Cliente', 'PDF Operador']

type Props = {
  data: [],
  getInvoices: () => void
};

const Invoices = ({ data, getInvoices }: Props) => (
  <div>
    <Link to='/'>
      <i className='fa fa-arrow-left fa-3x' />
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
              <NavLink to={{
                pathname: '/pdf',
                query: { url: invoice.customer.pdf_link } }}
              >
                <i className='fa fa-arrow-down fa-1x' />
              </NavLink>
            </td>
            <td>
              <NavLink to={{
                pathname: '/pdf',
                query: { url: invoice.worker.pdf_link } }}
              >
                <i className='fa fa-arrow-down fa-1x' />
              </NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>}
  </div>
)

export default sematable('allApps', Invoices, columns)
