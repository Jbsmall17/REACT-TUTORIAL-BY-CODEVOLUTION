import React from 'react'
import CompC from './CompC'
import { UserConsumer } from "./UserContext"
export default function CompB() {
  return (
    <>
        <UserConsumer>
            {
                (data) =>{
                    return <h1>{data} is twenty years old</h1>
                }
            }
        </UserConsumer>
        <CompC />)
    </>
  )
}
