import axios from 'axios'
import React, { Component } from 'react'

export class HttpPost extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId: '',
         title: '',
         body : ''
      }
      this.submit = this.submit.bind(this)
      this.changeValue = this.changeValue.bind(this)
    }
    changeValue(e){
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    submit(e){
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state)
        .then((resolve)=> console.log(resolve))
        .catch(error=>console.log(error))
    } 
  render() {
    const {userId, title, body} = this.state
    const styles = {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center' 
    }
    const length = {
        width: '150px'
    }
    return (
      <form  style={styles} onSubmit={this.submit}>
        <input 
            style={length}
            type='text'
            name='userId'
            value={userId}
            onChange={this.changeValue}
        />
        <input
            style={length}
            type='text'
            name='title'
            value={title}
            onChange={this.changeValue}
        />
        <input 
            style={length}
            type='text'
            name='body'
            value={body}
            onChange={this.changeValue}
        />
        <button type="submit">submit</button>
      </form>
    )
  }
}

export default HttpPost
