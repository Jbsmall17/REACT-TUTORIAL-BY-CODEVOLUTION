import React, { Component } from 'react'

export default class Input extends Component {
    constructor(props) {
      super(props)
      this.state = {
        inputEL : ''
      }
      this.inputRef = React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
        //this.inputRef.current.style.borderColor = "green"
        //alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" 
        ref={this.inputRef}
        name= "inputEL"
        value = {this.state.inputEL}
        onChange={(e)=>{
            this.setState({
                [e.target.name] : e.target.value
            })
        }}
        ></input>
      </div>
    )
  }
}
