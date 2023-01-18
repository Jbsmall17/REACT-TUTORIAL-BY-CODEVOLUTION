import React,{useContext} from 'react'
import { Context } from '../App'
export default function CompDTwo() {
    const countContext = useContext(Context)
    console.log(countContext)
    const {countState, countDispatch} = countContext
  return (
    <div>
      component D
      <p>count - {countState}</p>
      <button onClick={()=>countDispatch('Increment')}>Increment</button>
      <button onClick={()=>countDispatch('Decrement')}>Decrement</button>
      <button onClick={()=>countDispatch('Reset')}>Reset</button>
    </div>
  )
}
