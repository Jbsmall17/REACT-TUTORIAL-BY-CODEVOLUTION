import React, { Component } from 'react'
import CompA from './CompA'
import CompAOne from './CompAOne'

export default class CreateContext extends Component {
  render() {
    return (
      <div>
        CreateContext
        {/*<CompA />*/}
        <CompAOne />
      </div>
    )
  }
}
