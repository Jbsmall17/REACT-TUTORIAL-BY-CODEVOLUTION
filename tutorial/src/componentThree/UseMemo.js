import React,{useState,useMemo} from 'react'

export default function UseMemo() {
    const [count,setCount] = useState(0)
    const [count1,setCount1] = useState(0)

    const isMemo = useMemo(() =>{
        let i = 0;
        while(i < 1000000000) i++ 
        return count % 2 === 0
    },[count])
  return (
    <div>
      <button onClick={()=>setCount(prev => prev + 1)}>count - {count}</button>
      <span>{isMemo ? 'Even' : "Odd"}</span>
      <button onClick={()=>setCount1(prev => prev + 1)}>count - {count1}</button>
    </div>
  )
}
