import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  res.status(200).json({ message: `Techniques API route for ID: ${id}` });
}
