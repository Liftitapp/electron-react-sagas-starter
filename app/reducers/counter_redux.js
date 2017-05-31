// @flow
import { createReducer, createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  incrementCounter: null,
  decrementCounter: null
})

export const CounterTypes = Types
export default Creators

export const INITIAL_STATE = {
  counter: 0
}

const incrementCounter = state => ({
  ...state,
  counter: state.counter + 1
})
const decrementCounter = state => ({
  ...state,
  counter: state.counter - 1
})

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INCREMENT_COUNTER]: incrementCounter,
  [Types.DECREMENT_COUNTER]: decrementCounter
})
