import React from 'react'
import  ReactDOM from 'react-dom'
export default function Portal(props) {
  return (
    ReactDOM.createPortal(
        <h1>
      PORTAL {props.count}
    </h1>,
    document.getElementById("portal-root")
    )
  )
}
