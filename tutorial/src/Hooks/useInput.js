import {useState} from 'react'

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const inputObj = {
        value : value,
        onChange : (e) =>{
            setValue(e.target.value)
        }
    }
    const reset = () =>{
        setValue(initialValue)
    }
  return [value, inputObj,reset]
}
