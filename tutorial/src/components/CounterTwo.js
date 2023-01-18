import React from 'react'

export default function CounterTwo({state, increment}) {
  return (
    <button onClick={increment}>clicked {state} times</button>
  )
}
