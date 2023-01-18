import React from 'react'

const highComp = (WrappedComponent) =>{
     function HighComp(props) {
    const [state,setState] = React.useState(0)
    function increment(){
      setState( count => count + 1)
    }
      return <WrappedComponent count={state} incrementCount={increment} {...props}/>
    }
    return HighComp
}

export default highComp