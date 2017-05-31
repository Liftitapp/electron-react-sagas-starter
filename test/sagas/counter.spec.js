import counter from '../../app/reducers/counter_redux'
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../../app/reducers/counter_redux'

describe('reducers', () => {
  describe('counter', () => {
    xit('should handle initial state', () => {
      expect(counter(undefined, {})).toMatchSnapshot()
    })

    xit('should handle INCREMENT_COUNTER', () => {
      expect(counter(1, { type: INCREMENT_COUNTER })).toMatchSnapshot()
    })

    xit('should handle DECREMENT_COUNTER', () => {
      expect(counter(1, { type: DECREMENT_COUNTER })).toMatchSnapshot()
    })

    xit('should handle unknown action type', () => {
      expect(counter(1, { type: 'unknown' })).toMatchSnapshot()
    })
  })
})
