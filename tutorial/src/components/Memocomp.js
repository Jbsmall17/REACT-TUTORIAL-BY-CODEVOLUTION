// AS PURECOMPONENT IS TO CLASS COMPONENT SAME AS MEMO IS TO FUNCTIONAL COMPONENT
// BOTH MEMO AND PURECOMPONENT BOOST THE PERFOEMANCE OF A REACT APP - THEY PREVENT UNNECESSARY RENDERING

import React from 'react'

 function Memocomp({name}) {
    console.log("A MEMO FUNCTIONAL COMPONENT")
  return (
    <div>
       {name}
    </div>
  )
}
export default React.memo(Memocomp)