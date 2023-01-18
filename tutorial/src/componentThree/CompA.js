import React, { Component } from 'react'
import CompB from './CompB'

export default class compA extends Component {
  render() {
    return (
      <div>
        ComponentA
        <CompB />
      </div>
    )
  }
}
