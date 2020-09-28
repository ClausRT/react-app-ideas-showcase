import React from 'react'
import Link from 'next/link'
import styles from './nav.module.css'

const NavBar: React.FunctionComponent = () => {
  return (
    <ul className={styles.nav}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/apps/tier-1/binToDec">
          <a>Bin2Dec</a>
        </Link>
      </li>
      <li>
        <Link href="/api/sentimentos?sentimento=RAIVA">
          <a>Sentimento do dia</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>Saiba mais</a>
        </Link>
      </li>
    </ul>
  )
}

export default NavBar
