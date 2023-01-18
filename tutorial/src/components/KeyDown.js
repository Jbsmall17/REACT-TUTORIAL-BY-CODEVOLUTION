import React from 'react'

export default function KeyDown({state,increment}) {

  return (
    <>
    <input type="text" onKeyDown={increment}/>
    <div>
     pressed {state} tabs on the keyboard 
    </div>
    </>
  )
}
