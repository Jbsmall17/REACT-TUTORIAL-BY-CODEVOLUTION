import React from 'react'

const Functionclick = () => {
    function clickButton(){
        alert("clicked")
    }
  return (
    <div>
      <button onClick={clickButton}>click</button>
    </div>
  )
}

export default Functionclick
