import React from 'react'
const Childcomp = (props) => {
  return (
    <div>
      <button onClick={props.FunctHandler}>changePersonnel</button>
    </div>
  )
}

export default Childcomp
