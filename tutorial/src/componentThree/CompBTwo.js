import React,{useContext} from 'react'
import { Context } from '../App'

export default function CompBtwo() {
    const countContext = useContext(Context)
    const {countState, countDispatch} = countContext
  return (
    <div>
        component B
        <p>count - {countState}</p>
      <button onClick={()=>countDispatch('Increment')}>Increment</button>
      <button onClick={()=>countDispatch('Decrement')}>Decrement</button>
      <button onClick={()=>countDispatch('Reset')}>Reset</button>
    </div>
  )
}
