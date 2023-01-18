import React, { Component } from 'react'
import axios from 'axios'

export class ParaEL extends Component{
  render(){
    const {title} = this.props
    return (
      <p>{title}</p>
    )
  }
}
export class HttpGet extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Array : [],
         errorMsg: ''
      }
    }ht
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=> {
          this.setState({
            Array : response.data
          })
        })
        .catch(reject => this.setState({errorMsg: 'error occured'}))
    }
  render() {
    const {Array, errorMsg} = this.state
    console.log(Array.length)
    const ArrayOfPara = Array.map((para)=>{
      return <ParaEL key={para.id} title={para.title}/>
    }) 
    console.log(ArrayOfPara)
    return (
        <div>
        {Array.length ? ArrayOfPara : null}
        {errorMsg ? errorMsg : null}
        </div>
    )
  }
}

export default HttpGet

