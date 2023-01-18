import React from 'react'

export default function Person({Person}) {
  return (
    <div>
      <h2>{`I am ${Person.Name}. A ${Person.role}`}</h2>
    </div>
  )
}
