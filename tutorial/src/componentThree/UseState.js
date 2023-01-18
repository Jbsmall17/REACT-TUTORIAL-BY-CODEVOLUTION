import React, {useState} from 'react'

export default function UseState() {
    const [count, setCount ] = useState(0)
    function clickHandler(){
        setCount(prevcount => prevcount+1)
    }
  return (
    <button onClick={()=>clickHandler()}>
        count : {count}
    </button>
  )
}
