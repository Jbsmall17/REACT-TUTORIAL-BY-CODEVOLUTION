import {useState} from 'react'

export default function useCounter(initialvalue = 0, value=1) {
    const [count,setCount] = useState(initialvalue)
    const Increment = () =>{
        setCount(prev => prev + value)
    }
    const Decrement = () =>{
        setCount(prev => prev - value)
    }
    const Reset = () =>{
        setCount(initialvalue)
    }
  return [count, Increment, Decrement,Reset]
}
