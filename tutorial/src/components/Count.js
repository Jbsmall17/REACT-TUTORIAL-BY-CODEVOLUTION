import React, { Component } from 'react'

export default class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }
    increment(){
        this.setState((prevCount)=>({
            count : prevCount.count + 1
        }))
    }
    decrement(){
        this.setState((prevCount)=>({
            count : prevCount.count - 1
        }))
    }
  render() {
    return (
      <div>
        <h2>count - {this.state.count}</h2>
        <button onClick={()=>this.increment()}>Increment</button>
        <button onClick={()=>this.decrement()}>Decrement</button>
      </div>
    )
  }
}
