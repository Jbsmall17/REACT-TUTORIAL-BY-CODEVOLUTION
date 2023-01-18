import React from 'react'

const FRref = React.forwardRef((props,ref) => {
  return (
    <div>
      <input ref={ref} type='text'></input>
    </div>
  )
})

export default FRref