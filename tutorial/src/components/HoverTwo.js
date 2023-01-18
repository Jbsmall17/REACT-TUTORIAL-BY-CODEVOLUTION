import React from 'react'

export default function HoverTwo({state,increment}) {

  return (
    <div onMouseOver={increment}>
     Mouse hover {state} times 
    </div>
  )
}
