// @flow
import React from 'react'
import type { Children } from 'react'

type Props = {
  children: Children
};
const App = (props: Props) => (
  <div>
    {props.children}
  </div>
)

export default App
