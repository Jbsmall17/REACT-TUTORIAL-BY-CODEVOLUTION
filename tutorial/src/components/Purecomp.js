import React, { PureComponent } from 'react'
import Memocomp from './Memocomp'
import Purecomp2 from './Purecomp2'
import Regularcomp from './Regularcomp'

export class Purecomp extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "JIBOLA"
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState(
                {
                name : "JIBOLA"
            }
            )
        },2000)
    }
    
  render() {
    console.log("****CLASS COMP Parent*****")
    return (
        <>
            <div>
              PURECOMPONENT
            </div>
            <Memocomp name={this.state.name}/>
            {/*<Regularcomp name={this.state.name}/>*/}
            {/*<Purecomp2 name={this.state.name}/>*/}
        </>
    )
  }
}

export default Purecomp
