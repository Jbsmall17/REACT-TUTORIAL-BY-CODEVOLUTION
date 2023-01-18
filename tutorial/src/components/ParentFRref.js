import React, { Component } from 'react'
import FRref from './FRref'
export default class ParentFRref extends Component {
    constructor(props) {
      super(props)
    
      this.ParenFRref = React.createRef()
    }
    clickHandler= () =>{
        this.ParenFRref.current.focus()
    }
  render() {
    return (
        <div>
        <FRref ref={this.ParenFRref} />
        <button onClick={()=>this.clickHandler()}>Focus Input</button>
      </div>
    )
  }
}
