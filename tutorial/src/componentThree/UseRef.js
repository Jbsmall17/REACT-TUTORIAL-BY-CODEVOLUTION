import React,{useEffect, useRef,useState} from 'react'

export default function UseRef() {
    const [count, setCount] = useState(0)
    const inputRef = useRef(null)
    const timeRef = useRef()
    useEffect(()=>{
        inputRef.current.focus()

    },[])
    useEffect(()=>{
      timeRef.current=setInterval(()=>{
        setCount((prev)=>prev + 1)
      },1000)
      return ()=>{clearInterval(timeRef.current)}
    })
  return (
    <div>
      <input type="text" ref={inputRef} />
      <p>{count}</p>
      <button onClick={()=>clearInterval(timeRef.current)}>stop count</button>
    </div>
  )
}
