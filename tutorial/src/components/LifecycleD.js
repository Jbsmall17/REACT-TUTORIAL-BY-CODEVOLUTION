import React, { Component } from 'react'
// A CHILD TO lifecycleD class Component
export default class LifecycleD extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "jibola"
      }
      console.log("LifecycleD constructor")
    }
    static getDerivedFromStateProps(props,state){
        console.log("LifecycleD getDerivedFromStateProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifecycleD shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleD getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleD componentDidUpdate")
    }
  render() {
    console.log("updating LifecycleD render")
    return (
      <div>
        <h1>LifecycleD</h1>        
      </div>
    )
  }
}
