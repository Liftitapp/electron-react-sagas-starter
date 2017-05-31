import { connect } from 'react-redux'
import Counter from 'components/counter/counter'
import counterActions from 'reducers/counter_redux'

const mapStateToProps = state => ({
  counter: state.counterReducer.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => {
    dispatch(counterActions.incrementCounter())
  },
  decrementCounter: () => {
    dispatch(counterActions.decrementCounter())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
