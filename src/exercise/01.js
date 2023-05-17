// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  console.log(`state ${state.count}`)
  console.log(`action type ${action.type}`)
  console.log(`action step ${action.step}`)
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
      break
    case 'DECREMENT':
      return {count: state.count - action.step}
      break
    case 'Other':
      break
    default:
      break
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'DECREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
