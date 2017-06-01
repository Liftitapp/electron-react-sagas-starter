import React from 'react'
import PropTypes from 'prop-types'
import styles from './counter.css'

const CounterButton = ({ onClick, counterIcon }) => (
  <button className={styles.btn} onClick={onClick} data-tclass="btn">
    <i className={`fa ${counterIcon}`} />
  </button>
)

CounterButton.propTypes = {
  onClick: PropTypes.func,
  counterIcon: PropTypes.string
}
CounterButton.defaultProps = {
  onClick: () => {},
  counterIcon: ''
}
export default CounterButton
