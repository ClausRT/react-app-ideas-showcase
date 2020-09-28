import React from 'react'
import { GetStaticProps } from 'next'
import Card from './Card'
import { } from 'lib/apps'

class Display extends React.Component {
  render(): JSX.Element {
    const cards = []

    // TODO

    return <div>{cards}</div>
  }
}

export default Display

export const getStaticProps: GetStaticProps = async (context) => {
  const apps = []

  return {
    props: {
      apps
    }
  }
}
