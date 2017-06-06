/* eslint flowtype-errors/show-errors: 0 */
import React from 'react'
import { Switch, Route } from 'react-router'
import App from './containers/App'
import HomePage from './containers/home_page'
import CounterPage from './containers/counter_page'
import InvoicesPage from './containers/invoices_page'

export default () => (
  <App>
    <Switch>
      <Route path='/counter' component={CounterPage} />
      <Route path='/invoices' component={InvoicesPage} />
      <Route path='/' component={HomePage} />
    </Switch>
  </App>
)
