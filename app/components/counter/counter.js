// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import CounterButton from './counter_button'
import styles from './counter.css'

type Props = {
  incrementCounter: () => void,
  decrementCounter: () => void,
  counter: number
};

const Counter = ({ decrementCounter, incrementCounter, counter }: Props) => (
  <div>
    <div className={styles.backButton} data-tid='backButton'>
      <Link to='/'>
        <i className='fa fa-arrow-left fa-3x' />
      </Link>
    </div>
    <div className={`counter ${styles.counter}`} data-tid='counter'>
      {counter}
    </div>
    <div className={styles.btnGroup}>
      <CounterButton onClick={incrementCounter} counterIcon='fa-plus' />
      <CounterButton onClick={decrementCounter} counterIcon='fa-minus' />
    </div>
  </div>
)

export default Counter
