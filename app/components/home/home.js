// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.css'

const Home = () => (
  <div>
    <div className={styles.container} data-tid="container">
      <h2>Liftit Invoices</h2>
      <Link to="/counter">to Counter</Link>
      <br />
      <Link to="/invoices">to Invoices</Link>
    </div>
  </div>
)

export default Home
