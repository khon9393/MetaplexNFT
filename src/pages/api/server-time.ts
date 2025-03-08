import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const serverTime = new Date();
  res.status(200).json({ serverTime });
}