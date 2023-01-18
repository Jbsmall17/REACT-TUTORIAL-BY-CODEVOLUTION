import React,{useContext} from 'react'
import { UserContext,AppContext } from '../App'
export default function CompBOne() {
    const user = useContext(UserContext)
    const App = useContext(AppContext)
  return (
    <div>
      Component-one-B created by {App} {user}
    </div>
  )
}
