import React from 'react'
import Person from './Person'



export default function PersonList() {
    const Personlist = [
        {
            key : 0,
            Name: "Jibola",
            role: "Front-end dev"
        },
        {
            key : 1,
            Name: "Dotun",
            role: "Back-end dev"
        },
        {
            key : 2,
            Name: "Sola",
            role: "Full-stack dev"
        }
    ]
    const listOfPerson = Personlist.map((person)=> <Person key={person.key} Person={person}/>)    
    return (
    <div>
      {listOfPerson}
    </div>
  )
}
