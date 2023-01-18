import axios from 'axios'
import React,{useState,useEffect} from 'react'

export default function UseEffectTwo() {
    const [post,setPost] = useState([])
    const [id,setId] = useState(1)
    const [buttonId, setButtonId] = useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonId}`)
        .then(res=>setPost(res.data))
        .catch(rej=>{
            console.log(rej)
            setId(1)
        })
    },[buttonId])
  return (
    <div>
        <input 
            type='number'
            value={id}
            onChange={(e)=>setId(e.target.value)}
        />
        <button type='button' onClick={()=>setButtonId(id)}>fetch post</button>
        <p>{post.title}</p>
    </div>
  )
}
