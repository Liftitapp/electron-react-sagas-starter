// @flow
import { connect } from 'react-redux'
import type { Dispatch } from 'redux'
import Counter from '../components/counter/counter'
import counterActions from '../reducers/counter_redux'

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
})
// https://github.com/flowtype/flow-typed/issues/778
const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  incrementCounter: () => {
    dispatch(counterActions.incrementCounter())
  },
  decrementCounter: () => {
    dispatch(counterActions.decrementCounter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
