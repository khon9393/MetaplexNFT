import type { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).end('Method Not Allowed');

  const { walletkeypub, collectionId } = req.query;

  const client = await pool.connect();
try {
    let result;
    if (walletkeypub) {
        result = await client.query(
            `SELECT * FROM Promo_Machine WHERE candymachineId = $1 AND enabled = true`,
            [walletkeypub]
        );
    } else if (collectionId) {
        result = await client.query(
            `SELECT * FROM Promo_Machine WHERE collectionId = $1 AND enabled = true`,
            [collectionId]
        );
    } else if (req.query.allEnabled) {
        result = await client.query(
            `SELECT * FROM Promo_Machine WHERE enabled = true`
        );
    } else {
        result = await client.query(
            `SELECT * FROM Promo_Machine WHERE enabled = true ORDER BY id DESC LIMIT 50`
        );
    }

    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Fetch Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    client.release();
  }
}
