// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './home.css'

// Images
import images from '../../images/'

const Home = () => (
  <div>
    <div className={styles.container} data-tid='container'>
      <img alt='logo' width='90' src={images.logo} />
      <br />
      <Link to='/counter'>to Counter</Link>
      <br />
      <Link to='/invoices'>to Invoices</Link>
    </div>
  </div>
)

export default Home
