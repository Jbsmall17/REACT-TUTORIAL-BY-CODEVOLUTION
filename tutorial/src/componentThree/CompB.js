import React, { Component, useContext } from 'react'
import { UserContext, AppContext } from '../App'
export default class CompB extends Component {
  render() {
    return(
            <UserContext.Consumer>
                {
                    user=>{
                        return (<AppContext.Consumer>
                            {
                                (App)=>{
                                    return <div>Component Created {App} {user}</div>
                                }
                            }
                        </AppContext.Consumer>)
                    }
                }
            </UserContext.Consumer>
        
    )
  }
}
