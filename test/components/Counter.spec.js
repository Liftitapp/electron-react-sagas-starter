import { spy } from 'sinon'
import React from 'react'
import { shallow } from 'enzyme'
import { BrowserRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Counter from '../../app/components/counter/counter'

function setup() {
  const actions = {
    incrementCounter: spy(),
    decrementCounter: spy()
  }
  const component = shallow(<Counter counter={1} {...actions} />)
  return {
    component,
    actions,
    buttons: component.find('button'),
    p: component.find('.counter')
  }
}

describe('Counter component', () => {
  it('should should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^1$/)
  })

  it('should first button should call increment', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.incrementCounter.called).toBe(true)
  })

  it('should match exact snapshot', () => {
    const { actions } = setup()
    const tree = renderer
      .create(
        <div>
          <Router>
            <Counter counter={1} {...actions} />
          </Router>
        </div>
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('should second button should call decrement', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.decrementCounter.called).toBe(true)
  })
})
