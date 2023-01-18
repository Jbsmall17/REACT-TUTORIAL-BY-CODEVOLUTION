import React from 'react'
import { UserConsumer } from './UserContext'

export default function CompC() {
  return (
    <UserConsumer>
        {
            (data) =>{
                return <h3>{data} is aspiring to a frontend developer</h3> 
            }
        }
    </UserConsumer>
  )
}
