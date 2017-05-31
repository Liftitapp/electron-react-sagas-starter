import { spy } from 'sinon'
import counterActions from '../../app/reducers/counter_redux'

describe('actions', () => {
  it('should increment should create increment action', () => {
    expect(counterActions.incrementCounter()).toMatchSnapshot()
  })

  it('should decrement should create decrement action', () => {
    expect(counterActions.decrementCounter()).toMatchSnapshot()
  })
})
