import React,{useReducer} from 'react'

const initialstate = 0
const reducer = (state,action)=>{
    switch(action){
        case 'Increment':
            return state + 1;
        case "Decrement":
            return state - 1;
        case "Reset":
            return initialstate;
        default:
            return state;
    }
}
export default function UseReducer() {
    const [count, dispatch] = useReducer(reducer,initialstate)
  return (
    <div>
      <p>count - {count}</p>
      <button onClick={()=>dispatch('Increment')}>Increment</button>
      <button onClick={()=>dispatch('Decrement')}>Decrement</button>
      <button onClick={()=>dispatch('Reset')}>Reset</button>
    </div>
  )
}
