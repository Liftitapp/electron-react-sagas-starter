import React from 'react'
import { Switch, Route } from 'react-router'
import App from 'containers/app'
import HomePage from './containers/home_page'
import CounterPage from './containers/counter_page'
import InvoicesPage from './containers/invoices_page'
import PdfViewer from './components/pdf/pdf_viewer'

export default () => (
  <App>
    <Switch>
      <Route path='/counter' component={CounterPage} />
      <Route path='/invoices' component={InvoicesPage} />
      <Route path='/pdf' component={PdfViewer} />
      <Route path='/' component={HomePage} />
    </Switch>
  </App>
)
