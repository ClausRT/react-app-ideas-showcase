import React from 'react'
import styles from './line.module.css'

const Line: React.FunctionComponent = ({ children }) => {
  return (
    <div className={styles.container}>
      <span>{children}</span>
      <div className={styles.line} />
    </div>
  )
}

export default Line
