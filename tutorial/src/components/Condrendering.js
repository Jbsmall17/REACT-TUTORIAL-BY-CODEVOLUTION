import React, { Component } from 'react'

export default class Condrendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isOnline : false
      }
    }
    
  render() {
    //if (this.state.isOnline)
    //return (<div>welcome jibola</div>)
    //else{
      //  return <div>welcome Guest</div>
    //} IF AND ELSE STATEMENT CONDITIONAL RENDERING
    // return <div>{this.state.isOnline ? 'welcome jibola' : 'welcome Guest'}</div> TERNARY OPERATOR CONDITIONAL RENDERING
    return this.state.isOnline && <div>welcome Jibola</div> // SHORT CIRCUIT CONDITIONAL RENDERING
  }
}
