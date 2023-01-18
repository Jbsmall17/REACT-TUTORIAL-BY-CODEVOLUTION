import React, { Component } from 'react'

export default class Formhandling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         firstname: '',
         lastname: '',
         isChecked: false,
         selection: "Apple"
      }
      this.changestate = this.changestate.bind(this)
    }
    changestate(event){
        const value= event.target.type === 'checkbox' ? event.target.checked : event.target.value
        this.setState({
            [event.target.name] : value 
        })
    }
  render() {
    const style = {
        display: "flex",
        flexDirection: 'column'
    }
    return (
      <div>
        <form style={style}>
            <label>Fisrt Name:</label>
            <input 
            type='text'
            name='firstname'
            value={this.state.firstname}
            onChange={this.changestate}
            ></input>
            <label>last Name:</label>
            <input 
            type='text'
            name='lastname'
            value={this.state.lastname}
            onChange={this.changestate}
            ></input>
            <label>
                checked
            <input 
            type='checkbox'
            name='isChecked'
            checked={this.state.isChecked}
            onChange={this.changestate}
            />
            </label>
            <label>select available fruit:</label>
            <select 
            name="selection" 
            value={this.state.selection }
            onChange={this.changestate}
            >
                <option value="Apple">Apple</option>
                <option  value="Pineapple">Pineapple</option>
                <option value="Watermelon">Watermelon</option>
            </select>
        </form>
      </div>
    )
  }
}
