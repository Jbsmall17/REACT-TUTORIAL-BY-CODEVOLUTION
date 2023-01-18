import React from 'react'
import highComp from './highComp'  
const Counter = ({count, incrementCount,name}) => {
  return (
    <div>
      <button onClick={incrementCount}>{name} clicked {count} times</button>
    </div>
  )
}

export default highComp(Counter)
