import React,{useState} from 'react'
import useInput from '../Hooks/useInput'

export default function Form() {
    const [fisrtname,objFisrtname,resetFirstName] = useInput('')
    const [lastname, objLastname,resetLastName] = useInput('')
    function submitHandler(e){
      e.preventDefault()
      alert(`firstname - ${fisrtname} lastname - ${lastname}`)
      resetFirstName()
      resetLastName()
    }
  
  
    return (
    <div>
      <form onSubmit={submitHandler}>
        <label>First Name:</label>
        <input 
            type="text" 
            {...objFisrtname}
        ></input>
        <label>Last Name:</label>
        <input
            type="text" 
            {... objLastname}
        ></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
