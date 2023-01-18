import React, { Component } from 'react'

export default class Errorhandling extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError : false
      }
    }
    static getDerivedStateFromError(error){
        return ({
            hasError : true 
        })
    }
  render() {
    return (
      <div>
        {this.state.hasError ? <h1>something went wrong</h1> : this.props.children}
      </div>
    )
  }
}
