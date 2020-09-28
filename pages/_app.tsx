import React from 'react'
import { AppProps } from 'next/app'
import 'styles/global.css'

import Head from 'next/head'
import Layout from 'components/layout/Layout'
import Nav from 'components/navbar/Nav'
import Footer from 'components/footer/Footer'

const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>App Ideas Showcase</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  )
}

export default MyApp
