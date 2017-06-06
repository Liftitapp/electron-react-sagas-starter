// @flow
import React from 'react'
import styles from './counter.css'

type Props = {
  onClick: () => void,
  counterIcon: string
};

const CounterButton = ({ onClick, counterIcon }: Props) => (
  <button className={styles.btn} onClick={onClick} data-tclass='btn'>
    <i className={`fa ${counterIcon}`} />
  </button>
)

export default CounterButton
