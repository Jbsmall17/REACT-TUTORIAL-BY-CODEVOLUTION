import React,{useEffect, useState} from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('')
  useEffect(()=>{ document.title = `You clicked ${count} times`; console.log("effect update")},[count])
  return (
    <div>
      <input 
        type='text'
        value={name}
        onChange={(e)=>{setName(e.target.value)}}
      />
      <button onClick={()=>setCount(prev => prev + 1)}>click {count} times</button>
    </div>
  )
}
