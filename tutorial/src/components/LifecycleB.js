import React, { Component } from 'react'
// Mounting lifecycle method 
// LifecycleB a children comp for LifecycleA
export default  class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'jibola'
      }
      console.log("LifecycleB constructor function")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleB getDerivedStateFromProps")
        return null
    }
    componentDidMount(){
        console.log("LifecycleB componentDidMount Method")
    }
  render() {
        console.log("LifecycleB render Method")
    return (
      <div>
        <h1>LifecycleB</h1>
      </div>
    )
  }
}
