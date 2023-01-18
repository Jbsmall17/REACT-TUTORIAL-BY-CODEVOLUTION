import React,{useReducer} from 'react'

const initialValue = {
    firstcount : 0,
    secondcount: 10
}
const reducer = (state,action) =>{
    switch(action.type){
        case "Increment":
            return {... state, firstcount: state.firstcount + action.value}
        case "Increment2":
            return {... state, secondcount: state.secondcount + action.value}
        case 'Decrement':
            return {... state, firstcount: state.firstcount - action.value}
            case "Decrement2":
                return {... state, secondcount: state.secondcount - action.value}
        case 'Reset':
            return initialValue
        default:
            return state
    }
}
export default function UseReducerTwo() {
    const [count,dispatch] = useReducer(reducer,initialValue)
  return (
    <div>
      <p>count -{count.firstcount}</p>
      <p>count -{count.secondcount}</p>
      <button onClick={()=>dispatch({type: 'Increment',value: 1})}>Increment</button>
      <button onClick={()=>dispatch({type: 'Increment2',value: 1})}>Increment2</button>
      <button onClick={()=>dispatch({type: 'Increment',value: 5})}>Increment5</button>
      <button onClick={()=>dispatch({type: 'Decrement',value: 1})}>Decrement</button>
      <button onClick={()=>dispatch({type: 'Decrement',value: 1})}>Decrement2</button>
      <button onClick={()=>dispatch({type: 'Decrement',value: 5})}>Decrement5</button>
      <button onClick={()=>dispatch({type: 'Reset',value: 0})}>Reset</button>
    </div>
  )
}
