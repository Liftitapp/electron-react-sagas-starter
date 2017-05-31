import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './counter.css'

const Counter = ({ decrementCounter, incrementCounter, counter }) => (
  <div>
    <div className={styles.backButton} data-tid="backButton">
      <Link to="/">
        <i className="fa fa-arrow-left fa-3x" />
      </Link>
    </div>
    <div className={`counter ${styles.counter}`} data-tid="counter">
      {counter}
    </div>
    <div className={styles.btnGroup}>
      <button className={styles.btn} onClick={incrementCounter} data-tclass="btn">
        <i className="fa fa-plus" />
      </button>
      <button className={styles.btn} onClick={decrementCounter} data-tclass="btn">
        <i className="fa fa-minus" />
      </button>
    </div>
  </div>
)

Counter.propTypes = {
  incrementCounter: PropTypes.func,
  decrementCounter: PropTypes.func,
  counter: PropTypes.number
}
Counter.defaultProps = {
  incrementCounter: () => {},
  decrementCounter: () => {},
  counter: 0
}
export default Counter
