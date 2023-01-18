import React,{useState} from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

export default function DocTitle() {
    const [count,setCount] = useState(0)
    useDocumentTitle(count)
  return (
    <div>
      <button onClick={()=>{setCount(prev => prev + 1)}}>count - {count}</button>
    </div>
  )
}
