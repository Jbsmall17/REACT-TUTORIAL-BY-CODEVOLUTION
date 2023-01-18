import React from 'react'

export default function Countercomp(props) {
    const [state,setState] = React.useState(0)
    function increment(){
        setState(count => count + 1)
    }
  return (
    <div>
     {props.render(state,increment)} 
    </div>
  )
}
