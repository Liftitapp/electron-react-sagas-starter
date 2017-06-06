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
})
