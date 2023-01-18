import React from 'react'
import highComp from './highComp'  

const Hover = ({count,incrementCount,name}) => {
  return (
    <div onMouseOver={incrementCount}>
      {name} Mouse over {count} times
    </div>
  )
}

export default highComp(Hover)   
