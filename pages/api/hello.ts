/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

const Hello = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'Next.js' })
}

export default Hello
