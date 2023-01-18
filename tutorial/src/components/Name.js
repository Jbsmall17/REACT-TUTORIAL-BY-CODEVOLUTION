import React from 'react'

export default function Name({name}) {
    if (name !== "JIBOLA" && name !== "ALAO" && name !== "ABDULMUSAWWIR"){
      throw new Error('Not my Name')   
    }
    return (
        <div>
            {name}
        </div>
  )
}
