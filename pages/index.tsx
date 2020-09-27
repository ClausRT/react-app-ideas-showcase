import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home: React.FunctionComponent = () => {
  return (
    <div>
      <Head>
        <title>Hompage</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main>
        <h1>Desgraça gostosa</h1>
        <Link href="/api/hello">
          <a>Teste de Api</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
