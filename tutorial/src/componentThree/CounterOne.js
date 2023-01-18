import React from 'react'
import useCounter from '../Hooks/useCounter'

export default function CounterOne() {
    const [count,Increment,Decrement,Reset] = useCounter(0, 5)
  return (
    <>
        <div>count - {count}</div>
        <button onClick={()=>Increment()}>Increment</button>
        <button onClick={()=>Decrement()}>Decrement</button>
        <button onClick={()=>Reset()}>Reset</button>
    </>
    
  )
}
