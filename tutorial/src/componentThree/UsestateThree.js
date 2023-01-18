import React,{useState} from 'react'

export default function UsestateThree() {
    const [items,setItems] = useState([])
    function addNumber(){
        setItems([
            ... items,{
                id : items.length,
                Number : Math.floor(Math.random() * 10)
            }
        ])
    }
  return (
    <div>
      <button onClick={()=>addNumber()}>Add number</button>
      <ul>
        {
            items.length 
            ? items.map((para)=> <p key={para.id}>{para.Number}</p>)
            : null
        }
      </ul>
    </div>
  )
}
