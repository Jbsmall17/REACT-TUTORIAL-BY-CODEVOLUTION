import React, { Component } from 'react'

export default class Message extends Component {
    constructor(){
        super()
        this.state = {
            Message: "Welcome Visitors"
        }
    }
    changeText(){
        this.setState({
            Message : "Thank you for Subscribing"
        })
    }
  render() {
    return (
      <div>
        <p>{this.state.Message}</p>
        <button onClick={()=> this.changeText()}>subscribe</button>
      </div>
    )
  }
}
