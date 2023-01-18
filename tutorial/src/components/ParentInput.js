import React, { Component } from 'react'
import Input from './Input'

export default class ParentInput extends Component {
    constructor(props) {
      super(props)
      this.accessNode = React.createRef()
    }
    
  render() {
    return (
      <div>
        <Input 
        ref={this.accessNode}
        />
        <button onClick={()=>{
            this.accessNode.current.focusInput()
        }}>Focus Input</button>
      </div>
    )
  }
}
