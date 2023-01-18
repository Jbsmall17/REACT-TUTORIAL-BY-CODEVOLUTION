import React, { Component } from 'react'
import Childcomp from './Childcomp'
export default class Parentcomp extends Component {
    constructor(props) {
      super(props)
      this.state = {
         Greeting : "Goodmorning",
         person : "Alao",
      }
      this.changePersonnel = this.changePersonnel.bind(this)
    }
    changePersonnel(){
        let arrayOfName = ["Jibola", "Mumin", "Abayomi"]
        let randomNumber = Math.floor(Math.random()* 3)
        this.setState({
            person : arrayOfName[randomNumber]
        }) 
    }

  render() {
    return (
      <div>
        <h2>{`${this.state.Greeting} ${this.state.person}`}</h2>
        <Childcomp FunctHandler={this.changePersonnel}/>
      </div>
    )
  }
}
