import React from 'react'
import styles from './card.module.css'

const Card: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.card}>
      <h2>Este aqui é um card</h2>
      <p>Numero: {children}</p>
    </div>
  )
}

export default Card
