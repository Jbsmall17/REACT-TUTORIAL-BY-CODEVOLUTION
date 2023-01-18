import React, {useState} from 'react'

export default function UseStateTwo() {
    const [name,setName] = useState({firstname: '', lastname: ''})

    function changeHandler(e){
        setName({
            ... name,
            [e.target.name] : e.target.value
        })
    }
    return (
    <div>
      <input 
        type='text'
        name='firstname'
        value={name.firstname}
        onChange={changeHandler}
      />
      <input 
        type='text'
        name='lastname'
        value={name.lastname}
        onChange={changeHandler}
      />
      <p>firstname - {name.firstname}</p>
      <p>lastname - {name.lastname}</p>
    </div>
  )
}
