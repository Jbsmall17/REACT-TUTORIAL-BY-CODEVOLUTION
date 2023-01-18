import React, { Component } from 'react'
import LifecycleB from './LifecycleB'
// Mounting lifecycle method 
export default class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mounting : ""
      }
      console.log("Mounting constructor function")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Mounting getDriveFromProps static function")
        return null
    }
  render() {
    console.log("Mounting rendering Method")
    return (
      <div>
        <h1>Mounting Lifecycle Method</h1>
        <LifecycleB />        
      </div>
    )
  }
  componentDidMount(){
    console.log("Mounting componentDidMount function")    
  }
}
