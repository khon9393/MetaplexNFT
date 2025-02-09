// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const param = searchParams.get("param");

  return Response.json({ message: `You sent: ${param}` });
}

export {}