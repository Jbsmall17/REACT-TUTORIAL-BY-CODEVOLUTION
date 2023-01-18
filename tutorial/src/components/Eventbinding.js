import React, { Component } from 'react'

export default class Eventbinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : "Hello"
      }
      //this.changeText = this.changeText.bind(this) //eventing in the constructor
    }
    /*changeText(){
        this.setState({
            message : "Goodbye"
        })
        console.log("jibola")
    }*/
    changeText = () => {
        this.setState({
            message : "Goodbye!"
        })
    }
  render() {
    return (
      <div>
        <p>say {this.state.message}</p>
        <button onClick={this.changeText}>click</button>
      </div>
    )
  }
}
