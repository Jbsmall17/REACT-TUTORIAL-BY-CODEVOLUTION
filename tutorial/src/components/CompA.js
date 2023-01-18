import React from 'react'
import CompB from './CompB'
import { UserConsumer } from './UserContext'

export default function CompA() {
  return (
    <>
        <UserConsumer>
            {
                (data) =>{
                    return <h1>My name is {data}</h1>
                }
            }
        </UserConsumer>
        <CompB />
    </>
  )
}
