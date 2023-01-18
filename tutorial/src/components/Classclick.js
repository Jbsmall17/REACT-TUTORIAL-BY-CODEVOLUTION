import React, { Component } from 'react'

export default class Classclick extends Component {

     clickFunc(){
        alert("click me")
    }
  render() {
    return (
      <div>
        <button onClick={this.clickFunc}>click me!</button>
      </div>
    )
  }
}
