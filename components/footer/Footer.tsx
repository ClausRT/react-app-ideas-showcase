import React from 'react'
import style from './footer.module.css'

const Footer: React.FunctionComponent = () => {
  return (
    <div className={style.foo}>
      <img src="/shrug.svg" alt="Logo" className={style.logo} />
      <p>Um website feito por Claus Tessmann.</p>
    </div>
  )
}

export default Footer
