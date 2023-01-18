import React, { Component } from 'react'
import LifecycleD from './LifecycleD'
// A DEMO CODE FOR THE ORDER EXECUTION OF THE 5 UPDATING LIFECYCLE METHOD
// ONLY TWO OUT OF THEM ARE COMMONLY USED: render() AND componentDidMount()     
export default class LifecycleC extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ajibola'
      }
      console.log("updating constructor function ")
      this.Changestate = this.Changestate.bind(this)
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifecycleC getDerivedFromProps")
        return null
    }
    shouldComponentUpdate(){
        console.log("LifecycleC shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log("LifecycleC updating getSnapshotBeforeUpdate")
        return null
    }
    componentDidUpdate(){
        console.log("LifecycleC componentDidUpdate")
    }
    Changestate(){
        this.setState({
            name: "alao"
        })
    }
    render(){
        console.log("updating LifecycleC render")
        return (
            <div>
                <h1>Updating Lifecycle</h1>
                <button onClick={this.Changestate}>changeState</button>
                <LifecycleD />
            </div>
        )
    }
    
}
