/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { NextApiRequest, NextApiResponse } from 'next'

const Sentimento = (req: NextApiRequest, res: NextApiResponse) => {
  const sentimento = {
    estaSentindoAlgo: true,
    eOQueEstaSentindo: req.query.sentimento
  }

  res.status(200).json(JSON.stringify(sentimento))
}

export default Sentimento
