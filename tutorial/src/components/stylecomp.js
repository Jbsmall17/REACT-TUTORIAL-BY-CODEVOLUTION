import React from 'react'
import "./style.css"
import styles from './style.module.css'

const stylecomp = () => {
    const style = {
        fontSize: '50px',
        color: 'green',
        fontStyle: 'italic'
    }
  return (
    <div>
      <h1 className={styles.title}>Alao Abdulmusawwir Ajibola</h1>
    </div>
  )
}

export default stylecomp