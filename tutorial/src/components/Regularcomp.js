import React, { Component } from 'react'

export default class Regularcomp extends Component {
  render() {
    console.log("*****regular class comp*****")
    return (
      <div>
        REGULAR CLASS COMPONENT {this.props.name}
      </div>
    )
  }
}
