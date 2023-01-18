import React from 'react'

function Button({handler, children}) {
    console.log(children)
  return (
    <button onClick={handler}>
      {children}
    </button>
  )
  }
export default React.memo(Button)
