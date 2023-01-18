import React, { Component } from 'react'

export default class Ref extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.clickHandler = this.clickHandler.bind(this)
    }
    componentDidMount(){
        this.inputRef.current.focus()
    }
    clickHandler(){
      alert(`INPUT ELMENT VALUE IS: ${this.inputRef.current.value}`)
      this.inputRef.current.value = ""
    }
  render() {
    const object = {
        display: "flex",
        flexDirection: "column"
    }
    return (
      <div style={object}>
        <input ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>CLICK</button>
      </div>
    )
  }
}
